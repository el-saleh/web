import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import requester from "../../utilities/requester";
import Layout from "../../layout/Layout";
import SingleProductSection from '../../components/SingleProductSection/SingleProductSection';
import dummy from "../../utilities/dummy";

function product(props) {
  const router = useRouter()
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{`elsaleh | ${props.title}`}</title>
        <meta name="description" content={props?.description?.replace(/<[^>]+>/g, '')} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://www.elsaleh.net/product/${id}`} />
        <meta property="og:description" content={props?.description?.replace(/<[^>]+>/g, '')} />
        <meta property="og:image" content={props.productImage?.imageUrl} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.elsaleh.net/product/${id}`} />
        <meta property="twitter:description" content={props?.description?.replace(/<[^>]+>/g, '')} />
        <meta property="twitter:image" content={props.productImage?.imageUrl} />
      </Head>
      <Layout>
        <SingleProductSection {...props} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  return await requester.get(`/products/productById?id=${context.params.id}`).then((res) => {
    return {
      props: { ...res.data.model }, // will be passed to the page component as props
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

export default product;
