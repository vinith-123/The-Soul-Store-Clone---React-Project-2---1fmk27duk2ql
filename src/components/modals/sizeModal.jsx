import { useState } from "react";
import Portal from "../portal/portal";
import CloseButton from "../../assets/svg/closeButton";





export default function SizeModal({item, isOpen, onClose}) {
    const {productId, displayImage, productName, price, size, subCategory}= item;

    if(!isOpen) return null;

    return (

        <Portal>
            <div className="flex backdrop-brightness-[0.99] pointer-events-none items-center justify-center w-full md:w-[360px]">
                <div className="rounded-lg md:scale-150 flex flex-col shadow-md items-center justify-center bg-white text-[8px]">
                    <div className="relative px-[1rem] pt-[1.5rem] pb-[1rem] flex font-grey border-b border-[#999]">
                        <div className="w-[2.5rem] h-[2.5rem] bg-[#ffebe7]"> 
                            <img src={displayImage} alt="No Image" />
                        </div>

                        <div className="ml-[10px]">
                            <p className="font-bold">{productName}</p>
                            <p className="text-[#999]">{subCategory}</p>

                            <p className="text-[12px] font-bold">₹ {price}</p>
                        </div>

                        <div className="absolute top-[5px] right-1/2 cursor-pointer" onClick={() => console.log("clicked")}>
                            <CloseButton width={"16px"} height={"16px"} color={"#000000"} effect={"hover:fill-[#e11b23]"} />
                        </div>
                    </div>

                    <div className="w-full px-[1rem] py-[1rem]">
                        <p className="font-bold">Please select a size</p>
                        <div className="font-grey flex my-[10px]">
                            {
                                size.map(item => {
                                    return (
                                        <button key={item} className="flex items-center justify-center w-[5px] h-[5px] p-[10px] border rounded-full mr-[1rem] cursror-pointer
                                            font-semibold cursor-pointer    
                                            hover:border-[#e11b23] hover:bg-[#e11b23] hover:text-white">
                                            {item}
                                        </button>
                                    )
                                })
                            }
                        </div>

                        <div className="w-full flex justify-center items-center bg-[#999] 
                            text-white py-[5px] rounded-[4px] mt-[10px] cursor-pointer">
                            ADD TO CART
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
    
}