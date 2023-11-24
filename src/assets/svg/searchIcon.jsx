



export default function SearchIcon({width, height, color, effect}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 50 50"
            width= {width ? width :"20"} height={height ? height :"20"}
            fillRule="evenodd" clipRule={"evenodd"} shapeRendering={"geometricPrecision"} 
            textRendering={"geometricPrecision"} imageRendering={"optimizeQuality"}>
            <g>
                <path fill= {color ? color : "#000000"}
                    className={`${effect}`}
                    d="M 18.5,5.5 C 38.6499,3.48275 47.4833,12.4828 45,32.5C 44.2078,34.5873 43.0412,36.4207 41.5,38C 45.3333,41.8333 49.1667,45.6667 53,49.5C 53.49,50.7932 53.6567,52.1266 53.5,53.5C 52.1266,53.6567 50.7932,53.49 49.5,53C 45.6667,49.1667 41.8333,45.3333 38,41.5C 34.5206,44.8633 30.3539,46.1966 25.5,45.5C 16.2,45.3667 9.70003,41.0334 6,32.5C 3.21432,20.0799 7.38099,11.0799 18.5,5.5 Z M 20.5,10.5 C 37.7649,10.2567 43.5982,18.2567 38,34.5C 31.7488,41.0107 24.5821,42.1773 16.5,38C 9.98934,31.7488 8.82267,24.5821 13,16.5C 15.1141,13.8792 17.6141,11.8792 20.5,10.5 Z"/>
            </g>
        </svg>
    )
}