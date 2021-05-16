const categories = [
    {
        name: "اسم الفئة الاولى",
        id: "category1",
        desc: `ولوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
      أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
      أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
      أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
      نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
      كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم`,
        image: "/assets/categ1.png"
    },
    {
        name: "اسم الفئة الثانية",
        id: "category2",
        desc: "وصف الفئة 2 وصف الفئة 2 وصف الفئة 2 وصف الفئة 2 وصف الفئة 2 وصف الفئة 2 وصف الفئة 2",
        image: "/assets/categ2.png"
    },
    {
        name: "اسم الفئة الثالثة",
        id: "category3",
        desc: "وصف الفئة 3 وصف الفئة 3 وصف الفئة 3 وصف الفئة 3 ",
        image: "/assets/categ3.png"
    }
];

const products = [
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 800.00,
        image: '/assets/products/prod3.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 1
    },
    {
        categoryId: 'category1',
        categoryName: "اسم الفئة الاولى",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 800.00,
        image: '/assets/products/prod1.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 2
    },
    {
        categoryId: 'category1',
        categoryName: "اسم الفئة الاولى",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 900.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 3
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 300.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 4
    },
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 300.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 5
    },
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 700.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 6
    },
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 500.00,
        image: '/assets/products/prod4.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 7
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 800.00,
        image: '/assets/products/prod1.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 8
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 800.00,
        image: '/assets/products/prod4.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 9
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 100.00,
        image: '/assets/products/prod2.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 10
    },
    {
        categoryId: 'category1',
        categoryName: "اسم الفئة الاولى",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 100.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 11
    },
    {
        categoryId: 'category1',
        categoryName: "اسم الفئة الاولى",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 600.00,
        image: '/assets/products/prod1.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 12
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 1000.00,
        image: '/assets/products/prod3.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 13
    },
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 600.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 14
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 200.00,
        image: '/assets/products/prod1.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 15
    }
    ,
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 800.00,
        image: '/assets/products/prod3.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 16
    },
    {
        categoryId: 'category1',
        categoryName: "اسم الفئة الاولى",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 800.00,
        image: '/assets/products/prod1.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 17
    },
    {
        categoryId: 'category1',
        categoryName: "اسم الفئة الاولى",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 900.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 18
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 300.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 19
    },
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 300.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 20
    },
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 500.00,
        image: '/assets/products/prod4.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 21
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 800.00,
        image: '/assets/products/prod1.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 22
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 800.00,
        image: '/assets/products/prod4.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 23
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 100.00,
        image: '/assets/products/prod2.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 24
    },
    {
        categoryId: 'category1',
        categoryName: "اسم الفئة الاولى",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 100.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 25
    },
    {
        categoryId: 'category1',
        categoryName: "اسم الفئة الاولى",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 600.00,
        image: '/assets/products/prod1.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 26
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 1000.00,
        image: '/assets/products/prod3.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 27
    },
    {
        categoryId: 'category3',
        categoryName: "اسم الفئة الثالثة",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 600.00,
        image: '/assets/products/prod5.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 28
    },
    {
        categoryId: 'category2',
        categoryName: "اسم الفئة الثانية",
        productName: 'اسم المنتج والموديل والماركة',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.',
        price: 200.00,
        image: '/assets/products/prod1.jpg',
        gallery: [
            '/assets/products/prod1.jpg',
            '/assets/products/prod2.jpg',
            '/assets/products/prod3.jpg',
            '/assets/products/prod4.jpg',
            '/assets/products/prod5.jpg'
        ],
        videoUrl: "https://www.youtube.com/watch?v=y2D04x9baoM",
        id: 29
    }
]



const productsById = (id) => {
    return products.filter((p) => {
        return p.categoryId === id
    })
}

const productById = (id) => {
    const product = products.find((p) => {
        return p.id == id
    });
    
    return product
}

const categoryById = (id) => {
    return categories.find((c) => {
        return c.id == id
    })
}

const homeContent = () => {
    return categories.map((item)=>{
        let category = item;
        category.products = products.filter((product)=>{
            return product.categoryId === category.id
        })

        return category
    })
}

export default {
    categories,
    categoryById,
    products,
    productsById,
    productById,
    homeContent
}
