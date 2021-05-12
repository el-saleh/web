import react, { useState, useEffect, useContext } from "react";
import { DisplayLoadingOverlayHandler } from "../utilities/Contexts";
import Head from 'next/head';
import requester from "../utilities/requester";
import Layout from "../layout/Layout";
import HeroSection from '../components/HeroSection/HeroSection'
import CategpryProductList from "../components/CategpryProductList/CategpryProductList";
import category from "./category/[id]";
import HomeCategorySection from "../components/HomeCategorySection/HomeCategorySection";

function Home() {
  const setDisplayLoadingOverlay = useContext(DisplayLoadingOverlayHandler);
  const categories = [
    {
      name: "اسم الفئة الاولى",
      id: "Category1",
      desc : "وصف الفئة 1 وصف الفئة 1 وصف الفئة 1 وصف الفئة 1 وصف الفئة 1 ",
      image : "/assets/categ1.png"
    },
    {
      name: "اسم الفئة الثانية",
      id: "Category2",
      desc : "وصف الفئة 2 وصف الفئة 2 وصف الفئة 2 وصف الفئة 2 وصف الفئة 2 وصف الفئة 2 وصف الفئة 2",
      image : "/assets/categ2.png"
    },
    {
      name: "اسم الفئة الثالثة",
      id: "Category3",
      desc : "وصف الفئة 3 وصف الفئة 3 وصف الفئة 3 وصف الفئة 3 ",
      image : "/assets/categ3.png"
    },
    {
      name: "اسم الفئة الرابعة",
      id: "Category4",
      desc : "وصف الفئة 4 وصف الفئة 4 وصف الفئة 4 وصف الفئة 4 وصف الفئة 4 وصف الفئة 4 وصف الفئة 4 وصف الفئة 4",
      image : "/assets/categ1.png"
    },
  ]

  
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
        <HeroSection categories={categories}/>
        {categories.map((category)=>{
          return(
            <HomeCategorySection key={category.id} category={category} />
          )
        })}
      </Layout>
    </>
  )
}

export default Home;
