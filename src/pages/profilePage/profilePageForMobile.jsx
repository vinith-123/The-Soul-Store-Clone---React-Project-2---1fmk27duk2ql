import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/svg/logo";
import { useContext } from "react";
import { TagContext } from "../../context/tagContext";




export default function ProfilePageForMobile() {
    const {optionsInAccountSection}= useContext(TagContext);

    return (
        <div className="bg-white w-full h-full z-20">
            <div className="flex items-center py-[15px] border-b-[2px] border-[#117a7a]">
                <Link to={"/men"}>
                    <Logo width={"16px"} height={"16px"} color={"#f65757"} />
                </Link>
            
                <div className="ml-[1.5rem]">
                    <p className="text-[19px] font-green font-bold">USER NAME</p>
                    
                    <div className="text-[12px]">
                        <p className="font-bold">(Member/Non Member)</p>
                        <p className="font-red underline underline-offset-1 decoration-[#e11b23]
                            hover:text-[#117a7a] hover:decoration-[#117a7a]">
                            <Link to={"/membership"}>
                                Get Exclusive Membership Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <nav>
                {
                    optionsInAccountSection.map((item, index) => {
                        const {title, route}= item;
                        if(index == optionsInAccountSection.length - 1) {
                            return; 
                        }
                        return (
                            <NavLink to={`${route}`} 
                                className={({isActive}) => isActive ? "font-red" : ""}>
                                <div key={title} className={`p-[1rem] hover:text-[#e11b23] 
                                    ${index < optionsInAccountSection.length - 1 ? "border-b-[2px] border-[#eee]" : ""}`}>
                                    <p>{title}</p>
                                </div>
                            </NavLink>    
                        )
                    })
                }
            </nav>
        </div>
    )
}