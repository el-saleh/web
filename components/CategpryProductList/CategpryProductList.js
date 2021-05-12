import React, {useState} from 'react'
import ProductList from '../ProductList/ProductList'
import data from "../../utilities/dummy";


export default function CategpryProductList({limit}) {
    const [category, setCategory] = useState({
        name: "إسم الفئة",
        description: "وصف الفئةوصف الفئةوصف الفئةوصف الفئةوصف الفئةوصف الفئة",
        id: 100,
        products: data.products,
        imageUrl: "https://res.cloudinary.com/yuppiechef/image/upload/f_auto,w_960/v1/pagebuilder/27/cookware-header-banner-1576827754"
    });
    return (
        <div className={"container"} dir="rtl">
            <ProductList list={limit ? category.products.slice(0,limit) : category.products} />
        </div>
    )
}
