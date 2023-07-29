import { create } from "zustand";

export const useAppStore = create((set) => ({
    dataUser: {},
    isInputUser: false,
    getDataUser: (data) => set({dataUser: data}),
    setIsInputUser: (data) => set({isInputUser: data}),

    menuDiskon: [
        {
            namaMakanan: 'Iga Bakar Sambalado',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            diskon: 10,
            harga: 30000
        },
        {
            namaMakanan: 'Iga Bakar Sambalado2',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            diskon: 10,
            harga: 30000
        },
        {
            namaMakanan: 'Iga Bakar Sambalado3',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            diskon: 10,
            harga: 30000
        },
        {
            namaMakanan: 'Iga Bakar Sambalado4',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            diskon: 10,
            harga: 30000
        },
        {
            namaMakanan: 'Iga Bakar Sambalado5',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            diskon: 10,
            harga: 30000000
        }
    ],
    editMenuDiskon: (data) => set({menuDiskon: data}),

    semuaMenu: [],
    editSemuaMenu: (data) => set({semuaMenu: data}),

    keranjang: [],
    editKeranjang: (data) => set({keranjang: data}),

    statusTambahan: '',
    editStatusTambahan: (status) => set({statusTambahan: status}),

    getSubTotal: 0,
    editSubTotal: (data) => set({getSubTotal: data}),
    

    menuSeafood: [
        {
            namaMakanan: 'Menu Seafood',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            harga: 30000
        },
        {
            namaMakanan: 'Menu Seafood2',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            harga: 30000
        },
    ],
    ayam: [
        {
            namaMakanan: 'Menu Ayam',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            harga: 30000
        },
    ],
    nasiGoreng: [
        {
            namaMakanan: 'Menu Nasi Goreng',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            harga: 30000
        },
    ],
    snack: [
        {
            namaMakanan: 'Menu snack',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            harga: 30000
        },
    ],
    coffe: [
        {
            namaMakanan: 'Menu coffe',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            harga: 30000
        },
    ],
    softDrinks: [
        {
            namaMakanan: 'Menu softDrinks',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            harga: 30000
        },
    ],
    jusTea: [
        {
            namaMakanan: 'Menu Jus/Tea',
            image: 'https://cdn-image.hipwee.com/wp-content/uploads/2016/04/Ljuti-govedji-odrezak.jpg',
            tersedia: 22,
            harga: 30000
        },
    ],

    alert: false,
    setAlert: (status) => set({alert: status})



}))