import React, { useState, useContext } from 'react';
import PrimaryButton from "../Button/PrimaryButton";
import { Control } from '../../utilities/Contexts';
import styles from "./overlay.module.scss";

export default function SignInForm() {

    const gstate = useContext(Control);

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
        gstate.setUser({
            username: "عبد الرحمن",
            phone: "01096335487"
        });
        gstate.setDisplaySignInForm(false);

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
                <input id="phoneNumber" type="phone" required onChange={updateFormInfo} value={formInfo.phoneNumber} placeholder="" />
                <label htmlFor="password">{"كلمة السر"}</label>
                <input id="password" type="password" required onChange={updateFormInfo} value={formInfo.password} placeholder="" />
                <PrimaryButton id="submit" type="submit">{"تسجيل دخول"}</PrimaryButton>
                <div>
                    {errors.map((err, index) => {
                        return <span key={index} className="error">{err.message}</span>
                    })}
                </div>
                <p className={styles.alternative}>
                    {"لا تمتلك حساب؟"} <span onClick={showSignUpForm}>{"سـجّـل الأن"}</span>
                </p>
            </form>
        </div>
    )
}

