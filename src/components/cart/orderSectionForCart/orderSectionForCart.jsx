
import { useState } from "react";
import OrederBill from "./OrderBill";
import CoupenSection from "./coupenSection";
import { Link } from "react-router-dom";







export default function OrderSectionForCart() {

    const [isChecked, setIsChecked]= useState(false);
    

    return (
        <div className="w-full md:w-[23rem] md:ml-[2rem]">
            {/* drop-downs section */}
                <CoupenSection setIsChecked={setIsChecked} />

            {/* order details */}
            <div className="mt-[1rem]">
                <OrederBill isChecked={isChecked} />

                <Link to={"/delivery-address/" + (isChecked ? "true" : "false")}>
                    <button className="w-full mt-[1rem] py-[8px] font-green text-[13px] font-bold border border-[#117a7a] 
                        duration-500
                        hover:bg-[#117a7a] hover:text-white md:border md:rounded-[5px]">
                        PLACE ORDER
                    </button>
                </Link>
            </div>
            
        </div>
    )
}