import { useContext } from "react";
import Apparel from "../../components/homePage/apparel";
import { TagContext } from "../../context/tagContext";
import { ImageContext } from "../../context/imageContext";
import Categories from "../../components/homePage/categories";
import OfficialMerchandise from "../../components/homePage/officialMerchandise";





export default function PageForMen() {

    const {apparelForMen}= useContext(TagContext);
    const {bigCorousalForMen, categories, merchandise}= useContext(ImageContext);
    // console.log("men: ", merchandise);

    return (
        <div className="relative w-full flex flex-col items-center justify-between font-grey font-bold text-[14px]">
            <Apparel list={apparelForMen} />

            {/* <BigCorousel list={bigCorousalForMen} /> */}
            
            {/* <div>
                <SimpleImageSlider
                    width= {896}
                    height= {500}
                    images= {isMobile ? list.smallSize : list.largeSize}
                    showBullets= {true}
                    showNavs= {true}
                    loop= {true} />
            </div> */}

            <Categories list={categories[0].men} />
            <OfficialMerchandise list={merchandise} />
        </div>
    )
}