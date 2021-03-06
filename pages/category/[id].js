import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import requester from "../../utilities/requester";
import Layout from "../../layout/Layout";
import ProductList from '../../components/ProductList/ProductList';
import PrimaryButton from '../../components/Button/PrimaryButton';
function category(props) {
  const [ssrProducts, setSsrProducts] = useState(props.products);
  const [newProducts, setNewProducts] = useState([]);
  const [lastPage, setLastPage] = useState(props.products.length < 20 ? 0 : 1);
  const [nextPage, setNextPage] = useState(props.products.length < 20 ? 1 : 2);
  const [showLoader, setShowLoader] = useState(false);
  const buttonRef = React.createRef();

  const loadMore = useCallback(() => {
    // make sure not to fetch next page in case of last page
    // and also not to fetch the same page multiple times
    setShowLoader(true)
    if (nextPage && nextPage !== lastPage) {
      setLastPage(nextPage);
      requester.get(`/products/productByCategoryId?CategoryId=${props.category._id}&usePaging=true&pageNumber=${nextPage}&pageSize=20`, {
        headers: {
          'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
        }
      }).then((res) => {

        setShowLoader(false)
        setNewProducts([...newProducts, ...res.data.model.products]);

        if (nextPage == 1) {
          setSsrProducts([]);
        }

        if (res?.data?.model?.next?.page) {
          setNextPage(res.data.model.next.page)
        }

      })

    }
    else {
      setTimeout(() => {
        setShowLoader(false)
      }, 750)
    }

  }, [lastPage, nextPage, props.category._id])

  // to be fired ecah time the route change.
  useEffect(() => {
    setSsrProducts(props.products)
    setNewProducts([]);
    setLastPage(props.products.length < 20 ? 0 : 1)
    setNextPage(props.products.length < 20 ? 1 : 2)
  }, [props])

  return (
    <>
      <Head>
        <title>elsaleh | {props.category.categoryName}</title>
        <meta name="description" content={props.category.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.elsaleh.net/category/${props.category._id}`} />
        <meta property="og:description" content={props.category.description} />
        <meta property="og:image" content={`${props.category.categoryImage?.imageUrl}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.elsaleh.net/category/${props.category._id}`} />
        <meta property="twitter:description" content={props.category.description} />
        <meta property="twitter:image" content={`${props.category.categoryImage?.imageUrl}`} />
      </Head>
      <Layout>
        <div className={"container"} dir="rtl">

          <h1>{props.category.categoryName}</h1>
          <img src={props.category.categoryImage.imageUrl} alt={props.category.categoryName} style={{ width: "100%" }} />

          <br /> <br />

          <ProductList products={[...ssrProducts, ...newProducts]} />

          {showLoader &&
            <div className={"loader"}></div>
          }

          <br />

          <PrimaryButton
            ref={buttonRef}
            onClick={loadMore}
            style={{ display: "", width: "100%" }}
          >
            {"?????? ????????????"}
          </PrimaryButton>

          <br /><br />

        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  return await requester.get(`/products/productByCategoryId?CategoryId=${context.params.id}&usePaging=true&pageNumber=1&pageSize=20`).then((res) => {
    return {
      props: { ...res.data.model }, // will be passed to the page component as props
    }
  }).catch(() => {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  });
}

export default category;
