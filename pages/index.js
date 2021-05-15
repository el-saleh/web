import react, { useState, useEffect, useContext } from "react";
import { DisplayLoadingOverlayHandler } from "../utilities/Contexts";
import Head from 'next/head';
import Layout from "../layout/Layout";
import HeroSection from '../components/HeroSection/HeroSection'
import HomeCategorySection from "../components/HomeCategorySection/HomeCategorySection";
import dummy from "../utilities/dummy";

function Home() {
  const setDisplayLoadingOverlay = useContext(DisplayLoadingOverlayHandler);
  
  return (
    <>
      <Head>
        <title>ElSaleh | Home</title>
        <meta name="description" content="ثقة عملاءنا سر نجاحنا على مدار ٥٠ عام منتجات أبو العزم محمد محمد أبو العزم جودة عالمية بأيادي مصرية" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://el-saleh.com" />
        <meta property="og:description" content="الصالح للتجارة" />
        <meta property="og:image" content="/assets/logo2.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://el-saleh.com" />
        <meta property="twitter:description" content="الصالح للتجارة" />
        <meta property="twitter:image" content="/assets/logo2.png" />

      </Head>
      <Layout>
        <HeroSection categories={dummy.categories}/>
        {dummy.categories.map((category)=>{
          return(
            <HomeCategorySection key={category.id} category={category} />
          )
        })}
      </Layout>
    </>
  )
}

export default Home;
