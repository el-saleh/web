import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from "../layout/Layout";
import CartItem from "../components/CartItem/index";
import CartTotalItem from '../components/CartItem/CartTotalItem';
import { removeFromUserCart, changeCartItemQuantity } from "../utilities/shoppingCard";
import requester from "../utilities/requester";
import { Control } from '../utilities/Contexts';

function Cart() {

    const gstate = useContext(Control);
    const [cart, setCart] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null)
    const router = useRouter()

    const fetchUserCart = () => {
        let userData = window.localStorage.getItem("userData");
        if (userData) {
            requester.get(`/cart?id=${JSON.parse(userData)._id}`).then((res) => {
                setCart(res.data.model.cart);
                setTotalPrice(res.data.model.total)
            }).catch(() => {

            })
        }
        else {
            router.push("/");
        }
    }

    const removeProduct = (productId) => {
        return () => { removeFromUserCart(gstate?.user?._id, productId, fetchUserCart) }
    }



    useEffect(() => {
        fetchUserCart();
    }, [])

    return (
        <>
            <Head>
                <title>{"El-Saleh | عربة التسوق"}</title>
            </Head>
            <Layout>
                <div className={"container"} dir="auto">
                    <h3>{"عربة التسوق"}</h3>
                    {cart ?
                        <>
                            {cart.length ?
                                <div>
                                    {cart.map((item) => {
                                        if (item?.product) {
                                            return (
                                                <CartItem
                                                    key={item?.product?._id || Math.random()}
                                                    data={item}
                                                    removeProduct={removeProduct(item?.product?._id)}
                                                    fetchUserCart={fetchUserCart}
                                                />
                                            )
                                        }
                                    })}
                                    <CartTotalItem totalPrice={totalPrice} fetchUserCart={fetchUserCart} />
                                </div>
                                :
                                <div><p>{"لا يوجد اى منتجات فى عربة التسوق"}</p></div>
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


export default Cart;
