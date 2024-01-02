
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";




export default function DropDown({children, name, isDropdownOpened, setIsDropdownOpened, paymentMethod, setPaymentMethod, target}) {

    function changePayMethod(setPaymentMethod, target, paymentMethod, isDropdownOpened, setIsDropdownOpened) {
        setPaymentMethod(old => {
            return {...Object.fromEntries(Object.keys(old).map(key => {
                    return [key, (key === target)]
                }))
            }
        });

        setIsDropdownOpened((old) => !old)
        
    }

    return (
        <div className="w-full border">
            <div className="p-[1rem] group cursor-pointer"
                    onClick={() =>  {changePayMethod(setPaymentMethod, target, paymentMethod, isDropdownOpened, setIsDropdownOpened)}}>
                <div className="flex items-center justify-between">
                    <div className="group-hover:text-[#37bdae]">
                        {name}
                    </div>
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