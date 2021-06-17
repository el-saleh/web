import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { updatdeUserCart } from "../../utilities/shoppingCard";
import { Control } from '../../utilities/Contexts'
import { toast } from "react-toastify"
import styles from "./ProductCard.module.scss";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard(props) {
    const gstate = useContext(Control);

    const addToCart = () => {
        if (gstate.user) {
            updatdeUserCart(gstate.user._id, props._id);
        }
        else {
            toast("ٌقم بتسجيل الدخول أولا")
        }
    }

    return (
        <div className={styles.productCard_Wrapper} title={props.title}>
            <div className={styles.ProductCard}>
                <Link href={`/product/${props._id}`}>
                    <a>
                        <div className={styles.imgContainer}>
                            <img src={props?.productImage?.imageUrl} alt={props.title} />
                        </div>
                    </a>
                </Link>
                <div className={styles.infoContainer}>
                    <Link href={`/product/${props._id}`} >
                        <a>
                            <h5 className={styles.name}>{props.title}</h5>
                        </a>
                    </Link>
                    {props.sale ?
                        <p className={styles.price}>
                            <del>{props.price} جنيه</del>
                            &nbsp;
                            <span>{props.price - (props.price * (0.01 * props.sale))} جنيه</span></p>
                        :
                        <p className={styles.price}><span>{props.price} جنيه</span></p>
                    }
                    <button className={styles.addButton} onClick={addToCart}>{"أضف إلى العربة "} &nbsp;<IoCartOutline /></button>
                </div>
            </div>
            {props.sale ? <small className={styles.salePatch} >{`خصم ${props.sale}%`}</small> : null}
        </div>
    )
}
