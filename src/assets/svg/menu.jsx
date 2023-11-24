




export default function Menu({width, height, color, effect}) {
    return (
        <svg width={width ? width : "20"} height={height ? height : "20"} color={color ? color : "#999"} 
            className={`${effect}`} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"> 
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> 
        </svg>
    )
}