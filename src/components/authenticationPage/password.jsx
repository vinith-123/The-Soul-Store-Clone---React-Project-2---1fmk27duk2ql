import { useState } from "react";
import FilledEye from "../../assets/svg/filledEye";
import FilledSlashedEye from "../../assets/svg/filledSlashedEye";






export default function Password({callbackFunction, placeholderText, isPasswordCorrect}) {
    const [isPasswordHidden, set_hiddenness_of_password]= useState(true);

    return (
        <>
            <div className="relative">
                <input type={isPasswordHidden ? "password" : "text"} placeholder={placeholderText} name="password" inputMode='text' required
                    className={`w-full border mb-[0.5rem] border-[#ccc] rounded-[4px] pl-[8px] py-[6px] pr-[50px]
                        text-black 
                        ${(isPasswordCorrect === true || isPasswordCorrect === undefined) ? "border-[#ccc]" : "border-[#ff0000]"}`} 
                    onChange={(event) => callbackFunction(event)}/>
                    <div className="absolute right-[13px] top-[7px]">
                        {
                            isPasswordHidden ? 
                                <div className="cursor-pointer"
                                     onClick= {() => set_hiddenness_of_password(false)}>
                                    <FilledEye width= {"20px"} height={"20px"}  />
                                </div> 
                                : 
                                <div className="cursor-pointer"
                                     onClick= {() => set_hiddenness_of_password(true)}>
                                    <FilledSlashedEye width= {"20px"} height={"20px"} />
                                </div>
                        }
                    </div>
            </div>

            {
                (isPasswordCorrect !== null && isPasswordCorrect === false) && 
                <div className="text-[14px] font-semibold text-[#ff0000] mt-[-0.5rem]">
                    Not matched
                </div>
            }
        </>
        
    )
}