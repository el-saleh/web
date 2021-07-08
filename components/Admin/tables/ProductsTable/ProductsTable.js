import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { DisplayLoadingOverlayHandler } from "../../../../utilities/Contexts";
import { toast } from 'react-toastify';
import FormatPrice from '../../../../utilities/FormatPrice';
import requester from "../../../../utilities/requester";
import BulletListEditor from "./BulletListEditor";
import ProductImageEditor from "./ProductImageEditor";
import ProductGalleryEditor from "./ProductGalleryEditor";
import DataGrid, {
    Column,
    Editing,
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
        requester.get("/products/allProducts", {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then((res) => {
            setDisplayLoadingOverlay(false);
            setRecords(res.data.model);
        }).catch(errorHandler)
    }

    const fetchCategories = () => {
        requester.get("/categories/allCategories", {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then((res) => {
            setCategories(res.data.model);
        }).catch(errorHandler)
    }

    const errorHandler = (e, str = "خطأ : لم تتم العملية بنجاح") => {
        setDisplayLoadingOverlay(false);
        toast(str);
        console.log(e)
    }

    const onRowRemoved = (e) => {
        setDisplayLoadingOverlay(true);
        console.log(e);
        let { _id } = e.data;
        requester.delete(`/products/deleteProduct?id=${_id}`, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then((res) => {
            setDisplayLoadingOverlay(false);
            toast('تم حدف المنتج بنجاح')
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
        requester.post('/products/addProduct', productFormData, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then((res) => {

            if (e.data["gallery"]) {
                const galleryFormData = new FormData();
                galleryFormData.append("id", res.data.model._id);

                Object.keys(e.data["gallery"]).forEach(key => {
                    galleryFormData.append("images", e.data["gallery"][key])
                });

                requester.post('/products/addImageProductGallery', galleryFormData, {
                    headers: {
                        'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
                    }
                }).then(() => {
                    setDisplayLoadingOverlay(false);
                    toast('تم إضافة المنتج وصور المنتج بنجاح');
                    fetchProducts();
                }).catch((e) => {
                    errorHandler(e, "خطأ : فشل إضافة صور المنتج");
                    fetchProducts();
                })
            }
            else {
                setDisplayLoadingOverlay(false);
                toast('تم إضافة المنتج بنجاح');
                fetchProducts();
            }

        }).catch((e) => {
            fetchProducts();
            errorHandler(e);
        })
    }

    const onRowUpdated = (e) => {

        setDisplayLoadingOverlay(true);

        console.log('edit product', e.data.productImage?.name);
        const productFormData = new FormData();

        Object.keys(e.data).forEach(key => {
            if (key !== "gallery" && key !== "category" && key !== "productImage") {
                if (Array.isArray(e.data[key])) {
                    e.data[key].forEach(item => {
                        productFormData.append(key, item)
                    })
                }
                else {
                    productFormData.append(key, e.data[key]);
                }
            }
        });

        e.data.productImage?.name && productFormData.append("productImage", e.data.productImage);
        productFormData.append('category', (e.data.category?.categoryName?._id || e.data.category?._id))
        productFormData.append("id", e.data["_id"]);

        requester.patch('/products/updateProduct', productFormData, {
            headers: {
                'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
            }
        }).then(() => {

            if (e.data["gallery"]) {
                console.log('edittttttt', e.data);
                const galleryFormData = new FormData();
                galleryFormData.append("id", e.data._id);

                Object.keys(e.data["gallery"]).forEach(key => {
                    galleryFormData.append("images", e.data["gallery"][key])
                });

                requester.post('/products/addImageProductGallery', {
                    headers: {
                        'Authorization': `bearer ${JSON.parse(window.localStorage.getItem("userData"))?.token}`
                    }
                }, galleryFormData).then(() => {
                    setDisplayLoadingOverlay(false);
                    toast('تم تحديث ببانات وصور المنتج بنجاح');
                    fetchProducts()
                }).catch((e) => {
                    errorHandler(e, "خطأ : فشل تحديث صور المنتج");
                    fetchProducts();
                })
            }
            else {
                setDisplayLoadingOverlay(false);
                toast('تم تحديث بيانات وصور المنتج بنجاح');
                fetchProducts();
            }

        }).catch((e) => {
            fetchProducts();
            errorHandler(e);
        })
    }

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
                    fetchCategories();
                    fetchProducts();
                }
            },
            location: 'before'
        });
    }

    return (
        <div>
            <p>جدول المنتجات</p>
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
                onRowInserted={onRowInserted}
                onRowUpdated={onRowUpdated}
            >
                <HeaderFilter visible={true} />
                <GroupPanel visible={true} emptyPanelText='اسحب عنوان لهنا' />
                <SearchPanel visible={true} all placeholder='بحث...' width="100%" />
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
                        confirmDeleteMessage: 'هل انت متاكد انك تريد مسح هذا المنتج',
                        saveRowChanges: "حفظ",
                        cancelRowChanges: "إلغاء",
                        deleteRow: "مسح",
                        editRow: "تعديل",
                        addRow: 'اضف جديد',

                    }}
                >

                    <Form>
                        <Item colSpan="2" dataField="title" alignment={"center"} ><RequiredRule /></Item>
                        <Item dataField="description" editorType="dxTextArea" colSpan={2} editorOptions={{ height: 200 }} ></Item>
                        <Item colSpan="2" dataField="price" alignment={"center"} ><RequiredRule /></Item>
                        <Item colSpan="2" dataField="sale" ></Item>
                        <Item colSpan="2" dataField="category.categoryName" alignment={"center"} ><RequiredRule /></Item>
                        <Item colSpan="2" dataField="videoUrl" ></Item>
                        <Item colSpan="2" dataField="bulletList" ></Item>
                        <Item colSpan="2" dataField="productImage" ><RequiredRule /></Item>
                        <Item colSpan="2" dataField="gallery" ></Item>
                    </Form>
                </Editing>

                <Column
                    dataField="title"
                    alignment={"center"}
                    caption='اسم المنتج'
                    cellRender={e => <Link href={`/product/${e.data._id}`} ><a>{e.data.title}</a></Link>}
                />
                <Column dataField="price" alignment={"center"} caption='سعر المنتج' cellRender={e => <>{FormatPrice(e.data.price)} جنيه</>} />
                <Column dataField="sale" alignment={"center"} caption='نسبة الخصم' cellRender={e => <>{e.data.sale ? `${e.data.sale}%` : null}</>} />

                <Column dataField="createdAt" dataType='datetime' alignment={"center"} caption='تاريخ إضافة المنتج' />
                <Column dataField="category.categoryName" alignment={"center"} caption='فئة المنتج' allowFiltering={false}>
                    <Lookup dataSource={categories} displayExpr="categoryName" />
                </Column>

                <Column dataField="videoUrl" alignment={"center"} visible={false} caption='فيديو للمنتج' />
                <Column dataField="description" alignment={"center"} visible={true} caption='وصف المنتج' />
                <Column dataField="bulletList" alignment={"center"} visible={false} editCellComponent={BulletListEditor} caption='مميزات المنتج' />
                <Column dataField="productImage" alignment={"center"} visible={false} editCellComponent={ProductImageEditor} caption='صورة المنتج' />
                <Column dataField="gallery" alignment={"center"} visible={false} editCellComponent={ProductGalleryEditor} caption='صور للمنتج' />

                <Export enabled={true} texts={{ exportAll: 'تنزيل ملف excel  للمنتجات' }} />

            </DataGrid>
        </div >
    );
};

export default ProductsTable;
