import React, { useContext, useState } from 'react';
import firebase from "../../utilities/firebase";
import PrimaryButton from "../Button/PrimaryButton";
import styles from "./overlay.module.scss";
import { Control } from '../../utilities/Contexts';
import requester from '../../utilities/requester';
var jwt = require('jsonwebtoken');

export default function SignUpForm() {
    const gstate = useContext(Control);

    const initFormInfo = {
        name: "",
        phoneNumber: "",
        password: "",
    }
    const [formInfo, setFromInfo] = useState(initFormInfo);
    const [errors, setErrors] = useState([]);
    const [isButtondisabled, setIsButtondisabled] = useState(false);

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
        if (formInfo.name.trim().length < 3) {
            errorsList.push({ message: "اسم المستخدم على الاقل 3 أحرف" })
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
        // firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
        //     console.log(e)
        //     let code = prompt("تم إرسال كود تحقق عبر SMS, ادخل كود التحقق ", "");
        //     if (code) {
        //         e.confirm(code).then((res) => {
        //             console.log(res);
        //             alert("تم التحقق بنجاح من رقم الموبايل");
        //             gstate.setDisplaySignUpForm(false);
        //             // to do : send post reuest with the user data and retrieve the jwt,
        //             // then decode it and get the user info from it the store it using [gstate.user]
        //             requester.post("/auth/allUsers", formInfo).then(res => console.log(res)).catch(err => console.log(err));
        //             gstate.setUser({
        //                 name: formInfo.name,
        //                 phoneNumber: formInfo.phoneNumber
        //             });

        //         }).catch((err) => {
        //             console.log(err);
        //             setErrors([...errors, { message: "كود التأكيد غير صحيح" }])
        //             clearRecaptchaContainer();
        //             setIsButtondisabled(false);
        //         });
        //     }
        // }).catch((err) => {
        //     console.log(err);
        //     setErrors([...errors, { message: "حدث خطأ ما خلال التحقق من الرقم" }]);
        //     clearRecaptchaContainer();
        //     setIsButtondisabled(false);
        // })
        requester.post("/auth/register", formInfo).then((res) => {
            let {userData} = jwt.decode(res.data.token);
            console.log(res.data);
            console.log(userData);
            gstate.setUser(userData);
            userData.token =  res.data.token;
            window.localStorage.setItem("userData", JSON.stringify(userData));
            setIsButtondisabled(false);
            gstate.setDisplaySignUpForm(false);
        }).catch((err) => {
            console.log(err.message);
            setIsButtondisabled(false);
        });
    }

    return (
        <div id="overLay" className={styles.bodyOverlay} onClick={close}>
            <form className={styles.form} onSubmit={submitHandler} dir="auto">
                <h1>{"إنشاء حساب"}</h1>
                <label htmlFor="name">{"اسم المستخدم"}</label>
                <input id="name" type="text" required onChange={updateFormInfo} value={formInfo.name} placeholder="" />
                <label htmlFor="phone">{"رقم الموبايل"}</label>
                <input id="phoneNumber" type="number" required onChange={updateFormInfo} value={formInfo.phoneNumber} placeholder="01XXXXXXXXX" />
                <label htmlFor="password">{"كلمة السر"}</label>
                <input id="password" type="password" required onChange={updateFormInfo} value={formInfo.password} placeholder="" />
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
                <PrimaryButton id="submit" disabled={isButtondisabled} type="submit">{"إنشاء حساب"}</PrimaryButton>
                <p className={styles.alternative}>
                    {"لديك حساب بالفعل؟"} <span onClick={showSignInForm}>{"تسجيل دخول"}</span>
                </p>
            </form>
        </div>
    )
}

