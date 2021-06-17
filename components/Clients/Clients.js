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
    <div className={styles.imageWrapper}><img src="/assets/philips.png" /></div>,
    <div className={styles.imageWrapper}><img src="/assets/tefal.png" /></div>
]

export default function Clients() {
    return (
        <section className={styles.Clients + " container"}>
            <br/>
            <h3>عنوان متوسط الحجم</h3>
            <br />
            <Carousel
                swipeable
                draggable={false}
                showDots
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
               { [...items,...items,...items,...items].map((item,index)=><React.Fragment key={index}>{item}</React.Fragment>)}
            </Carousel>
            <br />
        </section>
    )
}
