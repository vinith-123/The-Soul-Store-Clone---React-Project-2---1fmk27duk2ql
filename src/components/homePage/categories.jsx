
import { Link } from "react-router-dom";





export default function Categories({list}) {
    // console.log("list: ", list);

    return (
        <div className="flex flex-col items-center p-[1rem]">
            <p className="text-[28px] font-bold py-[1rem]">CATEGORIES</p>

            <ul className="flex flex-wrap justify-center w-full">
                {
                    list.map((category, index) => {
                        const {route, url}= category;
                        return (
                            <Link key={index} to={`/${route}`}>
                                <li className="w-[7rem] h-[7rem] m-[10px]
                                    overflow-hidden bg-[#3d3c3c]
                                    sm:w-[15rem] sm:h-[15rem]
                                    md:w-[21rem] md:h-[21rem]
                                    lg:w-[300px] lg:h-[300px]
                                    xl:w-[440px] xl:h-[440px]
                                    2xl:w-[345px] 2xl:h-[345px]">
                                    
                                    <img src={url} alt="collection-image"
                                        className="w-full h-full duration-500
                                            hover:scale-110 hover:opacity-70" />
                                </li>
                            </Link>
                        )
                        
                    })
                }
            </ul>
        </div>
    )
}