import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { removeFromCart } from "../../utils/utilities";






export default function ProductCardForCart({product}) {

    const {setTotalPrice, itemsInCart, setItemsInCart, token, projectId}= useContext(UserContext);

    const {displayImage, price, productId, productName, quantity, ratings, size}= product;

    // const [item, error, isLoading]= useFetchSingleProduct(productUrl.getProduct + `${productId}`);

    // const [cartItems, setCartItems]= useState({
    //     size: size,
    //     quantity: quantity,
    // })

    // const digits= [1,2,3,4,5,6,7,8,9,10];

    // function handleChange(event) {
    //     const target= event.target.name;
    //     // console.log(target);
    //     const value= event.target.value;
    //     // console.log("value: ", value);
        
    //     setCartItems((old) => {
    //         return {
    //             ...old, 
    //             [target]: value,
    //         }
    //     })

        
    //     removeFromCart(itemsInCart, setItemsInCart, product, setTotalPrice, token, projectId);

    //     addInCart(itemsInCart, setItemsInCart, product, setTotalPrice, token, projectId, cartItems.quantity, cartItems.size);
    // }
    return (
        <div className="border-[2px] border-[#f2f2f2]">
            <div>
                {/* upper section */}
                <div className="flex text-[10px] px-[5px] py-[10px] sm:p-[15px]">
                    <Link to={`/product/${productId}`}>
                        <div className="w-[7rem] rounded-[5px] cursor-pointer mb-[5px] sm:w-[9.5rem]">
                            <img src={displayImage} alt="No Image" className="rounded-[5px]" />
                        </div>
                    </Link>
                    

                    <div className="w-full ml-[10px] sm:ml-[15px]">
                        <Link to={`/product/${productId}`}>
                            <p className="text-[13px] font-bold font-grey cursor-pointer hover:text-[#e11b23]
                                min-[320px]:text-[15px]">{productName}</p>
                        </Link>

                        <p className="font-bold my-[5px] text-[14px]">₹ {price}</p>

                        <div className="font-grey text-[14px] flex flex-col items-start py-[5px] font-bold min-[320px]:flex-row">
                            <div className="flex border border-[#f2f2f2] rounded-[5px] p-[5px] pointer-events-none">
                                <p>Size:</p>
                                <p className="min-[320px]:ml-[5px]">{size}</p>
                                {/* <select name="size" id="size" value={cartItems.size}
                                    className="border-0 cursor-pointer min-[320px]:ml-[5px]"
                                    onChange={(e) => handleChange(e)}>
                                    {
                                        item?.size?.map(item => {

                                            return (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>        
                                            )
                                        })
                                    }
                                </select> */}
                            </div>

                            <div className="flex mt-[10px] border border-[#f2f2f2] rounded-[5px] p-[5px] min-[320px]:ml-[10px] 
                                pointer-events-none
                                min-[320px]:mt-0">
                                <p>Qty: </p>
                                <p className="ml-[5px]"> {quantity} </p>
                                {/* <select name="quantity" id="quantity" value={cartItems.quantity}
                                    className="border-0 cursor-pointer ml-[5px]"
                                    onChange={(e) => handleChange(e)}>
                                    {
                                        digits.map(item => {
                                            return (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option> 
                                            )
                                        })
                                    }
                                </select> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* lower section */}
                <div className="w-full flex justify-center items-center cursor-pointer font-grey duration-300 text-[13px]
                    border-t-[3.5px] border-[#f2f2f2] font-bold py-[10px] mt-[-5px] hover:bg-[#e11b23] hover:text-white min-[320px]:text-[15px]"
                    onClick={() => removeFromCart(itemsInCart, setItemsInCart, product, setTotalPrice, token, projectId)}>
                    REMOVE
                </div>
            </div>
        </div>
    )
}