import { useEffect, useState } from "react"






export default function CreditCard() {

    const date= new Date();
    const [currMonth, setCurrMonth]= useState(date.getMonth() + 1);
    const [currYear, setCurrYear]= useState(date.getFullYear());

    const [error, setError]= useState({
        cardNumber: "",
        cardName: "",
        month: "",
        year: "",
        cvv: "",
    });

    const [isError, setIsError]= useState(false);

    const [cardState, setCardState]= useState({
        cardNumber: "",
        cardName: "",
        month: "",
        year: "",
        cvv: "",
    })

    const [touchState, setTouchState]= useState({
        cardNumber: undefined,
        cardName: undefined,
        month: undefined,
        year: undefined,
        cvv: undefined,
    })


    function printError(error) {
        for(let item in error) {
            if(error[item] !== "") {
                return (
                    <div className="font-red text-[14px]">
                        {error[item]}
                    </div>
                )
            }
        }
    }

    function handleChange(event) {
        const name= event.target.name;
        const value= event.target.value;

        setCardState(old => {
            return {
                ...old,
                [name]: value,
            }
        })
    }
    
    useEffect(() => {

        let errorDetails= "";
        let target= "";

        if(!/[0-9]/.test(cardState["cardNumber"] || cardState["cardNumber"].length !== 16)) {

            errorDetails= (touchState["cardNumber"] === false || cardState["cardNumber"] == "") ? "*Enter Card Number" : 
                touchState["cardNumber"] === true ?  "*Invalid Card Number" : "";
            target= "cardNumber";

        } else if (!/[0-9]/.test(cardState["year"]) || cardState["year"].length !== 4 || cardState["year"] == "0" 
            || cardState["year"] == "00" || cardState["year"] <currYear || cardState["year"] > currYear + 20) {
            errorDetails= (touchState["year"] === false || cardState["year"] == "") ? "*Enter Year" : 
                touchState["year"] === true ? "*Invalid Year" : "";
            target= "year";

        } else if (!/[0-9]/.test(cardState["month"]) || cardState["month"].length > 2 || cardState["month"] == "0" 
            || cardState["month"] == "00" || (cardState["year"] == currYear && Number(cardState["month"]) < currMonth)
            || Number(cardState["month"] > 12)) {
            errorDetails= (touchState["month"] === false || cardState["month"] == "") ? "*Enter Month" :  
            touchState["month"] === true ? "*Month should be between 1 to 12" : "";
            target= "month";

        } else if (!/[0-9]/.test(cardState["cvv"]) || cardState["cvv"].length < 3 || cardState["cvv"] === "000") {
            errorDetails= (touchState["cvv"] === false || cardState["cvv"] == "") ? "*Enter Your CVV" :  
            touchState["cvv"] === true ? "*Invalid CVV Number" : "";
            target= "cvv";

        } else if (/^([a-zA-Z]{2,}\\s[a-zA-Z]{2,}\\s?([a-zA-Z]{2,})?)*$/.test(cardState["cardName"])) {
            errorDetails= (touchState["cardName"] === false || cardState["cardName"] == "") ? "*Enter Your Name" :  
            touchState["cardName"] === true ? "*Invalid Name" : "";
            target= "cardName";
        } 
        
        if(errorDetails) {
            setIsError(true);
            setError(prevState => {
                const newObj = {};
                Object.keys(prevState).forEach(item => {
                    newObj[item]= item === target ? errorDetails : ""; 
                });
                return newObj;
            });
        } else {
            setIsError(false)
        }
    }, [cardState])

    return (
        <div className="w-full flex items-center px-[1rem] py-[1rem] sm:px-[5rem] md:px-[3rem] xl:px-[6rem]">
            <div className="w-full bg-[#f9f9f9] border border-[#ccc] rounded-[10px] font-grey">
                <div className="flex flex-col px-[1rem] py-[10px] text-[13px] gap-[10px] sm:px-[2rem] sm:text-[14px] sm:py-[1.5rem]">
                    {/* 1st row */}
                    <div className={`flex flex-col bg-white border px-[10px] py-[5px] rounded-[10px] 
                        ${(isError && error["cardNumber"] !== "") ? "border-[#ec3d25]" : "border-[#ccc]"}
                        sm:px-[15px]`}>
                        <label className="text-[12px]" htmlFor="cardNumber">Card Number</label>
                        <input type="number" id="cardNumber" name="cardNumber"
                            required
                            placeholder="xxxx xxxx xxxx xxxx"
                            className="outline-none" 
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => {setTouchState(old => {return {...old, [e.target.name]: true}})}}/>
                    </div>

                    {/* second row */}
                    <div className="flex items-center justify-between gap-[10px]">
                        <div className="flex items-center gap-[10px]">
                            <div className={`flex flex-col max-w-[50px] bg-white border border-[#ccc] px-[10px] py-[5px] rounded-[10px]
                                ${(isError && error["month"] !== "") ? "border-[#ec3d25]" : "border-[#ccc]"}
                                sm:max-w-[80px] sm:px-[15px]`}>
                                <label className="text-[12px]" htmlFor="month">Month</label>
                                <input type="number" id="month" name="month"
                                    required
                                    placeholder="00"
                                    className="outline-none" 
                                    onChange={(e) => handleChange(e)}
                                    onClick={(e) => {setTouchState(old => {return {...old, [e.target.name]: true}})}}/>
                            </div>

                            <div className={`flex flex-col max-w-[50px] bg-white border border-[#ccc] px-[10px] py-[5px] rounded-[10px]
                                ${(isError && error["year"] !== "") ? "border-[#ec3d25]" : "border-[#ccc]"}
                                sm:max-w-[80px] sm:px-[15px]`}>
                                <label className="text-[12px]" htmlFor="year">Year</label>
                                <input type="number" id="year" name="year"
                                    required
                                    placeholder="00" 
                                    className="outline-none" 
                                    onChange={(e) => handleChange(e)}
                                    onClick={(e) => {setTouchState(old => {return {...old, [e.target.name]: true}})}}/>
                            </div>
                        </div>

                        <div className={`flex flex-col max-w-[50px] bg-white border border-[#ccc] px-[10px] py-[5px] rounded-[10px]
                            ${(isError && error["cvv"] !== "") ? "border-[#ec3d25]" : "border-[#ccc]"}
                            sm:max-w-[80px] sm:px-[15px]`}>
                            <label className="text-[12px]" htmlFor="cvv">CVV</label>
                            <input type="number" id="cvv" name="cvv"
                                required
                                placeholder="xxx"
                                className="outline-none" 
                                onChange={(e) => handleChange(e)}
                                onClick={(e) => {setTouchState(old => {return {...old, [e.target.name]: true}})}}/>
                        </div>
                    </div>

                    {/* 3rd row */}
                    <div className={`flex flex-col bg-white border border-[#ccc] px-[10px] py-[5px] rounded-[10px]
                            ${(isError && error["cardName"] !== "") ? "border-[#ec3d25]" : "border-[#ccc]"}
                            sm:px-[15px]`}>
                        <label className="text-[12px]" htmlFor="cardName">Name on Card</label>
                        <input type="text" id="cardName" name="cardName"
                            required
                            placeholder="Your Name" 
                            className="outline-none uppercase" 
                            onChange={(e) => handleChange(e)}
                            onClick={(e) => {setTouchState(old => {return {...old, [e.target.name]: true}})}}/>
                    </div>

                    {/* 4th row */}
                    <div className="flex items-center justify-end">
                        <div className="w-[3.5rem] h-[3.5rem] mr-[1rem]">
                            <img src="https://prod-img.thesouledstore.com/public/theSoul/images/credit-card.png?format=webp&w=768&dpr=1.3" 
                                alt="card" />
                        </div>
                    </div>

                    {
                        isError && printError(error)
                            
                    }
                </div>
            </div>
        </div>
    )
}