import React, { useEffect, useState, useContext } from 'react';
import { DisplayLoadingOverlayHandler } from "../../../utilities/Contexts";
import { toast } from 'react-toastify';
import styles from "./dashboard.module.scss";
import requester from "../../../utilities/requester";
import BulletListEditor from "./BulletListEditor";
import ProductImageEditor from "./ProductImageEditor";
import ProductGalleryEditor from "./ProductGalleryEditor";
import DataGrid, {
    Column,
    Editing,
    Popup,
    Position,
    Form,
    Pager,
    Paging,
    Grouping,
    GroupPanel,
    SearchPanel,
    Lookup,
    HeaderFilter,
    RequiredRule,
    Export,
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import 'devextreme-react/text-area';



const ProductsTable = () => {

    useEffect(() => {
        setDisplayLoadingOverlay(true);
        fetchCategories();
        fetchProducts();
    }, [])

    const [records, setRecords] = useState([]);
    const [categories, setCategories] = useState([]);
    const setDisplayLoadingOverlay = useContext(DisplayLoadingOverlayHandler);

    const fetchProducts = () => {
        requester.get("/products/allProducts").then((res) => {
            setDisplayLoadingOverlay(false);
            setRecords(res.data.model);
        }).catch(errorHandler)
    }

    const fetchCategories = () => {
        requester.get("/categories/allCategories").then((res) => {
            setCategories(res.data.model);
        }).catch(errorHandler)
    }

    const errorHandler = (e, str = "Error Occurred") => {
        setDisplayLoadingOverlay(false);
        toast.error(str);
        console.log(e)
    }

    const onRowRemoved = (e) => {
        setDisplayLoadingOverlay(true);
        console.log(e);
        let { _id } = e.data;
        requester.delete(`/products/deleteProduct?id=${_id}`).then((res) => {
            setDisplayLoadingOverlay(false);
            toast.success('Deleted successfully')
        }).catch((e) => {
            fetchProducts();
            errorHandler(e);
        })
    }

    const onRowInserted = (e) => {

        setDisplayLoadingOverlay(true);

        console.log('add product ', e.data);
        const productFormData = new FormData();

        Object.keys(e.data).forEach(key => {
            if (key !== "gallery" && key !== "category") {
                if (Array.isArray(e.data[key])) {
                    e.data[key].forEach(item => {
                        productFormData.append(key, item)
                    })
                }
                else {
                    productFormData.append(key, e.data[key])
                }

            }
        });
        productFormData.append('category', e.data.category?.categoryName?._id)
        requester.post('/products/addProduct', productFormData).then((res) => {

            if (e.data["gallery"]) {
                const galleryFormData = new FormData();
                galleryFormData.append("id", res.data.model._id);

                Object.keys(e.data["gallery"]).forEach(key => {
                    galleryFormData.append("images", e.data["gallery"][key])
                });

                requester.post('/products/addImageProductGallery', galleryFormData).then(() => {
                    setDisplayLoadingOverlay(false);
                    toast.success('Added product info & images successfully');
                    fetchProducts();
                }).catch((e) => {
                    errorHandler(e, "Error Occurred in uploading images");
                    fetchProducts();
                })
            }
            else {
                setDisplayLoadingOverlay(false);
                toast.success('Added product info successfully');
                fetchProducts();
            }

        }).catch((e) => {
            fetchProducts();
            errorHandler(e);
        })
    }

    const onRowUpdated = (e) => {

        setDisplayLoadingOverlay(true);

        console.log('edit product', e);
        const productFormData = new FormData();

        Object.keys(e.data).forEach(key => {
            if (key !== "gallery" && key !== "category") {
                if (Array.isArray(e.data[key])) {
                    e.data[key].forEach(item => {
                        productFormData.append(key, item)
                    })
                }
                else {
                    productFormData.append(key, e.data[key])
                }
            }
        });
        productFormData.append('category', (e.data.category?.categoryName?._id || e.data.category?._id))
        productFormData.append("id", e.data["_id"]);
        requester.patch('/products/updateProduct', productFormData).then(() => {

            if (e.data["gallery"]) {
                const galleryFormData = new FormData();
                galleryFormData.append("id", res.data.model._id);

                Object.keys(e.data["gallery"]).forEach(key => {
                    galleryFormData.append("images", e.data["gallery"][key])
                });

                requester.post('/products/addImageProductGallery', galleryFormData).then(() => {
                    setDisplayLoadingOverlay(false);
                    toast.success('updated product info & images successfully');
                    fetchProducts()
                }).catch((e) => {
                    errorHandler(e, "Error Occurred in uploading images");
                    fetchProducts();
                })
            }
            else {
                setDisplayLoadingOverlay(false);
                toast.success('updated product info successfully');
                fetchProducts();
            }

        }).catch((e) => {
            fetchProducts();
            errorHandler(e);
        })
    }

    const renderHeroProductColumn = (rowData) => {

        let clickHandler = () => {
            setDisplayLoadingOverlay(true);
            console.log("add to hero section data ", rowData.data.productId)
            requester.patch(`/products/addHeroSecProduct/${rowData.data.productId}`)
                .then((response) => {
                    setDisplayLoadingOverlay(false);
                    toast.success('Updated successfully');
                    fetchProducts();
                })
                .catch((e) => {
                    setDisplayLoadingOverlay(false);
                    errorHandler(e)
                    fetchProducts();
                })
        }

        return (
            <span className={styles.fakelink} onClick={clickHandler}>{rowData.data.heroSectionItem ? 'Remove' : 'Add'}</span>
        )
    }

    return (
        <div>
            Products Table
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
                onRowRemoved={onRowRemoved}
                onRowInserted={onRowInserted}
                onRowUpdated={onRowUpdated}
            >
                <HeaderFilter visible={true} />
                <GroupPanel visible={true} emptyPanelText='اسحب عنوان لهنا' />
                <SearchPanel visible={true} all placeholder='بحث...' />
                <Grouping autoExpandAll={true} />
                <Paging defaultPageSize={20} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={[5, 10, 20]}
                    showInfo={true}
                    showNavigationButtons={true}
                />

                <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                    useIcons={true}
                    texts={{
                        confirmDeleteMessage: 'هل انت متاكد انك تريد مسح هذا النص؟',
                        saveRowChanges: "حفظ",
                        cancelRowChanges: "إلغاء",
                        deleteRow: "مسح",
                        editRow: "تعديل",
                        addRow: 'اضف جديد',

                    }}
                >
                    <Popup title="Products" showTitle={true} width={700} height={600} maxHeight={'80%'}>
                        <Position my="center" at="center" of={window} />
                    </Popup>
                    <Form>
                        <Item colSpan="2" dataField="title" alignment={"center"} >
                            <RequiredRule />
                        </Item>
                        <Item colSpan="2" dataField="price" alignment={"center"} />
                        <Item colSpan="2" dataField="sale" />
                        <Item colSpan="2" dataField="category.categoryName" alignment={"center"} />
                        <Item colSpan="2" dataField="description" />
                        <Item colSpan="2" dataField="bulletList" />
                        <Item colSpan="2" dataField="productImage" />
                        <Item colSpan="2" dataField="gallery" />
                    </Form>
                </Editing>

                <Column dataField="title" alignment={"center"} caption='اسم المنتج' />
                <Column dataField="price" alignment={"center"} caption='سعر المنتج' />
                <Column dataField="sale" alignment={"center"} caption='نسبة الخصم' />
                <Column dataField="createdAt" dataType='datetime' alignment={"center"} caption='تاريخ المنتج' />
                <Column dataField="category.categoryName" alignment={"center"} caption='تصنيف المنتج' allowFiltering={false}>
                    <Lookup dataSource={categories} displayExpr="categoryName" />
                </Column>

                <Column dataField="description" alignment={"center"} visible={false} caption='وصف المنتج' />
                <Column dataField="bulletList" alignment={"center"} visible={false} editCellComponent={BulletListEditor} caption='مميزات المنتج' />
                <Column dataField="productImage" alignment={"center"} visible={false} editCellComponent={ProductImageEditor} caption='صورة المنتج' />
                <Column dataField="gallery" alignment={"center"} visible={false} editCellComponent={ProductGalleryEditor} caption='صور للمنتج' />

                <Export enabled={true} texts={{ exportAll: 'تنزيل ملف ايكسيل للمنتجات' }} />

            </DataGrid>
        </div>
    );
};

export default ProductsTable;
