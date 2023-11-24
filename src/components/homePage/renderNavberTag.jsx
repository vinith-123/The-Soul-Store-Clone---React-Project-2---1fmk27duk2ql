import { useState } from "react"
import ChevronUp from "../../assets/svg/chevronUp";
import { closeTheModal, openTheModal } from "../../utils/utilities";
import { Link } from "react-router-dom";
import ChevronDown from "../../assets/svg/chevronDown";
import RenderModal from "./renderModal";




export default function RenderNavbarTag({category, list}) {

    const [isHovered, setIsHovered]= useState(false);

    return (
        <div className="relative group flex items-center py-[19px] px-[10px] cursor-pointer 
            border-b-[5px] border-white hover:text-[#e11b23] hover:border-b-[5px] hover:border-[#e11b23]
            hover:bg-[#fbfbfb]" 
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}>
            <p className="group-hover:text-[#e11b23]">{category}</p>

            {
                <div className="ml-[5px]">
                        {
                            isHovered ? 
                                <ChevronUp width={"15px"} height={"15px"} effect={"group-hover:fill-[#e11b23]"} color={"#585958"} />
                            :
                                <ChevronDown width={"15px"} height={"15px"} effect={"group-hover:fill-[#e11b23]"} color={"#585958"} />

                        }
                </div>
            }
            
            {
                isHovered && <RenderModal list={list} />
            }
        </div>
    )
}