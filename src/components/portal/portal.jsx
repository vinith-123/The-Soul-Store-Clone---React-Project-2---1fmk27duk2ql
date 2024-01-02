import { createPortal } from "react-dom";



export default function Portal({children, effect}) {

    return createPortal(
        <div className={`fixed w-full h-full  overflow-hidden inset-0 z-50 flex items-center 
            justify-center ${effect}`}>
            <div className="flex items-center justify-center w-full md:w-[360px]">
                <div className="rounded-lg md:scale-150 flex flex-col shadow-md items-center justify-center bg-white text-[12px]">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}