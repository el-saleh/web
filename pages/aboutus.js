import React from 'react';
import Head from 'next/head';
import Layout from '../layout/Layout';

export default function aboutus() {
    return (
        <>
            <Head>
                <title>{"elsaleh | من نحن"}</title>
                <meta name="description" content={"الصالح لاستيراد الأدوات المنزليةوالبلاستيكية ، وكلاء كبرى الشركات التركية"} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://elsaleh.com" />
                <meta property="og:description" content={"الصالح لاستيراد الأدوات المنزليةوالبلاستيكية ، وكلاء كبرى الشركات التركية"} />
                <meta property="og:image" content="/assets/logo2.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://elsaleh.com" />
                <meta property="twitter:description" content={"الصالح لاستيراد الأدوات المنزليةوالبلاستيكية ، وكلاء كبرى الشركات التركية"} />
                <meta property="twitter:image" content="/assets/logo2.png" />

            </Head>
            <Layout>
                <div className={`container`} dir="auto">
                    <h1>{"من نحن"}</h1>
                    <p> الصالح لاستيراد الأدوات المنزلية والبلاستيكية - وكلاء كبرى الشركات التركية </p>
                    <p>
                        <b>العنوان: </b>
                        <a target="_blank" href="https://maps.app.goo.gl/BVpmzwkwmsAthn5B6" rel="noreferrer">
                            مول محمد زيدان - شارع أحمد بدوي - السوق التجاري - أبوالنمرس
                        </a>
                    </p>
                    <p>
                        <b>هاتف: </b>
                        <a target="_blank" href="tel:+201123796666" rel="noreferrer">01123796666</a>
                    </p>
                </div>
            </Layout>
        </>
    )
}
