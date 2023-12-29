import { Link } from "react-router-dom";
import useFetchList from "../../customHooks/useFetchList";
import { mapDataForHomePage } from "../../utils/filterFunctions";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";






export default function ProductList({url, heading}) {

    const {isMobile}= useContext(ModalContext);

    const [productList, error]= useFetchList(url, mapDataForHomePage);

    const arr= [];
    arr.fill("", 0, 19);
    // console.log(productList.length);

    return (
        <div className="w-full p-[1rem]">
            <div className="text-[18px] py-[10px] font-bold w-full flex md:justify-center md:text-[28px]">
                {heading}
            </div>

            <div className="overflow-x-scroll">
                <ul className="flex items-center w-max">
                    {
                        (productList.length > 0 && productList) ?
                            productList.map((product) => {
                                const {productName, image, price, subCategory, productId}= product;

                                // console.log(product);

                                return (
                                    <li key= {productId} className="p-[10px] w-full cursor-pointer">
                                        <Link to={`/product/${productId}`}>
                                            <div className="relative flex items-center justify-center bg-[#f2f2f2] w-[150px] h-[190px]
                                                bg-[#3d3c3c] overflow-hidden
                                                sm:w-[180px] sm:h-[220px]
                                                md:w-[230px] md:h-[290px]
                                                lg:w-[340px] lg:h-[420px]" >
                                                
                                                <img src={image} alt= "Image Not Available" 
                                                    className="w-full h-full duration-500 hover:scale-110" />
                                            </div>

                                            <div className="font-medium text-[12px] text-[#737577] mt-[10px] 
                                                md:text-[14px] lg:text-[15px]">
                                                <p className="font-bold font-grey text-ellipsis overflow-hidden">
                                                    {
                                                        isMobile ? (productName.length > 15 ? productName.slice(0,15) + "..." : productName)
                                                        :
                                                        productName
                                                    }
                                                </p>
                                                <p>
                                                    {subCategory}
                                                </p>
                                                <p>
                                                    ₹ {price}
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                            :
                            arr.map((_, index) => {
                                // console.log("skeleton: ", index)
                                return (
                                    <div key={index} className="relative flex items-center justify-center bg-[#f2f2f2] w-[150px] h-[190px]
                                    bg-[#3d3c3c] overflow-hidden
                                    sm:w-[180px] sm:h-[220px]
                                    md:w-[230px] md:h-[290px]
                                    lg:w-[340px] lg:h-[420px]" >
                                    </div>
                                )
                            })
                    }
                </ul>
            </div>
        </div>
    )
}