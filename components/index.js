import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { HomeComponent } from "./Home/HomeComponent";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function Main (){

    return(
        <>
            <Header/>
            <HomeComponent/>
            <Footer/>
        </>
    )
    
}
export default Main;