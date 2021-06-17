import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import requester from "../utilities/requester";
import Layout from "../layout/Layout";
import CartItem from "../components/CartItem/index";
import dummy from "../utilities/dummy";
import CartTotalItem from '../components/CartItem/CartTotalItem';
function orders({ products }) {
    const [ordersList, setOrdersList] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)
    const router = useRouter();

    const fetchUserorders = () => {
        let userData = window.localStorage.getItem("userData");
        if (userData) {
            requester.get(`/orders/getUserOrders?userId=${JSON.parse(userData)._id}`).then((res) => {
                setOrdersList(res.data.model)
            })
        }
        else {
            router.push("/");
        }
    }

    useEffect(() => {
        fetchUserorders()
    }, []);

    return (
        <>
            <Head>
                <title>{"El-Saleh | طلبات الشراء"}</title>
            </Head>
            <Layout>
                <div className={"container"} dir="auto">
                    <h3>{"طلبات الشراء"}</h3>
                    <br />
                    {ordersList ?
                        <>
                            {ordersList.length ?
                                <>
                                    {ordersList.map((order, index) => {
                                        return (
                                            <Fragment key={order._id}>
                                                <h5>{`طلب رقم ${index + 1}  - وقت وتاريخ الطلب : `} <span>{new Date(order.createdAt).toLocaleString()}</span></h5>
                                                <div>
                                                    {order.products.map((product) => {
                                                        return (
                                                            <CartItem key={product._id} data={product} orderItem />
                                                        )
                                                    })}
                                                </div>
                                                <CartTotalItem totalPrice={order.total} orderStatus={order.orderStatus} orderItem />
                                            </Fragment>
                                        )
                                    })}
                                </>
                                :
                                <div><p>{"لا يوجد أى طلبات شراء"}</p></div>
                            }
                        </>
                        :
                        <div className={"loader"}></div>
                    }


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