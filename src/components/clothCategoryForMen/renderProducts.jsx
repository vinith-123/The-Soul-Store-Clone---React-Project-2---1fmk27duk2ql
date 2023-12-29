import { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context/modalContext";
import Error404 from "../../pages/errorPage/error404";





export default function RenderProducts({list, isLoading}) {

    const {isMobile}= useContext(ModalContext);

    const arr= [];
    arr.fill("", 0, 19);

    return (
        <div>
                <div>
                    {
                        (list.length > 0)?
                            <ul className="flex flex-wrap items-center justify-center gap-[1rem]">
                                {
                                    list.map((product) => {
                                        const {productName, image, price, subCategory, productId}= product;

                                        // console.log(product);

                                        return (
                                            <li key= {productId} className="cursor-pointer border border-[#f2f2f2] rounded-[5px] hover:bg-[#f2f2f2]">
                                                <Link to={`/product/${productId}`}>
                                                    <div className="relative flex items-center justify-center bg-[#f2f2f2] 
                                                        w-[120px] h-[150px]
                                                        bg-[#3d3c3c] overflow-hidden
                                                        sm:w-[180px] sm:h-[220px]
                                                        md:w-[230px] md:h-[290px]
                                                        lg:w-[340px] lg:h-[420px]" >

                                                        {
                                                            // isLoading ?
                                                            // <div className="w-full h-full bg-[#f2f2f2]"></div>
                                                            // :
                                                            <img src={image} alt= "Image Not Available" 
                                                            className="w-full h-full duration-500 hover:scale-110" />
                                                        }
                                                        
                                                        

                                                        {/* <div className="absolute">
                                                            <NoImage />
                                                        </div> */}
                                                    </div>

                                                    <div className="p-[10px] font-medium text-[12px] text-[#737577] mt-[10px] 
                                                        md:text-[14px] lg:text-[15px]">
                                                            {
                                                                // isLoading ?
                                                                // <p className="w-[5rem] h-[1rem] bg-[#f2f2f2]"></p>
                                                                // :
                                                                <p className="font-bold font-grey text-ellipsis overflow-hidden">
                                                                    {
                                                                        isMobile ? (productName?.length > 15 ? productName?.slice(0,15) + "..." : productName)
                                                                        :
                                                                        productName.slice(0, 25) + "..."
                                                                    }
                                                                </p>
                                                            }
                                                        
                                                        <p>
                                                            {subCategory}
                                                        </p>
                                                        <p className="font-bold">
                                                            ₹ {price}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            :
                            <div className="flex flex-wrap items-center justify-center gap-[1rem]">
                                {
                                    arr.map((_, index) => {
                                        return (
                                            <div className="relative flex items-center justify-center bg-[#f2f2f2] 
                                            w-[120px] h-[150px]
                                            bg-[#3d3c3c] overflow-hidden
                                            sm:w-[180px] sm:h-[220px]
                                            md:w-[230px] md:h-[290px]
                                            lg:w-[340px] lg:h-[420px]">

                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }
                    
                </div>
        </div>
    )
}