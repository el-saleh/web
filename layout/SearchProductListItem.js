import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import styles from "./SearchProductListItem.module.scss";


export default function SearchProductListItem({ resultProduct }) {


    return (
        <Link key={resultProduct._id}  href={`/product/${resultProduct._id}`} >
            <a target="_blank">
                <div className={styles.CartItem}>

                    <div className={styles.imgBox}>
                        <img src={resultProduct.productImage?.imageUrl} alt={resultProduct.title} />
                    </div>
                    <div className={styles.infoBox}>
                        <div>
                            <h4>
                                {resultProduct.title}
                            </h4>

                            {resultProduct.sale ?
                                <p className={styles.price}>
                                    <del>{resultProduct.price} جنيه</del>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{resultProduct.price - (resultProduct.price * (0.01 * resultProduct.sale))} جنيه</span></p>
                                :
                                <p className={styles.price}><span>{resultProduct.price} جنيه</span></p>
                            }

                        </div>
                    </div>

                </div>
            </a>
        </Link>
    )
}
