import { useContext } from "react";
import Apparel from "../../components/homePage/apparel";
import { TagContext } from "../../context/tagContext";





export default function PageForMen() {

    const {apparelForMen}= useContext(TagContext);

    return (
        <div className="flex items-center justify-between font-grey font-bold text-[14px]">
            <Apparel list={apparelForMen} />
        </div>
    )
}