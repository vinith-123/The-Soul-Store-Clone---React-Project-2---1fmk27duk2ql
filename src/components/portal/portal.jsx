import { createPortal } from "react-dom";



export default function Portal({onClose, children}) {
    function handleClick(e) {
        if(e.target === e.currentTarget) {
            onClose(e);
        }
    };

    return createPortal(
        <div onClick={handleClick} 
            className="fixed inset-0 z-50 flex items-center justify-center ">
            {children}
        </div>,
        document.body
    )
}