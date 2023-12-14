import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { fetch_data } from "../utils/utilities";






export default function useFetchSingleProduct(url) {
    const {projectId}= useContext(UserContext);

    const [data, setData]= useState([]);
    const [error, setError]= useState("");
    const [isLoading, setIsLoading]= useState(false);


    function filterData(item) {
        return {
            productId:item._id,
            brand: item.brand,
            color: item.color,
            description: item.description,
            displayImage: item.displayImage,
            gender: item.gender,
            images: item.images,
            productName: item.name,
            price: item.price,
            ratings: item.ratings,
            seller: item.seller,
            sellerTag: item.sellerTag,
            size: item.size,
            subCategory: item.subCategory,
        }
    }

    useEffect(() => {
        setIsLoading(true);
        try {
            fetch_data(url, projectId)
            .then((data) => {
                const modifiedData= filterData(data);
                setData(modifiedData);
            })
            .catch((error) => {
                console.log("error in data: ", error);
            })
        } catch(error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    return [data, error, isLoading];
}