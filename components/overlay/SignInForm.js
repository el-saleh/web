import React, { useState, useContext } from 'react';
import PrimaryButton from "../Button/PrimaryButton";
import { FaEye } from 'react-icons/fa';
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
            setIsButtondisabled(true);
            requester.post("/auth/login", formInfo, {
                headers: {
                    'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
                }
            })
                .then((res) => {
                    let { userData } = jwt.decode(res.data.token);
                    console.log(res.data);
                    console.log(userData);
                    userData.token = res.data.token;
                    gstate.setUser(userData);
                    window.localStorage.setItem("userData", JSON.stringify(userData));
                    gstate.setDisplaySignInForm(false);
                }).catch((err) => {
                    console.log(err.message);
                    setIsButtondisabled(false);
                    setErrors([{ message: "بيانات غير صحيحة" }]);
                });
        }

    }

    const vaildateForm = () => {
        let errorsList = [];

        if (formInfo.password.trim().length < 4) {
            errorsList.push({ message: "كلمة السر غير صحيحة" })
        }

        if (formInfo.phoneNumber.slice(0, 2) !== "01" || formInfo.phoneNumber.length < 11) {
            errorsList.push({ message: "رقم الموبايل غير صحيح" })
        }

        setErrors([...errorsList]);

        return !errorsList.length
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

    const showResetPasswordForm = () => {
        gstate.setDisplaySignInForm(false)
        gstate.setDisplayResetPasswordForm(true);
    }

    const togglePaswwordInputtType = () => {
        setPasswordInputType(!passwordInputType);
    }

    return (
        <div id="overLay" className={styles.bodyOverlay} onClick={close}>
            <form className={styles.form} onSubmit={submitHandler} dir="auto">
                <h3>{"تسجيل دخول"}</h3>
                <input id="phoneNumber" type="number" placeholder="رقم الموبايل" required onChange={updateFormInfo} value={formInfo.phoneNumber} />
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
                <p className={styles.alternative}>
                    <span onClick={showResetPasswordForm}>{"نسيت كلمة السر؟"}</span>
                </p>
            </form>
        </div>
    )
}

