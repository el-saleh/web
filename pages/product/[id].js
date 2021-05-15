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
        <title>{`ElSaleh | ${props.productName}  ${props.id}`}</title>
        <meta name="description" content={props.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://el-saleh.com/product/${id}`} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://el-saleh.com/product/${id}`} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:image" content={props.image} />
      </Head>
      <Layout>
        <SingleProductSection {...props} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(context.params.id);
  const product =  dummy.productById(context.params.id);
  const related = dummy.productsById(product.categoryId);
  if (!product) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  // console.log(product);
  return {
    props: { ...product, related }, // will be passed to the page component as props
  }
}

export default product;
