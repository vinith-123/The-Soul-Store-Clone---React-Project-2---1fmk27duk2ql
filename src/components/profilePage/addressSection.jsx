import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import NavbarForProfile from "./navBarForProfile";
import Address from "../common/address";







export default function AddressSection() {
    const {isMobile}= useContext(ModalContext);
    

    return (
        <>
            {
                isMobile && <NavbarForProfile />
            }
            <div className="w-full px-[1rem] text-[15px] text-[#a7a9ac]">
                <div className="flex w-full items-center justify-start px-[2rem] text-[15px] text-[#999]">
                    <Address />
                </div>
            </div>
        </>
    )
}