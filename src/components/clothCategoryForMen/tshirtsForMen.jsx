import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "./productsInCategoryForMen";






export default function TshirtsForMen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["tshirt"]} 
            heading={"Men T-Shirts"} 
            url={productUrl.filterProduct}
            gender={"Men"}/>

    )
}