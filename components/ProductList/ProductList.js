import React from 'react'
import ProductCard from '../ProductCard';
import styles from "./ProductList.module.scss";
export default function ProductList({ list = [1,2,3,4,5,6,7,8,9] }) {
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
