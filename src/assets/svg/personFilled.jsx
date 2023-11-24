





export default function PersonFilled({width, color, height, effect}) {
    return(
        <svg width= {width ? width :"20"} height={height ? height :"20"} fill= {color ? color : "#999"}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
            className={`${effect}`}> 
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> 
        </svg>
    )
}