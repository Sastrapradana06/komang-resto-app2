import { shallow } from 'zustand/shallow'
import { useAppStore } from '../../store/app-store'
import { useEffect } from 'react';

export default function SemuaMenu() {
    const [semuaMenu, editSemuaMenu, menuSeafood, ayam, nasiGoreng, snack, coffe, softDrinks, jusTea, keranjang, editKeranjang, setAlert, dataUser, editStatusTambahan, editGetHarga, getHarga] = useAppStore((state) => [
        state.semuaMenu,
        state.editSemuaMenu,
        state.menuSeafood,
        state.ayam,
        state.nasiGoreng,
        state.snack,
        state.coffe,
        state.softDrinks,
        state.jusTea,
        state.keranjang,
        state.editKeranjang,
        state.setAlert,
        state.dataUser,
        state.editStatusTambahan,
        state.editGetHarga,
        state.getHarga
    ], shallow)


    useEffect(() => {
        editSemuaMenu(menuSeafood)
    }, [editSemuaMenu, menuSeafood, editStatusTambahan])

    function updateKeranjang(menu) {
        if(Object.keys(dataUser).length === 0) {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
                
            }, 2000)
            return false
        } 
        const newMenu = [
            {
                namaMakanan: menu.namaMakanan,
                image: menu.image,
                tersedia: menu.tersedia,
                diskon: 0,
                harga: menu.harga,
                total: 1
            }, ...keranjang
        ]
        editKeranjang(newMenu)
        editGetHarga([menu.harga, ...getHarga])
        // editStatusTambahan('')
    }

    // console.log({menuSeafood, semuaMenu});

    return (
        <div className="w-full p-2 flex flex-col gap-2">
            <div className="">
                <p className="font-bold">Daftar Menu Restaurant</p>
            </div>
            <div className="flex overflow-x-auto gap-3">
                <button className="flex-none font-semibold border-b hover:bg-black hover:text-[#f4f4f4] duration-200 text-[.8rem] px-4 py-1 rounded-xl" onClick={() => editSemuaMenu(menuSeafood)}>Seafood</button>
                <button className="flex-none font-semibold border-b hover:bg-black hover:text-[#f4f4f4] duration-200 text-[.8rem] px-4 py-1 rounded-xl" onClick={() => editSemuaMenu(ayam)}>Ayam</button>
                <button className="flex-none font-semibold border-b hover:bg-black hover:text-[#f4f4f4] duration-200 text-[.8rem] px-4 py-1 rounded-xl" onClick={() => editSemuaMenu(nasiGoreng)}>Nasi Goreng</button>
                <button className="flex-none font-semibold border-b hover:bg-black hover:text-[#f4f4f4] duration-200 text-[.8rem] px-4 py-1 rounded-xl" onClick={() => editSemuaMenu(snack)}>Snack</button>
                <button className="flex-none font-semibold border-b hover:bg-black hover:text-[#f4f4f4] duration-200 text-[.8rem] px-4 py-1 rounded-xl" onClick={() => editSemuaMenu(coffe)}>Coffee</button>
                <button className="flex-none font-semibold border-b hover:bg-black hover:text-[#f4f4f4] duration-200 text-[.8rem] px-4 py-1 rounded-xl" onClick={() => editSemuaMenu(softDrinks)}>Non Coffe</button>
                <button className="flex-none font-semibold border-b hover:bg-black hover:text-[#f4f4f4] duration-200 text-[.8rem] px-4 py-1 rounded-xl" onClick={() => editSemuaMenu(jusTea)}>Jus / Tea</button>
            </div>
            <div className="w-full flex flex-wrap p-2 justify-center gap-2 mb-16">
                {semuaMenu.map((menu, i) => {
                    return (
                        <div className="w-[160px] h-[220px]  flex-none rounded-xl p-2 bg-white relative" key={i}>
                            <img className="w-full h-[130px] object-cover rounded-xl" src={menu.image}/>
                            <div className=" w-max py-[7px] px-3 rounded-2xl bg-wt -mt-10 bg-wt relative left-1">
                                <p className="text-[.7rem] font-bold">{menu.tersedia}</p>
                            </div>
                            <div className="w-full mt-4 flex items-center justify-between">
                                <p className="text-[.7rem] font-bold">{menu.namaMakanan}</p>
                            </div>
                            <div className="bg-diskon rounded-lg w-max px-1 py-1 ">
                                <p className="text-[.7rem] text-[crimson] font-bold">0%</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p className="text-[.8rem] font-bold">Rp {menu.harga.toLocaleString("id-ID")}</p>
                                <button className=" px-2 py-1 rounded-xl text-[.7rem] bg-bt text-gray-300" onClick={() => updateKeranjang(menu)}>Order</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}