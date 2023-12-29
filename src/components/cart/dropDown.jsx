import { useEffect } from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";




export default function DropDown({children, name, isDropdownOpened, setIsDropdownOpened, paymentMethod, setPaymentMethod, target}) {
    

    // console.log("methods in drop-down: ", paymentMethod)

    // console.log(Object.keys(paymentMethod))

    // console.log("is opened: ", isDropdownOpened)

    function changePayMethod(setPaymentMethod, target, paymentMethod, isDropdownOpened, setIsDropdownOpened) {
        

        setPaymentMethod(old => {
            return {...Object.fromEntries(Object.keys(old).map(key => {
                    // console.log(`${key}: `, (key === target)); 
                    return [key, (key === target)]
                }))
            }
        });

        setIsDropdownOpened((old) => !old)
        
    }

    // useEffect(() => {
    //     setPaymentMethod(old => {
    //         return {...Object.fromEntries(Object.keys(old).map(key => {console.log(`${key}: `, (key === target)); 
    //             return [key, (key === target)]}))}
    //     });

    //     setIsDropdownOpened(() => paymentMethod[target])
    // }, [target])

    return (
        <div className="w-full border">
            <div className="p-[1rem] group cursor-pointer"
                    onClick={() =>  {changePayMethod(setPaymentMethod, target, paymentMethod, isDropdownOpened, setIsDropdownOpened)}}>
                <div className="flex items-center justify-between">
                    <div className="group-hover:text-[#37bdae]">
                        {name}
                    </div>
                    {/* {console.log("methods: ", paymentMethod)} */}
                    {
                        (isDropdownOpened && paymentMethod[target]) ?
                            <div>
                                <ChevronUp />
                            </div>
                        :
                            <div>
                                <ChevronDown />
                            </div>
                    }           
                </div>
            </div>
            
            {children}
        </div>
    )
}