import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navigation from './components/Navigation'
import Main1 from './components/Main1'
import Main2 from './components/Main2'
import Main3 from './components/Main3'
import Main4 from './components/Main4'
import ContactForm from './components/Main5';





export default function App(){

  console.log("import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import CartPage from "./pages/CartPage";
import BookOfTheDay from "./pages/BookOfTheDay";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    
    <BrowserRouter>
     <ToastContainer />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        
        {/* Protected Routes */}
        <Route path="/home" element={<PrivateRoute isLoggedIn={isLoggedIn} ><HomePage /></PrivateRoute>} />
        <Route path="/book-of-the-day" element={<PrivateRoute isLoggedIn={isLoggedIn}><BookOfTheDay cart={cart} setCart={setCart} /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute isLoggedIn={isLoggedIn}><CartPage cart={cart} setCart={setCart} /></PrivateRoute>} />
        <Route path="/book/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><BookDetailPage cart={cart} setCart={setCart} /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
")
  return (
    <>
      <Navigation/>
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <ContactForm />
      
    </>
  )
}
