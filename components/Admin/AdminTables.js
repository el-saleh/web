import React, { useState } from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import CategoriesTable from "./tables/CategoriesTable/CategoriesTable";
import ProductsTable from "./tables/ProductsTable/ProductsTable";
import UsersTable from './tables/UsersTable/UsersTable';
import OrdersTable from "./tables/OrdersTable/OrdersTable";
import styles from "./adminTables.module.scss";

const AdminTables = () => {
    const [currentTable, setCurrentTable] = useState('Dashboard Home')

    const tableRenderer = () => {
        switch (currentTable) {
            case 'CategoriesTable':
                return <CategoriesTable />
                break;
            case 'ProductsTable':
                return <ProductsTable />
                break;
            case 'UsersTable':
                return <UsersTable />
                break;
            case 'ordersTable':
                return <OrdersTable />
                break;
            default:
                return <p>قم باختيار الجدول الذى تريد عرضه</p>

        }
    }

    const tableSelector = (e) => {
        setCurrentTable(e.target.id)
    }

    return (
        <div className={`${styles.adminTables}`}>
            <div className={`container`}>
                <div className={styles.tableButtons} dir="auto">
                    <PrimaryButton id="CategoriesTable" onClick={tableSelector} >الفئات</PrimaryButton>
                    <PrimaryButton id="ProductsTable" onClick={tableSelector} >المنتجات</PrimaryButton>
                    <PrimaryButton id="UsersTable" onClick={tableSelector} >المستخدمين</PrimaryButton>
                    <PrimaryButton id="ordersTable" onClick={tableSelector} >طلبات الشراء</PrimaryButton>
                </div>
                <div className={styles.tableWrapper}>
                    {tableRenderer()}
                </div>
            </div>
        </div>
    );
};

export default AdminTables;