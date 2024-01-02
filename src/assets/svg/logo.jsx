
import NewLogo from "../../assets/png/newlogo.png";



export default function Logo({width, height, color}) {

    return (
        <div className="relative ml-[1rem]">
            <div className="w-[60px] h-[35px] pointer-events-none sm:w-[80px] sm:h-[50px] lg:w-[120px] lg:h-[79px] ">
                <img src={NewLogo} alt="header-logo" />
            </div>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[9px] left-[5px] sm:top-[15px] sm:left-[11px] lg:top-[25px] lg:left-[17px]"
                width= {width ? width :"16"} height={height ? height :"16"} viewBox="0 0 23.000000 16.000000"
                preserveAspectRatio="xMidYMid meet">

                <g 
                    transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
                    fill= {color ? color : "#000000"} stroke="none">
                    <path d="M32 142 c-32 -20 -30 -103 3 -116 30 -11 49 23 46 81 -1 25 -31 46
                    -49 35z"/>
                    <path d="M159 109 c-8 -16 -8 -28 0 -46 22 -47 69 -5 50 45 -11 28 -35 28 -50
                    1z"/>
                </g>
            </svg>
        </div>
        
    )
}