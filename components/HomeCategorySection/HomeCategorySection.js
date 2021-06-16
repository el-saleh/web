import React from 'react';
import Link from 'next/link';
import styles from "./HomeCategorySection.module.scss";
import ProductList from '../ProductList/ProductList'
import { useEffect } from 'react';
import requester from '../../utilities/requester';

export default function HomeCategorySection({ category, products }) {
   
    return (
        <div className={styles.HomeCategorySection}>
            <div className={"container"} dir="rtl">
                <div className={styles.titleWrapper}>
                    <h1>{category.categoryName}</h1>
                    <Link href={`/category/${category._id}`}>
                        <a>
                            <p className={styles.viewAll}>{"عرض الكل"}</p>
                        </a>
                    </Link>
                </div>
            <ProductList limit={5} categoryId={category.id} products={products} />
            </div>
        </div>
    )
}
