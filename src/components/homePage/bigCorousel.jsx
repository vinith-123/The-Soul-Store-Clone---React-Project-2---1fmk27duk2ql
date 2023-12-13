import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/modalContext";






export default function BigCorousel({list}) {
    
    const {isMobile}= useContext(ModalContext);

    const [carousel, setCarousel]= useState([]);

    let i= 1;

    const settings= {
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        if(isMobile) {
            setCarousel(list.smallSize);
        } else {
            setCarousel(list.largeSize);
        }
    }, [isMobile]);

    return (
        <section className="splide" aria-label="Splide Basic HTML Example">
            <div className="splide__track">
                <ul className="splide__list">
                    {
                        carousel.map(item => {
                            return (
                                <li key={i++} className="splide__slide">
                                    <img src={item} alt={item} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        </section>
    )
}