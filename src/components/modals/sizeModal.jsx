import { useContext, useState } from "react";
import Portal from "../portal/portal";
import CloseButton from "../../assets/svg/closeButton";
import { Link } from "react-router-dom";
import { addInCart, manageWhishlist } from "../../utils/utilities";
import { UserContext } from "../../context/userContext";





export default function SizeModal({item, isOpen, onClose}) {

    const {itemsInCart, setItemsInCart, setTotalPrice, token, projectId, whishlistItems, setWhishlistItems}= useContext(UserContext);

    const {productId, displayImage, productName, price, size, subCategory}= item;

    const [isSizeSelected, setIsSizeSelected]= useState(false);
    const [choosenSize, setChoosenSize]= useState("");


    function handleClick(event) {
        const value= event.target.value;

        if(value === choosenSize) {
            setChoosenSize("");
            setIsSizeSelected(false);
        } else {
            setChoosenSize(value);
            setIsSizeSelected(true);
        }
    }

    function addToCart(product) {
        onClose();
        addInCart(itemsInCart, setItemsInCart, product, setTotalPrice, token, projectId, 1, choosenSize);
        manageWhishlist(whishlistItems, setWhishlistItems, product, token, projectId);
    }

    if(!isOpen) return null;

    return (

        <Portal effect={"backdrop-grayscale backdrop-blur-[4px] backdrop-brightness-50 animate-vertical-slide"}>
            <div className="relative px-[1rem] pt-[1.5rem] pb-[1rem] flex font-grey border-b border-[#999]">
                <div className="w-[2.5rem] h-[2.5rem] bg-[#ffebe7]"> 
                    <img src={displayImage} alt="No Image" />
                </div>

                <div className="ml-[10px]">
                    <Link to= {`/product/${productId}`}>
                        <p className="font-bold cursor-pointer hover:text-[#000000]">{productName}</p>
                    </Link>
                    <p className="text-[#999]">{subCategory}</p>

                    <p className="text-[12px] font-bold">₹ {price}</p>
                </div>

                <div className="absolute top-[5px] right-[5px] cursor-pointer rounded-full group duration-300 
                    hover:bg-[#e11b23]" 
                    onClick={() => onClose()}>
                    <CloseButton width={"20px"} height={"20px"} color={"#000000"} effect={" group-hover:fill-[#ffffff]"} />
                </div>
            </div>

            <div className="w-full px-[1rem] py-[1rem]">
                <p className="font-bold">Please select a size</p>
                <div className="font-grey flex my-[10px]">
                    {
                        size.map(item => {
                            return (
                                <button key={item} value={item} 
                                    className={`flex items-center justify-center w-[5px] h-[5px] p-[15px] 
                                        rounded-full mr-[1rem] cursror-pointer
                                        font-semibold cursor-pointer ${choosenSize === item ? "border-[#e11b23] bc-red text-white"
                                            : "border hover:border-[#e11b23] hover:bg-[#e11b23] hover:text-white"} `}
                                    onClick={(event) => handleClick(event)}>
                                    {item}
                                </button>
                            )
                        })
                    }
                </div>

                <div className={`w-full flex justify-center items-center 
                    text-white py-[5px] rounded-[4px] mt-[10px] cursor-pointer
                    ${isSizeSelected ? "bc-green border border-[#117a7a] hover:bg-white hover:text-[#117a7a]" 
                        : "bg-[#999] pointer-events-none"}`}
                    onClick={() => addToCart(item)}>
                    ADD TO CART
                </div>
            </div>
        </Portal>
    )
    
}