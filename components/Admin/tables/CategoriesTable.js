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
    RequiredRule,
    Pager,
    Paging,
    Grouping,
    GroupPanel,
    SearchPanel,
    HeaderFilter,
    Export
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';


const CategoriesTable = () => {

    useEffect(() => {
        setDisplayLoadingOverlay(true);
        fetchCategories();
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
                    fetchCategories();
                }
            },
            location: 'after'
        });
    }


    const fetchCategories = useCallback(() => {
        requester.get("/categories/allCategories").then((res) => {
            setDisplayLoadingOverlay(false);
            console.table("allCategories", res.data.model);
            setNewRecords(res.data.model);

        }).catch(errorHandler)
    }, [newrRecords])

    const onRowInserted = (e) => {
        setDisplayLoadingOverlay(true)
        console.log("add category", e);
        const categoryFormData = new FormData();

        Object.keys(e.data).forEach(key => {
            categoryFormData.append(key, e.data[key])
        });

        requester.post('/categories/addCategory', categoryFormData).then((res) => {
            setDisplayLoadingOverlay(false);
            toast('category Added successfully');
            fetchCategories();
        }).catch((e) => {
            fetchCategories();
            errorHandler(e);
        })
    }

    const onRowUpdated = (e) => {
        console.log("edit category", e);
        setDisplayLoadingOverlay(true);
        const categoryFormData = new FormData();

        // to avoid send  the "category image" object if it's not a file(if it's not updated) 


        Object.keys(e.data).forEach(key => {
            if (key === "_id") {
                categoryFormData.append("id", e.data[key])
            } else if (key === "categoryImage") {
                if (e.data["categoryImage"] instanceof File) {
                    categoryFormData.append("categoryImage", e.data["categoryImage"])
                }
            } else {
                categoryFormData.append(key, e.data[key])
            }
        });

        requester.patch(`/categories/updateCategory`, categoryFormData).then(() => {
            fetchCategories();
            toast("category Updated Sucessfully")
        }).catch(errorHandler)
    }

    const onRowRemoved = (e) => {
        console.log("delete category ", e);
        setDisplayLoadingOverlay(true);
        requester.delete(`/categories/deleteCategory/?id=${e.data._id}`).then(() => {
            setDisplayLoadingOverlay(false);
            toast("category Deleted Sucessfully")
            fetchCategories();
        }).catch(errorHandler)
    }

    const categoryImageCellRenderer = useCallback((rawData) => {
        return (
            <div className={styles.cellImageContainer}>
                {/* adding any random query url parameters to the image url to aviod url caching
                 , because the backend updatedس the image  on the same image url*/}
                <img src={rawData.data.categoryImage?.imageUrl + "?refresh=" + new Date()} alt={rawData.data.categoryName} />
            </div>
        )
    }, [newrRecords])

    const errorHandler = (e) => {
        setDisplayLoadingOverlay(false);
        toast.error("Error Occurred");
        console.log(e)
    }

    return (
        <div>
            Categories Table
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
                onRowInserted={onRowInserted}
                onRowUpdated={onRowUpdated}
                onRowRemoved={onRowRemoved}
            >
                <HeaderFilter visible={true} />
                <GroupPanel visible={true} />
                <SearchPanel visible={true} all />
                <Grouping autoExpandAll={true} />


                <Editing mode="popup" allowUpdating={true} allowDeleting={true} allowAdding={true} />

                <Column dataField="categoryName" alignment={"center"} ><RequiredRule /></Column>
                <Column dataField="description" alignment={"center"} ><RequiredRule /></Column>
                <Column
                    dataField="categoryImage"
                    alignment={"center"}
                    dataType="object"
                    editCellComponent={ProductImageEditor}
                    cellRender={categoryImageCellRenderer}
                >
                    <RequiredRule />
                </Column>


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

export default CategoriesTable;