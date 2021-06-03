import { useRouter } from 'next/router'
import Head from 'next/head'
import requester from "../../utilities/requester";
import Layout from "../../layout/Layout";
import ProductList from '../../components/ProductList/ProductList';
import dummy from "../../utilities/dummy";
function category(props) {
    const router = useRouter()
    const { id } = router.query;
    
    return (
        <>
            <Head>
                <title>El-Saleh | {props.name}</title>
                <meta name="description" content={props.desc} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://el-saleh.com/category/${props.id}`} />
                <meta property="og:description" content={props.desc} />
                <meta property="og:image" content={`${props.image}`} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://el-saleh.com/category/${props.id}`} />
                <meta property="twitter:description" content={props.desc} />
                <meta property="twitter:image" content={`${props.image}`} />
            </Head>
            <Layout>
                <div className={"container"} dir="rtl">
                    <h1>{props.name}</h1>
                    <ProductList categoryId={props.id} products={props.products} />
                </div>
            </Layout> 
        </>
    )
}

export async function getServerSideProps(context) {
    // console.log(context.params.id);
    const category = dummy.categoryById(context.params.id);
    const products =  dummy.productsById(context.params.id);
    if (!category) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      }
    }
  
    // console.log(product);
    return {
      props: { ...category, products }, // will be passed to the page component as props
    }
  }
  

export default category;
