import React, { useState } from "react";



const UserContext= React.createContext();

function UserProvider({children}) {

    const [projectId, setProjectId]= useState("y0fejcvlysl6");

    const [isAuthenticated, setIsAuthenticated]= useState(false);

    const [itemsInCart, setItemsInCart]= useState(0);
    const [likedItems, setLikedItems]= useState(0);

    const [user, set_user]= useState(null);
    const [token, set_token]= useState(null);

    const [username, setUserName]= useState(user?.name);
    const [firstLetterOfUser, setFirstLetterOfUser]= useState(username?.[0]);

    function save_user_and_token(user, token) {
        set_user(user);
        set_token(token);
    }



    return(
        <UserContext.Provider value={{isAuthenticated, setIsAuthenticated, itemsInCart, setItemsInCart,
            likedItems, setLikedItems, projectId, username, setUserName, 
            firstLetterOfUser, setFirstLetterOfUser, save_user_and_token, 
            user, set_user, token, set_token}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}