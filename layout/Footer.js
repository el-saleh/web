import styles from "./layout.module.scss";
import Link from 'next/link';
import { useRouter } from "next/router";
import { RiWhatsappFill } from "react-icons/ri";
import { FaPhoneAlt } from 'react-icons/fa';
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
                            {/* <div>
                                <Link href="/">
                                    <a className={styles.tab}>
                                        <img className={styles.logoImg} src="/assets/logo2.png" alt="el-saleh" />
                                    </a>
                                </Link>
                            </div> */}
                            <img className={styles.logoImg} src="/assets/logo2.png" alt="el-saleh" />
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
                            <h4>{"تواصل معنا"}</h4>
                            <a className={styles.contactLink} target="_blank" href="tel:+201123796666" rel="noreferrer">
                                <FaPhoneAlt />
                                &nbsp;
                                <span className={"hiddenInMobile"}>{router.locale === "ar" ? "01123796666" : "01123796666"}</span>
                            </a>
                            <a className={styles.whatsapp} target="_blank" href="https://api.whatsapp.com/send?phone=201099999999" rel="noreferrer">
                                <RiWhatsappFill />
                                &nbsp;
                                <span className={"hiddenInMobile"}>{router.locale === "ar" ? "WhatsApp" : "WhatsApp"}</span>
                            </a>
                            <a className={styles.contactLink} target="_blank" href="https://www.facebook.com" rel="noreferrer">
                                <FaFacebookSquare />
                                &nbsp;
                                <span className={"hiddenInMobile"}>{"Facebook"}</span>
                            </a>
                            <a className={styles.contactLink} target="_blank" href="mailto:info@el-saleh.com" rel="noreferrer">
                                <IoMail />
                                &nbsp;
                                <span className={"hiddenInMobile"}>info@elsaleh.com</span>
                            </a>
                        </div>
                        <div className={styles.we + " hiddenInMobile"}>
                            <h4>{"من نحن"}</h4>
                            <p>{"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس"}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.miniFooter}>
                <div className={`container`}>
                    <span>{`El-Saleh © Copyrights ${new Date().getFullYear()}. All Rights Reserved.`}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;