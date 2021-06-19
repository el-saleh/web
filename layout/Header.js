import { useState, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from "./layout.module.scss";
import PrimaryButton from '../components/Button/PrimaryButton';
import { RiWhatsappFill, RiCloseLine } from "react-icons/ri/";
import { FaPhoneAlt, FaSearch, FaUserCircle, FaShoppingCart, FaFacebookSquare } from 'react-icons/fa';
import { IoMail, IoMenu } from "react-icons/io5"
import { Control } from '../utilities/Contexts'
import requester from "../utilities/requester";
import SearchProductListItem from "./SearchProductListItem";

const Header = () => {
  const router = useRouter();
  const gstate = useContext(Control);
  const [categoriesList, setCategoriesList] = useState([]);
  const [showSidemenu, setShowSidemenu] = useState(false);
  const [showResultsBox, setShowResultsBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let timeId = useRef(0);

  useEffect(() => {
    requester.get("/categories/allCategories").then((res) => {
      // console.log(res);
      setCategoriesList(res.data.model);
    }).catch((err) => {
      console.log("Header.js : failed to fetch categories", err);
    });

  }, [])

  const onSignIn = () => {
    gstate.setDisplaySignInForm(true);
  }


  const signOut = () => {
    gstate.setUser(null);
    window.localStorage.removeItem("userData");
  }


  const sidemenuHandler = (icon, bool = true) => {
    setShowSidemenu(bool);
    console.log(icon, " icon clicked")
  }


  const parseUserName = (str) => {
    let firstName = str.split(" ")[0];
    if (firstName.length > 10) {
      return firstName.slice(0, 7).concat("...");
    }
    return str.split(" ")[0].slice(0, 10);
  }


  const searchTermHandler = (e) => {
    setSearchQuery(e.target.value)
  }


  const searchInputFoucusHandler = () => {
    if (searchResults?.length) {
      setShowResultsBox(true);
    }
  }

  const searchInputBlurHandler = (e) => {

  }

  useEffect(() => {
    const query = searchQuery.trim();
    if (query.length >= 2) {

      if (timeId.current) {
        // to debounce the timed out [suggestions and jobs results] fetching function (if any)
        // console.log("clearing timeout function : new timeout function");
        window.clearTimeout(timeId.current);
      }

      // set a new timed out [suggestions and jobs results] fetching function with the new "searcQuery"
      timeId.current = window.setTimeout(() => {
        requester.get(`/products/search?searchQuery=${query}`).then((res) => {
          if (res.data.model.length) {
            setSearchResults(res.data.model);
            setShowResultsBox(true);
          } else {
            setSearchResults(null);
            setShowResultsBox(true);
          }
        }).catch((err) => {
          console.log("search request failed", err)
        })
      }, 1000)
    }
    else if (query.length < 2) {
      // to debounce the timed out [suggestions and jobs results] fetching function (if any)
      // console.log("clearing time out : search query length < 3");
      setSearchResults([]);
      setShowResultsBox(false);
      window.clearTimeout(timeId.current);
      timeId.current = 0;
    }
  }, [searchQuery]);

  return (
    <header className={styles.header}>

      <div className={styles.upperHeaderWrapper}>
        <div className={` ${styles.header_wrapper}`} dir="">

          <div>
            <a className={""} target="_blank" href="https://api.whatsapp.com/send?phone=201123796666" rel="noreferrer">
              <RiWhatsappFill />
              &nbsp;
              <span>{router.locale === "ar" ? "01123796666" : "01123796666"}</span>
            </a>
          </div>


          <div style={{ display: "flex" }}>
            <span>
              <a className={""} target="_blank" href="tel:+201123796666" rel="noreferrer">
                <FaPhoneAlt />
                &nbsp;
                <span>{router.locale === "ar" ? "01123796666" : "01123796666"}</span>
              </a>
            </span>
            <span>
              <a className={""} target="_blank" href="mailto:info@el-saleh.com" rel="noreferrer">
                <IoMail />
                &nbsp;
                <span>info@elsaleh.com</span>
              </a>
            </span>
          </div>

        </div>
      </div>

      <div className={` ${styles.header_wrapper}`} dir="">

        <div className={styles.logoWrapper}>
          <Link href="/">
            <a className={styles.tab}>
              <img className={styles.logoImg} src="/assets/logo2.png" alt="el-saleh" />
            </a>
          </Link>
          <IoMenu className="hiddenInDesktop" onClick={() => { sidemenuHandler("menu") }} />
        </div>

        <div className={styles.navLinks + " hiddenInMobile"}>

          <Link href="/aboutus">
            <a className={styles.tab} id="">{router.locale === "ar" ? "من نحن" : "About Us"}</a>
          </Link>

          <span tabIndex="0" id="products" className={`${styles.dropDownTap}`}>
            <span >{router.locale === "ar" ? "المنتجات" : "Products"}</span>
            <div className={styles.dropDownMenu} style={{ right: "10%" }}>
              <ul dir="auto">
                {categoriesList.map((category) => {
                  return (
                    <li key={category._id} className={styles.tab}><Link href={`/category/${category._id}`}>{category.categoryName}</Link></li>
                  )
                })}
              </ul>
            </div>
          </span>

          <Link href="/">
            <a className={styles.tab} id="">{router.locale === "ar" ? "الرئيسية" : "Home"}</a>
          </Link>

        </div>

        {/* normal tap form in desktop screen only */}
        <form
          onSubmit={(e) => { e.preventDefault() }}
          className={styles.searchBox + " hiddenInMobile"}
        >
          <input
            type="search"
            placeholder={"بتدور على ايه؟"}
            value={searchQuery}
            onChange={searchTermHandler}
            onFocus={searchInputFoucusHandler}
            onBlur={searchInputBlurHandler}
          />
          <PrimaryButton><FaSearch /></PrimaryButton>
          {showResultsBox && <>
            <div className={styles.searchResultsBoxWrapper}>
              <div className={styles.searchResultsBox}>
                {searchResults ?
                  <>
                    {searchResults.map((resultProduct) => {
                      return (
                        <SearchProductListItem key={resultProduct._id} resultProduct={resultProduct} />
                      )
                    })}
                  </>
                  :
                  <p>{"لا يوجد نتائج"}</p>
                }
              </div>
            </div>
          </>
          }
        </form>


        <div className={styles.navLinks}>
          {gstate.user ?
            <span tabIndex="0" id="" className={`${styles.dropDownTap}`}>
              <a className={styles.tab}>
                {/* <img className={styles.userAvatar} src={"/assets/cart.png"} /> */}
                <FaShoppingCart onClick={() => { sidemenuHandler("cart") }} />
                &nbsp;
                <span title={gstate.user.name} dir="auto">{parseUserName(gstate.user.name)}</span>
              </a>
              <div className={styles.dropDownMenu + " hiddenInMobile"} style={{ left: "10%" }}>
                <ul dir="auto">
                  <li className={styles.tab}><Link href="/cart">{"عربة التسوق"}</Link></li>
                  <li className={styles.tab}><Link href="/orders">{"طلبات الشراء"}</Link></li>
                  <li className={styles.tab} onClick={signOut}>{"خروج"}</li>
                </ul>
              </div>
            </span>
            :
            <span onClick={onSignIn} tabIndex="0" id="" className={`${styles.dropDownTap}`}>
              <a className={styles.tab}>
                <span className="hiddenInMobile">تسجيل دخول</span>
                &nbsp;
                {/* <img className={styles.userAvatar} src={"/assets/userAvatar.png"} /> */}
                <FaUserCircle onClick={() => { console.log("user Icon clicked") }} />
              </a>
            </span>
          }

        </div>

      </div>

      {/* lower tap form in mobile screen only */}
      <form
        onSubmit={(e) => { e.preventDefault() }}
        className={styles.searchBox + " hiddenInDesktop"} style={{
          margin: "0rem 1rem 0.5rem"
        }}
      >
        <input
          type="search"
          placeholder={"بتدور على ايه؟"}
          value={searchQuery}
          onChange={searchTermHandler}
          onFocus={searchInputFoucusHandler}
          onBlur={searchInputBlurHandler}
        />
        <PrimaryButton><FaSearch /></PrimaryButton>
        {showResultsBox && <>
          <div className={styles.searchResultsBoxWrapper}>
            <div className={styles.searchResultsBox}>
              {searchResults ?
                <>
                  {searchResults.map((resultProduct) => {
                    return (
                      <SearchProductListItem key={resultProduct._id} resultProduct={resultProduct} />
                    )
                  })}
                </>
                :
                <p>{"لا يوجد نتائج"}</p>
              }
            </div>
          </div>
        </>
        }
      </form>

      {/* side menu in mobile screen only */}
      <div
        className={styles.sideMenu_container + " hiddenInDesktop"}
        onClick={() => { setShowSidemenu(false) }}
        style={{
          display: showSidemenu ? "block" : "none"
        }}
      >
        <div className={styles.sidemenu} onClick={(e) => { e.stopPropagation() }}>

          <div className={styles.sidemenu_header}>
            <RiCloseLine onClick={() => { sidemenuHandler("close", false) }} />
            <img className={styles.sidemenu_logo} src="/assets/logo2.png" alt="el-saleh" />
          </div>

          <div className={styles.sidemenu_section}>
            <Link href="/">
              <a id="">{router.locale === "ar" ? "الرئيسية" : "Home"}</a>
            </Link>
            <Link href="/aboutus">
              <a id="">{router.locale === "ar" ? "من نحن" : "About Us"}</a>
            </Link>
            <Link href="/cart">
              <a id="">{router.locale === "ar" ? "عربة التسوق" : "Cart"}</a>
            </Link>
            <Link href="/orders">
              <a id="">{router.locale === "ar" ? "طلبات الشراء" : "Orders"}</a>
            </Link>
            {gstate.user && <a onClick={() => { signOut(); sidemenuHandler("signOut", false) }}>تسجيل الخروج</a>}

          </div>

          <div className={styles.sidemenu_section}>
            <h3>منتجاتنا</h3>
            {categoriesList.map((category) => {
              return (
                <Link key={category._id} href={`/category/${category._id}`}>
                  <a onClick={() => { sidemenuHandler("category", false) }}>{category.categoryName}</a>
                </Link>
              )
            })}
          </div>
          <div className={styles.sidemenu_section}>
            <h4>{"تواصل معنا"}</h4>
            <a className={styles.contactLink} target="_blank" href="tel:+201123796666" rel="noreferrer">
              <FaPhoneAlt />
              &nbsp;
              <span>{router.locale === "ar" ? "01123796666" : "01123796666"}</span>
            </a>
            <a className={styles.whatsapp} target="_blank" href="https://api.whatsapp.com/send?phone=201099999999" rel="noreferrer">
              <RiWhatsappFill />
              &nbsp;
              <span>{router.locale === "ar" ? "WhatsApp" : "WhatsApp"}</span>
            </a>
            <a className={styles.contactLink} target="_blank" href="https://www.facebook.com" rel="noreferrer">
              <FaFacebookSquare />
              &nbsp;
              <span>{"Facebook"}</span>
            </a>
            <a className={styles.contactLink} target="_blank" href="mailto:info@el-saleh.com" rel="noreferrer">
              <IoMail />
              &nbsp;
              <span>info@elsaleh.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;