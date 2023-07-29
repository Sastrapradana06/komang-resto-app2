import { useState } from 'react'
import { useAppStore } from '../../store/app-store'
import Logo from './logo.svg'
import { shallow } from 'zustand/shallow'
import { Link } from 'react-router-dom'


export default function Home() {
    const [userName, setUserName] = useState('')
    const [nomorMeja, setNomorMeja] = useState('')
    const [isInput, setIsInput] = useState(true)
    const [getDataUser, setIsInputUser] = useAppStore((state) => [state.getDataUser, state.setIsInputUser], shallow)
    // console.log(dataUser);

    function getUser() {
        if(userName && nomorMeja) {
            const dataUser = { userName, nomorMeja }
            getDataUser(dataUser)
            setIsInputUser(true)
        } else {
            setIsInput(false)
        }
        setUserName('')
        setNomorMeja('')
    }



    return (
        <div className="w-full flex flex-col gap-6 p-1 h-[100vh]">
            <div className='mt-6 w-[100%] flex justify-center'>
                <img src={Logo} alt="" className='w-[50px] fill-[crimson] animate-pulse' />
            </div>
            <div className="w-full flex flex-col gap-4">
                <div className="w-full h-[70px] text-[1.4rem] text-center">
                    <p className='font-timeline'>Hallo Sahabat👋, Selamat datang di</p>
                    <p className='font-timeline'>Komang Resto !</p>
                </div>
                <div className="w-[90%] m-auto  text-center text-[.9rem]">
                    <p className='text-gray-500'>Silakan masukkan nama Anda dan Nomor Meja dibawah sini!. Kemudian Anda dapat memilih menu varian terbaik.</p>
                </div>
            </div>
            <div className="w-full  flex flex-col gap-4 p-2 ">
                <div className="flex flex-col gap-1  text-[.9rem]">
                    <label htmlFor="">Name Anda</label>
                    <input
                        type="text"
                        className='py-3 px-2 rounded-lg'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1 text-[.9rem]">
                    <label htmlFor="">Nomor Meja</label>
                    <input
                        type="text"
                        className='py-3 px-2 rounded-lg'
                        value={nomorMeja}
                        onChange={(e) => setNomorMeja(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full mt-16 p-1 flex justify-center text-[.9rem]">
                <button className='w-[90%] bg-[#1b1b1b] text-white px-3 py-2 rounded-3xl' onClick={getUser}>
                    <Link to='/menu'>Done</Link>
                </button>
            </div>
            <div className="text-center">
                {!isInput && (
                    <p className='text-[crimson]'>Input Tidak Boleh Kosong</p>
                    // alert('yyy')
                )}
            </div>
        </div>
    )
}