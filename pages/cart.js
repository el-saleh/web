import { useRouter } from 'next/router'
import Head from 'next/head'
import requester from "../utilities/requester";
import Layout from "../layout/Layout";
import CartItem from "../components/CartItem/index";
import dummy from "../utilities/dummy";
import { useEffect, useState } from 'react';
import CartTotalItem from '../components/CartItem/CartTotalItem';
function Cart({ products }) {
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
                <title>{"El-Saleh | عربة التسوق"}</title>
            </Head>
            <Layout>
                <div className={"container"} dir="auto">
                    <h3>{"عربة التسوق"}</h3>
                    <div>
                        {products.slice(0, 4).map((product) => {
                            return (
                                <CartItem key={product.id} product={product} />
                            )
                        })}
                    </div>
                    <CartTotalItem totalPrice={totalPrice} />
                   

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


export default Cart;
