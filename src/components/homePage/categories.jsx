
import { Link } from "react-router-dom";





export default function Categories({list}) {

    return (
        <div className="flex flex-col items-center min-[320px]:p-[1rem]">
            <p className="text-[28px] font-bold py-[1rem]">CATEGORIES</p>

            <ul className="flex flex-wrap justify-center w-full">
                {
                    list.map((category, index) => {
                        const {route, url}= category;
                        return (
                            <li key={index} className="w-full h-fit m-[10px]
                                overflow-hidden bg-[#3d3c3c]
                                min-[470px]:w-[12rem] min-[470px]:h-[12rem]
                                sm:w-[15rem] sm:h-[15rem]
                                md:w-[21rem] md:h-[21rem]
                                lg:w-[300px] lg:h-[300px]
                                xl:w-[440px] xl:h-[440px]
                                2xl:w-[345px] 2xl:h-[345px]">
                                    <Link to={`/${route}`}>
                                        <img src={url} alt="collection-image"
                                            className="w-full h-full duration-500
                                                hover:scale-110 hover:opacity-70" />
                                    </Link>
                            </li>
                        )
                        
                    })
                }
            </ul>
        </div>
    )
}