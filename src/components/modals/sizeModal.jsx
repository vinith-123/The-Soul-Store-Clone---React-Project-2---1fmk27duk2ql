import { useState } from "react";
import Portal from "../portal/portal";
import CloseButton from "../../assets/svg/closeButton";





export default function SizeModal({item, onClose}) {
    const [sizeList, setSizeList]= useState(item.size);

    // console.log(item.item.size)
    // const onClose = () => {};

    function handleClick(e) {
        if(e.target === e.currentTarget) {
            onClose(e);
        }
    };


    return (

        <Portal onClose={onClose}>
            <div className="flex w-[2rem] h-[2rem] backdrop-brightness-[0.99] pointer-events-none items-center justify-center">
                <div className=" rounded-xl md:scale-150 flex shadow-md items-center justify-center bg-white">
                    <div className="">
                        {
                            sizeList?.map(item => {
                                // console.log(item);

                                return (
                                    <div>
                                        <div className="">
                                            {item}
                                        </div>

                                        <div onClick={(e) => handleClick(e)}>
                                            <CloseButton color={"#000000"} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Portal>
    )
    
}