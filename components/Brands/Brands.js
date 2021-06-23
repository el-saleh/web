import React from 'react';
import Carousel from "react-multi-carousel";
import styles from "./Clients.module.scss";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1150 },
        items: 7,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1150, min: 768 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const items = [
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (1).jpg" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (2).jpg" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (3).jpg" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (4).jpg" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (5).jpg" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (6).jpg" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (7).jpg" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (8).jpg" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/brands/brand (9).jpg" /></div>,
]

export default function Brands() {
    return (
        <section className={styles.Clients + " container"}>
            <br />
            <h3>وكلاء كبرى الشركات التركية</h3>
            <br />
            <Carousel
                swipeable
                draggable={false}
                showDots={false}
                responsive={responsive}
                // means to render carousel on server-side.
                infinite={true}
                autoPlay
                autoPlaySpeed={2000}
                keyBoardControl={true}
                containerClass="carousel__container"
                renderDotsOutside
                arrows={false}
                centerMode={false}
                // containerClass={styles.containerClass}
                // sliderClass={styles.sliderClass}
                itemClass={styles.itemClass}
            // dotListClass={styles.dotListClass}
            >
                {[...items, ...items, ...items, ...items].map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)}
            </Carousel>
            <br />
        </section>
    )
}
