import React from "react";
import Footer from "./components/footer";
import Main from "./components/main";
import Navigation from "./components/navigation";
import "./styles/mainStyles.css";

function MyFirstApp(){
    return(
        <div className="First">
            <Navigation/>
            <hr/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default MyFirstApp;