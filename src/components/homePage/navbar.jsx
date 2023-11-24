import { NavLink, Navigate, Outlet } from "react-router-dom";




export default function Navbar() {

    const navLinks= [
        {link: "WOMEN", route: "/women"},
        {link: "MEN", route: "/men"},
        {link: "KIDS", route: "/kids"}
    ];


    return (
        <div className="text-[20px] bc-red w-full text-white">
            <div className="flex flex-col items-center justify-center w-full lg:w-[930px] xl:w-[1130px] 2xl:w-full">
                <div className="flex items-center justify-between w-full p-[1rem] text-[14px] 
                    bg-[#e6e7e8] font-grey lg:hidden">
                    <p>
                        Download Our App & Get 10% Additional Cashback On All Orders
                    </p>

                    <div className="flex flex-nowrap ml-[1rem]">
                        <button className="border-2 border-black rounded-[10px] px-[1rem] py-[5px]">
                            OPEN APP
                        </button>
                    </div>
                </div>

                <div className="flex justify-center w-full lg:justify-between 2xl:justify-around">
                    <div className="flex text-[14px] font-bold lg:ml-[8rem] xl:ml-[15rem]">
                        {
                            navLinks.map(item => {
                                const {link, route}= item;

                                return (
                                    <NavLink key={link} to={route} className={({ isActive }) =>
                                        isActive ? "bg-white font-grey" : "bc-red text-white border-x-[0.5px] border-black"}>
                                            <div className="px-[25px] py-[12px]">
                                                {link}
                                            </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    
                    <Outlet />

                    <div className="text-[13px] items-center hidden lg:flex">
                        <div className="m-[10px]">
                            <a href="#">TRACK ORDER</a>
                        </div>
                        <div className="m-[10px]">
                            <a href="#">CONTACT US</a>
                        </div>
                        <div className="m-[10px]">
                            <a href="#">DOWNLOAD APP</a>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}