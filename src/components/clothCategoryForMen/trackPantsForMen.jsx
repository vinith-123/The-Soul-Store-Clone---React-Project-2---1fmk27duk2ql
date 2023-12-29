import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "./productsInCategoryForMen";






export default function TrackPantsForMen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["tracksuit"]} 
            heading={"Men's Track Suits'"} 
            url={productUrl.filterProduct}
            gender={"Men"}/>

    )
}