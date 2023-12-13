import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { fetch_data } from "../utils/utilities";






export default function useFetchSingleProduct(url) {
    const {projectId}= useContext(UserContext);

    const [data, setData]= useState([]);
    const [error, setError]= useState("");

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
            console.log("error while fetching: ", error);
        }
    }, [url]);

    return [data, error];
}