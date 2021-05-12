import React from 'react'
import ProductCard from '../productCard/ProductCard';
import styles from "../ProductList/ProductList";
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
