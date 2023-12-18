import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext"
import VoucherDropDown from "./voucherDropDown";







export default function OrderSectionForCart() {

    const {totalPrice, itemsInCart}= useContext(UserContext);

    const [isChecked, setIsChecked]= useState(false);

    const [finalPrice, setFinalPrice]= useState(50);

    const [bill, setBill]= useState([
        {name: "Cart Total", total: totalPrice },
        {name: "GST", total: (totalPrice * 10) / 100},
        {name: "Shipping Charges", total: 0},
    ]);

    // console.log("bill: ", bill);


    function handleChange(event) {
        // console.log("came: ", event.target.checked);

        setIsChecked(event.target.checked);
    }
    
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

        setFinalPrice(sumOfPrices + 25);
        // console.log('total price in cart: ', totalPrice);

        if(isChecked) {
            setFinalPrice(old => old + 25);
        } else {
            setFinalPrice(old => old - 25);
        }
    }, [totalPrice, isChecked])

    return (
        <div className="w-full md:w-[23rem] md:ml-[2rem]">
            {/* drop-downs section */}
            <div>
                <VoucherDropDown heading={"Apply Coupens"} />
                <VoucherDropDown heading={"Gift Vouchers"} />

                <div className="flex items-center justify-between border-[2px] border-[#f2f2f2] p-[15px]">
                    <div className="flex items-center">
                        <div className="w-[20px]">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABPCAMAAAB23dO3AAAArlBMVEUAAAAQFBwRFx0SFh4Xe3sXeXkQgIAYenoXe3sVenoYeHgYenoYenoXe3sXenoYe3sWeXkXenoRFh0XenoQFx4YfHwQFRsSFhwYe3sYenoXe3sRFh0SFh0QFR0QEBARFx4RFh0UQkYQEBgYeHgXdHUVaGkRFx4WcXIRFh0RIikTU1UTOT4VWFsQFx4QFh0SFx4Ye3sVXV8TLTISFx0XcXITNDkSHyUVSEwUP0QVT1KLhP1RAAAAL3RSTlMAP8CAs0wQwO8wIIBgcM+gUPDwkHBAMJDg39CvoF8Q39CkIPvv6ODFsIh4079vUIzroGYAAAIkSURBVFjDpJRbioQwEAD7Q/IyGoMI6inq/qdbNwymHZalh6kfo9Jlv1A+JI7DweEnJ1/jBl6EKF+yBDpJzKT4h4uLkqNsU70OVtMQAL8m0cQAdZNGBmyNGe/GTPrxDOfd9xM2MeC5qDu/zH1qK9Reu7fJJsAnEbec2uYCqERtZSYVNCrbdfaqf1ANslUHZe67AIvcFNs0fQvStul12J/pW7YWeOtgSNd1fnTM6/TtMjlbnAPcY3ujWMtUxFbo0pRqsKPIRwPoIw1SYNTbuzuxkHj/7A75gKhcbGJj7LY+A6jalcWKB2bVX1fp6xaVy/4H9PmRK2t7tWJ16cIuQsnpbmOrPIfuspNKpXEM45KkAFssTeWT/McP+3S3giAQhGF4dpZuQEIPKv8yy374RjO1+7+xVgpC0jVC6MSHPd2Xgdn1lf6UnRPp2EoriXS/i0stFaBf1eTSVdYVBq18otiBRdHUefkcrLwXsGKiA5B62i6LdiKRtlmbmTYUAC6NMq9lQVYeoAkATRFTAM+xf8ccIJ4itgTWxMBKjdqLHJXNJgCWpPCNXOSGEanfzmdczfkp9r7suGS4HrMDhGxh/uaJh4SmxNrM9cKAGluAfZFEc+yxUcNGDRs1bNSwUcNGDRs1bNSwUcOGrGGyoP4EHID7wyJkGyYN04zorAiJk9dDkZXWR+9MK1DUQ2FGdaoSE17DjIyM8IxCiGP4XI+ZiSwgwwz3IwDQ0MNS7jXyDQAAAABJRU5ErkJggg==" 
                            alt="No Icon" />
                        </div>

                        <p className="ml-[10px] text-[13px] font-bold font-grey">
                            Gift Wrap (₹ 50)
                        </p>
                    </div>

                    <div>
                        <input type="checkbox" className="w-[1rem] h-[1rem] cursor-pointer" onChange={(e) => handleChange(e)} />
                    </div>
                    
                </div>
            </div>

            {/* order details */}

            <div className="mt-[1rem]">
                <p className="15px text-[#999] mb-[1rem] ml-[10px] md:ml-0">BILLING DETAILS</p>

                <div className="text-[13px] font-grey">
                    {
                        bill.map(item => {
                            const {name, total}= item;

                            return (
                                <div key={name} className="flex items-center justify-between border-[2px] border-[#f2f2f2] 
                                    py-[10px] px-[15px]">
                                    <p>{name}</p>

                                    <p className="font-bold">{total}</p>
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
                        <p>₹ {finalPrice}</p>
                    </div>
                </div>

                <button className="w-full mt-[1rem] py-[8px] font-green text-[13px] font-bold border-y border-[#117a7a] 
                    duration-500
                    hover:bg-[#117a7a] hover:text-white md:border md:rounded-[5px]">
                    PLACE ORDER
                </button>
            </div>
        </div>
    )
}