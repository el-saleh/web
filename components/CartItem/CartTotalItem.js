import { useRouter } from 'next/router';
import PrimaryButton from '../Button/PrimaryButton';
import { toast } from "react-toastify"
import styles from "./CartTotalItem.module.scss";
import requester from '../../utilities/requester';
import FormatPrice from '../../utilities/FormatPrice';
import React, { useState, useEffect } from 'react';


export default function CartTotalItem({ totalPrice, orderItem, orderStatus, fetchUserCart }) {
    const [showForm, setShowForm] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState([]);
    const router = useRouter();

    useEffect(() => {
        let userData = JSON.parse(window.localStorage.getItem("userData"));
        if (!userData?.phoneNumber) {
            setShowForm(true)
        }
    }, [])

    const placeOrder = () => {
        let userData = JSON.parse(window.localStorage.getItem("userData"));
        // if (userData?.phoneNumber) {
        requester.post(`/orders/placeOrder?userId=${userData._id}`, null, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then((res) => {
            toast("تم نسجيل طلب الشراء بنجاح");
            router.push("/orders");
            fetchUserCart()
        }).catch(() => {
            toast("خطأ : فشل تسجيل طلب الشراء ")
        })
        // }
    }

    const statuses = {
        1: "تم تسجيل طلب الشراء وسيتم التواصل معك",
        2: "تم شحن الطلب",
        3: "تم التسليم",

    }

    const updateUserPhoneNumber = (phoneNumber) => {
        let data = {
            id: JSON.parse(window.localStorage.getItem("userData"))._id,
            phoneNumber
        }
        requester.patch("/auth/updateUserData", data).then(() => {
            toast("ثم اضافة رقم الموبايل بنجاح");
            setShowForm(false);
            placeOrder();
        }).catch(() => {
            toast("خطأ : فشل اضافة رقم الموبايل ")
        })
    }

    const updateFormInfo = (e) => {
        setPhoneNumber(e.target.value)
    }

    const vaildateForm = () => {
        let errorsList = [];

        if (phoneNumber.slice(0, 2) !== "01") {
            errorsList.push({ message: "رقم الموبايل  يجب ان يبدأ ب 01" })
        }

        if (phoneNumber.length < 11) {
            errorsList.push({ message: "رقم الموبايل يجب ان يكون 11 رقم" })
        }

        setErrors([...errorsList]);

        return !errorsList.length
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        if (vaildateForm()) {
            console.log("form data is valid, starting to verify phone number");
            updateUserPhoneNumber(phoneNumber)
        };
    }

    return (
        <div className={styles.totalBox}>
            <div>
                <h4>{"المجموع"}</h4>
                <p className={styles.price}>{FormatPrice(totalPrice)} <small>{"جنيه"}</small></p>
            </div>

            {!orderItem && <div>
                <PrimaryButton disabled={showForm} onClick={placeOrder}>{"إتمام عملية الشراء"}</PrimaryButton>
            </div>}

            <br />
            {!orderItem && showForm &&
                <form className={styles.form} onSubmit={submitHandler} dir="auto">
                    <fieldset >
                        <h4>{"إضافة رقم الموبايل"}</h4>
                        <input id="phoneNumber" type="number" placeholder="رقم الموبايل" onChange={updateFormInfo} value={phoneNumber} />
                        <PrimaryButton id="submit" type="submit">{"حفظ"}</PrimaryButton>
                        <div>
                            {errors.map((err, index) => {
                                return <React.Fragment key={index}>
                                    <small className={styles.error}> - {err.message}</small><br />
                                </React.Fragment>
                            })}
                        </div>
                    </fieldset>
                </form>
            }
            <br />

            {orderItem && <div>
                <h4>{"حاله الطلب"}</h4>
                <p className={styles.price}><small>{statuses[orderStatus]}</small></p>
            </div>}

        </div>
    )
}
