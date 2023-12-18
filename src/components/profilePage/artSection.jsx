





export default function ArtSection() {

    const intro= "A wise man once said, “The Earth, without art, is just eh.”. Or maybe it was Google. But we totally agree. The Souled Store has come up with a platform where amazeballs artists from all over the world gather, showcase their artwork, and fill their piggy banks with the royalty earned. If you’re a scribbler, doodler, sketcher, or MS Paint ninja (although we prefer Adobe Illustrator), all you have to do is email us your designs and we'll take it from there. We regularly feature our artists on social media, and promote their new designs."

    const guide= [
        {
            heading: "1. GET AN IDEA",
            image: "https://tss-static-images.gumlet.io/icons/bulb.png",
            details: "This is the first and the hardest step. The best designs often have smart concepts behind them. If you’re looking for inspiration, check out our website to get an idea of the designs that do well.",
        },
        {
            heading: "2. UPLOAD YOUR DESIGN",
            image: "https://tss-static-images.gumlet.io/icons/upload.png",
            details: "Upload your design, give it an interesting title, write a brief description about it, and submit it to us. Please make sure the design is an original creation, and has not been taken from or inspired by any existing art on the internet.",
        },
        {
            heading: "3. MAKE MONEY",
            image: "https://tss-static-images.gumlet.io/icons/shopbag.png",
            details: "Once everything is in place, your products will be listed on the site. We’ll be paying you royalty every month, for all products sold. A login username and password will also be provided, so you can track sales and royalty. Ka-ching!",
        },
    ]
    
    return (
        <div className="w-full flex flex-col justify-center items-center text-[15px] font-grey">
            <div className="w-full xl:max-w-[1500px] flex flex-col items-center justify-center">
                <div className="w-full h-[8rem] md:h-[12rem] lg:h-[250px] xl:h-[350px] 2xl:h-[400px]">
                    <img src="https://tss-static-images.gumlet.io/banners/sell-your-artwork-banner.jpg" 
                        alt="No Image" className="w-full h-full" />
                </div>

                <div className="py-[1rem] px-[10px] sm:py-[2rem] sm:px-[2rem] md:px-[5rem] lg:px-[7rem] xl:px-[10rem]">
                    <p>
                        {intro}
                    </p>

                    <div className="mt-[1rem] sm:mt-[2rem]">
                        <div className="flex justify-center text-[20px] bc-green text-white font-bold">
                            HOW IT WORKS    
                        </div>    

                        <div className="flex flex-col items-start justify-center mt-[1rem] 
                            md:flex-row">
                            {
                                guide.map(item => {
                                    const {heading, image, details}= item;

                                    return (
                                        <div key={heading} className="flex flex-col items-center justify-center p-[1rem]">
                                            <div className="w-[90px] h-[90px] bg-[#e6e7e8] rounded-full">
                                                <img src={image} alt="No Image" className="w-full h-full" />
                                            </div>

                                            <div className="mt-[1rem]">
                                                <p className="flex justify-center text-[16px] font-bold font-green">{heading}</p>
                                                <p className="mt-[1rem]">{details}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center border-y-[2px] border-[#eee] py-[1rem] my-[10px]">
                        <p className="w-max">We recommend you view our</p>
                        <p className="w-max ml-[5px] cursor-pointer font-red">Submission Guidelines</p>
                        <p className="w-max ml-[5px]">for more information.</p>
                    </div>


                    <div className="flex items-center justify-center mt-[1rem] font-bold">
                        <button className="py-[8px] px-[3rem] border border-[#117a7a] font-green rounded-[5px]
                            hover:bg-[#117a7a] hover:text-white duration-500">
                            SUBMIT YOUR ARTWORK
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}