import React from 'react'
import ProductCard from '../ProductCard';
import styles from "./ProductList.module.scss";
export default function ProductList({ list }) {
    return (
        <div className={styles.ProductList}>
            {list.map((prod) => {
                return (
                    <ProductCard key={prod.productId} {...prod} />
                )
            })}
        </div>
    )
}
