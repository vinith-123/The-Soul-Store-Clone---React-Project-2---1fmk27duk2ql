import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "../clothCategoryForMen/productsInCategoryForMen";





export default function TshirtsForWomen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["tshirt"]} 
            heading={"Womens' T-Shirts"} 
            url={productUrl.filterProduct}
            gender={"Women"}/>

    )
}