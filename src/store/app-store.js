import { create } from "zustand";

export const useAppStore = create((set) => ({
    dataUser: {},
    isInputUser: false,
    getDataUser: (data) => set({dataUser: data}),
    setIsInputUser: (data) => set({isInputUser: data}),

    hours: 12,
    editHours: (hours) => set({hours}),
    minutes: 59,
    editMinutes: (minutes) => set({minutes}),
    seconds: 59,
    editSeconds: (seconds) => set({seconds}),
    getTime: 0,
    editGetTime: (time) => set({getTime: time}),

    menuDiskon: [
        {
            namaMakanan: 'Iga Bakar Sambalado',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            diskon: 10,
            harga: 40000
        },
        {
            namaMakanan: 'Ayam Bakar',
            image: 'https://img.kurio.network/mIAqWOXcZMFdFh5hqRODW3yEFWk=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/22/02/06/10d46313-c9bd-46f8-86a6-a098570a36a0.jpe',
            tersedia: 22,
            diskon: 20,
            harga: 30000
        },
        {
            namaMakanan: 'Nila Asam Manis',
            image: 'https://selerasa.com/wp-content/uploads/2015/07/images_ikan_ikan-nila-bumbu-asam-manis-pedas.JPG',
            tersedia: 22,
            diskon: 20,
            harga: 25000
        },
        {
            namaMakanan: 'Chicken Steak',
            image: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/11/08/1179583027.jpg',
            tersedia: 22,
            diskon: 5,
            harga: 25000
        },
        {
            namaMakanan: 'Ikan Bakar',
            image: 'https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/10/Resep-Ikan-Bakar.jpg?fit=1920%2C1610&ssl=1',
            tersedia: 22,
            diskon: 15,
            harga: 30000
        }
    ],
    editMenuDiskon: (data) => set({menuDiskon: data}),

    semuaMenu: [],
    editSemuaMenu: (data) => set({semuaMenu: data}),

    keranjang: [],
    editKeranjang: (data) => set({keranjang: data}),

    statusTambahan: 'k',
    editStatusTambahan: (status) => set({statusTambahan: status}),

    getHarga: [],
    editGetHarga: (harga) => set({getHarga: harga}),

    getHargaDiskon: [],
    editGetHargaDiskon: (diskon) => set({getHargaDiskon: diskon}),

    getSubTotal: 0,
    editSubTotal: (data) => set({getSubTotal: data}),

    getPajak: 0,
    editPajak: (data) => set({getPajak: data}),

    getDiskon: 0,
    editDiskon: (data) => set({getDiskon: data}),

    getTotal: '',
    editTotal: (data) => set({getTotal: data}),
    

    menuSeafood: [
        {
            namaMakanan: 'Ikan Sambal Matah',
            image: 'https://asset.kompas.com/crops/pEEFFBAYzLvi8SaF88xxd5Tohqk=/814x760:3858x2789/750x500/data/photo/2022/10/14/6348e71377907.jpg',
            tersedia: 22,
            harga: 30000
        },
        {
            namaMakanan: 'Ikan Goreng',
            image: 'https://www.maggi.id/sites/default/files/styles/maggi_desktop_image_style/public/Article%203%20Maret_1500x700pxl_3.jpg?h=4f5b30f1&itok=gDbK8r6_',
            tersedia: 22,
            harga: 25000
        },
        {
            namaMakanan: 'Udang Saus Padang',
            image: 'https://cdn-brilio-net.akamaized.net/news/2022/03/17/225198/1693725-udang-saus-padang-gurih.jpg',
            tersedia: 22,
            harga: 35000
        },
        {
            namaMakanan: 'Udang Asam Manis',
            image: 'https://i0.wp.com/rasabunda.com/wp-content/uploads/2021/03/Udang-Asam-Manis.jpg?fit=450%2C600&ssl=1',
            tersedia: 22,
            harga: 27000
        },
        {
            namaMakanan: 'Cumi Goreng',
            image: 'https://kbu-cdn.com/dk/wp-content/uploads/cumi-goreng-terasi.jpg',
            tersedia: 22,
            harga: 25000
        },
        {
            namaMakanan: 'Cumi Saus Tiram',
            image: 'https://sweetrip.id/wp-content/uploads/2021/10/cumi-saus-tiram.jpg',
            tersedia: 22,
            harga: 30000
        },
        {
            namaMakanan: 'Lobster Bakar',
            image: 'https://cdn-brilio-net.akamaized.net/news/2021/10/15/215282/1579591-resep-kreasi-lobster-bakar.jpg',
            tersedia: 22,
            harga: 40000
        },
        {
            namaMakanan: 'Kepiting Saus Padang ',
            image: 'https://img.okezone.com/content/2020/07/01/298/2239715/tanggal-muda-bahagia-yuk-masak-kepiting-saus-padang-ala-restoran-sDWJBo1lCl.jpg',
            tersedia: 22,
            harga: 37000
        },
    ],
    ayam: [
        {
            namaMakanan: 'Ayam Goreng Kalasan',
            image: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/11/26/930481300.jpg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Ayam Goreng Sambal',
            image: 'https://resepmamiku.com/wp-content/uploads/2022/07/ayam-goreng-sambal-mercon-yscooking-850x1063.jpg',
            tersedia: 22,
            harga: 25000
        },
        {
            namaMakanan: 'Ayam Bakar Kecap',
            image: 'https://topwisata.info/wp-content/uploads/2020/08/Resep2BAyam2BBakar2BKecap.jpeg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Ayam Rica-Rica Padang',
            image: 'https://cdn0-production-images-kly.akamaized.net/JsI5ySU8wcXF7QiMjMsjP2cp_WM=/0x44:999x607/673x378/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4239243/original/042149700_1669355748-shutterstock_1997438558.jpg',
            tersedia: 22,
            harga: 30000
        },
        {
            namaMakanan: 'Ayam Penyet Sambal',
            image: 'https://img-global.cpcdn.com/recipes/4ff9cbc895c01f45/400x400cq70/photo.jpg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Ayam Geprek Keju',
            image: 'https://resepkoki.id/wp-content/uploads/2020/10/Resep-Ayam-Geprek-Keju.jpg',
            tersedia: 22,
            harga: 30000
        },
    ],
    nasiGoreng: [
        {
            namaMakanan: 'Nasi Goreng Biasa',
            image: 'https://akcdn.detik.net.id/community/media/visual/2020/03/15/9d7f0b87-3f9b-430d-8b75-7b121db0a89a_169.jpeg?w=620',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Nasi Goreng Kampung',
            image: 'https://madamtan.com/upload/images/menu/img_xWTu4et.jpg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Nasi Goreng Seafood',
            image: 'https://www.pegipegi.com/travel/wp-content/uploads/2014/06/nasi-goreng-seafood.jpg',
            tersedia: 22,
            harga: 30000
        },
        {
            namaMakanan: 'Nasi Goreng Sambal Matah',
            image: 'https://statik.tempo.co/data/2022/05/15/id_1110010/1110010_720.jpg',
            tersedia: 22,
            harga: 25000
        },
        {
            namaMakanan: 'Nasi Goreng Spesial',
            image: 'https://www.sasa.co.id/medias/page_medias/resep_nasi_goreng_spesial.jpg',
            tersedia: 22,
            harga: 25000
        },
        {
            namaMakanan: 'Nasi Goreng Telur',
            image: 'https://img.kurio.network/VMrzk8ekEvo-S800jtmygj8bTmc=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/21/10/12/22d8038d-e873-4660-8637-00787fcffba6.jpe',
            tersedia: 22,
            harga: 22000
        },
    ],
    snack: [
        {
            namaMakanan: 'Kentang Goreng',
            image: 'https://www.cantiknyakulitsehat.com/uploads/food/food_6564_Ini_Alasan_Kentang_Goreng_Bikin_Kamu_Ketagihan!.jpg',
            tersedia: 22,
            harga: 12000
        },
        {
            namaMakanan: 'Tempe Goreng',
            image: 'https://www.masakapahariini.com/wp-content/uploads/2022/09/resep-tempe-goreng-tepung-pedas.jpg',
            tersedia: 22,
            harga: 12000
        },
        {
            namaMakanan: 'Bakwan Jagung',
            image: 'https://asset.kompas.com/crops/wG2LGEL9k921qsHuSr-Qile6m0o=/0x0:0x0/750x500/data/photo/2020/04/25/5ea421e5c5358.jpeg',
            tersedia: 22,
            harga: 12000
        },
        {
            namaMakanan: 'Omlet',
            image: 'https://mediakom.kemkes.go.id/wp-content/uploads/2021/08/Omelet-Betawi-legendaris.jpg',
            tersedia: 22,
            harga: 15000
        },
        {
            namaMakanan: 'Siomay',
            image: 'https://caramembuat.id/wp-content/uploads/2022/04/cara-membuat-siomay-ikan.webp',
            tersedia: 22,
            harga: 12000
        },
        {
            namaMakanan: 'Piscok',
            image: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2021/08/23/2519948243.jpg',
            tersedia: 22,
            harga: 12000
        },
        {
            namaMakanan: 'Jamur Crispy',
            image: 'https://kbu-cdn.com/dk/wp-content/uploads/jamur-kriwil-pedas.jpg',
            tersedia: 22,
            harga: 15000
        },
        {
            namaMakanan: 'Dimsum',
            image: 'https://palpres.disway.id/upload/83f167921e5a8d3677aead0797407909.jpeg',
            tersedia: 22,
            harga: 15000
        },
    ],
    coffe: [
        {
            namaMakanan: 'Espresso',
            image: 'https://majalah.ottenstatic.com/uploads/2016/09/espresso-013-1024x681.jpg',
            tersedia: 22,
            harga: 20000
        },
        {
            namaMakanan: 'Americano',
            image: 'https://www.nescafe.com/id/sites/default/files/Kopi-Hitam-Americano-dan-Espresso%2C-Apa-Bedanya%2C-Ya.jpg',
            tersedia: 22,
            harga: 20000
        },
        {
            namaMakanan: 'Cappuccino',
            image: 'https://kurio-img.kurioapps.com/19/05/28/50de339f-7e20-4738-b9a4-a2ba49991add.jpg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Latte',
            image: 'https://majalah.ottenstatic.com/uploads/2015/07/shutterstock_223511062.jpg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Kopi Susu',
            image: 'https://jasindo.co.id/uploads/media/otwgs4vrqfbvvy30ymyeelsug-kopijpg',
            tersedia: 22,
            harga: 20000
        },
        {
            namaMakanan: 'Kopi Sanger',
            image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2019/01/sanger-kopi-khas-aceh-yang-bukan-sembarang-kopi-susu_m_.jpg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Macchiato ',
            image: 'https://media.istockphoto.com/id/625298412/id/foto/kopi-macchiato-latte.jpg?s=170667a&w=0&k=20&c=cK-UXmJLDvdoU_OIM5xN1WEjNwkzCHyxupRJft9iGeU=',
            tersedia: 22,
            harga: 25000
        },
        {
            namaMakanan: 'Mocha  ',
            image: 'https://www.nescafe.com/id/sites/default/files/Apa-Itu-Kopi-Moka-Yuk%2C-Cari-Tahu-di-Sini%21_0.jpg',
            tersedia: 22,
            harga: 25000
        },
    ],
    softDrinks: [
        {
            namaMakanan: 'Lemon Sprite',
            image: 'https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/88d6a376-2222-4cc1-863a-4fd7a963d598_Go-Biz_20221031_190517.jpeg',
            tersedia: 22,
            harga: 10000
        },
        {
            namaMakanan: 'Lomon Tea Nata De Coco',
            image: 'https://img-global.cpcdn.com/recipes/6ffcda5a58b4e227/1200x630cq70/photo.jpg',
            tersedia: 22,
            harga: 15000
        },
        {
            namaMakanan: 'Nata De Coco Kurnia',
            image: 'https://assets.isu.pub/document-structure/221223175326-b9f25cd5a8e707d962c9169c5d582645/v1/a98f11431d206cdf69df791ad3f964f9.jpeg',
            tersedia: 22,
            harga: 15000
        },
        {
            namaMakanan: 'Matcha',
            image: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/09/06/1313195528.jpg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Red Velvet',
            image: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/04/15/2021566889.jpeg',
            tersedia: 22,
            harga: 22000
        },
        {
            namaMakanan: 'Taro',
            image: 'https://indonagafood.co.id/wp-content/uploads/2023/03/Mengulik-Taro-Varian-Rasa-Produk-Maklon-Minuman-yang-Unik-1024x683.jpg',
            tersedia: 22,
            harga: 22000
        },
    ],
    jusTea: [
        {
            namaMakanan: 'Jus Jeruk',
            image: 'https://image.akurat.co/uploads/gallery/2021/11/gal_618dd692a19465-28576895-85708281.JPG',
            tersedia: 22,
            harga: 20000
        },
        {
            namaMakanan: 'Jus Alpukat',
            image: 'https://www.alpermata.com/wp-content/uploads/2021/03/Mengapa-Buah-Alpukat-Bagus-Untuk-Diet-819x1024.jpg',
            tersedia: 22,
            harga: 20000
        },
        {
            namaMakanan: 'Jus Buah Naga',
            image: 'https://img-global.cpcdn.com/recipes/aac7215ea257d392/400x400cq70/photo.jpg',
            tersedia: 22,
            harga: 20000
        },
        {
            namaMakanan: 'Jus Mangga',
            image: 'https://media.istockphoto.com/id/904617136/id/foto/jus-mangga-dalam-gelas.jpg?s=170667a&w=0&k=20&c=YwK5tFepz2ysWDblgRrk2ya-iPtuNZ0dSaHctWlnapY=',
            tersedia: 22,
            harga: 20000
        },
        {
            namaMakanan: 'Teh Manis',
            image: 'https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2020/10/13/1521986007.jpg',
            tersedia: 22,
            harga: 10000
        },
        {
            namaMakanan: 'Teh Susu',
            image: 'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oATsYXvJAX8kG7hH_pcGP/original/045716500_1582016058-Minum-Teh-Susu-Adakah-Manfaatnya-untuk-Kesehatan-shutterstock_262866107.jpg',
            tersedia: 22,
            harga: 12000
        },
        {
            namaMakanan: 'Teh Tarik',
            image: 'https://img.kurio.network/iiBqaNgZdkaVFwmwc1KMZFCDt2U=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/20/06/21/38b97b30-c3c4-49be-a480-c1979f325924.jpg',
            tersedia: 22,
            harga: 15000
        },
        {
            namaMakanan: 'Teh Jahe',
            image: 'https://www.masakapahariini.com/wp-content/uploads/2023/01/shutterstock_340270751.jpg',
            tersedia: 22,
            harga: 15000
        },
    ],

    alert: false,
    setAlert: (status) => set({alert: status}),

    metodePembayaran: [
        {
            id: 'gopay',
            urlImg: 'https://image.shutterstock.com/image-photo/image-260nw-1545772295.jpg'
        },
        {
            id: 'dana',
            // urlImg: 'https://vectrostudio.com/wp-content/uploads/2020/03/Dana-Logo-Vector2-300x202.jpg'
            urlImg: 'https://a.m.dana.id/danaweb/web/dana-meta-logo.png'
        },
        {
            id: 'shopee',
            urlImg: 'https://brandlogos.net/wp-content/uploads/2022/08/shopeepay-logo_brandlogos.net_yl7nf-512x512.png'
        },
        {
            id: 'ovo',
            urlImg: 'https://1.bp.blogspot.com/-AQ49deAfvEQ/Xe6PAujOh1I/AAAAAAAAMh8/QKahNpdr7sMeQclqmDgivpf2euxzDaoxACLcBGAsYHQ/s320/Logo%2BOVO%2B-%2BeWallet%2B-%2BDownload%2BFile%2BVector%2BSVG.webp'
        },
    ],



}))