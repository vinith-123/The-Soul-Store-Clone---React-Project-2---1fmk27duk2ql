import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "../clothCategoryForMen/productsInCategoryForMen";





export default function JeansForWomen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["jeans"]} 
            heading={"Womens' Jeans'"} 
            url={productUrl.filterProduct}
            gender={"Women"}/>

    )
}