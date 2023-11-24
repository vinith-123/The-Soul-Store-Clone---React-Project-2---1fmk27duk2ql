import React, { useState } from "react";




const ImageContext= React.createContext();

function ImageProvider({children}) {

    const [bigCorousalForMen, setBigCorousalForMen]= useState(
        {
            largeSize: [
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Cardsjoyful-homepage-banner_1.jpg?format=webp&w=1500&dpr=1.3",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner-male.jpg?format=webp&w=1024&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_BB.jpg?format=webp&w=1024&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_Cities.jpg?format=webp&w=1440&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Banner_Homepage-Sweatshirts.jpg?format=webp&w=1440&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_Hardik-Oversized_NEW-Final.jpg?format=webp&w=1440&dpr=2.0",
            ],

            smallSize: [
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Joyful-Wednesday---mobile_bAuNFtQ.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner-male.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner_BB.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner_Cities.gif?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Banner_Mobile-Sweatshirts.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-page-Banner_Hardik-Oversized_NEW-Final.jpg?format=webp&w=768&dpr=2.0",
            ],
        }
    );

    const [bigCorousalForWomen, setBigCorousalForWomen]= useState(
        {
            largeSize: [
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Korean-Pants_Hm-Banner.jpg?format=webp&w=1440&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner-female_qTi7vnS.jpg?format=webp&w=1440&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_UfPEUHZ.jpg?format=webp&w=1440&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_copy_1.jpg?format=webp&w=1440&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/WEB_BANNER_nqSAjAZ.jpg?format=webp&w=1440&dpr=2.0",
            ],

            smallSize :[
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Korean-Pants_Mobile-Banner.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner-pair.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_1_Of0Hy3z.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_copy_1.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/MOBILE_BANNER_xaEox9Y.jpg?format=webp&w=768&dpr=2.0",
            ],
        }
    );

    const [bigCorousalForKids, setBigCorousalForKids]= useState(
        {
            largeSize: [
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner_2_ukQb6Ka.jpg?format=webp&w=1024&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_2_jrzmrA4.jpg?format=webp&w=1024&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_7_P1Htkpd.jpg?format=webp&w=1024&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_6_zVgDl5c.jpg?format=webp&w=1024&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner_5.jpg?format=webp&w=1024&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner_5_D9ayTvY.jpg?format=webp&w=1024&dpr=2.0",
            ],

            smallSize: [
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-banner_2_qfMXryt.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner-2_VO6weLP.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_6.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner_54.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-banner_35.jpg?format=webp&w=768&dpr=2.0",
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-banner_11.jpg?format=webp&w=768&dpr=2.0",
            ],
        }
    )

    // console.log(bigCorousalForMen);
    return (
        <ImageContext.Provider value={{bigCorousalForMen, bigCorousalForWomen, bigCorousalForKids}}>
            {children}
        </ImageContext.Provider>
    )
}

export {ImageContext, ImageProvider};