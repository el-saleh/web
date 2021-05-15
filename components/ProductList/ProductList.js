import React from 'react'
import ProductCard from '../ProductCard';
import styles from "./ProductList.module.scss";
export default function ProductList({ list = Array(30).fill(null), limit }) {
    return (
        <div className={`${styles.ProductList} ${limit ? styles.oneRow : ""}`}>
            {list.slice(0, limit).map((prod, index) => {
                return (
                    <ProductCard key={index} {...prod} />
                )
            })}
        </div>
    )
}
