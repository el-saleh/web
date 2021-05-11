import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import PrimaryButton from '../Button/PrimaryButton';
import styles from "./HeroSlide.module.scss";

const HeroSlide = () => {
    const router = useRouter();
    return (
        <div className={`${styles.slide} `} >
            <h1 draggable="false" >{"اسم الفئة"}</h1>
            <p draggable="false" >{"وصف الفئة وصف الفئة وصف الفئة وصف الفئة وصف الفئة وصف الفئة وصف الفئة "}</p>
            <Link href={`/`}>
                <a draggable="false">
                    <PrimaryButton draggable="false" >{router.locale === "ar" ? "المزيد" : "Check Now"}</PrimaryButton>
                </a>
            </Link>
           
        </div>
    );
};

export default HeroSlide;