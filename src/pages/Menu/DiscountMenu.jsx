import { useEffect, useState } from "react"
import { useAppStore } from "../../store/app-store"
import { shallow } from 'zustand/shallow'

export default function DiscountMenu() {
    const [time, setTime] = useState()
    const [menuDiskon, editKeranjang, keranjang, dataUser, setAlert, editStatusTambahan] = useAppStore((state) => [
        state.menuDiskon,
        state.editKeranjang,
        state.keranjang,
        state.dataUser,
        state.setAlert,
        state.editStatusTambahan
    ], shallow)
    // console.log(keranjang);

    useEffect(() => {
        let hours = 12;
        let minutes = 60;
        let seconds = 60;

        const intervalId = setInterval(() => {
            seconds--;

            if (seconds < 0) {
                seconds = 59;
                minutes--;

                if (minutes < 0) {
                    minutes = 59;
                    hours--;

                    if (hours < 0) {
                        clearInterval(intervalId);
                    }
                }
            }

            const date = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
            setTime(date)
        }, 1000);
        editStatusTambahan('')
    }, [editStatusTambahan])

    function updateKeranjang(menu) {
        if (Object.keys(dataUser).length === 0) {
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
                diskon: menu.diskon,
                harga: menu.harga,
                total: 1
            }, ...keranjang
        ]
        // console.log(newMenu);
        editKeranjang(newMenu)
    }

    return (
        <div className="w-full p-2 ">
            <div className="w-full flex justify-between items-center">
                <p className="font-bold">Diskon Spesial Hari Ini</p>
                <p className="text-[.7rem] font-semibold text-gray-500">Berakhir di: <span className="text-[crimson] font-semibold">{time}</span></p>
            </div>
            <div className="w-full mt-3 overflow-x-auto p-1">
                <div className="flex gap-3">
                    {menuDiskon.map((menu, i) => {
                        return (
                            <div className="w-[180px] h-[220px]  flex-none rounded-xl p-2 bg-white relative" key={i}>
                                <img className="w-full h-[130px] object-cover rounded-xl" src={menu.image} />
                                <div className=" w-max py-[7px] px-3 rounded-2xl bg-wt -mt-10 bg-wt relative left-1">
                                    <p className="text-[.7rem] font-bold">{menu.tersedia}</p>
                                </div>
                                <div className="w-full mt-4 flex items-center justify-between">
                                    <p className="text-[.7rem] font-bold">{menu.namaMakanan}</p>
                                </div>
                                <div className="bg-diskon rounded-lg w-max px-1 py-1 ">
                                    <p className="text-[.7rem] text-[crimson] font-bold">{menu.diskon}%</p>
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
        </div>
    )
}