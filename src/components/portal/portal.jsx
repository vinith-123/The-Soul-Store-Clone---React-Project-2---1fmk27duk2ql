import { createPortal } from "react-dom";



export default function Portal({children}) {
    // function handleClick(e) {
    //     if(e.target === e.currentTarget) {
    //         onClose();
    //     }
    // };

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
            {children}
        </div>,
        document.body
    )
}