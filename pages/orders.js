import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from "../layout/Layout";
import CartItem from "../components/CartItem/index";
import CartTotalItem from '../components/CartItem/CartTotalItem';
import OrderInfo from '../components/orders/OrderInfo';
import { toast } from "react-toastify";
import requester from "../utilities/requester";
function orders({ products }) {
    const [ordersList, setOrdersList] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)
    const router = useRouter();

    const fetchUserorders = () => {
        let userData = window.localStorage.getItem("userData");
        if (userData) {
            requester.get(`/orders/getUserOrders?userId=${JSON.parse(userData)._id}`, {
                headers: {
                    'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
                }
            }).then((res) => {
                setOrdersList(res.data.model)
            })
        }
        else {
            router.push("/");
        }
    }

    const cancelOrder = (e) => {
        requester.delete(`/orders/deleteOrder?orderId=${e.target.id}`, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then((res) => {
            toast("تم إلغاء طلب الشراء بنجاح");
            fetchUserorders();
        }).catch(() => {
            toast("خطأ : فشل إلغاء طلب الشراء")
        })
    }

    useEffect(() => {
        fetchUserorders()
    }, []);

    return (
        <>
            <Head>
                <title>{"elsaleh | طلبات الشراء"}</title>
            </Head>
            <Layout>
                <div className={"container"} dir="auto">
                    <h3>{"طلبات الشراء"}</h3>

                    {ordersList ?
                        <>
                            {ordersList.length ?
                                <>
                                    {ordersList.map((order, index) => {
                                        return (
                                            <Fragment key={order._id}>
                                                <OrderInfo order={order} index={index + 1} cancelOrderCallback={cancelOrder} />
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

export default orders;