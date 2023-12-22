import { useContext, useState } from "react";
import CloseButton from "../../assets/svg/closeButton";
import Portal from "../portal/portal";
import { ModalContext } from "../../context/modalContext";
import { UserContext } from "../../context/userContext";
import { updateUserInfo } from "../../utils/utilities";
import { useNavigate } from "react-router-dom";






export default function AddAddressModal({ isOpen, onClose, heading }) {

    const {token, projectId, user, saveUser}= useContext(UserContext);
    const {userData}= useContext(ModalContext);

    const navigate= useNavigate();

    const [userInfo, setUserInfo]= useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        phone: "",
    });

    const [error, setError]= useState("");

    if (!isOpen) return null;

    function handleChange(event) {
        const name= event.target.name;
        const value= event.target.value;

        setUserInfo((old) => {
            return {
                ...old,
                [name]: value,
            }
        });
        setError("");
    }

    function formValidation(event) {
        event.preventDefault();

        if(!/^[a-zA-Z]+(?:['\s-][a-zA-Z]+)*$/.test(userInfo.firstName)) {
            setError("*First name should only contain letters and spaces.");
            return;
        } else if (!/^[a-zA-Z]+(?:['\s-][a-zA-Z]+)*$/.test(userInfo.lastName)) {
            setError("*Last name should only contain letters and spaces.");
            return;
        } else if (userInfo.zipCode.length < 6 || userInfo.zipCode.length > 10) {
            setError("*Postal code is not correct.");
            return;
        } else if (!/[0-9]/.test(userInfo.phone) || userInfo.phone.length !== 10 ) {
            setError("*Enter valid mobile number.");
            return;
        } 

        updateUserInfo(userData.updateData ,userInfo, user, saveUser, token, projectId, onClose)
        // navigate("/");
    }   

    // console.log("user info: ", user);

    return (
        <Portal effect={"backdrop-grayscale backdrop-blur-[4px] backdrop-brightness-50 animate-vertical-slide"}>
            <div className="p-[1rem] w-[16rem]">
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
                <form className="w-full pt-[10px]" onSubmit={(e) => formValidation(e)}>
                    <div className="w-full">
                        {/* name section */}
                        <div className="w-full flex gap-[10px] flex-col items-start sm:flex-row md:justify-start">
                            <div className="w-full mt-[10px]">
                                <input type="text" name="firstName" placeholder="First Name*" required
                                className={`w-full border rounded-[5px] px-[10px] py-[5px]`}
                                onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="w-full mt-[10px]">
                                <input type="text" name="lastName" placeholder="Last Name*" required
                                className={`w-full border rounded-[5px] px-[10px] py-[5px]`}
                                onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        {/* address section */}
                        <div className="mt-[10px]">
                            <input type="text" name="street" placeholder="Street Name*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`}
                            onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="text" name="city" placeholder="City*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`}
                            onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="text" name="state" placeholder="State*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`}
                            onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="text" name="country" placeholder="Country*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`}
                            onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="number" name="zipCode" placeholder="Postal Code*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`}
                            onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="mt-[10px]">
                            <input type="tel" name="phone" placeholder="Mobile Number*" required
                            className={`w-full border rounded-[5px] px-[10px] py-[5px]`}
                            onChange={(e) => handleChange(e)} />
                        </div>

                        {
                            error != "" && 
                            <div className="mt-[10px] bg-[#ffe3e4] font-red px-[5px]">
                                {error}
                            </div>
                        }
                    </div>
                    
                    {/* submition section */}
                    
                    <div className="w-full flex items-center justify-end gap-[10px] font-bold mt-[20px]
                        border-t pt-[10px]">
                        <button className="px-[10px] py-[5px] border border-[#e11b23] rounded-[5px]
                            font-red hover:bg-[#e11b23] hover:text-white"
                            onClick={() => onClose()}>
                            Cancel
                        </button>

                        <button type="submit" className="px-[10px] py-[5px] border border-[#117e7e] rounded-[5px] 
                            font-green hover:bg-[#117e7e] hover:text-white">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Portal>
    );
}