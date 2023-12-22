import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { Link } from "react-router-dom";






export default function OrederBill({isChecked}) {

    // const isChecked= props?.isChecked;

    const {totalPrice, itemsInCart}= useContext(UserContext);
    // const {isMobile}= useContext(ModalContext);

    const [finalPrice, setFinalPrice]= useState(50);

    const [bill, setBill]= useState([
        {name: "Cart Total", total: totalPrice },
        {name: "GST", total: (totalPrice * 10) / 100},
        {name: "Shipping Charges", total: 0},
    ]);

    // console.log("bill: ", bill);
    
    const sumOfPrices= bill.reduce((price, item) => {
        // console.log("price: ",price);
        return price + item.total;
    }, 0);

    useEffect(() => {
        setBill([
            {name: "Cart Total", total: totalPrice },
            {name: "GST", total: (totalPrice * 10) / 100},
            {name: "Shipping Charges", total: 0},
        ]);
    }, [totalPrice])



    useEffect(() => {
        // console.log("total price: ", sumOfPrices);

        // console.log("is checked: ", isChecked);

        setFinalPrice(sumOfPrices + 25);
        // console.log('total price in cart: ', totalPrice);

        if(isChecked) {
            setFinalPrice(old => old + 25);
        } else {
            setFinalPrice(old => old - 25);
        }
    }, [totalPrice, isChecked])

    // console.log("is checked: ", isChecked);


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
                    {/* {
                        console.log(isChecked)
                    } */}

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
                        <p>₹ {finalPrice}</p>
                    </div>
                </div>
            </>
    )
}