import React from 'react';
import { useRouter } from "next/router"
import styles from "./HeroSection.module.scss";
import HeroSlide from "./HeroSlide";
import Carousel from "react-multi-carousel";



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const HeroSection = ({categories}) => {
  return (
    <section id={"#homeHeroSection"} className={styles.hero}>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        // means to render carousel on server-side.
        infinite={true}
        autoPlay
        autoPlaySpeed={6000}
        keyBoardControl={true}
        containerClass="carousel__container"
        renderDotsOutside
        arrows={true}
        containerClass={styles.containerClass}
        sliderClass={styles.sliderClass}
        itemClass={styles.itemClass}
        dotListClass={styles.dotListClass}
      >
        {categories.map((category)=>{
          return <HeroSlide key={category.id} {...category} />
        })}
        
      </Carousel>
    </section>
  );
};

export default HeroSection;