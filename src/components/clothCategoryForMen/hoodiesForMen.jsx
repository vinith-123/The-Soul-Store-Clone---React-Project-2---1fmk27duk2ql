import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "./productsInCategoryForMen";







export default function HoodiesForMen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["hoodie"]} 
            heading={"Men's Hoodies"} 
            url={productUrl.filterProduct}
            gender={"Men"}/>

    )
}