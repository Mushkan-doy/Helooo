import React from "react";
import Main from "..";
import Dashboard from "./Dashboard";
import DashboardFooter from "./DashboardFooter";
import EditProfile from "./EditProfile.js/EditProfile";
import MainPage from "./MainPage";
import DashboardRoutes from "./route";

const DashboardMain = () => {
    return (
        <>
            <Dashboard />
            {/* <MainPage /> */}
            <DashboardRoutes/>
            <DashboardFooter />
        </>
    )
}
export default DashboardMain;