import React, { useState, useContext } from 'react';
import PrimaryButton from "../Button/PrimaryButton";
import { Control } from '../../utilities/Contexts';
import styles from "./overlay.module.scss";
import requester from '../../utilities/requester';
var jwt = require('jsonwebtoken');

export default function SignInForm() {

    const gstate = useContext(Control);
    const [isButtondisabled, setIsButtondisabled] = useState(false);
    const [formInfo, setFromInfo] = useState({
        phoneNumber: "",
        password: "",
    });

    const [errors, setErrors] = useState([]);

    const updateFormInfo = (e) => {
        const newFormInfo = formInfo;
        newFormInfo[e.target.id] = e.target.value;
        setFromInfo({ ...newFormInfo })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        setIsButtondisabled(true);
        requester.post("/auth/login", formInfo).then((res) => {
            let {userData} = jwt.decode(res.data.token);
            console.log(res.data);
            console.log(userData);
            userData.token =  res.data.token;
            gstate.setUser(userData);
            window.localStorage.setItem("userData", JSON.stringify(userData));
            gstate.setDisplaySignInForm(false);
        }).catch((err) => {
            console.log(err.message);
            setIsButtondisabled(false);
            setErrors([...errors, { message: "بيانات غير صحيحة" }]);
        });

    }

    const close = (e) => {
        if (e.target.id === "overLay") {
            gstate.setDisplaySignInForm(false)
        }
    }

    const showSignUpForm = () => {
        gstate.setDisplaySignInForm(false)
        gstate.setDisplaySignUpForm(true);
    }

    return (
        <div id="overLay" className={styles.bodyOverlay} onClick={close}>
            <form className={styles.form} onSubmit={submitHandler} dir="auto">
                <h1>{"تسجيل دخول"}</h1>
                <label htmlFor="phone">{"رقم التليفون"}</label>
                <input id="phoneNumber" type="number" required onChange={updateFormInfo} value={formInfo.phoneNumber} placeholder="" />
                <label htmlFor="password">{"كلمة السر"}</label>
                <input id="password" type="password" required onChange={updateFormInfo} value={formInfo.password} placeholder="" />
                <PrimaryButton disabled={isButtondisabled} id="submit" type="submit">{"تسجيل دخول"}</PrimaryButton>
                <div>
                {errors.map((err, index) => {
                        return <React.Fragment key={index}>
                            <small className={styles.error}> - {err.message}</small><br />
                        </React.Fragment>
                    })}
                </div>
                <p className={styles.alternative}>
                    {"لا تمتلك حساب؟"} <span onClick={showSignUpForm}>{"سـجّـل الأن"}</span>
                </p>
            </form>
        </div>
    )
}

