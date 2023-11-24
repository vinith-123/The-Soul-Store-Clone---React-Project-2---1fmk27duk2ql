





export default function CopyrightIcon({width, height, color, effect}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
            width= {width ? width :"16"} height={height ? height :"16"} >
            <rect width="256" height="256" fill="none"/>
            <circle cx="128" cy="128" r="96" fill="none" stroke= {color ? color : "#999"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <path d="M160,152a40,40,0,1,1,0-48" fill="none" stroke= {color ? color : "#999"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        </svg>
    )
}