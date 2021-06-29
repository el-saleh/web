import React, { useContext, useState } from 'react';
import firebase from "../../utilities/firebase";
import PrimaryButton from "../Button/PrimaryButton";
import { FaEye } from 'react-icons/fa';
import styles from "./overlay.module.scss";
import { Control } from '../../utilities/Contexts';
import requester from '../../utilities/requester';
import { toast } from "react-toastify";
var jwt = require('jsonwebtoken');

export default function SignUpForm() {
    const gstate = useContext(Control);

    const initFormInfo = {
        name: "",
        phoneNumber: "",
        password: "",
        password2: "",
    }
    const [formInfo, setFromInfo] = useState(initFormInfo);
    const [errors, setErrors] = useState([]);
    const [isButtondisabled, setIsButtondisabled] = useState(false);
    const [passwordInputType, setPasswordInputType] = useState(true);
    const updateFormInfo = (e) => {
        const newFormInfo = formInfo;
        newFormInfo[e.target.id] = e.target.value;
        setFromInfo({ ...newFormInfo })
    }


    const close = (e) => {
        if (e.target.id === "overLay") {
            gstate.setDisplaySignUpForm(false)
        }
    }

    const showSignInForm = () => {
        gstate.setDisplaySignUpForm(false);
        gstate.setDisplaySignInForm(true)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        if (vaildateForm()) {
            console.log("form data is valid, starting to verify phone number");
            authHandler(formInfo.phoneNumber);
        };
    }

    const clearRecaptchaContainer = () => {
        document.getElementById("recaptcha").innerHTML = "";
    }

    const vaildateForm = () => {
        let errorsList = [];
        if (formInfo.name.trim().length < 6) {
            errorsList.push({ message: "اسم المستخدم على الاقل 6 أحرف" })
        }

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

    const authHandler = (phone) => {
        setIsButtondisabled(true);
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
        let number = `+2${phone}`;
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
            console.log(e)
            let code = prompt("تم إرسال كود تحقق عبر SMS, ادخل كود التحقق ", "");
            if (code) {
                e.confirm(code).then((res) => {
                    console.log(res);
                    toast("تم التحقق بنجاح من رقم الموبايل");
                    requester.post("/auth/register", formInfo).then((res) => {
                        let { userData } = jwt.decode(res.data.token);
                        console.log(res.data);
                        console.log(userData);
                        gstate.setUser(userData);
                        userData.token = res.data.token;
                        window.localStorage.setItem("userData", JSON.stringify(userData));
                        setIsButtondisabled(false);
                        gstate.setDisplaySignUpForm(false);
                    }).catch((err) => {
                        console.log(err.message);
                        setIsButtondisabled(false);
                    });

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

    const togglePaswwordInputtType = () => {
        setPasswordInputType(!passwordInputType);
    }

    return (
        <div id="overLay" className={styles.bodyOverlay} onClick={close}>
            <div className={styles.form} dir="auto">
                <h3>{"إنشاء حساب"}</h3>
                <input id="name" type="text" required onChange={updateFormInfo} value={formInfo.name} placeholder="الاسم" />
                <input id="phoneNumber" type="number" required onChange={updateFormInfo} value={formInfo.phoneNumber} placeholder="رقم الموبايل" />
                <div style={{ width: "100%", position: "relative" }}>
                    <input
                        id="password"
                        type={passwordInputType ? "password" : "text"}
                        placeholder="كلمة السر"
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
                        placeholder="إعادة كلمة السر"
                        required
                        onChange={updateFormInfo}
                        value={formInfo.password2}
                    />
                    <FaEye className={styles.eyeIcon} onClick={togglePaswwordInputtType} />
                </div>
                <div>
                    {errors.map((err, index) => {
                        return <React.Fragment key={index}>
                            <small className={styles.error}> - {err.message}</small><br />
                        </React.Fragment>
                    })}
                </div>
                <br />
                <div id={"recaptcha"}></div>
                <br />
                <PrimaryButton id="submit" onClick={submitHandler} disabled={isButtondisabled} type="submit">{"إنشاء حساب"}</PrimaryButton>
                <p className={styles.alternative}>
                    {"لديك حساب بالفعل؟"} <span onClick={showSignInForm}>{"تسجيل دخول"}</span>
                </p>
            </div>
        </div>
    )
}

