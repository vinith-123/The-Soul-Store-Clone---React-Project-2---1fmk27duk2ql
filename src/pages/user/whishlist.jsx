import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { Link } from "react-router-dom";






export default function Whishlist() {

    const {whishlistItems, isAuthenticated}= useContext(UserContext);

    return (
        <div>
            {
                whishlistItems.length === 0 ?
                // empty whishlist
                <div className="flex flex-col items-center justify-center my-[50px] mx-[1rem]">
                    <div className="w-[190px] h-[190px] lg:w-[290px] lg:h-[290px]">
                        <img src="https://www.thesouledstore.com/static/img/wishList-empty-icon.fd2a993.png" alt="whishlist-image" />
                    </div>

                    <div className="flex flex-col items-center justify-center my-[2rem]">
                        <p className="text-[16px] font-bold lg:text-[20px]">
                           Your wishlist is lonely and looking for love. 
                        </p>
                        
                        <p className="text-[14px] font-grey mt-[1rem] lg:text-[16px]">
                            Add products to your wishlist, review them anytime and easily move to cart.
                        </p>
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
                
                // non-empty whishlist
                <div>

                </div>
                
            }
            


        </div>
    )
}