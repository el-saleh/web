import React from 'react';
import Head from 'next/head';
import Layout from '../layout/Layout';

export default function aboutus() {
    return (
        <>
            <Head>
                <title>{"El-Saleh | من نحن"}</title>
                <meta name="description" content={"الصالح لاستيراد الأدوات المنزليةوالبلاستيكية ، وكلاء كبرى الشركات التركية"} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://el-saleh.com" />
                <meta property="og:description" content={"الصالح لاستيراد الأدوات المنزليةوالبلاستيكية ، وكلاء كبرى الشركات التركية"} />
                <meta property="og:image" content="/assets/logo2.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://el-saleh.com" />
                <meta property="twitter:description" content={"الصالح لاستيراد الأدوات المنزليةوالبلاستيكية ، وكلاء كبرى الشركات التركية"} />
                <meta property="twitter:image" content="/assets/logo2.png" />

            </Head>
            <Layout>
                <div className={`container`} dir="auto">
                    <h1>{"من نحن"}</h1>
                    <p>
                        <span>{"الصالح لاستيراد الأدوات المنزلية و البلاستيكية"}</span>
                        <br/>
                        <span>{"وكلاء كبرى الشركات التركية"}</span>
                    </p>
                </div>
            </Layout>
        </>
    )
}
