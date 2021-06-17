import React, { useEffect, useState, useContext, useCallback } from 'react';
import { DisplayLoadingOverlayHandler } from "../../../utilities/Contexts";
import { toast } from 'react-toastify';
import requester from "../../../utilities/requester";
import ProductImageEditor from './ProductImageEditor';
import styles from "./dashboard.module.scss";
import DataGrid, {
    Column,
    MasterDetail,
    Editing,
    Pager,
    Paging,
    Grouping,
    GroupPanel,
    SearchPanel,
    HeaderFilter,
    Export
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';


const UsersTable = () => {

    useEffect(() => {
        setDisplayLoadingOverlay(true);
        fetchRecords();
    }, [])

    const [newrRecords, setNewRecords] = useState([]);
    const setDisplayLoadingOverlay = useContext(DisplayLoadingOverlayHandler);

    const onToolbarPreparing = (e) => {
        let toolbarItems = e.toolbarOptions.items;
        // Adds a new item
        toolbarItems.unshift({
            widget: 'dxButton',
            options: {
                icon: 'pulldown',
                text: "Refresh",
                onClick: () => {
                    setDisplayLoadingOverlay(true);
                    fetchRecords();
                }
            },
            location: 'after'
        });
    }


    const fetchRecords = useCallback(() => {
        requester.get("/auth/allUsers").then((res) => {
            setDisplayLoadingOverlay(false);
            console.table("allCategories", res.data.model);
            setNewRecords(res.data.model);

        }).catch(errorHandler)
    }, [newrRecords])




    const onRowRemoved = (e) => {
        console.log("delete category ", e);
        setDisplayLoadingOverlay(true);
        requester.delete(`/auth/deleteUser?userId=${e.data._id}`).then(() => {
            setDisplayLoadingOverlay(false);
            toast("User Deleted Sucessfully")
            fetchRecords();
        }).catch(errorHandler)
    }



    const errorHandler = (e) => {
        setDisplayLoadingOverlay(false);
        toast.error("Error Occurred");
        console.log(e)
    }

    return (
        <div>
            Users Table
            <DataGrid
                dataSource={newrRecords}
                allowColumnReordering={true}
                allowColumnResizing={true}
                showBorders={true}
                showRowLines={true}
                cellHintEnabled={true}
                wordWrapEnabled={true}
                rowAlternationEnabled={true}
                onToolbarPreparing={onToolbarPreparing}
                columnHidingEnabled
                onRowRemoved={onRowRemoved}
            >
                <HeaderFilter visible={true} />
                <GroupPanel visible={true} />
                <SearchPanel visible={true} all />
                <Grouping autoExpandAll={true} />


                <Editing mode="popup" allowDeleting={true} />
                <Column dataField="role" alignment={"center"} />
                <Column dataField="name" alignment={"center"} />
                <Column dataField="phoneNumber" alignment={"center"} />
                <Column dataField="createdAt" dataType="datetime" alignment={"center"} />


                <Paging defaultPageSize={10} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={[5, 10, 20]}
                    showInfo={true}
                    showNavigationButtons={true}
                />

                <Export enabled={true} />
            </DataGrid>
        </div>
    );
};

export default UsersTable;