import { useContext, useState } from "react"
import { ModalContext } from "../../context/modalContext"
import Logo from "../../assets/svg/logo";
import { Link } from "react-router-dom";
import RenderNavbarTag from "./renderNavberTag";
import Menu from "../../assets/svg/menu";
import SearchIcon from "../../assets/svg/searchIcon";
import Empty_heart from "../../assets/svg/emptyHeart";
import Cart from "../../assets/svg/cart";
import PersonFilled from "../../assets/svg/personFilled";
import { TagContext } from "../../context/tagContext";
import { UserContext } from "../../context/userContext";





export default function Apparel({list}) {

    const {isMobile, setIsMenuOpened}= useContext(ModalContext);
    const {shopByThemes}= useContext(TagContext);
    const {isAuthenticated}= useContext(UserContext);

    const [isHovered, setIsHovered]= useState(false);
    // const [isHoveredOnProfile, setIsHoveredOnProfile]= useState(false);

    const [profileOptions, setProfileOptions]= useState([
        {option: "Orders", route: "/orders"},
        {option: "Gift Vouchers", route: "/my-gift-vouchers"},
        {option: "TSS Money", route: "/my-money"},
        {option: "TSS Points", route: "/my-points"},
        {option: "Saved Cards", route: "/my-saved-cards"},
        {option: "Profile", route: "/profile"},
        {option: "FAQs", route: "/faqs"},
        {option: "Submit Design", route: "/submit-art-work"},
    ]);

    function renderProfileModal(list) {
        console.log("list: ", list);
        return (
            <ul className="absolute top-[65px] right-0 font-semibold text-[15px] w-max min-w-[10rem]
                shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2) z-10 font-grey]">
                <div className="p-[1rem] bg-white">
                    {
                        list.map((item) => {
                            const {option, route}= item;

                            // console.log(routeName);
                            return (
                                <li key={option} className="py-[3px] hover:text-[#e11b23]">
                                    <Link to={route}>
                                        <div className="flex">
                                            <p>{option}</p>
                                            
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <li key={"sign-out"} className="py-[3px] cursor-pointer hover:text-[#e11b23]">
                        <div className="flex">
                            <p>Sign Out</p>
                        </div>
                    </li>
                </div>
            </ul>
        )
    }

    function renderAccountSection() {
        return (
            <div className="flex items-center">
                <div className="px-[8px] lg:px-[1rem] py-[16px]">
                    <SearchIcon width={"22px"} height={"22px"} color={"#585958"} />
                </div>

                <Link to={"/"}>
                    <div className="px-[8px] lg:px-[1rem] py-[16px] border-b-[5px] border-white 
                        hover:border-b-[5px] hover:border-[#e11b23] hover:bg-[#fbfbfb]">
                        <Empty_heart width={"22px"} height={"22px"} color={"#585958"} />
                    </div>
                </Link>
                
                
                <Link to={"/"}>
                    <div className="px-[8px] lg:px-[1rem] py-[19px] border-b-[5px] border-white 
                        hover:border-b-[5px] hover:border-[#e11b23] hover:bg-[#fbfbfb]">
                        <Cart width={"22px"} height={"22px"} color={"#585958"} />
                    </div>
                </Link>
                

                {
                    !isMobile && 
                    <div className="relative" 
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}>
                        <Link to={isAuthenticated ? "/" : "/authentication"}>
                            <div className="px-[10px] lg:px-[1rem] py-[19px] border-b-[5px] border-white 
                            hover:border-b-[5px] hover:border-[#e11b23] hover:bg-[#fbfbfb]">
                                <PersonFilled width={"22px"} height={"22px"} color={"#585958"} />
                            </div>
                        </Link>

                        {
                            (isHovered && isAuthenticated) && 
                                renderProfileModal(profileOptions)
                        }
                    </div>
                    
                }
            </div>
        )
    }

    // function renderThemeTages({list}) {
    //     return (
    //         list.map(item => {
    //             const {tag, routeName, isNewCollection}= item;

    //             return (
                    
    //             )
    //         })
    //     )
    // }

    // function renderShopByThemes() {
    //     // console.log("shop by themes: ", shopByThemes);
    //     return (
    //         <ul className="absolute flex">
    //             {
    //                 shopByThemes.map(item => {
    //                     const {theme, tagList}= item;
    //                     // console.log("taglist: ", tagList);
    //                     return (
    //                         <div key={theme} className="relative flex flex-col flex-wrap">
    //                             <p className="font-red font-bold">{theme}</p>

    //                             <RenderModal list={tagList} />
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </ul>
    //     )
    // }

    return (
        <>
            {
                isMobile ? 
                <div className="flex justify-between items-center w-full px-[1rem]
                    shadow-[0_2px_3px_rgba(0,0,0,0.2)]">
                    <div onClick={() => setIsMenuOpened(true)}>
                        <Menu width={"30px"} height={"30px"} color={"#585958"} />
                    </div>

                    <div>
                        <Logo width={"16px"} height={"16px"} color={"#f65757"} />
                    </div>

                    {
                        renderAccountSection()
                    }
                </div>
                :
                <div className=" w-full px-[3rem]
                    shadow-[0_2px_3px_rgba(0,0,0,0.2)]">
                    <div className="relative flex justify-between">
                        <div className="flex items-center">
                            <div className="xl:absolute xl:top-[-25px] xl:left-0">
                                <Logo width={"23px"} height={"16px"} color={"#f65757"} />
                            </div>

                            <ul className="flex flex-wrap items-center ml-[2rem] xl:ml-[10rem]">
                                {
                                    list.map(item => {
                                        const {category, isRoute, route, tagList}= item;
                                        
                                        
                                        return <li key={category} className="pl-[1rem]">
                                            {
                                                isRoute ?
                                                    <Link to={route}>
                                                        <p className="py-[19px] px-[10px] border-b-[5px] border-white hover:text-[#e11b23] 
                                                            hover:border-b-[5px] hover:border-[#e11b23]">{category}</p>     
                                                    </Link>
                                                :
                                                    <RenderNavbarTag category={category} list={tagList} /> 
                                            }
                                        </li>
                                    })
                                }

                                {/* <li key={"shopByThemes"} className="w-full">
                                    <div className="relative group flex items-center py-[18px] px-[10px] cursor-pointer" 
                                        onMouseOver={() => setIsHovered(true)}
                                        onMouseOut={() => setIsHovered(false)}>
                                        <p className="group-hover:text-[#e11b23]">SHOP BY THEMES</p>

                                        {
                                            <div className="ml-[5px]">
                                                    {
                                                        isHovered ? 
                                                            <ChevronUp width={"15px"} height={"15px"} effect={"gouup-hover:fill-[#e11b23]"} color={"#585958"} />
                                                        :
                                                            <ChevronDown width={"15px"} height={"15px"} effect={"group-hover:fill-[#e11b23]"} color={"#585958"} />

                                                    }
                                            </div>
                                        }
                                        
                                        {
                                            isHovered && 
                                            <div className="flex w-max">
                                                {
                                                    renderShopByThemes()
                                                }
                                            </div>
                                        }
                                    </div>
                                </li> */}


                                <li key={"membership"} className="ml-[1rem] py-[18px] px-[10px] hover:text-[#e11b23]">
                                    <Link to="/membership">
                                        <p>
                                            MEMBERSHIP
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                            
                            
                            
                        </div>

                        {
                            renderAccountSection()
                        }
                    </div>
                </div>
            }
        </>
    )
}