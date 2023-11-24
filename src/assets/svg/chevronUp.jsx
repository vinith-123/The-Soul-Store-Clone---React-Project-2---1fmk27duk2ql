





export default function ChevronUp({width, height, color, effect}) {
    return (
        <svg className={`${effect}`} 
            xmlns="http://www.w3.org/2000/svg" 
            width= {width ? width :"20"} height={height ? height :"20"} 
            fill= {color ? color : "#999"}
            viewBox="0 0 16 16"> 
            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> 
        </svg>
    )
}