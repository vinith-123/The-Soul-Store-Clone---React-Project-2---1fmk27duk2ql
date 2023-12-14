import SaveLogo from "../../assets/svg/saveLogo";





export default function MembershipPage() {
    const benefits= [
        {
            image: "https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-01.png?format=webp&w=160&dpr=2.0",
            title: "BIG DISCOUNTS",
            content: "Save big on ALL products every day. Why wait for a sale?",
        },
        {
            image: "https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-02.png?format=webp&w=160&dpr=2.0",
            title: "EARLY ACCESS",
            content: "Get your hands on select products and designs before others do.",
        },
        {
            image: "https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-03.png?format=webp&w=160&dpr=2.0",
            title: "FREE DELIVERY",
            content: "Our shipping charges are on us.",
        },
        {
            image: "https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-04.png?format=webp&w=160&dpr=2.0",
            title: "PRIORITISED SHIPPING",
            content: "We ship your orders before everyone else’s.",
        }, 
    ];

    const subscription= [
        {
            duration: "12",
            perMonth: "16.5",
            price: "199",
            saving: "83.2",
        },
        {
            duration: "3",
            perMonth: "49.6",
            price: "149",
            saving: "66.6",
        },
        {
            duration: "1",
            perMonth: "99",
            price: "99",
            saving: "",
        },
    ];

    return (
        <div className="w-full">
            <div className="relative">
                <div className="w-full h-[23rem] bg-gradient-to-r from-[#58595b] to-[#df7c7c]">
                    <img src="https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/exclusive_background_web.jpg" alt="membership-image" 
                        className="w-full h-full"/>
                </div>

                <div className="absolute w-full flex justify-center top-[30%]">
                    <SaveLogo />
                </div>
            </div>
            
            <div className="px-[1rem] sm:px-[2rem] xl:px-[10rem]">
                <div className="flex items-center justify-center">
                    <div className="flex items-center border-b border-[#e76a52] text-[16px] font-bold my-[2rem] 
                        lg:text-[26px]">
                        <p>Membership Benefits</p>
                        <div className="w-[30px] h-[35px] ml-[10px]
                            md:w-[40px] md:h-[45px]">
                            <img src="https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/Crown-without-border.png?format=webp&w=330&dpr=2.0" alt="img" />
                        </div>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 grid-rows-4 items-center mb-[2rem] w-full
                    md:grid-rows-2 md:grid-cols-2">
                    {
                        benefits.map(item => {
                            const {image, title, content}= item;

                            return (
                                <div key={title} className="flex items-center mx-[1rem]">
                                    <div className="max-w-[65px] max-h-[65px] 
                                        sm:max-w-[75px] sm:max-h-[75px] 
                                        lg:max-w-[130px] lg:max-h-[130px]">
                                        <img src={image} alt="image" className="w-fit h-fit" />
                                    </div>

                                    <div className="pl-[1rem] pt-[10px] w-full
                                        sm:pt-[1px]">
                                        <div className="">
                                            <p className="text-[14px] font-bold py-[5px] lg:text-[24px]">{title}</p>
                                        </div>

                                        <p className="text-[11px] pt-[5px] lg:text-[18px]">{content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex justify-center items-center bg-[#f2f2f2] p-[2rem]">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[26px] font-bold">BECOME A MEMBER</p>
                    <div className="flex flex-wrap items-center justify-center py-[1rem]">
                        {
                            subscription.map((item, index) => {
                                const {duration, perMonth, price, saving}= item;

                                return(
                                    <div key={price} className= {`w-[300px] h-[256px] rounded-[10px] mx-[2rem] border-[2px] border-[#707070]
                                        flex flex-col items-center m-[1rem] cursor-pointer
                                        ${index === 0 ? 
                                        "bg-white " : "bg-transparent "}`}>
                                        {
                                            index === 0 && 
                                            <div className="w-full bg-[#e76a52] text-[15px] 
                                                text-white font-bold rounded-t-[10px]
                                                flex justify-center py-[10px]">
                                                MOST POPULAR
                                            </div>
                                        }

                                        <div className={`flex flex-col items-center justify-center 
                                            px-[5rem] pb-[1rem] ${index === 0 ? 
                                            "pt-[17px]" 
                                            :
                                            "pt-[60px]"}`}>
                                            <div>
                                                <p className="text-[26px] font-bold">
                                                    {duration} Months
                                                </p>
                                                <p className="text-[18px] pt-[5px]">
                                                    (₹ {perMonth}/Month)
                                                </p>
                                            </div>

                                            <div className="pt-[2.5rem]">
                                                <p className="text-[26px] font-bold">
                                                    ₹ {price}
                                                </p>
                                                {
                                                    saving &&
                                                    <i className="text-[14px] font-green pt-[1rem]">
                                                        Save {saving}%
                                                    </i>
                                                }
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            }) 
                        }
                    </div>

                    <div className="text-white text-[20px] font-bold bg-[#e76a52] border 
                        border-[#e76a52] rounded-[5px] cursor-pointer
                        px-[5rem] py-[8px] mt-[1rem]
                        hover:bg-white hover:text-[#e76a52]">
                        ADD TO CART
                    </div>
                </div>
            </div>
        </div>
    )
}