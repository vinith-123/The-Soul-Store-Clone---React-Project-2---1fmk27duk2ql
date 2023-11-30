
import { Link } from "react-router-dom";





export default function Categories({list}) {
    // console.log("list: ", list);

    return (
        <div className="flex flex-col items-center p-[1rem]">
            <p className="text-[28px] font-bold py-[1rem]">CATEGORIES</p>

            <ul className="flex flex-wrap justify-center w-full">
                {
                    list.map((category) => {
                        const {route, url}= category;
                        return (
                            <Link key={route} to={`/men/${route}`}>
                                <li className="w-[9rem] h-[9rem] m-[10px]
                                    overflow-hidden bg-black
                                    sm:w-[15rem] sm:h-[15rem]
                                    md:w-[20rem] md:h-[20rem]
                                    lg:w-[15rem] lg:h-[15rem]
                                    xl:w-[20rem] xl:h-[20rem]">
                                    
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