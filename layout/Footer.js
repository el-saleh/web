import styles from "./layout.module.scss";
import Link from 'next/link';
import { useRouter } from "next/router";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { FaPhoneAlt, FaTelegram } from 'react-icons/fa';
import { IoMail, IoLocationSharp } from "react-icons/io5"
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    const router = useRouter();
    return (
        <footer className={styles.footer}>
            <div className={styles.mainFooter}>
                <div className={`container`}>
                    <div className={styles.mainFooterWrapper} dir="auto">
                        <div className={styles.address}>
                            {/* <img className={styles.logoImg} src="/assets/logo2.png" alt="elsaleh" /> */}
                            <a className={styles.contactLink} target="_blank" href="https://maps.app.goo.gl/BVpmzwkwmsAthn5B6" rel="noreferrer">
                                <IoLocationSharp />
                                &nbsp;
                                <span>{router.locale === "ar" ? "ش أحمد بدوي - أبو النمرس - الجيزة" : ""}</span>
                            </a>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.718210864225!2d31.22380141511317!3d29.958782981913537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584748de6074b9%3A0x606ea09ad9de63c3!2z2KfZhNi12KfZhNitINmE2KfYs9iq2YrYsdin2K8g2YjYqti12K_ZitixINin2YTYo9iv2YjYp9iqINin2YTZhdmG2LLZhNmK2Kk!5e0!3m2!1sen!2seg!4v1621223495278!5m2!1sen!2seg"
                                allowFullScreen=""
                                loading="lazy"
                            >
                            </iframe>

                        </div>


                        <div className={styles.contacts}>
                            <div>
                                <h4>{"تواصل معنا"}</h4>
                                <a className={styles.contactLink} target="_blank" href="tel:+201123796666" rel="noreferrer">
                                    <FaPhoneAlt />
                                    &nbsp;
                                    <span className={"hiddenInMobile"}>{router.locale === "ar" ? "01123796666" : "01123796666"}</span>
                                </a>
                                <a className={styles.whatsapp} target="_blank" href="https://api.whatsapp.com/send?phone=201123796666" rel="noreferrer">
                                    <RiWhatsappFill />
                                    &nbsp;
                                    <span className={"hiddenInMobile"}>{router.locale === "ar" ? "WhatsApp" : "WhatsApp"}</span>
                                </a>
                                <a className={styles.contactLink} target="_blank" href="https://t.me/Elsalehforimportandexport" rel="noreferrer">
                                    <FaTelegram />
                                    &nbsp;
                                    <span className={"hiddenInMobile"}>{"Telegram"}</span>
                                </a>
                                <a className={styles.contactLink} target="_blank" href="https://www.facebook.com/ElsalehforImportAndExsport/" rel="noreferrer">
                                    <FaFacebookSquare />
                                    &nbsp;
                                    <span className={"hiddenInMobile"}>{"Facebook"}</span>
                                </a>
                                <a className={styles.contactLink} target="_blank" href="https://www.instagram.com/elsaleh_for_impor_and_export/" rel="noreferrer">
                                    <RiInstagramFill />
                                    &nbsp;
                                    <span className={"hiddenInMobile"}>{"Instagram"}</span>
                                </a>
                                <a className={styles.contactLink} target="_blank" href="mailto:info@elsaleh.net" rel="noreferrer">
                                    <IoMail />
                                    &nbsp;
                                    <span className={"hiddenInMobile"}>info@elsaleh.net</span>
                                </a>
                            </div>
                        </div>


                        <div className={styles.we + " hiddenInMobile"}>
                            <div>
                                <h4>{"من نحن"}</h4>
                                <p> الصالح لاستيراد الأدوات المنزلية والبلاستيكية - وكلاء كبرى الشركات التركية </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.miniFooter}>
                <div className={`container`}>
                    <span>{`ElSaleh © Copyrights ${new Date().getFullYear()}. All Rights Reserved.`}</span>
                </div>
            </div>
        </footer >
    );
};

export default Footer;