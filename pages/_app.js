import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { DisplayLoadingOverlayHandler } from "../utilities/Contexts";
import AnimationOverlay from '../components/animationOverlay/AnimationOverlay';
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
import "nprogress/nprogress.css";

const TopProgressBar = dynamic(
  () => {
    return import("../components/progressBar/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {

  const [displayLoadingOverlay, setDisplayLoadingOverlay] = useState(false)

  return (
    <DisplayLoadingOverlayHandler.Provider value={setDisplayLoadingOverlay}>
      <div className={"layout"}>
        <Head>
          {/* <meta name="google-site-verification" content="" /> */}
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href={"https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"} rel="stylesheet" />
          <link href={"https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"} rel="stylesheet" />
        </Head>
        <TopProgressBar />
        {displayLoadingOverlay && <AnimationOverlay />}
        <ToastContainer />
        <Component {...pageProps} />
      </div>
    </DisplayLoadingOverlayHandler.Provider>

  )
}

export default MyApp
