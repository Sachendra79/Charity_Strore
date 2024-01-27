import React, { useEffect,useState,createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/login/Login';
import SignUp from './Components/Authentication/signUp/SignUp';
import OtpPage from "./Components/Authentication/otp/otpPage";
import Home from './Components/Pages/Home';
import Forget from './Components/Authentication/forgetUsername/forget';
import ProtectedRouter from './ProtectedRouter';
import About from './Components/Pages/About';


export const loginContext=createContext("");
function AppRouter() {

    
  return (
  
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/Otp" element={<OtpPage />}  />
    
      <Route path='/home' element={<Home/>}/>
      <Route path="/forget" element={<Forget />} />
      <Route path="/about" element={<About/>} />

    </Routes>
   
  );
}

export default AppRouter;