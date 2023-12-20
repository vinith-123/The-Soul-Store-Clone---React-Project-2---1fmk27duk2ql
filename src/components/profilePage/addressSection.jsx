import { useContext, useState } from "react";
import { ModalContext } from "../../context/modalContext";
import NavbarForProfile from "./navBarForProfile";
import { UserContext } from "../../context/userContext";
import AddAddressModal from "../modals/addAddressModal";






export default function AddressSection() {
    const {isMobile}= useContext(ModalContext);
    const {user}= useContext(UserContext);

    // console.log("user data: ", user);

    const {address, name, email}= user;

    const [isModalOpen, setIsModalOpen]= useState(false);
    


    return (
        <>
            {
                isMobile && <NavbarForProfile />
            }
            <div className="w-full p-[1rem] text-[15px] text-[#a7a9ac]">
                <div className="flex w-full items-center justify-center text-[15px] text-[#999]">
                    {
                        address?.length === 0 ?
                        <div className={`${isMobile ? "w-full" : "w-[20rem] h-[20rem]"} border flex flex-col items-center justify-center py-[1rem]`}>
                            <p className="bg-[#ccc] text-white text-[2rem] rounded-full px-[1rem] mb-[10px] cursor-pointer
                                md:text-[3rem] md:px-[25px] md:mb-[1.5rem]"
                                onClick={() => setIsModalOpen(true)}>+</p>
                            <div className="font-bold font-green border border-[#117a7a] rounded-[5px] px-[1rem] py-[5px]
                                hover:bg-[#117a7a] hover:text-white md:px-[2rem] md:py-[10px] cursor-pointer"
                                onClick={() => setIsModalOpen(true)}>
                                ADD ADDRESS
                            </div>
                        </div>
                        :
                        <div>
                            <div>
                                <p>{name}</p>
                                <p>{email}</p>

                                <p>{"none"}</p>
                            </div>
                        </div>
                    }
                </div>

                {
                    isModalOpen &&

                    <AddAddressModal isOpen={isModalOpen} 
                        onClose={() => setIsModalOpen(false)}
                        heading={"Add New Address"} />
                }
            </div>
        </>
    )
}