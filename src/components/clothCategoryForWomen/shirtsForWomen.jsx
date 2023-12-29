import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "../clothCategoryForMen/productsInCategoryForMen";





export default function ShirtsForWomen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["shirt"]} 
            heading={"Womens' Shirts'"} 
            url={productUrl.filterProduct}
            gender={"Women"}/>

    )
}