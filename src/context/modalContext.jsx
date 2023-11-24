import React, { useState } from "react";




const ModalContext= React.createContext();


function ModalProvider({children}) {

  const [isMobile, setIsMobile]= useState(false);
  const [isMenuOpened, setIsMenuOpened]= useState(false);


    return (
        <ModalContext.Provider value={{isMobile, setIsMobile, isMenuOpened, setIsMenuOpened}}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext, ModalProvider};