import { useState } from "react"
import ChevronUp from "../../assets/svg/chevronUp";
import ChevronDown from "../../assets/svg/chevronDown";





export default function VoucherDropDown({heading}) {
    
    const [isModalOpen, setIsModalOpen]= useState(false);

    return (
        <div className="relative w-full p-[15px] border-[2px] border-[#f2f2f2]">
            <div className={`flex justify-between items-center text-[15px] font-grey font-bold cursor-pointer duration-500 
                ${isModalOpen ? "border-b border-[#f2f2f2] pb-[10px]" : ""}`}
                onClick={() => setIsModalOpen((old) => !old)}>
                <div className="flex items-center text-[13px]">
                    <div className="w-[20px] h-[20px]">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg==" 
                            alt="No Icon" />
                    </div>

                    <p className="ml-[10px]">{heading}</p>
                </div>

                <div>
                    {
                        isModalOpen ? 
                            <ChevronUp width={"15px"} height={"15px"} color= {"#000000"} />
                        :
                            <ChevronDown width={"15px"} height={"15px"} color= {"#000000"}  />
                    }
                </div>
            </div>
            
            

            {
                isModalOpen && 
                <div className="w-full flex items-center justify-center mt-[10px]">
                    <div className="font-medium" > 
                        <input type="text" placeholder="Enter Code Here" 
                            className="border border-[#f2f2f2] text-[12px] px-[8px] py-[3px] rounded-[5px] w-full" />
                    </div>

                    <button className="font-bold text-[12px] border border-[#117a7a] rounded-[5px] 
                        font-green px-[8px] py-[3px] ml-[10px]
                        hover:bg-[#117a7a] hover:text-white">
                        APPLY
                    </button>
                </div>
            }
        </div>
    )
}