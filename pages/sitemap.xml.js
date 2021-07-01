import React from 'react';
import requester from "../utilities/requester"

const createSitemap = (categories, products) => `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.elsaleh.net</loc>
        </url>
        <url>
            <loc>https://www.elsaleh.net/aboutus</loc>
        </url>
        <url>
            <loc>https://www.elsaleh.net/cart</loc>
        </url>
        <url>
            <loc>https://www.elsaleh.net/orders</loc>
        </url>
        
        ${categories.map((category) => {
        return `
                <url>
                    <loc>https://www.elsaleh.net/category/${category._id}</loc>
                </url>
            `;
        }).join('')}
    
        ${products.map((product) => {
        return `
                    <url>
                        <loc>https://www.elsaleh.net/product/${product._id}</loc>
                    </url>
                `;
        }).join('')}

    </urlset>
    `;
    class Sitemap extends React.Component {
    static async getInitialProps({ res }) {
        console.log("sitemap")
        const categories = await requester.get(`/categories/allCategories`).catch(() => { });
        const products = await requester.get(`/products/allProducts`).catch(() => { });

        res.setHeader('Content-Type', 'text/xml');
        res.write(createSitemap(categories.data.model, products.data.model));
        res.end();
    }
}

export default Sitemap;
