import React, { useState, useContext } from 'react';
import PrimaryButton from "../Button/PrimaryButton";
import { FaEye } from 'react-icons/fa';
import { Control } from '../../utilities/Contexts';
import styles from "./overlay.module.scss";
import requester from '../../utilities/requester';
import firebase from "../../utilities/firebase";
import { toast } from "react-toastify";
var jwt = require('jsonwebtoken');

export default function ResetPasswordForm() {

    const gstate = useContext(Control);
    const [isButtondisabled, setIsButtondisabled] = useState(false);

    const [formInfo, setFromInfo] = useState({
        phoneNumber: "",
        password: "",
        password2: ""
    });

    const [errors, setErrors] = useState([]);
    const [passwordInputType, setPasswordInputType] = useState(true);

    const updateFormInfo = (e) => {
        const newFormInfo = formInfo;
        newFormInfo[e.target.id] = e.target.value;
        setFromInfo({ ...newFormInfo })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        if (vaildateForm()) {
            console.log("form data is valid, starting to verify phone number");
            authHandler(formInfo.phoneNumber, resetPassowrd);
        };
    }

    const resetPassowrd = () => {
        requester.post("/auth/forgetPassword", {
            phoneNumber: formInfo.phoneNumber,
            newPassword: formInfo.password
        }).then(() => {
            showSignInForm();
            toast("تمت إعادة تعيين كلمة المرور بنجاح");
        }).catch(() => {
            setErrors([{ message: "خطأ : فشل تحديث كلمة المرور" }]);
        })
    }

    const vaildateForm = () => {
        let errorsList = [];

        if (formInfo.password !== formInfo.password2) {
            errorsList.push({ message: "كلمتى السر غير متطابقتين" })
        }

        if (formInfo.password.trim().length < 4) {
            errorsList.push({ message: "كلمة السر على الاقل 4 أحرف" })
        }

        if (formInfo.phoneNumber.slice(0, 2) !== "01") {
            errorsList.push({ message: "رقم الموبايل  يجب ان يبدأ ب 01" })
        }

        if (formInfo.phoneNumber.length < 11) {
            errorsList.push({ message: "رقم الموبايل يجب ان يكون 11 رقم" })
        }

        setErrors([...errorsList]);

        return !errorsList.length
    }

    const authHandler = (phone, callback) => {
        setIsButtondisabled(true);
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
        let number = `+2${phone}`;
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
            console.log(e)
            let code = prompt("تم إرسال كود تحقق عبر SMS,  ادخل كود التحقق لإعادة تعيين كلمة المرور ", "");
            if (code) {
                e.confirm(code).then((res) => {
                    console.log(res);
                    toast("تم التحقق بنجاح من رقم الموبايل");
                    callback();

                }).catch((err) => {
                    console.log(err);
                    setErrors([...errors, { message: "كود التأكيد غير صحيح" }])
                    clearRecaptchaContainer();
                    setIsButtondisabled(false);
                });
            }
        }).catch((err) => {
            console.log(err);
            setErrors([...errors, { message: "حدث خطأ ما خلال التحقق من الرقم" }]);
            clearRecaptchaContainer();
            setIsButtondisabled(false);
        })

    }

    const close = (e) => {
        if (e.target.id === "overLay") {
            gstate.setDisplayResetPasswordForm(false)
        }
    }

    const showSignInForm = () => {
        gstate.setDisplayResetPasswordForm(false);
        gstate.setDisplaySignInForm(true)
    }

    const togglePaswwordInputtType = () => {
        setPasswordInputType(!passwordInputType);
    }

    return (
        <div id="overLay" className={styles.bodyOverlay} onClick={close}>
            <form className={styles.form} onSubmit={submitHandler} dir="auto">
                <h3>{"إعادة تعيين كلمة السر"}</h3>
                <input id="phoneNumber" type="number" placeholder="رقم الموبايل" required onChange={updateFormInfo} value={formInfo.phoneNumber} />
                <div style={{ width: "100%", position: "relative" }}>
                    <input
                        id="password"
                        type={passwordInputType ? "password" : "text"}
                        placeholder="كلمة السر الجديدة"
                        required
                        onChange={updateFormInfo}
                        value={formInfo.password}
                    />
                    <FaEye className={styles.eyeIcon} onClick={togglePaswwordInputtType} />
                </div>
                <div style={{ width: "100%", position: "relative" }}>
                    <input
                        id="password2"
                        type={passwordInputType ? "password" : "text"}
                        placeholder="إعادة كلمة السر الجديدة"
                        required
                        onChange={updateFormInfo}
                        value={formInfo.password2}
                    />
                    <FaEye className={styles.eyeIcon} onClick={togglePaswwordInputtType} />
                </div>
                <br />
                <div id={"recaptcha"}></div>
                <br />
                <PrimaryButton disabled={isButtondisabled} id="submit" type="submit">{"إعادة تعيين"}</PrimaryButton>
                <div>
                    {errors.map((err, index) => {
                        return <React.Fragment key={index}>
                            <small className={styles.error}> - {err.message}</small><br />
                        </React.Fragment>
                    })}
                </div>
                <p className={styles.alternative}>
                    {"العودة لتسجيل الدخول"} <span onClick={showSignInForm}>{"تسجيل دخول"}</span>
                </p>

            </form>
        </div>
    )
}

