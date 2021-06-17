import react, { useState, useEffect, useContext } from "react";
import requester from "../utilities/requester";
import { DisplayLoadingOverlayHandler } from "../utilities/Contexts";
import Head from 'next/head';
import Layout from "../layout/Layout";
import HeroSection from '../components/HeroSection/HeroSection'
import HomeCategorySection from "../components/HomeCategorySection/HomeCategorySection";
import Clients from "../components/Clients/Clients";
import dummy from "../utilities/dummy";
import axios from "axios";

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
        <HeroSection homeData={props.homeData} />
        {props.homeData.map((item) => {
          return (
            <HomeCategorySection key={item.category._id} products={item.data} category={item.category} />
          )
        })}
        <Clients />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  return await requester.get("/home").then((res) => {
    return {
      props: {homeData : res.data.model}, // will be passed to the page component as props
    }
  }).catch(() => {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  });

}
export default Home;

