import styles from "./layout.module.scss";
import { useRouter } from "next/router";
import { FiPhone, FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5"
import { FaFacebookSquare } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
const Footer = () => {
    const router = useRouter();
    return (
        <footer className={styles.footer}>
            <div className={styles.mainFooter}>
                <div className={`container`}>
                    <div className={styles.mainFooterWrapper} dir="auto">
                        <div className={styles.address}>

                            <a className={styles.contactLink} target="_blank" href="https://maps.app.goo.gl/BVpmzwkwmsAthn5B6" rel="noreferrer">
                                <GoLocation />
                                &nbsp;
                                <span>{router.locale === "ar" ? "ش أحمد بدوي - أبو النمرس - الجيزة" : ""}</span>
                            </a>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.718210864225!2d31.22380141511317!3d29.958782981913537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584748de6074b9%3A0x606ea09ad9de63c3!2z2KfZhNi12KfZhNitINmE2KfYs9iq2YrYsdin2K8g2YjYqti12K_ZitixINin2YTYo9iv2YjYp9iqINin2YTZhdmG2LLZhNmK2Kk!5e0!3m2!1sen!2seg!4v1621223495278!5m2!1sen!2seg" 
                                allowfullscreen="" 
                                loading="lazy"
                            >
                            </iframe>

                        </div>
                        <div className={styles.contacts}>

                            <a className={styles.whatsapp} target="_blank" href="https://api.whatsapp.com/send?phone=201099999999" rel="noreferrer">
                                <IoLogoWhatsapp />
                                &nbsp;
                                <span>{router.locale === "ar" ? "راسلنا على واتساب" : "Chat on WhatsApp"}</span>
                            </a>
                            <a className={styles.contactLink} target="_blank" href="tel:+201123796666" rel="noreferrer">
                                <FiPhone />
                                &nbsp;
                                <span>{router.locale === "ar" ? "01123796666" : "01123796666"}</span>
                            </a>
                            <a className={styles.contactLink} target="_blank" href="mailto:info@el-saleh.com" rel="noreferrer">
                                <FiMail />
                                &nbsp;
                                <span>info@elsaleh.com</span>
                            </a>
                        </div>
                        <div className={styles.social}>

                            <a className={styles.contactLink} target="_blank" href="https://www.facebook.com" rel="noreferrer">
                                <FaFacebookSquare />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.miniFooter}>
                <div className={`container`}>
                    <p>{`El-Saleh © Copyrights ${new Date().getFullYear()}. All Rights Reserved.`}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;