import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Email from "../components/layout/Email_varification";
import { Login } from "../components/layout/Login";
import Register from "../components/layout/Register";

export const RoutesLink = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/email" element={<Email />}></Route>
          <Route exact path="/my-property" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  );
};
