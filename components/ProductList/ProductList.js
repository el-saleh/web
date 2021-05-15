import React from 'react'
import ProductCard from '../ProductCard';
import styles from "./ProductList.module.scss";
import dummy from "../../utilities/dummy";
export default function ProductList({ categoryId, limit }) {
    // console.log(dummy.productsById(categoryId))
    return (
        <div className={`${styles.ProductList} ${limit ? styles.oneRow : ""}`}>
            {dummy.productsById(categoryId).slice(0, limit).map((prod, index) => {
                return (
                    <ProductCard key={prod.id} {...prod} />
                )
            })}
        </div>
    )
}
