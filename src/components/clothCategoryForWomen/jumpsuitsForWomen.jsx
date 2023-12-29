import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import RenderProductsInCategory from "../clothCategoryForMen/productsInCategoryForMen";





export default function JumpsuitForWomen() {
    const {productUrl}= useContext(ModalContext);

    return (
        <RenderProductsInCategory 
            subCategory= {["jumpsuit"]} 
            heading={"Womens' Jumpsuits'"} 
            url={productUrl.filterProduct}
            gender={"Women"}/>

    )
}