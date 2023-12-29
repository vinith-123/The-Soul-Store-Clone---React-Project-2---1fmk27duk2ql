import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "./productsInCategoryForMen";






export default function JoggersForMen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["jogger"]} 
            heading={"Men's Joggers'"} 
            url={productUrl.filterProduct}
            gender={"Men"}/>

    )
}