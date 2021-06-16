import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { updatdeUserCart } from "../../utilities/shoppingCard";
import { Control } from '../../utilities/Contexts'

import styles from "./ProductCard.module.scss";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard(props) {
    const gstate = useContext(Control);
    
    const addToCart = () => {
        if(gstate.user){
            updatdeUserCart(gstate.user._id, props._id);
        }
        else{
            window.alert("ٌقم بتسجيل الدخول أولا")
        }
    }

    return (
        <div className={styles.productCard_Wrapper} title={props.title}>
            <div className={styles.ProductCard}>
                <Link href={`/product/${props._id}`}>
                    <a>
                        <div className={styles.imgContainer}>
                            <img src={props.productImage.imageUrl} alt={props.title} />
                        </div>
                    </a>
                </Link>
                <div className={styles.infoContainer}>
                    <Link href={`/product/${props._id}`} >
                        <a>
                            <h5 className={styles.name}>{props.title}</h5>
                        </a>
                    </Link>
                    <p className={styles.price}>{props.price} جنيه</p>
                    <button className={styles.addButton} onClick={addToCart}>{"أضف إلى العربة "} &nbsp;<IoCartOutline /></button>
                </div>
            </div>
        </div>
    )
}
