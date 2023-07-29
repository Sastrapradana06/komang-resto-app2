import Alert from "../components/alert";
import { BsArrowLeft } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { shallow } from 'zustand/shallow'
import { useAppStore } from "../../store/app-store";
import { useEffect, useState } from "react";

export default function Cart() {
    const [isAlert, setIsAlert] = useState(false)
    const [penguranganHarga, setPenguranganHarga] = useState([])
    const [tambahanHarga, setTambahanHarga] = useState([])
    // const [currentTotal, setCurrentTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0)
    const [pajak, setPajak] = useState(0)
    const [diskon, setDiskon] = useState(0)
    const [total, setTotal] = useState(0)
    const [keranjang, editKeranjang, statusTambahan, editStatusTambahan, getSubTotal, editSubTotal] = useAppStore((state) => [
        state.keranjang,
        state.editKeranjang,
        state.statusTambahan,
        state.editStatusTambahan,
        state.getSubTotal,
        state.editSubTotal
    ], shallow)

    console.log(getSubTotal);


    useEffect(() => {
        const filterTotalKeranjang = keranjang.filter((menu) => menu.total != 1)
        // console.log(filterTotalKeranjang);
        if (keranjang.length != 0) {
            if (filterTotalKeranjang.length == 0) {
                const filteredkeranjang = keranjang.map((menu) => {
                    return menu.harga
                })
                const filterDiskon = keranjang.filter((menu) => {
                    return menu.diskon !== 0
                })

                const subtotal = filteredkeranjang.reduce((p, x) => p + x)
                const formattedSubtotal = subtotal.toLocaleString("id-ID");
                setSubTotal(formattedSubtotal)
                editSubTotal(formattedSubtotal)

                const pajak = subtotal / 10
                setPajak(pajak.toLocaleString("id-ID"))

                if(filterDiskon.length != 0) {
                    const getDiskon = filterDiskon.map((menu) => menu.diskon).reduce((a, b) => a + b)
                    const getHarga = filterDiskon.map((menu) => menu.harga).reduce((a, b) => a + b)
                    if(getDiskon != 0) {
                        const totalDiskon = (getHarga * getDiskon) / 100
                        setDiskon(totalDiskon.toLocaleString("id-ID"))
    
                        const intDiskon =  parseFloat(totalDiskon.toString().replace(".", "").replace(",", "."));
                        const totalSemua = subtotal + pajak - intDiskon;
                        setTotal(totalSemua.toLocaleString("id-ID"))
                        return 
                    }
                }
                const totalSemua = subtotal + pajak;
                setTotal(totalSemua.toLocaleString("id-ID"))
            } 
            // console.log({subTotal, pajak, diskon, total});
        }

    }, [keranjang, pajak, subTotal, tambahanHarga, statusTambahan, penguranganHarga])

    function deleteKeranjang(menu) {
        const currentSubTotal = parseFloat(subTotal.toString().replace(".", "").replace(",", "."));
        const kurangSubTotal = currentSubTotal - menu.harga
        const pajak = kurangSubTotal / 10
        const total = kurangSubTotal + pajak
        setSubTotal(kurangSubTotal.toLocaleString("id-ID"))
        setPajak(pajak.toLocaleString("id-ID"))
        setTotal(total.toLocaleString("id-ID"))

        if(kurangSubTotal == 0) {
            setDiskon(0)
        }

        const newCart = keranjang.filter((data) => {
            return data != menu
        })
        editKeranjang(newCart)

    }

    function bayarBelanja() {
        if (keranjang.length != 0) {
            setIsAlert(true)
            setTimeout(() => {
                setIsAlert(false)
                editKeranjang([])
                setSubTotal(0)
                setPajak(0)
                setTotal(0)
                setDiskon(0)
                editStatusTambahan('')
            }, 2000)
        }

    }

    function updateItem(menu, aksi) {
        if(menu.total == 0) {
            if(aksi == 'kurang') {
                const filteredkeranjang = keranjang.filter((data) => {
                    return data != menu
                })
                editKeranjang(filteredkeranjang)
                return
            }
        }

        const itemPlus = { ...menu, total: menu.total + 1 }
        const itemMin = { ...menu, total: menu.total - 1 }

        const filterIndex = keranjang.findIndex((item) => {
            return item == menu
        })

        const newKeranjang = [...keranjang]
        const currentSubTotal = parseFloat(subTotal.toString().replace(".", "").replace(",", "."));
        const currentDiskon = parseFloat(diskon.toString().replace(".", "").replace(",", "."));
        const getDiskon = (menu.harga * menu.diskon) / 100

        if (aksi == 'tambah') {
            newKeranjang[filterIndex] = itemPlus
            const tambahSubTotal = currentSubTotal + menu.harga
            const updatePajak = tambahSubTotal / 10
            const updatedDiskon = currentDiskon + getDiskon
            const updateTotal = tambahSubTotal + updatePajak - updatedDiskon
            setSubTotal(tambahSubTotal.toLocaleString("id-ID"))
            editSubTotal(tambahSubTotal)
            setPajak(updatePajak.toLocaleString("id-ID"))
            setDiskon(updatedDiskon.toLocaleString("id-ID"))
            setTotal(updateTotal.toLocaleString("id-ID"))
            editStatusTambahan('tambah')
        } else {
            newKeranjang[filterIndex] = itemMin
            const kurangSubTotal = currentSubTotal - menu.harga
            const updatePajak = kurangSubTotal / 10
            const updatedDiskon = currentDiskon - getDiskon
            const updateTotal = kurangSubTotal + updatePajak - updatedDiskon
            setSubTotal(kurangSubTotal.toLocaleString("id-ID"))
            setPajak(updatePajak.toLocaleString("id-ID"))
            setDiskon(updatedDiskon.toLocaleString("id-ID"))
            setTotal(updateTotal.toLocaleString("id-ID"))
            editStatusTambahan('kurang')
        }
        editKeranjang(newKeranjang)
    }



    return (
        <div className="w-full p-2 relative">
            <div className="w-[90%] m-auto h-max bg-black z-40 rounded-xl left-0 fixed" id={isAlert ? 'alert-open' : 'alert-close'}>
                {Alert(`✔ Anda Membayar Sebesar ${total.toLocaleString('id-ID')}`, 'text-[green]')}
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
            <div className="fixed w-full h-[300px] z-10 bottom-0 left-0 p-2 flex flex-col gap-3">
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
                        <p className="text-gray-400">Rp {subTotal}</p>
                        <p className="text-gray-400">Rp {pajak}</p>
                        <p className="text-[crimson]">Rp {diskon}</p>
                        <p className="text-green-500 font-semibold">Rp {total}</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold">Metode Pembayaran</p>
                </div>
                <div className="w-full h-[70px]  rounded-xl flex justify-between">
                    <button className="w-[20%] border-b h-full rounded-xl focus:bg-[#50cc50]">Gopay</button>
                    <button className="w-[20%] border-b h-full rounded-xl focus:bg-[#00ccff]">Dana</button>
                    <button className="w-[20%] border-b h-full rounded-xl focus:bg-[orange]">Shopee</button>
                    <button className="w-[20%] border-b h-full rounded-xl focus:bg-[#cc82ee]">Ovo</button>
                </div>
                <div className="w-full flex justify-center">
                    <button className="w-[80%] m-auto text-center bg-black text-white py-2 rounded-full" onClick={bayarBelanja}>Bayar</button>
                </div>
            </div>
        </div>
    )
}