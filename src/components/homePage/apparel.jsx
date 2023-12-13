import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../../context/modalContext"
import Logo from "../../assets/svg/logo";
import { Link, useNavigate } from "react-router-dom";
import RenderNavbarTag from "./renderNavberTag";
import Menu from "../../assets/svg/menu";
import Empty_heart from "../../assets/svg/emptyHeart";
import PersonFilled from "../../assets/svg/personFilled";
import { UserContext } from "../../context/userContext";
import Searchbar from "./searchBar";
import CartIcon from "../../assets/svg/cartIcon";
import CloseButton from "../../assets/svg/closeButton";
import { TagContext } from "../../context/tagContext";
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";





export default function Apparel({list}) {

    const {isMobile}= useContext(ModalContext);
    const {apparelForMen, apparelForWomen, apparelForKids}= useContext(TagContext);
    const {isAuthenticated, setIsAuthenticated, save_user_and_token}= useContext(UserContext);

    const [isHovered, setIsHovered]= useState(false);
    // const [isHoveredOnProfile, setIsHoveredOnProfile]= useState(false);

    const [isLoggedOut, setIsLoggedOut]= useState(false);
    const [isClickedOnMenu, setIsClickedOnMenu]= useState(false);
    const [isDropDownActive, setIsDropDownActive]= useState(false);

    const [activeRoute, setActiveRoute]= useState(
        {
            men: true,
            women: false,
            kids: false,
        }
    );
    const [listInMenubar, setListInMenubar]= useState();

    const navigate= useNavigate();

    const [profileOptions, setProfileOptions]= useState([
        {option: "Orders", route: "orders"},
        {option: "Gift Vouchers", route: "my-gift-vouchers"},
        {option: "TSS Money", route: "my-money"},
        {option: "TSS Points", route: "my-points"},
        {option: "Saved Cards", route: "my-saved-cards"},
        {option: "Profile", route: "profile"},
        {option: "FAQs", route: "faqs"},
        {option: "Submit Design", route: "submit-art-work"},
    ]);

    const [aboutSection, setAboutSection]= useState([
        {
            title: "Careers", route: ""
        },
        {
            title: "Store Near Me", route: ""
        },
        {
            title: "About Us", route: ""
        },
        {
            title: "T&C", route: ""
        },
        {
            title: "Privacy Policy", route: ""
        },
    ])

    useEffect(() => {
        if(isLoggedOut) {
            localStorage.removeItem("authToken");

            localStorage.removeItem("userInfo");
            save_user_and_token(null, null);
            setIsAuthenticated(false);
            navigate("/men");
        }
    }, [isLoggedOut]);

    useEffect(() => {
        if(activeRoute.men) {
            setListInMenubar(apparelForMen);
        } else if(activeRoute.women) {
            setListInMenubar(apparelForWomen);
        } else if(activeRoute.kids) {
            setListInMenubar(apparelForKids);
        }
    }, [activeRoute]);


    function handleChange(val) {

        const key= val.toLowerCase();

        setActiveRoute((old) => {
            const updatedState= {};

            Object.keys(old).forEach((route) => {
                updatedState[route]= route === key;
            })

            return updatedState;
        });
    }

    function menuModal() {
        return (
            <div className="absolute bg-white top-[-3rem] left-0 w-full h-full z-20 sm:px-[1rem]">
                <div className="flex justify-between items-center py-[1rem]">
                    <div className="flex items-center">
                        <div className="">
                            <Link to={"/men"}>
                                <Logo width={"16px"} height={"16px"} color={"#f65757"} />
                            </Link>
                        </div>
                        
                        <div className="ml-[1rem] text-[13px] border border-[#117a7a] text-[#117a7a] 
                            rounded-[5px] cursor-pointer
                            hover:bg-[#117a7a] hover:text-white 
                            sm:ml-[3rem]">
                            <Link to={"/authentication"}>
                                <p className="px-[1.5rem] py-[7px]">Logon/Register</p>
                            </Link>
                        </div>
                    </div>

                    <div onClick={() => setIsClickedOnMenu(false)} 
                        className="cursor-pointer mr-[5px]">
                        <CloseButton width={"35px"} height={"35px"} effect={"hover:fill-[#e11b23]"} />
                    </div>
                    
                </div>

                <div className="py-[1rem] w-full h-max px-[1rem] border-b-[5px] border-[#ebebeb] sm:px-0">
                    <nav onClick={(e) => handleChange(e.target.innerText)}
                        className="flex flex-auto justify-between items-center grow h-[2.5rem]
                            w-full font-grey font-semibold text-[15px] bg-[#ebebeb] rounded-[10px]
                            shadow-[0px_0px_20px_-5px_rgba(0,0,0,0.5)]">
                        <p className={`${activeRoute.men ? "bg-white text-black rounded-[10px]" : ""} w-1/3 h-full
                            flex items-center justify-center pt-[2px]`}>Men</p>
                        <p className={`${activeRoute.women ? "bg-white text-black rounded-[10px]" : ""} w-1/3 h-full 
                            flex items-center justify-center pt-[2px]`}>Women</p>
                        <p className={`${activeRoute.kids ? "bg-white text-black rounded-[10px]" : ""} w-1/3 h-full 
                            flex items-center justify-center pt-[2px]`}>Kids</p>
                    </nav>
 
                    <ul className="flex flex-col flex-wrap justify-center mx-[2rem] mt-[1.5rem] 
                        min-h-[2rem] sm:flex-row">
                        {
                            listInMenubar.map(item => {
                                const {category, isRoute, route, tagList}= item;
                                
                                
                                return <li key={category} className="sm:pl-[1.5rem] ">
                                    {
                                        isRoute ?
                                            <Link to={route}>
                                                <p className="py-[19px] w-full border-b-[5px] border-white hover:text-[#e11b23] 
                                                    hover:border-b-[5px] hover:border-[#e11b23] sm:w-max">{category}</p>     
                                            </Link>
                                        :
                                            <RenderNavbarTag category={category} list={tagList}
                                                effect={"w-full py-[19px] border-b-[5px] border-white hover:text-[#e11b23] hover:border-b-[5px] hover:border-[#e11b23] hover:bg-[#fbfbfb] sm:w-max"} /> 
                                    }
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div className="border-b py-[10px] text-[15px] font-semibold px-[1rem]">
                    <Link to={"/membership"}>
                        <p className="text-[#ff7e33] cursor-pointer py-[10px] py-[10px]">Get Extra Discounts With Membership</p>
                    </Link>

                    {
                        isAuthenticated &&
                        <>
                            <Link to={"/profile"}>
                                <p className="cursor-pointer py-[10px]">My Profile</p>
                            </Link>

                            <Link to={"/orders"}>
                                <p className="cursor-pointer py-[10px]">My Orders</p>
                            </Link>
                        </>
                    }

                    <Link to={"/"}>
                        <p className="cursor-pointer py-[10px]">Contact Us</p>
                    </Link>
                    
                    <Link to={"/"}>
                        <p className="cursor-pointer py-[10px]">FAQs</p>
                    </Link>

                    <Link to={"/"}>
                        <p className="cursor-pointer py-[10px]">Community Initiatives</p>
                    </Link>
                </div>
                
                <div className="px-[1rem] text-[14px] font-medium w-full">
                    <div className="group flex justify-between items-center py-[10px]"
                        onClick={() => setIsDropDownActive((old) => !old)}>
                        <p className="group-hover:fill-[#e11b23] text-[15px] font-bold">More</p>

                        <div>
                            {
                                isDropDownActive ?
                                    <ChevronUp width={"15px"} height={"15px"} effect={"group-hover:fill-[#e11b23]"} color={"#585958"} />
                                :
                                    <ChevronDown width={"15px"} height={"15px"} effect={"group-hover:fill-[#e11b23]"} color={"#585958"} />
                            }
                        </div>
                    </div>

                    {
                        isDropDownActive && 
                            <ul className="text-black">
                                {
                                    aboutSection.map(item => {
                                        const {title, route}= item;

                                        return (
                                            <li key={title}>
                                                <Link to={`/${route}`}>
                                                    <p className="py-[5px]">{title}</p>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                    }
                </div>
            </div>
        )
    }


    function renderProfileModal(list) {
        // console.log("list: ", list);
        return (
            <ul className="absolute top-[65px] right-0 font-semibold text-[15px] w-max min-w-[10rem]
                shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2) z-10 font-grey]">
                <div className="p-[1rem] bg-white">
                    {
                        list.map((item) => {
                            const {option, route}= item;

                            // console.log(route);
                            return (
                                <li key={option} className="py-[3px] hover:text-[#e11b23]">
                                    <Link to={`/profile/${route}`}>
                                        <div className="flex">
                                            <p>{option}</p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <li key={"sign-out"} className="py-[3px] cursor-pointer hover:text-[#e11b23]"
                        onClick={() => setIsLoggedOut(true)}>
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
                <Searchbar />

                <Link to={"/mywhishlist"}>
                    <div className="px-[8px] lg:px-[1rem] py-[16px] border-b-[5px] border-white 
                        hover:border-b-[5px] hover:border-[#e11b23] hover:bg-[#fbfbfb]">
                        <Empty_heart width={"22px"} height={"22px"} color={"#585958"} />
                    </div>
                </Link>
                
                
                <Link to={"/cart"}>
                    <div className="px-[8px] lg:px-[1rem] py-[19px] border-b-[5px] border-white 
                        hover:border-b-[5px] hover:border-[#e11b23] hover:bg-[#fbfbfb]">
                        <CartIcon width={"22px"} height={"22px"} color={"#585958"} />
                    </div>
                </Link>
                

                {
                    !isMobile && 
                    <div className="relative" 
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}>
                        <Link to={isAuthenticated ? "/profile" : "/authentication"}>
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
                <>
                    <div className="flex justify-between items-center w-full px-[1rem]
                        shadow-[0_2px_3px_rgba(0,0,0,0.2)]">
                        <div onClick={() => setIsClickedOnMenu(true)}>
                            <Menu width={"30px"} height={"30px"} color={"#585958"} />
                        </div>

                        <Link to={"/men"}>
                            <Logo width={"16px"} height={"16px"} color={"#f65757"} />
                        </Link>

                        {
                            renderAccountSection()
                        }
                    </div>

                    {
                        isClickedOnMenu &&
                        <>
                            {
                                menuModal()
                            }
                        </>
                    }
                </>

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
                                                    <RenderNavbarTag category={category} list={tagList} 
                                                        effect={"py-[19px] px-[10px] border-b-[5px] border-white hover:text-[#e11b23] hover:border-b-[5px] hover:border-[#e11b23] hover:bg-[#fbfbfb]"} /> 
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


                                <li key={"membership"} className="ml-[1rem] py-[19px] px-[10px] border-b-[5px] border-white 
                                    hover:text-[#e11b23] hover:border-b-[5px] hover:border-[#e11b23]">
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