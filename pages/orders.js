import { useRouter } from 'next/router'
import Head from 'next/head'
import requester from "../utilities/requester";
import Layout from "../layout/Layout";
import CartItem from "../components/CartItem/index";
import dummy from "../utilities/dummy";
import { useEffect, useState } from 'react';
import CartTotalItem from '../components/CartItem/CartTotalItem';
function orders({ products }) {
    const [totalPrice, setTotalPrice] = useState(null)
    const router = useRouter();
    useEffect(() => { });
    return (
        <>
            <Head>
                <title>{"El-Saleh | طلبات الشراء"}</title>
            </Head>
            <Layout>
                <div className={"container"} dir="auto">
                    <h3>{"طلبات الشراء"}</h3>
                    <br />
                    <h5>{"طلب رقم 1  - تاريخ الطلب : "} <span>{new Date().toLocaleDateString()}</span></h5>

                    <div>
                        <CartItem key={1} data={{ _id: "1", product: { productImage: {} }, quantity: 4 }} orderItem />
                        <CartItem key={2} data={{ _id: "1", product: { productImage: {} }, quantity: 4 }} orderItem />
                        <CartItem key={3} data={{ _id: "1", product: { productImage: {} }, quantity: 4 }} orderItem />
                    </div>
                    <CartTotalItem totalPrice={1600} orderItem />
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const products = dummy.products;
    if (!products) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }

    // console.log(product);
    return {
        props: { products }, // will be passed to the page component as props
    }
}


export default orders;
