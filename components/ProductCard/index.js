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
        <div className={styles.ProductCard}>
            <Link href="/product/great_new_product">
                <a>
                    <div className={styles.imgContainer}>
                        <img src={`/assets/products/prod${Math.ceil(Math.random() * 5)}.jpg`} alt={""} />
                    </div>
                </a>
            </Link>
            <div className={styles.infoContainer}>
                <Link href="/product/great_new_product">
                    <a>
                        <h5 className={styles.name}>{"عنوان تفصيلي واضح للمنتج المعروض"}</h5>
                    </a>
                </Link>
                <p className={styles.price}>{(Math.ceil((Math.random()*10))*100).toFixed(2)} جنيه</p>
                <button className={styles.addButton}>{"أضف إلى العربة "} &nbsp;<IoCartOutline /></button>
            </div>
        </div>
    )
}
