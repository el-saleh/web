import { useRouter } from 'next/router'
import Head from 'next/head'
import requester from "../../utilities/requester";
import Layout from "../../layout/Layout";
import ProductList from '../../components/ProductList/ProductList';
import dummy from "../../utilities/dummy";
function category(props) {
  return (
    <>
      <Head>
        <title>El-Saleh | {props.category.categoryName}</title>
        <meta name="description" content={props.category.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://el-saleh.com/category/${props.category._id}`} />
        <meta property="og:description" content={props.category.description} />
        <meta property="og:image" content={`${props.category.categoryImage.imageUrl}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://el-saleh.com/category/${props.category._id}`} />
        <meta property="twitter:description" ontent={props.category.description} />
        <meta property="twitter:image" content={`${props.category.categoryImage.imageUrl}`} />
      </Head>
      <Layout>
        <div className={"container"} dir="rtl">
          <h1>{props.category.categoryName}</h1>
          <ProductList  products={props.products} />
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = (await requester.get(`/products/productByCategoryId?CategoryId=${context.params.id}&usePaging=true&pageNumber=1&pageSize=15`)).data;

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

export default category;
