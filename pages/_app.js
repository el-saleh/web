import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { DisplayLoadingOverlayHandler, Control } from "../utilities/Contexts";
import AnimationOverlay from '../components/overlay/AnimationOverlay';
import SignInForm from '../components/overlay/SignInForm';
import SignUpForm from '../components/overlay/SignUpForm';
import ResetPasswordForm from '../components/overlay/ResetPasswordForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';
import "../styles/override.scss";

// styling for "react image gallery" & "react multi carousel" package.
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-multi-carousel/lib/styles.css";

// styling for "devextreme" package.
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

//  component and stylign for nprogress bar
import "../styles/nprogress.css";
import requester from '../utilities/requester';

const TopProgressBar = dynamic(
  () => {
    return import("../components/progressBar/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {

  const [displayLoadingOverlay, setDisplayLoadingOverlay] = useState(false)
  const [displaySignInForm, setDisplaySignInForm] = useState(false)
  const [displaySignUpForm, setDisplaySignUpForm] = useState(false)
  const [displayResetPasswordForm, setDisplayResetPasswordForm] = useState(false)
  const [user, setUser] = useState(null)

  const ControlContextData = {
    setDisplaySignInForm,
    setDisplaySignUpForm,
    setDisplayResetPasswordForm,
    user,
    setUser
  }

  useEffect(() => {
    let userData = window.localStorage.getItem("userData");
    if (userData) {
      let token = JSON.parse(userData).token;
      requester.get("/auth/getUserData").then((res)=>{
        let freshUserData ={...res.data.model, token};
        window.localStorage.setItem("userData", JSON.stringify(freshUserData))
        setUser(freshUserData);
      }).catch((e)=>{
        console.log("failed to getUserData", e);
        window.localStorage.removeItem("userData");
      });
      
    }
  }, [])

  return (
    <DisplayLoadingOverlayHandler.Provider value={setDisplayLoadingOverlay}>
      <Control.Provider value={ControlContextData}>
        <div className={"layout"}>
          <Head>
            <meta name="google-site-verification" content="uhK_K1ccHxQm1yem5raYFDroWvkMTrfYdSeIkkLQUoM" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href={"https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"} rel="stylesheet" />
            <link href={"https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"} rel="stylesheet" />
          </Head>
          {displaySignInForm && <SignInForm />}
          {displaySignUpForm && <SignUpForm />}
          {displayResetPasswordForm && <ResetPasswordForm />}
          {displayLoadingOverlay && <AnimationOverlay />}
          <TopProgressBar />
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Component {...pageProps} />
        </div>
      </Control.Provider>
    </DisplayLoadingOverlayHandler.Provider>

  )
}

export default MyApp
