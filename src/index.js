import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TagProvider } from "./context/tagContext";
import { ImageProvider } from "./context/imageContext";
import { ModalProvider } from "./context/modalContext";
import { UserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TagProvider>
      <ImageProvider>
        <ModalProvider>
          <UserProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserProvider>
        </ModalProvider>
      </ImageProvider>
    </TagProvider>
  </React.StrictMode>
);
