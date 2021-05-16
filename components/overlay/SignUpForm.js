import React, {useContext, useState} from 'react';
import PrimaryButton from "../Button/PrimaryButton";
import styles from "./overlay.module.scss";
import {Control} from '../../utilities/Contexts';

export default function SignUpForm() {
    const gstate = useContext(Control);

    const [formInfo, setFromInfo] = useState({
        userName :"",
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
    }

    const close = (e) =>{
        if(e.target.id === "overLay"){
            gstate.setDisplaySignUpForm(false)
        }
    }
    const showSignInForm = () => {
        gstate.setDisplaySignUpForm(false);
        gstate.setDisplaySignInForm(true)
    }
    return (
        <div id="overLay" className={styles.bodyOverlay} onClick={close}>
            <form className={styles.form} onSubmit={submitHandler} dir="auto">
                <h1>{"إنشاء حساب"}</h1>
                <label htmlFor="userName">{"اسم المستخدم"}</label>
                <input id="userName" type="text" required onChange={updateFormInfo} value={formInfo.userName} placeholder="" />
                <label htmlFor="phone">{"رقم التليفون"}</label>
                <input id="phoneNumber" type="phone" required onChange={updateFormInfo} value={formInfo.phoneNumber} placeholder="" />
                <label htmlFor="password">{"كلمة السر"}</label>
                <input id="password" type="password" required onChange={updateFormInfo} value={formInfo.password} placeholder="" />
                <PrimaryButton id="submit" type="submit">{"إنشاء حساب"}</PrimaryButton>
                <div>
                    {errors.map((err, index) => {
                        return <span key={index} className="error">{err.message}</span>
                    })}
                </div>
                <p className={styles.alternative}>
                    {"لديك حساب بالفعل؟"} <span onClick={showSignInForm}>{"تسجيل دخول"}</span>
                </p>
            </form>
        </div>
    )
}

