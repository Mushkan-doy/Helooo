import React from "react";
import AgentFeatures from "./AgentFeatures";
import Category from "./Category";
import Featured from "./Featured";
import Search from "./Search";
import PropertyList from "./Property";
import Reviews from './Reviews'
import Articles from "./Articles";
import Question from "./Question";
export const HomeComponent = () =>{
    return(
        <>
            <Search/>
            <Category/>
            <Featured/>
            <AgentFeatures/>
            <PropertyList/>
            <Reviews/>
            <Articles/>
            <Question/>
        </>
    )
    
}