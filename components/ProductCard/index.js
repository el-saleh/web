import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { toast } from "react-toastify"
import { IoCartOutline } from "react-icons/io5";
import { updatdeUserCart } from "../../utilities/shoppingCard";
import FormatPrice from "../../utilities/FormatPrice";
import { Control } from '../../utilities/Contexts'
import styles from "./ProductCard.module.scss";

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
                            <del>{FormatPrice(props.price)}<small>جنيه</small></del>
                            &nbsp;
                            <span>{FormatPrice(props.price, props.sale)}  <small>جنيه</small></span></p>
                        :
                        <p className={styles.price}><span>{FormatPrice(props.price)}  <small>جنيه</small></span></p>
                    }
                    <button className={styles.addButton} onClick={addToCart}>{"أضف إلى العربة "} &nbsp;<IoCartOutline /></button>
                </div>
            </div>
            {props.sale ? <small className={styles.salePatch} >{`خصم ${props.sale}%`}</small> : null}
        </div>
    )
}
