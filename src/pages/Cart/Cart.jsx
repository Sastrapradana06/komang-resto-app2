import Alert from "../components/alert";
import { BsArrowLeft } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { shallow } from 'zustand/shallow'
import { useAppStore } from "../../store/app-store";
import { useEffect, useState } from "react";

export default function Cart() {
    const [isAlert, setIsAlert] = useState(false)
    const [penguranganHarga] = useState([])
    const [tambahanHarga] = useState([])
    const [keranjang, editKeranjang, statusTambahan, editStatusTambahan, getSubTotal, editSubTotal, getPajak, editPajak, getDiskon, editDiskon, getTotal, editTotal, getHarga, editGetHarga, getHargaDiskon, editGetHargaDiskon, metodePembayaran] = useAppStore((state) => [
        state.keranjang,
        state.editKeranjang,
        state.statusTambahan,
        state.editStatusTambahan,
        state.getSubTotal,
        state.editSubTotal,
        state.getPajak,
        state.editPajak,
        state.getDiskon,
        state.editDiskon,
        state.getTotal,
        state.editTotal,
        state.getHarga,
        state.editGetHarga,
        state.getHargaDiskon,
        state.editGetHargaDiskon,
        state.metodePembayaran
    ], shallow)


    useEffect(() => {
        if (getHarga.length != 0) {
            const filterDiskon = keranjang.filter((menu) => {
                return menu.diskon !== 0
            })

            const subtotal = getHarga.reduce((p, x) => p + x)
            const formattedSubtotal = subtotal.toLocaleString("id-ID");
            editSubTotal(formattedSubtotal)

            const pajak = subtotal / 10
            editPajak(pajak.toLocaleString("id-ID"))

            if (filterDiskon.length != 0) {
                const getDiskon = getHargaDiskon.reduce((a, b) => a + b)
                const getHarga = filterDiskon.map((menu) => menu.harga).reduce((a, b) => a + b)
                if (getDiskon != 0) {
                    const totalDiskon = (getHarga * getDiskon) / 100
                    editDiskon(totalDiskon.toLocaleString("id-ID"))

                    const intDiskon = parseFloat(totalDiskon.toString().replace(".", "").replace(",", "."));
                    const totalSemua = subtotal + pajak - intDiskon;
                    editTotal(totalSemua.toLocaleString("id-ID"))
                    return
                }
            } else {
                editDiskon(0)
            }
            const totalSemua = subtotal + pajak;
            editTotal(totalSemua.toLocaleString("id-ID"))
        }

    }, [keranjang, tambahanHarga, statusTambahan, penguranganHarga, editSubTotal, editDiskon, editPajak, editTotal, getHarga, getHargaDiskon])

    function deleteKeranjang(menu) {

        if (keranjang.length == 1) {
            editSubTotal(0)
            editPajak(0)
            editDiskon(0)
            editTotal(0)
        }

        const newCart = keranjang.filter((data) => {
            return data != menu
        })
        editKeranjang(newCart)

        if (menu.total > 1) {
            const sortHarga = getHarga.sort()
            const startIndex = sortHarga.indexOf(menu.harga)
            if (startIndex != -1) {
                getHarga.splice(startIndex, menu.total)
            }

            if (menu.diskon != 0) {
                const sortDiskon = getHargaDiskon.sort()
                const startIndex = sortDiskon.indexOf(menu.diskon)
                if (startIndex != -1) {
                    getHargaDiskon.splice(startIndex, menu.total)
                }
            }
        }

        if (menu.total == 1) {
            const indexToRemove = getHarga.indexOf(menu.harga);
            if (indexToRemove != -1) {
                const newArray = [...getHarga.slice(0, indexToRemove), ...getHarga.slice(indexToRemove + 1)];
                editGetHarga(newArray)
            }
        }

    }

    function bayarBelanja() {
        if (keranjang.length != 0) {
            setIsAlert(true)
            setTimeout(() => {
                setIsAlert(false)
                editKeranjang([])
                editSubTotal(0)
                editPajak(0)
                editDiskon(0)
                editTotal(0)
                editStatusTambahan('')
                editGetHarga([])
                editGetHargaDiskon([])
            }, 2000)
        }

    }

    function updateItem(menu, aksi) {
        if (menu.total == 1) {
            if (aksi == 'kurang') {
                return
            }
        }

        const itemPlus = { ...menu, total: menu.total + 1 }
        const itemMin = { ...menu, total: menu.total - 1 }

        const filterIndex = keranjang.findIndex((item) => {
            return item == menu
        })

        const newKeranjang = [...keranjang]

        if (aksi == 'tambah') {
            if (menu.diskon != 0) {
                editGetHargaDiskon([menu.diskon, ...getHargaDiskon])
            }
            newKeranjang[filterIndex] = itemPlus
            editStatusTambahan('tambah')
            editGetHarga([menu.harga, ...getHarga])
        } else {
            newKeranjang[filterIndex] = itemMin
            const indexToRemove = getHarga.indexOf(menu.harga);
            if (indexToRemove != -1) {
                const newArray = [...getHarga.slice(0, indexToRemove), ...getHarga.slice(indexToRemove + 1)];
                editGetHarga(newArray)
            }

            if (menu.diskon != 0) {
                const indexToRemoveDiskon = getHargaDiskon.indexOf(menu.diskon);
                if (indexToRemoveDiskon != -1) {
                    const newArray = [...getHargaDiskon.slice(0, indexToRemoveDiskon), ...getHargaDiskon.slice(indexToRemoveDiskon + 1)];
                    editGetHargaDiskon(newArray)
                }
            }
            editStatusTambahan('kurang')
        }
        editKeranjang(newKeranjang)
    }



    return (
        <div className="w-full p-2 relative">
            <div className="w-[90%] m-auto h-max bg-black z-40 rounded-xl left-0 fixed" id={isAlert ? 'alert-open' : 'alert-close'}>
                {Alert(`✔ Anda Membayar Sebesar ${getTotal.toLocaleString('id-ID')}`, 'text-[white]')}
            </div>
            <div className="w-full">
                <div className="">
                    <Link to='/menu'>
                        <BsArrowLeft size={20} />
                    </Link>
                    <p className="text-bold mt-2 text-[1.1rem]">Pesanan Anda</p>
                    {keranjang.length == 0 ? (
                        <p className="text-[.7rem] text-gray-500">Tidak Ada Pesanan</p>
                    ) : null}
                </div>
                <div className="w-full h-[300px] overflow-y-auto  rounded-xl mt-2 p-2 flex flex-col gap-3 bg-[#f4f4f4]">
                    {keranjang.map((menu, i) => {
                        return (
                            <div className="w-full h-[90px]  rounded-xl flex justify-between bg-white " key={i}>
                                <div className="w-[90%] h-full  flex gap-2 overflow-hidden">
                                    <img src={menu.image} alt="" className="w-[80px] h-full overflow-hidden  object-cover rounded-xl" />
                                    <div className="flex flex-col gap-1 text-[.8rem] justify-center">
                                        <p className="font-bold">{menu.namaMakanan} <span className="text-[crimson] ml-2 font-semibold">{menu.diskon != undefined ? `${menu.diskon}%` : null}</span></p>
                                        <p className="text-green-500 font-bold">Rp {menu.harga.toLocaleString('id-ID')}</p>
                                        <div className="flex gap-4 text-[1rem] items-center">
                                            <button className="w-[30px] h-[30px] rounded-full bg-gray-200" onClick={() => updateItem(menu, 'kurang')}>-</button>
                                            <p>{menu.total}</p>
                                            <button className="w-[30px] h-[30px] rounded-full bg-black text-white" onClick={() => updateItem(menu, 'tambah')}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[10%] h-full  flex  items-end">
                                    <button className="p-1" onClick={() => deleteKeranjang(menu)}>
                                        <RiDeleteBin6Line size={25} fill="gray" />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="fixed w-full h-[300px] z-10 bottom-0 left-0 p-2 flex flex-col gap-2">
                <div className="">
                    <p className="font-semibold">Ringkasan</p>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="text-[.9rem] flex flex-col gap-2">
                        <p className="text-gray-400">Subtotal</p>
                        <p className="text-gray-400">Pajak</p>
                        <p className="text-gray-400">Diskon</p>
                        <p className="font-semibold">Total</p>
                    </div>
                    <div className="text-[.9rem] flex flex-col gap-2">
                        <p className="text-gray-400">Rp {getSubTotal.toLocaleString('id-ID')}</p>
                        <p className="text-gray-400">Rp {getPajak}</p>
                        <p className="text-[crimson]">Rp {getDiskon}</p>
                        <p className="text-green-500 font-semibold">Rp {getTotal}</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold">Metode Pembayaran</p>
                </div>
                <div className="w-full h-[70px]  rounded-xl flex justify-between">
                    {metodePembayaran.map((item, i) => {
                        return (
                            <button className="w-[20%] border-b h-[50px] rounded-xl overflow-hidden focus:-translate-y-2 duration-300"  key={i}>
                                <img src={item.urlImg} id={item.id}/>
                            </button>
                        )
                    })}
                </div>
                <div className="w-full flex justify-center">
                    <button className="w-[80%] m-auto text-center bg-black text-white py-2 rounded-full" onClick={bayarBelanja}>Bayar</button>
                </div>
            </div>
        </div>
    )
}