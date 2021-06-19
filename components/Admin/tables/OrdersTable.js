import React, { useEffect, useState, useContext } from 'react';
import { DisplayLoadingOverlayHandler } from "../../../utilities/Contexts";
import { toast } from 'react-toastify';
import styles from "./dashboard.module.scss";
import requester from "../../../utilities/requester";
import CartItem from "../../CartItem/index";
import DataGrid, {
    Column,
    Editing,
    Lookup,
    Form,
    Pager,
    Paging,
    Grouping,
    GroupPanel,
    SearchPanel,
    HeaderFilter,
    MasterDetail,
    Export,
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import 'devextreme-react/text-area';



const OrdersTable = () => {

    const [records, setRecords] = useState([]);
    const [orderStatuses,] = useState([
        { name: "طلب مسجل ولم يتم التواصل ", id: 1 },
        { name: "طلب مسجل و تم التواصل", id: 2 },
    ])

    useEffect(() => {
        setDisplayLoadingOverlay(true);
        fetchRecords();
    }, [])

    const setDisplayLoadingOverlay = useContext(DisplayLoadingOverlayHandler);

    const onToolbarPreparing = (e) => {
        let toolbarItems = e.toolbarOptions.items;
        // Adds a new item
        toolbarItems.unshift({
            widget: 'dxButton',
            options: {
                icon: 'refresh',
                text: 'refresh',
                onClick: () => {
                    setDisplayLoadingOverlay(true);
                    fetchRecords();
                }
            },
            location: 'before'
        });
    }

    const fetchRecords = () => {
        requester.get("/orders/getAllOrders").then((res) => {
            setDisplayLoadingOverlay(false);
            console.table("All orders", res.data.model);
            setRecords(res.data.model);

        }).catch(errorHandler)
    }

    const errorHandler = (e, str = "خطأ : لم تتم العملية بنجاح") => {
        setDisplayLoadingOverlay(false);
        toast(str);
        console.log(e)
    }

    const onRowRemoved = (e) => {
        console.log(e);
        setDisplayLoadingOverlay(true);
        requester.delete(`/orders/deleteOrder?orderId=${e.data._id}`).then((res) => {
            fetchRecords();
            setDisplayLoadingOverlay(false);
            toast('تم حذف طلب الشراء بنجاح')
        }).catch((e) => {
            fetchRecords();
            errorHandler(e);
        })
    }


    const onRowUpdated = (e) => {
        console.log('edit order', e);
        setDisplayLoadingOverlay(true);

        requester.patch("/orders/updateOrder", {
            orderId: e.data._id,
            orderStatus: e.data.orderStatus
        }).then((res) => {
            setDisplayLoadingOverlay(false);
            fetchRecords();
            toast("تم تحديث طلب الشراء بنجاح");
        }).catch((e) => {
            fetchRecords();
            errorHandler(e);
        })

    }


    const renderMasterDetail = (e) => {
        console.log(e);
        return (
            <>
                {e.data.products.map((item) => {
                    return (
                        <div key={item.product._id}>
                            <CartItem data={item} orderItem />
                        </div>
                    )
                })}
            </>
        )
    }


    return (
        <div>
            <p>جدول طلبات الشراء</p>
            <DataGrid
                rtlEnabled
                dataSource={records}
                allowColumnReordering={true}
                allowColumnResizing={true}
                showBorders={true}
                showRowLines={true}
                cellHintEnabled={true}
                wordWrapEnabled={true}
                rowAlternationEnabled={true}
                onToolbarPreparing={onToolbarPreparing}
                onRowRemoved={onRowRemoved}
                onRowUpdated={onRowUpdated}
            >
                <HeaderFilter visible={true} />
                <GroupPanel visible={true} emptyPanelText='اسحب عنوان لهنا' />
                <SearchPanel visible={true} all placeholder='بحث...' width="100%" />
                <Paging defaultPageSize={20} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={[5, 10, 20]}
                    showInfo={true}
                    showNavigationButtons={true}
                />
                <Grouping autoExpandAll={true} />
                <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowDeleting={true}
                    useIcons={true}
                    texts={{
                        confirmDeleteMessage: 'هل انت متاكد انك تريد المسح ؟',
                        saveRowChanges: "حفظ",
                        cancelRowChanges: "إلغاء",
                        deleteRow: "مسح",
                        editRow: "تعديل",
                        addRow: 'اضف جديد',

                    }}
                >
                    <Form>
                        <Item dataField="orderStatus" />
                    </Form>
                </Editing>

                <Column dataField="user.name" caption="اسم المستخدم" alignment={"center"} />
                <Column dataField="user.phoneNumber" caption="رقم الموبايل" alignment={"center"} />
                <Column dataField="createdAt" caption="تاريخ ووقت الطلب" alignment={"center"} dataType='datetime' />
                <Column dataField="total" caption="المجموع" alignment={"center"} />
                <Column dataField="orderStatus" caption="حالة الطلب" alignment={"center"}>
                    <Lookup dataSource={orderStatuses} valueExpr="id" displayExpr="name" />
                </Column>
                <MasterDetail enabled={true} render={renderMasterDetail} />

                <Export enabled={true} texts={{ exportAll: 'تنزيل الجدول فى ملف excel' }} />

            </DataGrid>
        </div>
    );
};

export default OrdersTable;
