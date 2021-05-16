import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./CartItem.module.scss";
import PrimaryButton from '../Button/PrimaryButton';
import { AiFillDelete } from "react-icons/ai";

export default function CartItem({ product, orderItem }) {
    const [quantity, setQuantity] = useState(1);
    const updateQty = (e) => {
        const newQty = (parseInt(e.target.id) + quantity);
        setQuantity(newQty)
    }
    return (
        <div className={styles.CartItem}>
            <div className={styles.imgBox}>
                <Link href={`/product/${product.id}`}>
                    <a>
                        <img src={product.image} alt={product.productName} />
                    </a>
                </Link>
            </div>
            <div className={styles.infoBox}>
                <div>
                    <h4>
                        <Link href={`/product/${product.id}`} >
                            <a>
                                {product.productName}
                            </a>
                        </Link>
                    </h4>
                    <p className={styles.price}>{product.price} <small>جنيه</small></p>
                </div>

                {!orderItem && <div className={styles.buttons}>
                    <div>
                        <PrimaryButton id={1} onClick={updateQty}>+</PrimaryButton>
                        <span className={styles.qty}>{quantity}</span>
                        <PrimaryButton id={-1} onClick={updateQty} disabled={!(quantity - 1)}>-</PrimaryButton>
                    </div>
                    <PrimaryButton ><AiFillDelete />{"إزالة"}</PrimaryButton>
                </div>
                }

                {orderItem && <div>
                    <h4>{"عدد : "} {1}</h4>
                </div>
                }
            </div>
        </div>
    )
}
