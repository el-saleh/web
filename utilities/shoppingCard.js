import requester from "./requester"
import { toast } from 'react-toastify';

// to be used from product pafe and oriduct card
export const updatdeUserCart = (userId, productId, quantity = 1) => {
    if (userId && productId) {
        // fetch the current cart
        requester.get(`/cart?id=${userId}`, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        })
            .then((res) => {

                // check if product is already added to user cart
                let oldCart = res.data.model.cart || [];
                let alreadyAddedProduct = oldCart.find(item => item.product._id === productId);

                let newCart;
                if (alreadyAddedProduct) {
                    // if exist , remove it and add it again with the updated quantity.
                    newCart = [
                        ...oldCart.filter(item => item.product._id !== productId),
                        {
                            product: productId,
                            quantity: quantity + alreadyAddedProduct.quantity
                        }
                    ]

                } else {
                    // if not , just add it
                    newCart = [
                        ...oldCart,
                        { product: productId, quantity }
                    ]
                }

                requester.patch(
                    "/cart/updateCart",
                    {
                        id: userId,
                        cart: newCart
                    },
                    {
                        headers: {
                            'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
                        }
                    }
                ).then(() => {
                    toast("تم إضافة المنتج بنجاح");

                }).catch(() => {
                    toast("خطأ : فشل إضافة المنتج لعربة التسوق")
                });

            }).catch(() => {
                toast("خطأ : فشل تحميل عربة التسوق")
            })
    }
}

// to be used from cart item , when user clicks in the "remove product button" 
export const removeFromUserCart = (userId, productId, fetchUserCart) => {
    if (userId && productId) {
        // fetch the current cart
        requester.get(`/cart?id=${userId}`, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        })
            .then((res) => {

                // then remove the product, usign filter function
                let oldCart = res.data.model.cart;
                // console.log(oldCart);
                let newCart = oldCart
                    .filter(prod => prod.product._id !== productId)
                    .map((prod) => { return { product: prod.product._id, quantity: prod.quantity } });
                // console.log(newCart);

                // then set the new cart with the filtered cart
                requester.patch(
                    "/cart/updateCart",
                    {
                        id: userId,
                        cart: newCart
                    },
                    {
                        headers: {
                            'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
                        }
                    }
                ).then(() => {
                    // then fetch the Cart again , to get the updated cart
                    fetchUserCart()
                    toast("تم حذف المنتج بنجاح");
                }).catch(() => {
                    toast("خطا : فشل حذف المنتج من عربة التسوق")
                })

            }).catch(() => {
                toast("خطأ : فشل تحميل عربة التسوق")
            })
    }
}

// to be used from cart item , when user clicks in the "change quantity button" 
export const changeCartItemQuantity = (userId, productId, quantity, fetchUserCart) => {
    if (userId && productId) {
        // fetch the current cart
        requester.get(`/cart?id=${userId}`, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        })
            .then((res) => {
                // then remove the product, usign filter function
                let oldCart = res.data.model.cart;
                // console.log(oldCart);
                let newCart = oldCart
                    .filter(item => item.product._id !== productId)
                    .map((item) => { return { product: item.product._id, quantity: item.quantity } });
                // console.log(newCart);
                // then set the new cart with the quantity updated product
                requester.patch(
                    "/cart/updateCart",
                    {
                        id: userId,
                        cart: [
                            ...newCart,
                            { product: productId, quantity }
                        ]
                    },
                    {
                        headers: {
                            'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
                        }
                    }
                ).then(() => {
                    //     // then fetch the Cart again , to get the updated cart
                    fetchUserCart()
                    toast("تم تحديث العدد بنجاح");
                }).catch(() => {
                    toast("خطأ : فشل تعديل العدد")
                })

            }).catch(() => {
                toast("خطأ : فشل تحميل عربة التسوق")
            })
    }
}