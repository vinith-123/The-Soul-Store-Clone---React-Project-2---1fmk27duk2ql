import { useContext, useEffect } from "react";
import useFetchSingleProduct from "../../customHooks/useFetchSingleProduct";
import { ModalContext } from "../../context/modalContext";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";






export default function ProductCardForCart({product}) {

    const {productUrl}= useContext(ModalContext);
    const {setTotalPrice}= useContext(UserContext);

    const {displayImage, price, productId, productName, quantity, ratings, size}= product;

    const [item, error, isLoading]= useFetchSingleProduct(productUrl.getProduct + `${productId}`);

    // useEffect(() => {
    //     setTotalPrice((old) => {console.log("old: ", old); old + (price * quantity)});
    // }, [quantity, size])

    // console.log("is loading: ", isLoading);
    // console.log(quantity)

    const digits= [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="border border-[#f2f2f2]">
            <div>
                {/* upper section */}
                <div className="flex text-[13px] p-[10px] sm:p-[15px]">
                    <Link to={`/product/${productId}`}>
                        <div className="w-[7rem] rounded-[5px] cursor-pointer mb-[5px] sm:w-[9.5rem]">
                            <img src={displayImage} alt="No Image" className="rounded-[5px]" />
                        </div>
                    </Link>
                    

                    <div className="w-full ml-[10px] sm:ml-[15px]">
                        <Link to={`/product/${productId}`}>
                            <p className="text-[15px] font-bold font-grey cursor-pointer hover:text-[#e11b23]">{productName}</p>
                        </Link>

                        <p className="font-bold my-[5px]">₹ {price}</p>

                        <div className="font-grey flex items-center py-[5px] font-bold">
                            <div className="flex border border-[#f2f2f2] rounded-[5px] p-[5px]">
                                <p>Size: </p>
                                <select name="size" id="size" className="border-0 cursor-pointer ml-[5px]">
                                    {
                                        !isLoading && item?.size?.map(item => {
                                            return (
                                                    item === size ?
                                                        <option key={item} value={item} defaultValue={item}>
                                                            {item}
                                                        </option>
                                                    :
                                                        <option key={item} value={item}>
                                                            {item}
                                                        </option>        
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className="flex ml-[10px] border border-[#f2f2f2] rounded-[5px] p-[5px]">
                                <p>Qty: </p>
                                <select name="quantity" id="quantity" className="border-0 cursor-pointer ml-[5px]">
                                    {
                                        digits.map(item => {
                                            return (
                                                item === quantity ?
                                                    <option key={item} value={item} defaultValue={item}>
                                                        {item}
                                                    </option>
                                                :
                                                    <option key={item} value={item}>
                                                        {item}
                                                    </option> 
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* lower section */}
                <div className="w-full flex justify-center items-center cursor-pointer font-grey
                    border-t border-[#f2f2f2] font-bold py-[10px] mt-[-5px] ">
                    REMOVE
                </div>
            </div>
        </div>
    )
}