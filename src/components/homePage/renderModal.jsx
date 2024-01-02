import { Link } from "react-router-dom";





export default function RenderModal({list}) {
    let i=0;
    return (
        <ul className="absolute top-[65px] left-0 font-semibold text-[15px] w-max min-w-[10rem]
            shadow-[0px_0px_20px_-5px_rgba(0,0,0,0.5) z-20 bg-white]">
            <div className="p-[1rem] bg-white">
                {
                    list.map((item) => {
                        const {tag, routeName, isNewCollection}= item;
                        return (
                            <li key={i++} className="py-[3px] font-grey hover:text-[#e11b23]">
                                <Link to={routeName}>
                                    <div className="flex">
                                        <p>{tag}</p>
                                        {
                                            isNewCollection && 
                                            <p className="text-red-500 text-[11px] ml-[5px]">New</p>
                                        }
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </div>
        </ul>
    )
}

