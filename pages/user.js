import React from 'react';
import Head from 'next/head';
import Layout from '../layout/Layout';
import UserPageForm from "../components/UserPageForm";
export default function user() {

    return (
        <>
            <Head>
                <title>{"elsaleh | حسابى"}</title>
                <meta name="description" content={"الصالح لاستيراد الأدوات المنزلية والبلاستيكية ، وكلاء كبرى الشركات التركية"} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://elsaleh.com" />
                <meta property="og:description" content={"الصالح لاستيراد الأدوات المنزلية والبلاستيكية ، وكلاء كبرى الشركات التركية"} />
                <meta property="og:image" content="/assets/logo2.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://elsaleh.com" />
                <meta property="twitter:description" content={"الصالح لاستيراد الأدوات المنزلية والبلاستيكية ، وكلاء كبرى الشركات التركية"} />
                <meta property="twitter:image" content="/assets/logo2.png" />

            </Head>
            <Layout>
                <div className={`container`} dir="auto">
                    <h1>{"حسابى"}</h1>
                    <UserPageForm/>
                </div>
        </Layout>
        </>
    )
}
