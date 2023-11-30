import { useContext } from "react";
import { TagContext } from "../../context/tagContext";
import { ImageContext } from "../../context/imageContext";
import Categories from "../../components/homePage/categories";
import OfficialMerchandise from "../../components/homePage/officialMerchandise";
import Apparel from "../../components/homePage/apparel";





export default function PageForKids() {
    const {apparelForKids}= useContext(TagContext);
    const {bigCorousalForKids, categories, merchandise}= useContext(ImageContext);
    // console.log("men: ", merchandise);

    return (
        <div className="relative w-full flex flex-col items-center justify-between font-grey font-bold text-[14px]">
            <Apparel list={apparelForKids} />

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

            <Categories list={categories[0].kids} />
            <OfficialMerchandise list={merchandise} />
        </div>
    )
}