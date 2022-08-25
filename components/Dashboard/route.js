import React from "react";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import ChangeProfilePassword from "./ChangePassword/ChangePassword";
import EditProfile from "./EditProfile.js/EditProfile";
import MainPage from "./MainPage";

const DashboardRoutes = () => {
    return (
        <section className="gray main-wrapper-element" style={{ "paddingTop": "40px" }}>
            <Routes>
                <Route exact path="" element={<MainPage />}></Route>
                <Route exact path="my-profile" element={<EditProfile/>}></Route>
                <Route exact path="change-password" element={<ChangeProfilePassword/>}></Route>
            </Routes>
        </section>
    )
}
export default DashboardRoutes;