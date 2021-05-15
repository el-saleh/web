import React, {useState} from 'react'
import ProductList from '../ProductList/ProductList'
import data from "../../utilities/dummy";


export default function CategpryProductList({limit}) {
  
    return (
        <div className={"container"} dir="rtl">
            <ProductList limit={limit} />
        </div>
    )
}
