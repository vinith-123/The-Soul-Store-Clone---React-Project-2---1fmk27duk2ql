import { useContext } from "react";
import Apparel from "../../components/homePage/apparel";
import Categories from "../../components/homePage/categories";
import OfficialMerchandise from "../../components/homePage/officialMerchandise";
import { TagContext } from "../../context/tagContext";
import { ImageContext } from "../../context/imageContext";
import { ModalContext } from "../../context/modalContext";
import ProductList from "../../components/homePage/productList";





export default function PageForWomen() {
    const {apparelForWomen}= useContext(TagContext);
    const {productUrl}= useContext(ModalContext);
    const {bigCorousalForMen, categories, merchandise}= useContext(ImageContext);
    // console.log("men: ", merchandise);
    const trendingUrl= productUrl.filterProduct + `{"sellerTag":"trending", "gender":"Women"}&page=1&limit=20`;
    const bestSellerUrl= productUrl.filterProduct + `{"sellerTag":"best seller", "gender":"Women"}&page=1&limit=20`;
    const newArrivalUrl= productUrl.filterProduct + `{"sellerTag":"new arrival", "gender":"Women"}&page=1&limit=20`;
    const topRatedUrl= productUrl.filterProduct + `{"sellerTag":"top rated", "gender":"Women"}&page=1&limit=20`;

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

            <div className="w-full xl:max-w-[1500px] flex flex-col justify-center items-center">
                <ProductList url= {trendingUrl} heading= {"TRENDING"} />
                <ProductList url= {newArrivalUrl} heading= {"NEW ARRIVAL"} />
                <ProductList url= {topRatedUrl} heading= {"TOP RATED"} />

                <Categories list={categories[0].women} />

                <ProductList url={bestSellerUrl} heading={"TOP SELLING"} />
                <OfficialMerchandise list={merchandise} />
            </div>

            
        </div>
    )
}