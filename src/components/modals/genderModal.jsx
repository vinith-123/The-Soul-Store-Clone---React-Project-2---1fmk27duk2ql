import Portal from "../portal/portal";








export default function GenderModal({setGender, isOpen, onClose}) {

    if (!isOpen) return null;

    return (
        <Portal effect={"backdrop-grayscale backdrop-blur-[4px] backdrop-brightness-50 animate-vertical-slide"}>
            <div className="flex flex-col py-[1rem] rounded-[5px] items-center bg-[#f2f2f2] text-[12px] w-[15rem] sm:w-[20rem]">
                <p className="text-[20px]">Update Profile Gender</p>
                <p>Do you want to update Gender in Profile?</p>

                <div className="flex gap-[1rem] mt-[10px]">
                    <button className="bg-white rounded-[5px] px-[1rem] py-[5px] hover:bg-[#117a7a] hover:text-white" 
                        onClick={() => {onClose(); setGender("male"); }}>
                        MALE
                    </button>

                    <button className="bg-white rounded-[5px] px-[1rem] py-[5px] hover:bg-[#117a7a] hover:text-white" 
                        onClick={() => {onClose(); setGender("female");}}>
                        FEMALE
                    </button>
                </div>
            </div>
        </Portal>
    )
}