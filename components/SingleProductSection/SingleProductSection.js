import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import ImageGallery from 'react-image-gallery';
import { IoCartOutline, IoCheckmark } from "react-icons/io5";
import PrimaryButton from '../Button/PrimaryButton';
import styles from "./SingleProductSection.module.scss";

const SingleProductSection = (props) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState((Math.ceil((Math.random() * 10)) * 100).toFixed(2));

    const images = props.gallery.map((img) => {
        return (
            {
                original: img.imageUrl,
                thumbnail: img.imageUrl,
                originalAlt: props.title
            }
        )
    })

    const updateQty = (e) => {
        const newQty = (parseInt(e.target.id) + quantity);
        setQuantity(newQty)
    }

    const addToCart = () => {
        window.alert("تم اضافة المنتج لعربة التسوق");
        setQuantity(1);
    } 

    return (
        <section className={styles.productSection}>

            <div className={`${styles.productSectionContainer} container`}>
                <div className={styles.imgContainer}>
                    {/* in home page we show one image, but in product page we show all the product iamges in slider */}
                    {router.pathname === "/" ?
                        <img src={props.productImage} alt={props.title} loading="lazy" alt={props.title} />
                        :
                        <ImageGallery
                            items={images}
                            showThumbnails={true}
                            thumbnailPosition={"right"}
                            showPlayButton={false}
                            showNav={false}
                            showBullets={false}
                            showFullscreenButton={false}
                            useBrowserFullscreen={false}
                            lazyLoad={true}
                        />
                    }
                </div>
                <div
                    className={styles.info}
                    dir="auto"
                >

                    <p className={styles.superTitle}>{""}</p>
                    <h1 className={styles.title}>{"عنوان تفصيلى للمنتج المعروض"}</h1>
                    <p className={styles.price}>{price} <small>جنيه</small></p>
                    <p className={styles.description}>{"وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج وصف للمنتج "}</p>

                    <ul>
                        {props.bulletList.map((listItem, idx) => {
                            if (!!listItem) {
                                return (
                                    <li key={idx}><IoCheckmark />&nbsp;{listItem}</li>
                                )
                            }
                        })}
                    </ul>
                    <span>
                        <PrimaryButton id={1} onClick={updateQty}>+</PrimaryButton>
                        <span className={styles.qty}>{quantity}</span>
                        <PrimaryButton id={-1} onClick={updateQty} disabled={!(quantity - 1)}>-</PrimaryButton>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <PrimaryButton onClick={addToCart}>
                        {router.locale === "ar" ? "أضف إلى العربة" : "Add To Cart"}
                        &nbsp;
                        <IoCartOutline />
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default SingleProductSection;