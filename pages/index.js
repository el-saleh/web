import react, { useState, useEffect, useContext } from "react";
import { DisplayLoadingOverlayHandler } from "../utilities/Contexts";
import Head from 'next/head';
import Layout from "../layout/Layout";
import HeroSection from '../components/HeroSection/HeroSection'
import HomeCategorySection from "../components/HomeCategorySection/HomeCategorySection";
import Clients from "../components/Clients/Clients";
import dummy from "../utilities/dummy";

function Home(props) {
  const setDisplayLoadingOverlay = useContext(DisplayLoadingOverlayHandler);
  return (
    <>
      <Head>
        <title>{"El-Saleh | الرئيسية"}</title>
        <meta name="description" content={"الصالح لاستيراد وتصدير الادوات المنزلية"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://el-saleh.com" />
        <meta property="og:description" content={"الصالح لاستيراد وتصدير الادوات المنزلية"} />
        <meta property="og:image" content="/assets/logo2.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://el-saleh.com" />
        <meta property="twitter:description" content={"الصالح لاستيراد وتصدير الادوات المنزلية"} />
        <meta property="twitter:image" content="/assets/logo2.png" />

      </Head>
      <Layout>
        <HeroSection categories={dummy.categories} />
        {props.homeData.map((category) => {
          return (
            <HomeCategorySection key={category.id} category={category} />
          )
        })}
        <Clients />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const homeData = dummy.homeContent();
  // if (!homeData) {
  //   return {
  //     redirect: {
  //       destination: '/404',
  //       permanent: false,
  //     },
  //   }
  // }

  // console.log(product);
  return {
    props: { homeData }, // will be passed to the page component as props
  }
}


export default Home;
