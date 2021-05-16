import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import ImageGallery from 'react-image-gallery';
import { IoCartOutline, IoCheckmark } from "react-icons/io5";
import PrimaryButton from '../Button/PrimaryButton';
import styles from "./SingleProductSection.module.scss";
import ProductList from '../ProductList/ProductList';

const SingleProductSection = (props) => {
    const router = useRouter();
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        zoom();
    })
    const gallery = props.gallery.map((img) => {
        return {
            original: img,
            thumbnail: img,
        }
    })


    const updateQty = (e) => {
        const newQty = (parseInt(e.target.id) + quantity);
        setQuantity(newQty)
    }

    const addToCart = () => {
        window.alert("تم اضافة المنتج لعربة التسوق");
        setQuantity(1);
    }

    const zoom = () => {
        const imageElements = [...document.getElementsByClassName("image-gallery-image")];
        imageElements.forEach((img) => {
            img.onmousemove = function (event) {
                var e = event.target;
                if (!isFullscreen) {
                    var xh = e.getBoundingClientRect().width;
                    var yh = e.getBoundingClientRect().height;
                    var xc = e.getBoundingClientRect().x;
                    var yc = e.getBoundingClientRect().y;
                    var x = event.clientX - xc;
                    var y = event.clientY - yc;
                    var xp = ((x / xh) * 100).toFixed();
                    var yp = ((y / yh) * 100).toFixed();
                    e.style.transformOrigin = `${xp}% ${yp}%`;
                    // console.log(xp, yp)
                }
                else {
                    if(e.style.transform === "scale(2.5)"){
                        e.style.transform = "scale(1)";
                    }
                }
            };
            img.onmouseenter = function (event) {
                if (!isFullscreen) {
                    var e = event.target;
                    e.style.transform = `scale(2.5)`;
                }
            };
            img.onmouseleave = function (event) {
                if (!isFullscreen) {
                    var e = event.target;
                    e.style.transform = `scale(1)`;
                }
            }
            if (isFullscreen) {
                img.style.height = "98vh"
            }
        })
    }

    const toggleFullscreen = (isfull) => {
        const imageElements = [...document.getElementsByClassName("image-gallery-image")];
        imageElements.forEach((img) => {
            if (isfull) {
                img.style.transform = `scale(1)`;
                img.style.height = "98vh";
            }
            else {
                img.style.transform = `scale(1)`;
                img.style.height = "49vh";
            }
        })
        setIsFullscreen(!isFullscreen);
    }

    const parseEmbedLink = (url) => {

        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/")
        }

        if (url.includes(".be/")) {
            return url.replace(".be/", "be.com/embed/")
        }

        return url;

    }

    return (
        <>

            <section className={styles.productSection}>
                <div className={`${styles.productSectionContainer} container`}>
                    <div className={styles.imgContainer}>
                        {/* in home page we show one image, but in product page we show all the product iamges in slider */}
                        {router.pathname === "/" ?
                            <>
                                {/* <img src={props.productImage} alt={props.title} loading="lazy" alt={props.title} /> */}
                            </>
                            :
                            <ImageGallery
                                items={gallery}
                                showThumbnails={true}
                                thumbnailPosition={"right"}
                                showPlayButton={true}
                                showNav={false}
                                showBullets={false}
                                showFullscreenButton={true}
                                useBrowserFullscreen={false}
                                lazyLoad={true}
                                slideInterval={3000}
                                autoPlay={true}
                                infinite={true}
                                onBeforeSlide={zoom}
                                onScreenChange={toggleFullscreen}
                            />
                        }
                    </div>
                    <div className={styles.info} dir="auto">
                        {/* <p className={styles.superTitle}>{""}</p> */}
                        <div>
                            <Link href={`/`}>
                                <a>
                                    <span className={styles.breadCrumb}>{"الرئيسية"}</span>
                                </a>
                            </Link>
                            {" - "}
                            <Link href={`/category/${props.categoryId}`}>
                                <a>
                                    <span className={styles.breadCrumb}>{props.categoryName}</span>
                                </a>
                            </Link>
                        </div>
                        <h1 className={styles.title}>{`${props.productName}  ${props.id}`}</h1>
                        <p className={styles.price}>{props.price} <small>جنيه</small></p>
                        <p className={styles.description}>{props.description}</p>

                        <ul>
                            {Array(3).fill({}).map((listItem, idx) => {
                                if (!!listItem) {
                                    return (
                                        <li key={idx}><IoCheckmark />&nbsp;{"مميزات المنتج"}</li>
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

            <section className={styles.videoSection}>

                <div className="container">
                    <iframe
                        src={parseEmbedLink("https://youtu.be/y2D04x9baoM")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                </div>

            </section>

            <section>
                <div className={`container`} dir="auto">
                    <h1 className={styles.title}>{"منتجات ذات صلة"}</h1>
                    <ProductList products={props.related} limit={5} />
                </div>
            </section>

        </>
    );
};

export default SingleProductSection;