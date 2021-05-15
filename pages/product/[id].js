import Head from 'next/head'
import { useRouter } from 'next/router'
import requester from "../../utilities/requester";
import Layout from "../../layout/Layout";
import SingleProductSection from '../../components/SingleProductSection/SingleProductSection';
import ConatctUs from '../../components/ConatctUs/ConatctUs';


function product(props) {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>ElSaleh | {"اسم المنتج"}</title>
        <meta name="description" content={"وصف المنتج"}  />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://el-saleh.com/${id}`} />
        <meta property="og:description" content={"وصف المنتج"} />
        <meta property="og:image" content={`https://dummyimage.com/400x400/961296/ffffff&text=product_image`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://el-saleh.com/${id}`} />
        <meta property="twitter:description" content={"وصف المنتج"} />
        <meta property="twitter:image" content={`https://dummyimage.com/400x400/961296/ffffff&text=product_image}`} />
      </Head>
      <Layout>
        <SingleProductSection/>
      </Layout>
    </>
  )
}

export default product;
