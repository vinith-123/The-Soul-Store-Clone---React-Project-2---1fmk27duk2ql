import { useContext } from "react"
import { UserContext } from "../../context/userContext"

 



export default function EditProfileSection() {

    const {user}= useContext(UserContext);

    // console.log("user data: ", user);

    return (
        <div className="w-full pl-[3rem] text-[15px] text-black">
            <p className="text-[#a7a9ac]">EDIT PROFILE</p>

            <div className="mt-[1rem]">
               <div className="p-[2rem] border">
                    <p>Email Id</p>
                    <p className="bg-[#eceeef] border border-[#ccc] rounded-[10px] px-[1rem] mt-[5px] 
                        py-[5px] w-min pointer-events-none font-grey">
                        {user?.email}
                    </p>
               </div>

               <div className="flex flex-col items-center border p-[2rem]">
                    <div className="flex justify-start w-full pb-[1.5rem]">
                        General Information
                    </div>

                    <form className="flex w-full justify-between border-y py-[1.5rem]">
                        <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="first-name" className="mb-[5px]">First Name*</label>
                                <input type="text" id="first-name" placeholder="First name" required
                                 className="border border-[#ccc] rounded-[10px] px-[10px] py-[5px]" />
                            </div>
                            <div className="flex flex-col w-3/4 mt-[15px]">
                                <label htmlFor="first-name" className="mb-[5px]">Last Name*</label>
                                <input type="text" id="first-name" placeholder="Last name" required 
                                    className="border border-[#ccc] rounded-[10px] px-[10px] py-[5px]" />
                            </div> 

                            <div className="mt-[15px]">
                                <div>
                                    Gender
                                </div>

                                <div className="flex items-center mt-[5px]">
                                    <div className="flex items-center cursor-pointer">
                                        <input type="radio" id="male" name="gender" value={"Male"} className="w-[1rem]" />
                                        <label htmlFor="male" className="ml-[5px]">Male</label>
                                    </div>
                                    <div className="flex items-center cursor-pointer ml-[1rem]">
                                        <input type="radio" id="female" name="gender" value={"Female"} className="w-[1rem]" />
                                        <label htmlFor="female" className="ml-[5px]">Female</label>
                                    </div>
                                    <div className="flex items-center cursor-pointer ml-[1rem]">
                                        <input type="radio" id="other" name="gender" value={"Other"} className="w-[1rem]" />
                                        <label htmlFor="other" className="ml-[5px]">Other</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="phone" className="mb-[5px]">Mobile Number*</label>
                                <input type="tel" id="phone" placeholder="Mobile Number" 
                                    className="border border-[#ccc] rounded-[10px] px-[10px] py-[5px]" />
                            </div>

                            <div className="flex items-center justify-center mt-[2rem]
                                bg-[#117a7a] border border-[#117a7a] rounded-[4px] text-white
                                cursor-pointer px-[4rem] py-[8px] text-[12px] font-bold
                                hover:bg-white hover:text-[#117a7a]">
                                Edit/Change Address
                            </div>
                        </div>
                    </form>             

                    <div className="bg-[#117a7a] border border-[#117a7a] rounded-[4px] text-white
                        cursor-pointer px-[4rem] py-[8px] text-[12px] font-bold mt-[1.5rem]
                        hover:bg-white hover:text-[#117a7a]">
                        SAVE
                    </div>
               </div>
            </div>
        </div>
    )
}