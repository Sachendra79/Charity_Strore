import React, { useEffect,useState,createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/login/Login';
import SignUp from './Components/Authentication/signUp/SignUp';
import OtpPage from "./Components/Authentication/otp/otpPage";

import Forget from './Components/Authentication/forgetUsername/forget';
import ProtectedRouter from './ProtectedRouter';


export const loginContext=createContext("");
function AppRouter() {

    
  return (
  
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/Otp" element={<OtpPage />}  />
    
    
      <Route path="/forget" element={<Forget />} />
  

    </Routes>
   
  );
}

export default AppRouter;