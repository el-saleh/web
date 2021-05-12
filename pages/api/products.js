// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json([
    {
        "bulletList": [
            "product description",
            "product description",
            "product description",
            "product description"
        ],
        "bulletList_ar": [
            "وصف المنتج ",
            "وصف المنتج ",
            "وصف المنتج ",
            "وصف المنتج "
        ],
        "gallery": [
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/6073b855e3aa940004c43250",
                "imageId": "6073b855e3aa940004c43250"
            },
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/6073b855e3aa940004c43251",
                "imageId": "6073b855e3aa940004c43251"
            },
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/6074ec5f84e081000454f169",
                "imageId": "6074ec5f84e081000454f169"
            }
        ],
        "_id": "6073b852e3aa940004c4324f",
        "title": "product 2 name",
        "title_ar": "اسم المنتج 2",
        "superTitle": "Super Title",
        "superTitle_ar": "عنوان صغير",
        "description": "product description product description product description product description ",
        "description_ar": "وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج ",
        "active": true,
        "productId": "yellow_glue_abou",
        "heroSectionItem": true,
        "productImage": "https://abou-apis.herokuapp.com/products/product-image/6073b852e3aa940004c4324e",
        "productImageId": "6073b852e3aa940004c4324e",
        "__v": 0
    },
    {
        "bulletList": [
            "new item",
            "new item"
        ],
        "bulletList_ar": [
            "new item",
            "new item"
        ],
        "gallery": [
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/60755b517629250004911295",
                "imageId": "60755b517629250004911295"
            },
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/60755b517629250004911296",
                "imageId": "60755b517629250004911296"
            },
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/60755b517629250004911297",
                "imageId": "60755b517629250004911297"
            },
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/60755b517629250004911298",
                "imageId": "60755b517629250004911298"
            }
        ],
        "_id": "60755b4e7629250004911294",
        "title": "new item",
        "title_ar": "new item",
        "superTitle": "new item",
        "superTitle_ar": "new item",
        "description": "new item new item new item",
        "description_ar": "new item new item new item",
        "active": true,
        "productId": "new_item",
        "heroSectionItem": true,
        "productImage": "https://abou-apis.herokuapp.com/products/product-image/60755b4e7629250004911293",
        "productImageId": "60755b4e7629250004911293",
        "__v": 0
    },
    {
        "bulletList": [
            "ay haga"
        ],
        "bulletList_ar": [
            "اي حاجه"
        ],
        "gallery": [
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/6085e97b7759e4000427314a",
                "imageId": "6085e97b7759e4000427314a"
            },
            {
                "imageUrl": "https://abou-apis.herokuapp.com/products/gallery-product-image/6085e97b7759e4000427314b",
                "imageId": "6085e97b7759e4000427314b"
            }
        ],
        "_id": "6085e97a7759e40004273149",
        "title": "abou",
        "superTitle": "alazm",
        "description": "ay haga",
        "title_ar": "ابو",
        "superTitle_ar": "العزم",
        "description_ar": "اي حاجه",
        "active": true,
        "productId": "new product",
        "heroSectionItem": true,
        "productImage": "https://abou-apis.herokuapp.com/products/product-image/6085e97a7759e40004273148",
        "productImageId": "6085e97a7759e40004273148",
        "__v": 0
    }
])
}
