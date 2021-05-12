import { useRouter } from 'next/router'
import Head from 'next/head'
import requester from "../../utilities/requester";
import Layout from "../../layout/Layout";
import CategpryProductList from '../../components/CategpryProductList/CategpryProductList';

function category() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title>ElSaleh | {category.name}</title>
                <meta name="description" content={category.description} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="product" />
                <meta property="og:url" content={`https://el-saleh.com/category/${id}`} />
                <meta property="og:description" content={category.description} />
                <meta property="og:image" content={`${category.imageUrl}`} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://el-saleh.com/category/${id}`} />
                <meta property="twitter:description" content={category.description} />
                <meta property="twitter:image" content={`${category.imageUrl}`} />
            </Head>
            <Layout>
                <div className={"container"} dir="rtl">
                    <h1>{"اسم الفئة"}</h1>
                </div>
                <CategpryProductList />
            </Layout>
        </>
    )
}

export default category;
