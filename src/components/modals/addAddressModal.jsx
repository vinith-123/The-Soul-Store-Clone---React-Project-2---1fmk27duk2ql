import { useContext } from "react";
import CloseButton from "../../assets/svg/closeButton";
import Portal from "../portal/portal";
import { ModalContext } from "../../context/modalContext";






export default function AddAddressModal({ isOpen, onClose, heading }) {

    if (!isOpen) return null;

    return (
        <Portal>
            <div className="p-[10px] w-[16rem]">
                {/* heading section */}
                <div className="flex items-center justify-between border-b pb-[10px]">
                    <p className="text-[20px] font-semibold">{heading}</p>

                    <div className="group rounded-full duration-300 cursor-pointer hover:bg-[#e11b23]"
                        onClick={() => onClose()}>
                        <CloseButton width={"20px"} height={"20px"} color={"#000000"} 
                            effect={"group-hover:fill-[#ffffff]"} />
                    </div>
                </div>

                {/* form section */}
                <form className="w-full pt-[10px]">
                    <div className="w-full">
                        {/* name section */}
                        <div className="w-full flex gap-[10px] flex-col items-start sm:flex-row md:justify-start">
                            <div className="w-full mt-[10px]">
                                <input type="text" name="firstName" placeholder="First Name*" required
                                className={`w-full border rounded-[5px] px-[10px] py-[5px]`} />
                            </div>
                            <div className="w-full mt-[10px]">
                                <input type="text" name="lastName" placeholder="Last Name*" required
                                className={`w-full border rounded-[5px] px-[10px] py-[5px]`} />
                            </div>
                        </div>

                        {/* address section */}
                        <div className="mt-[10px]">
                            <input type="text" name="street" placeholder="Street Name*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="text" name="city" placeholder="City*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="text" name="state" placeholder="State*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="text" name="country" placeholder="Country*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="number" name="zipCode" placeholder="Postal Code*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="tel" name="phone" placeholder="Mobile Number*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`} />
                        </div>
                    </div>
                    
                    {/* submition section */}
                    
                    <div className="w-full flex items-center justify-end gap-[10px] font-bold mt-[20px]
                        border-t pt-[10px]">
                        <button className="px-[10px] py-[5px] border border-[#e11b23] rounded-[5px]
                            font-red hover:bg-[#e11b23] hover:text-white"
                            onClick={() => onClose()}>
                            Cancel
                        </button>

                        <button className="px-[10px] py-[5px] border border-[#117e7e] rounded-[5px] 
                            font-green hover:bg-[#117e7e] hover:text-white">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Portal>
    );
}