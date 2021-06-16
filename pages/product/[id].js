import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import requester from "../../utilities/requester";
import Layout from "../../layout/Layout";
import SingleProductSection from '../../components/SingleProductSection/SingleProductSection';
import dummy from "../../utilities/dummy";

function product(props) {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <>
      <Head>
        <title>{`El-Saleh | ${props.title}`}</title>
        <meta name="description" content={props.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://el-saleh.com/product/${id}`} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.productImage.imageUrl} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://el-saleh.com/product/${id}`} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:image" content={props.productImage.imageUrl} />
      </Head>
      <Layout>
        <SingleProductSection {...props} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = (await requester.get(`/products/productById?id=${context.params.id}`)).data;

  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: { ...data.model }, // will be passed to the page component as props
  }
}

export default product;
