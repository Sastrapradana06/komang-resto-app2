
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Footer() {
    const [isFooter, setIsFooter] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsFooter(false)
        }, 3000)
    }, [setIsFooter, isFooter])
    return (
        <div className="w-[100%] border-b bg-[#1b1b1b] p-1  relative bottom-0" id={isFooter ? 'footer-open' : 'footer-close'}>
            <div className="w-full flex items-center justify-center text-white">
                <AiOutlineCopyrightCircle size={20} fill="crimson"/>
                <p className="text-white text-[.8rem]">Sastra Pradana | 2023</p>
            </div>
        </div>
    )
}