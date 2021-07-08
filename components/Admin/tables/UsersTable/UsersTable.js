import React, { useEffect, useState, useContext, useCallback } from 'react';
import { DisplayLoadingOverlayHandler } from "../../../../utilities/Contexts";
import { toast } from 'react-toastify';
import requester from "../../../../utilities/requester";
import DataGrid, {
    Column,
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
                icon: 'refresh',
                text: "تحديث",
                onClick: () => {
                    setDisplayLoadingOverlay(true);
                    fetchRecords();
                }
            },
            location: 'before'
        });
    }


    const fetchRecords = useCallback(() => {
        requester.get("/auth/allUsers", {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then((res) => {
            setDisplayLoadingOverlay(false);
            console.table("allCategories", res.data.model);
            setNewRecords(res.data.model);

        }).catch(errorHandler)
    }, [newrRecords])




    const onRowRemoved = (e) => {
        console.log("delete category ", e);
        setDisplayLoadingOverlay(true);
        requester.delete(`/auth/deleteUser?userId=${e.data._id}`, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then(() => {
            setDisplayLoadingOverlay(false);
            toast("تم حدف حساب المستخدم بنجاح")
            fetchRecords();
        }).catch(errorHandler)
    }



    const errorHandler = (e) => {
        setDisplayLoadingOverlay(false);
        toast("خطأ : لم تتم العملية بنجاح");
        console.log(e)
    }

    return (
        <div>
            <p>جدول المستخدمين</p>
            <DataGrid
                rtlEnabled
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
                />

                <Column dataField="role" caption={"نوع الحساب"} alignment={"center"} />
                <Column dataField="name" caption={"اسم المستخدم"} alignment={"center"} />
                <Column dataField="phoneNumber" caption="رقم الموبايل" alignment={"center"} />
                <Column dataField="createdAt" caption="تاريخ التسجيل" dataType="datetime" alignment={"center"} />

                <Export enabled={true} texts={{ exportAll: 'تنزيل الجدول فى ملف excel' }} />

            </DataGrid>
        </div>
    );
};

export default UsersTable;