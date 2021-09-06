import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { Control } from '../../utilities/Contexts';
import requester from "../../utilities/requester";
import firebase from "../../utilities/firebase";
import PrimaryButton from '../Button/PrimaryButton';
import styles from "./UserPageForm.module.scss";
import { toast } from 'react-toastify';

export default function index() {
    const router = useRouter()
    // const gstate = useContext(Control);
    // const [isButtondisabled, setIsButtondisabled] = useState(false);
    const [userData, setUserdata] = useState(null);;
    // const [errors, setErrors] = useState([]);
    // const [formInfo, setFromInfo] = useState({
    //     phoneNumber: "",
    // });

    const updateUserData = () => {
        let userData = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem("userData")) : null;
        if (!userData) {
            router.push("/");
        }
        else {
            setUserdata({
                userName: userData.name,
                phoneNumber: userData.phoneNumber,
            })
        }
    }

    useEffect(() => {
        updateUserData();
    }, []);

    // const updateFormInfo = (e) => {
    //     const newFormInfo = formInfo;
    //     newFormInfo[e.target.id] = e.target.value;
    //     setFromInfo({ ...newFormInfo })
    // }

    // const vaildateForm = () => {
    //     let errorsList = [];

    //     if (formInfo.phoneNumber.slice(0, 2) !== "01") {
    //         errorsList.push({ message: "رقم الموبايل  يجب ان يبدأ ب 01" })
    //     }

    //     if (formInfo.phoneNumber.length < 11) {
    //         errorsList.push({ message: "رقم الموبايل يجب ان يكون 11 رقم" })
    //     }

    //     setErrors([...errorsList]);

    //     return !errorsList.length
    // }

    // const updatePhoneNumber = () => {
    //     let data = {
    //         id: JSON.parse(window.localStorage.getItem("userData"))._id,
    //         phoneNumber: formInfo.phoneNumber
    //     }
    //     requester.patch("/auth/updateUserData", data).then(() => {
    //         toast("ثم تعديل/اضافة رقم الموبايل بنجاح");
    //         let userData = window.localStorage.getItem("userData");
    //         if (userData) {
    //             let token = JSON.parse(userData).token;
    //             requester.get("/auth/getUserData").then((res) => {
    //                 let freshUserData = { ...res.data.model, token };
    //                 window.localStorage.setItem("userData", JSON.stringify(freshUserData))
    //                 gstate.setUser(freshUserData);
    //                 updateUserData()
    //             }).catch((e) => {
    //                 console.log("failed to getUserData", e)
    //             });
    //         }
    //     }).catch(() => {
    //         toast("خطأ : فشل تعديل/اضافة رقم الموبايل ")
    //     })
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     setErrors([]);
    //     if (vaildateForm()) {
    //         console.log("form data is valid, starting to verify phone number");
    //         authHandler(formInfo.phoneNumber, updatePhoneNumber);
    //     };
    // }

    // const clearRecaptchaContainer = () => {
    //     document.getElementById("recaptcha").innerHTML = "";
    // }

    // const authHandler = (phone, callback) => {
    //     setIsButtondisabled(true);
    //     let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    //     let number = `+2${phone}`;
    //     firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
    //         console.log(e)
    //         let code = prompt("تم إرسال كود تحقق عبر SMS,  ادخل كود التحقق لإعادة تعيين كلمة المرور ", "");
    //         if (code) {
    //             e.confirm(code).then((res) => {
    //                 console.log(res);
    //                 toast("تم التحقق بنجاح من رقم الموبايل");
    //                 callback();

    //             }).catch((err) => {
    //                 console.log(err);
    //                 setErrors([...errors, { message: "كود التأكيد غير صحيح" }])
    //                 clearRecaptchaContainer();
    //                 setIsButtondisabled(false);
    //             });
    //         }
    //     }).catch((err) => {
    //         console.log(err);
    //         setErrors([...errors, { message: "حدث خطأ ما خلال التحقق من الرقم" }]);
    //         clearRecaptchaContainer();
    //         setIsButtondisabled(false);
    //     })

    // }

    return (
        <>
            {!!userData &&

                <div>
                    <div className={styles.form} dir="auto">
                        <img src="/assets/user.png" />
                        <p>{"اسم المستخدم : "}{userData?.userName}</p>
                        <p>{"رقم الموبايل : "}{userData?.phoneNumber || "لا يوجد"}</p>
                    </div>

                    {/* <form className={styles.form} onSubmit={submitHandler} dir="auto">
                        <fieldset >
                            <h4>{"تعديل/إضافة رقم الموبايل"}</h4>
                            <input id="phoneNumber" type="number" placeholder="رقم الموبايل" onChange={updateFormInfo} value={formInfo.phoneNumber} />

                            <PrimaryButton disabled={isButtondisabled} id="submit" type="submit">{"حفظ"}</PrimaryButton>
                            <div>
                                {errors.map((err, index) => {
                                    return <React.Fragment key={index}>
                                        <small className={styles.error}> - {err.message}</small><br />
                                    </React.Fragment>
                                })}
                            </div>
                        </fieldset>
                        <br />
                        <div id={"recaptcha"}></div>
                        <br />
                    </form> */}

                </div>}
        </>
    )
}
