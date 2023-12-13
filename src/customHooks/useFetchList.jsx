import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { fetch_data } from "../utils/utilities";
import { mapData } from "../utils/filterFunctions";





export default function useFetchList(url, mapFunction) {

    const {projectId}= useContext(UserContext);

    const [data, setData]= useState([]);
    const [error, setError]= useState("");

    useEffect(() => {
        try {
            fetch_data(url, projectId)
            .then((data) => {
                const modifiedData= mapFunction ? mapFunction(data) : data;
                // console.log("modified data: ", modifiedData);
                setData(modifiedData);
            })
            .catch((error) => {
                console.log("error in data: ", error);
            })
        } catch(error) {
            console.log("error while fetching: ", error);
        }
    }, []);

    return [data, error];
}