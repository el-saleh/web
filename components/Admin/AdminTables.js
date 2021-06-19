import React, { useState } from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import CategoriesTable from "./tables/CategoriesTable";
import ProductsTable from "./tables/ProductsTable";
import UsersTable from './tables/UsersTable';
import OrdersTable from "./tables/OrdersTable";
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
            case 'Dashboard Home':
                return <p>Choose Table</p>
                break;
            default:
                return null
        }
    }

    const tableSelector = (e) => {
        setCurrentTable(e.target.id)
    }

    return (
        <div className={`${styles.adminTables}`}>
            <div className={`container`}>
                <div className={styles.tableButtons}>
                    <PrimaryButton id="Dashboard Home" onClick={tableSelector} >Dashborad Home</PrimaryButton>
                    <PrimaryButton id="UsersTable" onClick={tableSelector} >Users Table</PrimaryButton>
                    <PrimaryButton id="CategoriesTable" onClick={tableSelector} >Categories Table</PrimaryButton>
                    <PrimaryButton id="ProductsTable" onClick={tableSelector} >Products Table</PrimaryButton>
                    <PrimaryButton id="ordersTable" onClick={tableSelector} >Orders Table</PrimaryButton>
                </div>
                <div className={styles.tableWrapper}>
                    {tableRenderer()}
                </div>
            </div>
        </div>
    );
};

export default AdminTables;