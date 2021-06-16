import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import styles from "./CartItem.module.scss";
import PrimaryButton from '../Button/PrimaryButton';
import { AiFillDelete } from "react-icons/ai";
import { Control } from '../../utilities/Contexts';
import { changeCartItemQuantity } from "../../utilities/shoppingCard";

export default function CartItem({ orderItem, data, fetchUserCart, removeProduct }) {
    const gstate = useContext(Control);
    const [quantity, setQuantity] = useState(data?.quantity || 1);

    useEffect(() => {
        if (data?.quantity) {
            setQuantity(data.quantity)
        }
    }, [data])

    const updateQty = (e) => {
        const newQty = (parseInt(e.target.id) + quantity);
        changeCartItemQuantity(gstate.user._id, data.product._id, newQty, fetchUserCart)
    }

    return (
        <div className={styles.CartItem}>
            <div className={styles.imgBox}>
                <Link href={`/product/${data.product._id}`}>
                    <a>
                        <img src={data.product.productImage.imageUrl} alt={data.product.title} />
                    </a>
                </Link>
            </div>
            <div className={styles.infoBox}>
                <div>
                    <h4>
                        <Link href={`/product/${data.product._id}`} >
                            <a>
                                {data.product.title}
                            </a>
                        </Link>
                    </h4>
                    <p className={styles.price}>{data.product.price} <small>جنيه</small></p>
                </div>

                {!orderItem && <div className={styles.buttons}>
                    <div>
                        <PrimaryButton id={1} onClick={updateQty}>+</PrimaryButton>
                        <span className={styles.qty}>{quantity}</span>
                        <PrimaryButton id={-1} onClick={updateQty} disabled={!(quantity - 1)}>-</PrimaryButton>
                    </div>
                    <PrimaryButton id="delete" onClick={removeProduct} ><AiFillDelete />{"إزالة"}</PrimaryButton>
                </div>
                }

                {orderItem && <div>
                    <h4>{"عدد : "} {3}</h4>
                </div>
                }
            </div>
        </div>
    )
}
