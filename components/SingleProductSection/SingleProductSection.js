import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import ImageGallery from 'react-image-gallery';
import { toast } from 'react-toastify';
import { IoCartOutline, IoCheckmark } from "react-icons/io5";
import PrimaryButton from '../Button/PrimaryButton';
import styles from "./SingleProductSection.module.scss";
import ProductList from '../ProductList/ProductList';
import FormatPrice from '../../utilities/FormatPrice'
import requester from '../../utilities/requester';
import { Control } from '../../utilities/Contexts';
import { updatdeUserCart } from '../../utilities/shoppingCard';

const SingleProductSection = (props) => {
    const router = useRouter();
    const gstate = useContext(Control);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        zoom();
    })

    const gallery = props?.gallery?.map((img) => {
        return {
            original: img?.imageUrl,
            thumbnail: img?.imageUrl
        }
    }) || [];

    const updateQty = (e) => {
        const newQty = (parseInt(e.target.id) + quantity);
        setQuantity(newQty)
    }

    const addToCart = () => {
        if (gstate.user) {
            updatdeUserCart(gstate.user._id, props._id, quantity)
            setQuantity(1);
        }
        else {
            toast("ٌقم بتسجيل الدخول أولا")
        }
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
                    if (e.style.transform === "scale(2.5)") {
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


    useEffect(() => {
        // serach for/fetch products with the same first name
        requester.get(`/products/search?searchQuery=${props.title.split(" ")[0]}`, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        })
            .then((res) => {

                // to not preview the same product as related product (filtering function).
                let filteredPrdoucts = res.data.model.filter(prod => prod._id !== props._id)

                // fetch products from the same category to complete the related product list 
                // to be at least 5 products, then merge the two lists into one list and preveiw it 
                getRelatedProducts(filteredPrdoucts);

            }).catch(() => {
                console.log("failed to load related products")
                getRelatedProducts([]);
            });
    }, [props._id])

    // function that takes the already fetched "search Related Products Array", then adds some 
    // products to it from the same category, to be at least 5 products
    const getRelatedProducts = (searchRelatedProductsArray=[]) => {

        // fetch 6 products : just in cast the same product is retreived as a relatede product from the "produc by category" api,
        // it will be removed at the filtering function, to make sure we always have at least 5 category related product.
        requester.get(`/products/productByCategoryId?CategoryId=${props.category._id}&usePaging=true&pageNumber=1&pageSize=6`, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        })
            .then((res) => {

                // to not preview the same product as related product (filtering function).
                let filteredPrdoucts = res.data.model.products.filter(prod => prod._id !== props._id)

                // to not preview duplicate products from "serachr related prodcuts" and "category related prodcuts" (filtering function).
                let uniquePrdoucts = filteredPrdoucts.filter(product => {
                    console.log(!searchRelatedProductsArray.find(alreadylistedProdcut => alreadylistedProdcut._id === product._id))
                    return (!searchRelatedProductsArray.find(alreadylistedProdcut => alreadylistedProdcut._id === product._id))
                })

                setRelatedProducts([...searchRelatedProductsArray.reverse(), ...uniquePrdoucts])
            }).catch(() => {
                console.log("failed to load related products")
            })
    }


    return (
        <>

            <section className={styles.productSection}>
                <div className={`${styles.productSectionContainer} container`}>
                    <div className={styles.imgContainer}>
                        <ImageGallery
                            items={[
                                {
                                    original: props.productImage?.imageUrl,
                                    thumbnail: props.productImage?.imageUrl
                                },
                                ...gallery
                            ]}
                            showThumbnails={true}
                            thumbnailPosition={"right"}
                            showPlayButton={true}
                            showNav={false}
                            showBullets={false}
                            showFullscreenButton={true}
                            useBrowserFullscreen={false}
                            lazyLoad={true}
                            slideInterval={6000}
                            autoPlay={false}
                            infinite={true}
                            onBeforeSlide={zoom}
                            onScreenChange={toggleFullscreen}
                        />

                    </div>
                    <div className={styles.info} dir="auto">
                        <div>
                            <Link href={`/`}>
                                <a>
                                    <span className={styles.breadCrumb}>{"الرئيسية"}</span>
                                </a>
                            </Link>
                            {" - "}
                            <Link href={`/category/${props.category._id}`}>
                                <a>
                                    <span className={styles.breadCrumb}>{props.category?.categoryName}</span>
                                </a>
                            </Link>
                        </div>
                        <h1 className={styles.title}>{`${props.title}`}</h1>
                        <br />
                        {props.sale ? <small className={styles.salePatch} >{`خصم ${props.sale}%`}</small> : null}
                        {props.sale ?
                            <p className={styles.price}>
                                <del>{FormatPrice(props.price)} جنيه</del>
                                &nbsp;&nbsp;
                                {FormatPrice(props.price, props.sale)} <small>جنيه</small>
                            </p>
                            :
                            <p className={styles.price}>{FormatPrice(props.price)} <small>جنيه</small></p>
                        }
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: props.description }}></div>

                        <ul>
                            {props.bulletList?.map((listItem, idx) => {
                                if (!!listItem) {
                                    return (
                                        <li key={idx}><IoCheckmark />&nbsp;{listItem}</li>
                                    )
                                }
                            }) || []}
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

            {props?.videoUrl && <section className={styles.videoSection}>

                <div className="container">
                    <iframe
                        src={parseEmbedLink(props.videoUrl)}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                </div>

            </section>
            }
            <section>
                <div className={`container`} dir="auto">
                    <h1 className={styles.title}>{"منتجات ذات صلة"}</h1>
                    <ProductList products={relatedProducts} limit={5} />
                </div>
            </section>

        </>
    );
};

export default SingleProductSection;