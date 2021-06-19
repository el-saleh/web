import { useRouter } from 'next/router';
import PrimaryButton from '../Button/PrimaryButton';
import { ImCancelCircle } from "react-icons/im";
import styles from "./OrderInfo.module.scss";

export default function OrderInfo({ order, index, cancelOrderCallback }) {
    
    return (
        <div className={styles.orderInfo}>
            <h5>
                {`طلب رقم ${index}  - وقت وتاريخ الطلب : `}
                <span> {new Date(order.createdAt).toLocaleDateString()} </span>
                -
                <span> {new Date(order.createdAt).toLocaleTimeString()} </span>
            </h5>
            {order.orderStatus == 1 && <>
                <PrimaryButton className={styles.cancelButton} id={order._id} onClick={cancelOrderCallback} ><ImCancelCircle />&nbsp;{"إلغاء الطلب"}</PrimaryButton>
            </>}
        </div>
    )
}
