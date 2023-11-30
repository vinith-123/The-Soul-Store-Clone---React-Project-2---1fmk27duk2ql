import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles/App.css";
import { useContext, useEffect } from "react";
import Navbar from "./components/homePage/navbar";
import PageForMen from "./pages/homePage/pageForMen";
import PageForWomen from "./pages/homePage/pageForWomen";
import PageForKids from "./pages/homePage/pageForKids";
import { ModalContext } from "./context/modalContext";
import Footer from "./components/homePage/footer";
import AuthenticationPage from "./pages/loginPage/authenticationPage";
import SignUp from "./components/authenticationPage/signUp";
import LogIn from "./components/authenticationPage/logIn";
import Whishlist from "./pages/user/whishlist";
import Cart from "./pages/user/cart";
import Error404 from "./pages/errorPage/error404";

function App() {

  const {setIsMobile}= useContext(ModalContext);

  const navigate= useNavigate();

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    navigate("/men");
  }, []);

  return <div className="App">  
    <Navbar />  

    <Routes>
      <Route path="/" element={<PageForMen />} />
      <Route path="/men" element={<PageForMen />} />
      <Route path="/women" element={<PageForWomen />} />
      <Route path="/kids" element={<PageForKids />} />
      <Route path="/authentication" element= {<AuthenticationPage />} >
        <Route path="register" element= {<SignUp />} />
        <Route path="login" element= {<LogIn />} />
      </Route>
      <Route path="/mywhishlist" element= {<Whishlist />} />
      <Route path="/cart" element= {<Cart />} />
      <Route path="*" element= {<Error404 />} />

    </Routes>

    <Footer />
  </div>;
}

export default App;
