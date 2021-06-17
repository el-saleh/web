import Head from 'next/head'
import { useRouter } from "next/router"
import Layout from "../../layout/Layout";
import AdminTables from "../../components/Admin/AdminTables";
import { useEffect, useState } from 'react';

const index = () => {
    const router = useRouter();
    const [showTables, setShowTables] = useState(false)
    useEffect(() => {
        if (JSON.parse(window.localStorage.getItem("userData"))?.role === "admin") {
            setShowTables(true);
        }
        else {
            router.push("/404");
        };
    }, [])

    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <Layout >
                <div>
                    {showTables && <AdminTables />}
                </div>
            </Layout>
        </>
    );

};

export default index;