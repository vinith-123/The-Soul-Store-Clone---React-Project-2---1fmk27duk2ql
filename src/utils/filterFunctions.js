


export function mapDataForHomePage(list) {
    return list.map(item => {
        return {
            image: item.displayImage,
            productName: item.name,
            subCategory: item.subCategory,
            price: item.price,
            productId: item._id,
        }
    })
}

export function filterCartData(list) {

    const data=  list.items.map(item => {
        return {
            productId: item.product._id,
            displayImage: item.product.displayImage,
            productName: item.product.name,
            price: item.product.price,
            ratings: item.product.ratings,
            size: item.size,
            quantity: item.quantity,
        }
    })

    return data;
}

export function filterwishlistData(list) {

    const data=  list.items.map(item => {
        return {
            productId: item.products._id,
            displayImage: item.products.displayImage,
            productName: item.products.name,
            price: item.products.price,
            ratings: item.products.ratings,
        }
    })

    return data;
}


/*
--> api: 

    sub-category: shirt, tshirt, jogger, jeans, pyjamas-men, shorts-men, trouser-men, hoodie-men, tracksuit-men, 
                    kurta, jumpsuit-women, kurti
                    
    seller-tag: trending, best seller, new arrival, top rated 

    seller: bewakoof
    women: t-shirt, shirt, jeans, jogger, jumpsuit, kurti

    brand: Bewakoof®, TISTABENE, 7 Shores, Campus Sutra, Style Quotient, breakbounce, 
            chkokko, XYXX, Rigo, Alstyle, Brown Mocha, Hubberholme, CHIMPAAANZEE, 
            Smugglerz, Blue Tyga, TALES and STORIES, Belliskey, ANGEL FAB, Kotty, 
            Thomas Scott, Old Grey, BLANCK, Urban Scottish, THE DAILY OUTFITS, 
            INDICLUB, TrueBuyWorld, Bstories, Shopolics, THE DRY STATE, OFFICIAL NARUTO MERCHANDISE

    gender: men, women
*/