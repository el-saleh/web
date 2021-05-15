import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./ProductCard.module.scss";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard(props) {
    // const [src, setSrc] = useState(props.productImage);

    // const setFallbackImage = () => {
    //     setSrc("/assets/fallback.png")
    // }

    return (
        <div className={styles.productCard_Wrapper} title={props.productName}>
            <div className={styles.ProductCard}>
                <Link href={`/product/${props.id}`}>
                    <a>
                        <div className={styles.imgContainer}>
                            <img src={props.image} alt={props.productName} />
                        </div>
                    </a>
                </Link>
                <div className={styles.infoContainer}>
                    <Link href={`/product/${props.id}`} >
                        <a>
                            <h5 className={styles.name}>{props.productName} {props.id}</h5>
                        </a>
                    </Link>
                    <p className={styles.price}>{props.price} جنيه</p>
                    <button className={styles.addButton}>{"أضف إلى العربة "} &nbsp;<IoCartOutline /></button>
                </div>
            </div>
        </div>
    )
}
