import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "../clothCategoryForMen/productsInCategoryForMen";





export default function JoggersForWomen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["jogger"]} 
            heading={"Womens' Joggers'"} 
            url={productUrl.filterProduct}
            gender={"Women"}/>

    )
}