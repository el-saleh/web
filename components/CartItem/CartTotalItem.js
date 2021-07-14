import { useRouter } from 'next/router';
import PrimaryButton from '../Button/PrimaryButton';
import { toast } from "react-toastify"
import styles from "./CartTotalItem.module.scss";
import requester from '../../utilities/requester';
import FormatPrice from '../../utilities/FormatPrice';


export default function CartTotalItem({ totalPrice, orderItem, orderStatus, fetchUserCart }) {
    const router = useRouter();
    const placeOrder = () => {
        let userData = JSON.parse(window.localStorage.getItem("userData"));
        if (userData?.phoneNumber) {
            requester.post(`/orders/placeOrder?userId=${userData._id}`, null, {
                headers: {
                    'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
                }
            }).then((res) => {
                toast("تم نسجيل طلب الشراء بنجاح");
                router.push("/orders");
                fetchUserCart()
            }).catch(() => {
                toast("خطأ : فشل تسجيل طلب الشراء ")
            })
        }
        else{
            toast("يجب إضافة رقم موبايل الى حسابك أولا");
            router.push("/user");
        }
    }

    const statuses = {
        1: "تم تسجيل طلب الشراء وسيتم التواصل معك",
        2: "تم شحن الطلب",
        3: "تم التسليم",

    }
    return (
        <div className={styles.totalBox}>
            <div>
                <h4>{"المجموع"}</h4>
                <p className={styles.price}>{FormatPrice(totalPrice)} <small>{"جنيه"}</small></p>
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
