import { useContext } from "react";
import { TagContext } from "../../context/tagContext";
import { ImageContext } from "../../context/imageContext";
import Categories from "../../components/homePage/categories";
import OfficialMerchandise from "../../components/homePage/officialMerchandise";
import Apparel from "../../components/homePage/apparel";


export default function PageForKids() {
    const {apparelForKids}= useContext(TagContext);
    const {bigCorousalForKids, categories, merchandise}= useContext(ImageContext);

    return (
        <div className="relative w-full flex flex-col items-center justify-between font-grey font-bold text-[14px]">
            <Apparel list={apparelForKids} />

            <div className="max-w-[1500px] flex flex-col justify-center items-center">
                <Categories list={categories[0].kids} />
                <OfficialMerchandise list={merchandise} />
            </div>

        </div>
    )
}