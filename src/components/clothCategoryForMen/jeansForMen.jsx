import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "./productsInCategoryForMen";








export default function JeansForMen() {

    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["jeans"]} 
            heading={"Men's Jeans"} 
            url={productUrl.filterProduct}
            gender={"Men"}/>

    )
}