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
    const router = useRouter()
    useEffect(() => {
        let totalPrice = products.slice(0, 4).reduce((acc, product) => {
            return acc + product.price
        }, 0);
        setTotalPrice(totalPrice);
    })
    return (
        <>
            <Head>
                <title>{"El-Saleh | طلبات الشراء"}</title>
            </Head>
            <Layout>
                <div className={"container"} dir="auto">
                    <h3>{"طلبات الشراء"}</h3>
                    <br/>
                    <h5>{"طلب رقم 1  - تاريخ الطلب : "} <span>{new Date().toLocaleDateString()}</span></h5>
                    <div>
                        {products.slice(0, 2).map((product) => {
                            return (
                                <CartItem key={product.id} product={product} orderItem />
                            )
                        })}
                    </div>
                    <CartTotalItem totalPrice={1600} orderItem/>
                    <br/>
                    <h5>{"طلب رقم 2  - تاريخ الطلب : "} <span>{new Date().toLocaleDateString()}</span></h5>
                    <div>
                        {products.slice(0, 3).map((product) => {
                            return (
                                <CartItem key={product.id} product={product} orderItem />
                            )
                        })}
                    </div>
                    <CartTotalItem totalPrice={2500} orderItem/>
                    <br/>
                    <h5>{"طلب رقم 3  - تاريخ الطلب : "} <span>{new Date().toLocaleDateString()}</span></h5>
                    <div>
                        {products.slice(0, 1).map((product) => {
                            return (
                                <CartItem key={product.id} product={product} orderItem />
                            )
                        })}
                    </div>
                    <CartTotalItem totalPrice={800} orderItem/>

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
