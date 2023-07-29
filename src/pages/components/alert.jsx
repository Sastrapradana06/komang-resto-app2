export default function Alert(teks, color) {
    return (
        <div className="w-full h-[40px] p-2">
            <p className={`${color} font-semibold text-center text-[.8rem] leading-[30px]`}>{teks}</p>
        </div>
    )
}