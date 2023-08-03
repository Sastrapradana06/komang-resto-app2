import { useAppStore } from "../../store/app-store"
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import DiscountMenu from "./DiscountMenu"
import SemuaMenu from "./SemuaMenu";
import { Link } from "react-router-dom";
import { shallow } from 'zustand/shallow'
import Alert from "../components/alert";

export default function Menu() {
    const [dataUser, isInputUser, keranjang, alert] = useAppStore((state) => [state.dataUser, state.isInputUser, state.keranjang, state.alert,], shallow);


    return (
        <div className="w-full flex flex-col gap-4 font-semibold relative">
            <div className="w-full mt-5 flex flex-col gap-1 p-2">
                <div className="w-[90%] m-auto h-max bg-black z-40 rounded-xl left-0 fixed" id={!alert ? 'alert-close' : 'alert-open'}>
                    {Alert('❌ Harap isi data Anda', 'text-[crimson]')}
                </div>
                <div className="flex justify-between w-full text-[.9rem]">
                    <p>Informasi Pengguna</p>
                    <Link to='/'>
                        <p className="text-gray-400">Ubah</p>
                    </Link>
                </div>
                <div className="w-full flex justify-center gap-2 p-1 ">
                    <div className="w-[50%]  h-[65px] rounded-lg bg-[#f4f4f4] flex justify-center flex-col p-2">
                        <p className="text-[.8rem] text-gray-400">Nama Anda</p>
                        <h1 className="font-bold text-[1rem]">{isInputUser ? dataUser.userName : '---'}</h1>
                    </div>
                    <div className="w-[50%]  h-[65px] rounded-lg bg-[#f4f4f4] flex justify-center flex-col p-2">
                        <p className="text-[.8rem] text-gray-400">Nomor Meja</p>
                        <h1 className="font-bold text-[1rem]">{isInputUser ? dataUser.nomorMeja : '---'}</h1>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#f4f4f4] flex flex-col gap-2 relative ">
                <DiscountMenu />
                <div className="w-[90%] rounded-2xl m-auto p-2  justify-between items-center bg-[white] hidden">
                    <input 
                        className=" outline-none px-4 text-[.8rem] bg-transparent"
                        type="text"
                        placeholder="Cari Makanan Kesukaan Anda"
                    />
                    <CiSearch size={25} color="black"/>
                </div>
                <SemuaMenu />
                <button className=" bg-black w-[45%] h-[55px] fixed border-b  z-10 right-5 bg-cart  rounded-full flex justify-center items-center gap-2" id={keranjang.length == 0 ? 'btn-close' : 'btn-open'}>
                    <BsHandbag fill="white" size={20}/>
                    <Link to='/cart'>
                        <p className="text-white text-[.8rem]">Keranjang</p>
                    </Link>
                    <p className="bg-white text-[.8rem] w-[25px] h-[25px] text-center leading-[25px]  rounded-full font-bold">{keranjang.length}</p>
                </button>
            </div>
        </div>
    )
}