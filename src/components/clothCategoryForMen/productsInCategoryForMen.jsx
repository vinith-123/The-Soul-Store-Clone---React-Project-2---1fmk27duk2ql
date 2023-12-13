





export default function ({url, heading}) {

    

    return (
        <div>
            <AsideSection />
        </div>
    )
}

export function AsideSection() {

    const brands= [
        `Bewakoof®`, `TISTABENE`, `7 Shores`, `Campus Sutra`, `Style Quotient`, `breakbounce`, 
        `chkokko`, `XYXX`, `Rigo`, `Alstyle`, `Brown Mocha`, `Hubberholme`, `CHIMPAAANZEE`, 
        `Smugglerz`, `Blue Tyga`, `TALES and STORIES`, `Belliskey`, `ANGEL FAB`, `Kotty`, 
        `Thomas Scott`, `Old Grey`, `BLANCK`, `Urban Scottish`, `THE DAILY OUTFITS`, 
        `INDICLUB`, `TrueBuyWorld`, `Bstories`, `Shopolics`, `THE DRY STATE`, `OFFICIAL NARUTO MERCHANDISE`
        ];

    const size= ["S", "M", "L", "XL", "XXL"];



    function handleChange(e) {
        console.log(e.target.checked)
    }

    return (
        <div>
            <div>
                <p>BRANDS</p>

                <div>
                    <ul>
                        {
                            brands.map(brand => {
                                return (
                                    <li key={brand}>
                                        <input type="checkbox" id={brand} onChange={(e) => handleChange(e)} />
                                        <label htmlFor={brand}>{brand}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div>
                <p>SIZE</p>

                <div>
                    <ul>
                        {
                            size.map(item => {
                                return (
                                    <li key={item}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}