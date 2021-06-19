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
            location: 'after'
        });
    }

    const fetchRecords = () => {
        requester.get("/orders/getAllOrders").then((res) => {
            setDisplayLoadingOverlay(false);
            console.table("All orders", res.data.model);
            setRecords(res.data.model);

        }).catch(errorHandler)
    }

    const errorHandler = (e, str = "Error Occurred") => {
        setDisplayLoadingOverlay(false);
        toast.error(str);
        console.log(e)
    }

    const onRowRemoved = (e) => {
        console.log(e);
        setDisplayLoadingOverlay(true);
        requester.delete(`/orders/deleteOrder?orderId=${e.data._id}`).then((res) => {
            fetchRecords();
            setDisplayLoadingOverlay(false);
            toast.success('تم حذف طلب الشراء بنجاح')
        }).catch((e) => {
            fetchRecords();
            errorHandler(e);
        })
    }

 
    const onRowUpdated = (e) => {
        console.log('edit order', e);
        setDisplayLoadingOverlay(true);

        requester.patch("/orders/updateOrder", {
            orderId :  e.data._id,
            orderStatus : e.data.orderStatus
        }).then((res)=>{
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
        return(
            <>
            {e.data.products.map((item)=>{
                return(
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
            Orders Table
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
                <GroupPanel visible={true} />
                <SearchPanel visible={true} all />
                <Grouping autoExpandAll={true} />
                <Paging defaultPageSize={25} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={[10, 25, 50]}
                    showInfo={true}
                    showNavigationButtons={true}
                />

                <Editing mode="popup" allowUpdating={true} allowDeleting={true} useIcons={true}>
                    <Form>
                        <Item dataField="orderStatus" />
                    </Form>
                </Editing>

                <Column dataField="user.name" alignment={"center"} />
                <Column dataField="user.phoneNumber" alignment={"center"} />
                <Column dataField="createdAt" alignment={"center"} dataType='datetime' />
                <Column dataField="total" alignment={"center"} />
                <Column dataField="orderStatus" alignment={"center"}>
                    <Lookup dataSource={orderStatuses} valueExpr="id" displayExpr="name" />
                </Column>
                <MasterDetail enabled={true} render={renderMasterDetail} />

                <Export enabled={true} />

            </DataGrid>
        </div>
    );
};

export default OrdersTable;
