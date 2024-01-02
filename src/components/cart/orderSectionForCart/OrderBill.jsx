import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";






export default function OrederBill({isChecked}) {

    const {totalPrice}= useContext(UserContext);

    const [bill, setBill]= useState([
        {name: "Cart Total", total: totalPrice },
        {name: "GST", total: (totalPrice * 10) / 100},
        {name: "Shipping Charges", total: 0},
    ]);

    useEffect(() => {
        setBill(() => {
            return (
                [
                    {name: "Cart Total", total: totalPrice },
                    {name: "GST", total: (totalPrice * 10) / 100},
                    {name: "Shipping Charges", total: 0},
                ]
            )
        })
    }, [totalPrice])

    return (
        <>
                <p className="15px text-[#999] mb-[1rem] ml-[10px] md:ml-0">BILLING DETAILS</p>

                <div className="text-[13px] font-grey">
                    {
                        bill.map(item => {
                            const {name, total}= item;

                            return (
                                <div key={name} className="flex items-center justify-between border-[2px] border-[#f2f2f2] 
                                    py-[10px] px-[15px]">
                                    <p>{name}</p>

                                    <p className="font-bold">₹ {total}</p>
                                </div>
                            )
                        })
                    }

                    {
                        isChecked &&
                        <div className="flex items-center justify-between border-[2px] border-[#f2f2f2] 
                            py-[10px] px-[15px]">
                            <p>Gift Wrap</p>
                            <p className="font-bold">₹ 50.00</p>
                        </div>
                    }

                    <div className="flex items-center justify-between border-[2px] border-[#f2f2f2] 
                        py-[10px] px-[15px] font-bold">
                        <p>Total Amount</p>
                        <p>₹ {isChecked ? totalPrice + (totalPrice * 0.1) + 50 : totalPrice + (totalPrice * 0.1)}</p>
                    </div>
                </div>
            </>
    )
}