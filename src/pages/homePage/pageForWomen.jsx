import { useContext } from "react";
import Apparel from "../../components/homePage/apparel";
import Categories from "../../components/homePage/categories";
import OfficialMerchandise from "../../components/homePage/officialMerchandise";
import { TagContext } from "../../context/tagContext";
import { ImageContext } from "../../context/imageContext";





export default function PageForWomen() {
    const {apparelForWomen}= useContext(TagContext);
    const {bigCorousalForWomen, categories, merchandise}= useContext(ImageContext);
    // console.log("men: ", merchandise);

    return (
        <div className="relative w-full flex flex-col items-center justify-between font-grey font-bold text-[14px]">
            <Apparel list={apparelForWomen} />

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

            <div className="max-w-[1500px] flex flex-col justify-center items-center">
                <Categories list={categories[0].women} />
                <OfficialMerchandise list={merchandise} />
            </div>

            
        </div>
    )
}