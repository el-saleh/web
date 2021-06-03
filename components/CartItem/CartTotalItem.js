import React from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import styles from "./CartTotalItem.module.scss";

export default function CartTotalItem({ totalPrice, orderItem }) {
    return (
        <div className={styles.totalBox}>
            <div>
                <h4>{"المجموع"}</h4>
                <p className={styles.price}>{totalPrice} <small>{"جنيه"}</small></p>
            </div>
            {!orderItem && <div>
                <PrimaryButton>{"إتمام عملية الشراء"}</PrimaryButton>
            </div>}
            <br />
            {orderItem && <div>
                <h4>{"حاله الطلب"}</h4>
                <p className={styles.price}><small>{"طلبك تم تسجيله, سيتم التواصل قريبا"}</small></p>
            </div>}

        </div>
    )
}
