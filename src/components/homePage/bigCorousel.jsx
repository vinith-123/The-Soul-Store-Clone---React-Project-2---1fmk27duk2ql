import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";






export default function BigCorousel({list}) {
    
    const {isMobile}= useContext(ModalContext);

    return (
        <div>
            {/* <SimpleImageSlider 
                width= {896}
                height= {500}
                images= {isMobile ? list.smallSize : list.largeSize}
                showBullets= {true}
                showNavs= {true}
                loop= {true} /> */}
        </div>
    )
}