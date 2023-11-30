import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { Link } from "react-router-dom";






export default function Cart() {
    const {itemsInCart, isAuthenticated}= useContext(UserContext);

    return(
        <div className="flex flex-col items-center justify-center">
            <nav className="flex justify-center w-full font-bold text-[10px] 
                border-b border-[#eee] px-[5px] py-[1rem] 
                md:text-[14px] lg:px-[1rem]">
                <div className="font-green cursor-not-allowed">
                    <p className="px-[5px]">MY BAG</p>
                </div>

                <div className="flex items-center">
                    <p className="px-[5px]">- - - - - - - - - - - - -</p>
                    <div className="font-green cursor-not-allowed">
                        <p className="px-[5px]">ADDRESS</p>
                    </div>
                </div>
                
                <div className="flex items-center">
                    <p className="px-[5px]">- - - - - - - - - - - - -</p>
                    <div className="font-green cursor-not-allowed">
                        <p className="px-[5px]">PAYMENT</p>
                    </div>
                </div>
            </nav>
            {
                itemsInCart.length === 0 ? 
                <div className="flex flex-col items-center justify-center my-[50px] mx-[1rem]">
                    <div className="w-[90px] h-[80px] lg:w-[120px] lg:h-[100px]">
                        <img src="https://tss-static-images.gumlet.io/emptyCart.png" alt="empty-cart" />
                    </div>

                    <div className="flex flex-col justify-center items-center mt-[3rem] mb-[2rem]">
                        <p className="text-[16px] font-bold lg:text-[20px]">Your shopping cart is empty. </p>

                        <p className="text-[14px] mt-[1rem] font-grey lg:text-[16px]">Please add something soon, carts have feelings too.</p>
                    </div>

                    <div className="flex justify-center items-center text-[14px] font-bold">
                        <Link to={"/men"}>
                            <div 
                                className="border border-[#117a7a] rounded-[5px] font-green px-[10px] py-[10px] 
                                hover:bg-[#117a7a] hover:text-white duration-500">
                                CONTINUE SHOPPING
                            </div>
                        </Link>
                        
                        {
                            !isAuthenticated &&
                            <Link to={"/authentication"}>
                                <div className="bg-[#117a7a] text-white px-[2rem] py-[10px] rounded-[5px] ml-[1rem]
                                    hover:border hover:border-[#117a7a] hover:bg-white hover:text-[#117a7a]">
                                    LOGIN
                                </div>
                            </Link>
                            
                        }
                    </div>
                </div>

                :

                <div>

                </div>
            }
        </div>
    )
}

