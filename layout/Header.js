import { useRouter } from "next/router";
import Link from 'next/link';
import styles from "./layout.module.scss"
import { FiPhone, FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5"

const Header = () => {
  const router = useRouter();

  const windowScroll = (e) => {
    if (document.getElementById(`#${e.target.id}`)) {
      window.scrollBy({
        top: document.getElementById(`#${e.target.id}`).getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.upperHeaderWrapper}>
        <div className={`container ${styles.header_wrapper}`} dir="">
          <div style={{ display: "flex" }}>
            <span>
              <a className={""} target="_blank" href="tel:+201099999999" rel="noreferrer">
                <FiPhone />
                &nbsp;
                <span>{router.locale === "ar" ? "01099999999" : "01099999999"}</span>
              </a>
            </span>
            <span>
              <a className={""} target="_blank" href="mailto:info@el-saleh.com" rel="noreferrer">
                <FiMail />
                &nbsp;
                <span>info@elsaleh.com</span>
              </a>
            </span>
          </div>
          <div>
            <a className={""} target="_blank" href="https://api.whatsapp.com/send?phone=201099999999" rel="noreferrer">
              <IoLogoWhatsapp />
              &nbsp;
              <span>{router.locale === "ar" ? "01099999999" : "01099999999"}</span>
            </a>
          </div>
        </div>

      </div>
      <div className={`container ${styles.header_wrapper}`} dir="">
        <div>
          <Link href="/">
            <a className={styles.tab}>
              <img className={styles.logoImg} src="/assets/logo2.png" alt="el-saleh" />
            </a>
          </Link>
        </div>

        <div className={styles.navLinks}>

        <Link href="/">
            <a className={styles.tab + " hiddenInMobile"} id="">{router.locale === "ar" ? "الرئيسية" : "Home"}</a>
          </Link>

          <span tabIndex="0" id="products" className={`${styles.dropDownTap}`}>
            <span >{router.locale === "ar" ? "المنتجات" : "Products"}</span>
            <div className={styles.dropDownMenu}>
              <ul dir="auto">
                <li className={styles.tab}><Link href="/category1">{"الفئة الاولى"}</Link></li>
                <li className={styles.tab}><Link href="/category2">{"الفئة الثانبة"}</Link></li>
                <li className={styles.tab}><Link href="/category3">{"الفئة الثالثة"}</Link></li>
              </ul>
            </div>
          </span>

          <Link href="/aboutus">
            <a className={styles.tab} id="">{router.locale === "ar" ? "عنا" : "About Us"}</a>
          </Link>

          <span tabIndex="0" id="" className={`${styles.dropDownTap}`}>
            
              <a className={styles.tab}> 
                <img className={styles.userAvatar} src={"https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"} />
                &nbsp;
                <span>Ahmed</span>
              </a>
            

            <div className={styles.dropDownMenu}>
              <ul dir="auto">
                <li className={styles.tab}><Link href="/cart">{"عربة التسوق"}</Link></li>
                <li className={styles.tab}><Link href="/orders">{"طبات الشراء"}</Link></li>
                <li className={styles.tab} onClick={()=>{window.alert("sign out")}}>{"خروج"}</li>
              </ul>
            </div>

          </span>

        </div>

      </div>
    </header>
  );
};

export default Header;