import { useEffect } from "react"
import { useAppStore } from "../../store/app-store"
import { shallow } from 'zustand/shallow'

export default function DiscountMenu() {
    const [menuDiskon, editKeranjang, keranjang, dataUser, setAlert, editStatusTambahan, getHarga, editGetHarga, getHargaDiskon, editGetHargaDiskon,hours, minutes, seconds, getTime, editHours, editMinutes, editSeconds, editGetTime] = useAppStore((state) => [
        state.menuDiskon,
        state.editKeranjang,
        state.keranjang,
        state.dataUser,
        state.setAlert,
        state.editStatusTambahan,        
        state.getHarga,
        state.editGetHarga,
        state.getHargaDiskon,
        state.editGetHargaDiskon,
        state.hours,
        state.minutes,
        state.seconds,
        state.getTime,
        state.editHours,
        state.editMinutes,
        state.editSeconds,
        state.editGetTime
    ], shallow)
    // console.log(getTime);

    useEffect(() => {
        editStatusTambahan('')
        const intervalId = setInterval(() => {
            editSeconds(seconds - 1);

            if (seconds <= 0) {
                if (minutes <= 0) {
                    if (hours <= 0) {
                        clearInterval(intervalId);
                    } else {
                        editHours(hours - 1);
                        editMinutes(59);
                        editSeconds(59);
                    }
                } else {
                    editMinutes(minutes - 1);
                    editSeconds(59);
                }
            }
        }, 1000);
        const time = {hours,minutes,seconds}
        editGetTime(time)

        return () => clearInterval(intervalId);
    }, [editStatusTambahan,hours, minutes, seconds, editHours, editMinutes, editSeconds, editGetTime])

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
        editGetHarga([menu.harga, ...getHarga])
        editGetHargaDiskon([menu.diskon, ...getHargaDiskon])
    }

    return (
        <div className="w-full p-2 ">
            <div className="w-full flex justify-between items-center">
                <p className="font-bold">Diskon Spesial Hari Ini</p>
                <p className="text-[.7rem] font-semibold text-gray-500">Berakhir di: <span className="text-[crimson] font-semibold">{getTime.hours}:{getTime.minutes}:{getTime.seconds}</span></p>
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