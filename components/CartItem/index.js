import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import styles from "./CartItem.module.scss";
import PrimaryButton from '../Button/PrimaryButton';
import { AiFillDelete } from "react-icons/ai";
import { Control } from '../../utilities/Contexts';
import { changeCartItemQuantity } from "../../utilities/shoppingCard";
import FormatPrice from '../../utilities/FormatPrice';

export default function CartItem({ orderItem, data, fetchUserCart, removeProduct }) {
    const gstate = useContext(Control);
    const [quantity, setQuantity] = useState(data?.quantity || 1);
    const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
    const [source, setSource] = useState(data?.product?.productImage?.imageUrl)

    useEffect(() => {
        if (data?.quantity) {
            setQuantity(data.quantity)
        }
        setIsButtonsDisabled(false)
        
    }, [data])

    const updateQty = (e) => {
        setIsButtonsDisabled(true);
        const newQty = (parseInt(e.target.id) + quantity);
        changeCartItemQuantity(gstate.user._id, data.product._id, newQty, fetchUserCart)
    }

    const loadFallbackImage = () => {
        setSource("/assets/fallback.png")
    }

    return (
        <div className={styles.CartItem}>
            <div className={styles.imgBox}>
                <Link href={`/product/${data?.product?._id}`}>
                    <a>
                        <img src={source} alt={data?.product?.title} onError={loadFallbackImage} />
                    </a>
                </Link>
            </div>
            <div className={styles.infoBox}>
                <div>
                    <h4>
                        <Link href={`/product/${data?.product?._id}`} >
                            <a>
                                {data?.product?.title}
                            </a>
                        </Link>
                    </h4>

                    {data?.product?.sale ?
                        <p className={styles.price}>
                            <del>{FormatPrice(data.product.price)} ????????</del>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>{FormatPrice(data.product.price, data.product.sale)}  <small>????????</small></span></p>
                        :
                        <p className={styles.price}><span>{FormatPrice(data.product.price)}  <small>????????</small></span></p>
                    }

                </div>

                {!orderItem && <div className={styles.buttons}>
                    <div>
                        <PrimaryButton disabled={isButtonsDisabled} id={1} onClick={updateQty}>+</PrimaryButton>
                        <span className={styles.qty}>{quantity}</span>
                        <PrimaryButton id={-1} onClick={updateQty} disabled={!(quantity - 1) || isButtonsDisabled}>-</PrimaryButton>
                    </div>
                    <PrimaryButton id="delete" onClick={removeProduct} ><AiFillDelete />&nbsp;{"??????????"}</PrimaryButton>
                </div>
                }

                {orderItem && <div>
                    <h4>{"?????? : "} {data.quantity}</h4>
                </div>
                }
            </div>
        </div>
    )
}
