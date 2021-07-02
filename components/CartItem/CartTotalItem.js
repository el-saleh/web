import { useRouter } from 'next/router';
import PrimaryButton from '../Button/PrimaryButton';
import styles from "./CartTotalItem.module.scss";
import requester from '../../utilities/requester';
import { toast } from "react-toastify"

export default function CartTotalItem({ totalPrice, orderItem, orderStatus, fetchUserCart }) {
    const router = useRouter();
    const placeOrder = () => {
        let userData = window.localStorage.getItem("userData");
        if (userData) {
            requester.post(`/orders/placeOrder?userId=${JSON.parse(userData)._id}`).then((res) => {
                toast("تم نسجيل طلب الشراء بنجاح");
                router.push("/orders");
                fetchUserCart()
            }).catch(()=>{
                toast("خطأ : فشل تسجيل طلب الشراء ")
            })
        }

    }

    const statuses = {
        1: "طلبك تم تسجيله, سيتم التواصل قريبا",
        2: "تم التواصل, سيتم شحن الطلب قريبا"
    }
    return (
        <div className={styles.totalBox}>
            <div>
                <h4>{"المجموع"}</h4>
                <p className={styles.price}>{totalPrice.toFixed(2)} <small>{"جنيه"}</small></p>
            </div>
            {!orderItem && <div>
                <PrimaryButton onClick={placeOrder}>{"إتمام عملية الشراء"}</PrimaryButton>
            </div>}
            <br />
            {orderItem && <div>
                <h4>{"حاله الطلب"}</h4>
                <p className={styles.price}><small>{statuses[orderStatus]}</small></p>
            </div>}

        </div>
    )
}
