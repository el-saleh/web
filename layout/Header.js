import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from "./layout.module.scss";
import { FiPhone, FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5"
import { Control } from '../utilities/Contexts'
import dummy from "../utilities/dummy";

const Header = () => {
  const router = useRouter();
  const [isSigned, setIsSigned] = useState(false);
  const gstate = useContext(Control);


  const onSignIn = () => {
    gstate.setDisplaySignInForm(true);
  }

  const signOut = () => {
    gstate.setUser(null)
  }

  return (
    <header className={styles.header}>

      <div className={styles.upperHeaderWrapper}>
        <div className={`container ${styles.header_wrapper}`} dir="">
          <div style={{ display: "flex" }}>
            <span>
              <a className={""} target="_blank" href="tel:+201123796666" rel="noreferrer">
                <FiPhone />
                &nbsp;
                <span>{router.locale === "ar" ? "01123796666" : "01123796666"}</span>
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
            <a className={""} target="_blank" href="https://api.whatsapp.com/send?phone=201123796666" rel="noreferrer">
              <IoLogoWhatsapp />
              &nbsp;
              <span>{router.locale === "ar" ? "01123796666" : "01123796666"}</span>
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
                {dummy.categories.map((categ) => {
                  return (
                    <li key={categ.id} className={styles.tab}><Link href={`/category/${categ.id}`}>{categ.name}</Link></li>
                  )
                })}
              </ul>
            </div>
          </span>

          <Link href="/aboutus">
            <a className={styles.tab} id="">{router.locale === "ar" ? "من نحن" : "About Us"}</a>
          </Link>

          {gstate.user ?
            <span tabIndex="0" id="" className={`${styles.dropDownTap}`}>
              <a className={styles.tab}>
                <img className={styles.userAvatar} src={"/assets/cart.png"} />
                &nbsp;
                <span>{gstate.user.username}</span>
              </a>
              <div className={styles.dropDownMenu}>
                <ul dir="auto">
                  <li className={styles.tab}><Link href="/cart">{"عربة التسوق"}</Link></li>
                  <li className={styles.tab}><Link href="/orders">{"طلبات الشراء"}</Link></li>
                  <li className={styles.tab} onClick={signOut}>{"خروج"}</li>
                </ul>
              </div>
            </span>
            :
            <span tabIndex="0" id="" className={`${styles.dropDownTap}`}>
              <a className={styles.tab}>
                <span onClick={onSignIn}>تسجيل دخول</span>
                &nbsp;
                <img className={styles.userAvatar} src={"/assets/userAvatar.png"} />
              </a>
            </span>
          }

        </div>

      </div>
    </header>
  );
};

export default Header;