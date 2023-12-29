import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "./productsInCategoryForMen";








export default function ShortsForMen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["shorts"]} 
            heading={"Men's Shorts'"} 
            url={productUrl.filterProduct}
            gender={"Men"}/>

    )
}