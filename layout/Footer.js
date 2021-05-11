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

                            <a className={styles.contactLink} target="_blank" href="https://goo.gl/maps/dcHBuqo3A8bEukR87" rel="noreferrer">
                                <GoLocation />
                                &nbsp;
                                <span>{router.locale === "ar" ? "الجيزة - مصر" : "giza, Egypt"}</span>
                            </a>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d864.182434770254!2d31.215454571758254!3d29.95845146522241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzI5LjQiTiAzMcKwMTInNTUuNSJF!5e0!3m2!1sen!2seg!4v1620706870207!5m2!1sen!2seg"
                                loading=""
                            >
                            </iframe>

                        </div>
                        <div className={styles.contacts}>

                            <a className={styles.whatsapp} target="_blank" href="https://api.whatsapp.com/send?phone=201099999999" rel="noreferrer">
                                <IoLogoWhatsapp />
                                &nbsp;
                                <span>{router.locale === "ar" ? "راسلنا على واتساب" : "Chat on WhatsApp"}</span>
                            </a>
                            <a className={styles.contactLink} target="_blank" href="tel:+201099999999" rel="noreferrer">
                                <FiPhone />
                                &nbsp;
                                <span>{router.locale === "ar" ? "۰۱۰۹۹۹۹۹۹۹۹" : "201099999999"}</span>
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