import React from 'react';
import Link from 'next/link';
import styles from "./HomeCategorySection.module.scss";
import ProductList from '../ProductList/ProductList'

export default function HomeCategorySection({ category }) {
    return (
        <div>
            <div className={"container"} dir="rtl">
                <div className={styles.titleWrapper}>
                    <h1>{category.name}</h1>
                    <Link href={`/category/${category.id}`}>
                        <a>
                            <p className={styles.viewAll}>{"عرض الكل"}</p>
                        </a>
                    </Link>
                </div>
            <ProductList limit={5} categoryId={category.id} products={category.products} />
            </div>
        </div>
    )
}
