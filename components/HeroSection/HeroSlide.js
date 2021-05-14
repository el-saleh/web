import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import PrimaryButton from '../Button/PrimaryButton';
import styles from "./HeroSlide.module.scss";

const HeroSlide = (props) => {
    const router = useRouter();
    return (
        <div className={styles.slide} style={{backgroundImage:`url(${props.image})`}} >
            <div className={styles.overLay}>
                <div className={`container`} >
                    <div className={styles.slideWrapper}>
                        <h1 draggable="false" >{props.name}</h1>
                        <p draggable="false" dir="auto" title={props.desc}>{props.desc}</p>
                        <Link href={`/category/${props.id}`}>
                            <a draggable="false">
                                <PrimaryButton draggable="false" >{router.locale === "ar" ? "المزيد" : "Check Now"}</PrimaryButton>
                            </a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;