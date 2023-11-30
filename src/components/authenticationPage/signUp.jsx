import { useNavigate } from "react-router-dom";
import FacebookIcon from "../../assets/svg/facebookIcon";
import GoogleIcon from "../../assets/svg/googleIcon";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import Password from "./password";




export default function SignUp() {

    const {setIsAuthenticated, save_user_and_token, projectId}= useContext(UserContext);
    const navigate= useNavigate();

    const [errorState, set_error_state]= useState("");

    const [isPasswordCorrect, setIsPasswordCorrect]= useState(null);
    const [reEnterPass, setReEnterPass]= useState(null);
     

    const [userInfo, set_user_info]= useState({
        name: "",
        email: "",
        password: "",
        // phone: "",
        appType: "ecommerce",
    });

    function handle_change(event) {
        const element= event.target;

        const {name, value}= element;

        set_user_info((old_info) => {
            return {
                ...old_info,
                [name]: value,
            };
        });
    }

    function checkPassword(event) {
        const {value}= event.target;

        setReEnterPass(value);

        if(userInfo.password === value) {
            setIsPasswordCorrect(true);
        } else {
            setIsPasswordCorrect(false);
        }
    }
 
    function handle_submit(event) {
        event.preventDefault();

        if(!userInfo.email || !userInfo.password || !userInfo.name) {
            set_error_state('*All fields must be filled');
            return;
        } else if(!/^[a-zA-Z]+(?:['\s-][a-zA-Z]+)*$/.test(userInfo.name)) {
            set_error_state("*Name should only contain letters and spaces.");
            return;
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInfo.email)) {
            set_error_state("*Format of email is not correct");
            return;
        } else if(userInfo.password !== reEnterPass && reEnterPass !== "") {
            setIsPasswordCorrect(false);
        }
        // } else if(!/[0-9]/.test(userInfo.phone)) {
        //     set_error_state("*Phone number should only contain numbers");
        //     return;
        // } else if(userInfo.phone.length !== 10) {
        //     console.log("length of phone no.: ", userInfo.phone.length);
        //     set_error_state("*Phone number should be 10 digits long");
        //     return;
        // }
        sign_up(userInfo);
    }

    async function sign_up(userInfo) {
        try {
            var myHeaders = new Headers();
            myHeaders.append("projectID", {projectId});
            myHeaders.append("Content-Type", "application/json");
        
            const url = "https://academics.newtonschool.co/api/v1/user/signup";
            var payload = {
                ...userInfo,
            };
        
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(payload),
                redirect: "follow",
            };
        
            const response = await fetch(url, requestOptions);

            // console.log("response: ", response);
            // console.log("user info.: ", userInfo);
            
            if (response.ok) {
                const data = await response.json();
                
                const { token, data: loginData } = data;
                localStorage.setItem("authToken", token);
                localStorage.setItem("userInfo", loginData);

                setIsAuthenticated(true);
                set_signupform_state();
                navigate("/men");
            } else {
                set_error_state("Registration failed.");
            }
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <>
            <p className="font-grey font-semibold text-[16px] my-[1rem]">Register with The Souled Store</p>

            <div className="bg-[#e6e7e8] border border-black w-full font-grey 
                text-[14px] font-bold">
                <div className="p-[2rem] w-full">
                    {/* 3rd party */}
                    <div className="flex items-center justify-between">
                        <div className="flex justify-center bg-white cursor-not-allowed">
                            <div className="py-[5px] px-[10px] flex items-center justify-center
                                bg-[#6081c0] ">
                                <FacebookIcon color={"#ffffff"} />
                            </div>

                            <p className="pl-[10px] p-[6px] border-l ">Facebook</p>
                        </div>

                        <div className="flex justify-center bg-white cursor-not-allowed">
                            <div className="py-[5px] px-[10px] flex items-center justify-center
                                bg-[#ee4335]">
                                <GoogleIcon color={"#ffffff"} />
                            </div>

                            <p className="pl-[10px] p-[6px] border-l ">Google</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center my-[2rem]">
                        <p>-</p>
                        <p className="mx-[5px]">OR</p>
                        <p>-</p>
                    </div>

                    <form className="flex flex-col w-full text-[14px] font-bold" onSubmit={(event) => handle_submit(event)}>
                        <input type="text" placeholder="Full name" name="name" inputMode="text" required
                            className="w-full border-[1px] border-[#ccc] mb-[0.5rem] rounded-[4px] px-[8px] py-[6px] text-black" 
                            onChange={(event) => handle_change(event)}/>


                        <input type="email" placeholder="Your email address" name="email" inputMode="email" required
                            className="w-full border-[1px] border-[#ccc] mb-[0.5rem] rounded-[4px] px-[8px] py-[6px] text-black" 
                            onChange={(event) => handle_change(event)}/>
                        
                        {/* enter password */}
                        
                        <Password callbackFunction={handle_change} placeholderText={"Enter password"} />

                        {/* password conformation */}
                        <Password callbackFunction={checkPassword} placeholderText={"Confirm password"} isPasswordCorrect={isPasswordCorrect} />

                        {/* phone number */}
                        {/* <input type="tel" placeholder="Your phone number" name="phone" inputMode="number" required
                            className="w-full border-[1px] border-[#ccc] mb-[0.5rem] rounded-[4px] px-[8px] py-[6px] text-black" 
                            onChange={(event) => handle_change(event)}/> */}
                        
                        {
                            errorState && <div className="text-[#ff0000] font-semibold">{errorState}</div>
                        }

                        <input type="submit"  required
                            className="w-full my-[1.5rem] rounded-[3px] py-[7px] cursor-pointer bc-green text-white text-[16px]
                                hover:bg-black duration-500 "/>
                    </form>

                    {/* path to go to login route */}

                    <div className="flex justify-center items-center font-medium mt-[0.5rem]">
                        <p>Already a Customer?</p>
                        
                        <p onClick={() => navigate("/authentication/login")}
                            className="ml-[5px] font-red underline underline-offset-2 underline-[#e11b23] cursor-pointer
                            hover:text-[#117a7a] hover:underline-[#117a7a]">
                            Login
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}