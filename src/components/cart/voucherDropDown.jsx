import { useState } from "react"
import ChevronUp from "../../assets/svg/chevronUp";
import ChevronDown from "../../assets/svg/chevronDown";





export default function VoucherDropDown({heading}) {
    
    const [isModalOpen, setIsModalOpen]= useState(false);

    return (
        <div className="flex justify-between text-[15px] font-grey font-bold">
            <div className="flex items-center">
                <div className="w-[1rem] h-[1rem]">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg==" 
                        alt="No Icon" />
                </div>

                <p>{heading}</p>
            </div>

            {
                isModalOpen ? 
                    <ChevronUp />
                :
                    <ChevronDown />
            }
        </div>
    )
}