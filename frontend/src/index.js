import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './index.css';
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer"
import HomePage from "./landing_page/home/HomePage"
import Signup from "./landing_page/signup/Signup"
import AboutPage from "./landing_page/about/AboutPage"
import ProductPage from "./landing_page/product/ProductPage"
import PricingPage from "./landing_page/pricing/PricingPage"
import SupportPage from "./landing_page/support/SupportPage"
import NotFound from './landing_page/Notfound';
import OtpPage from './landing_page/signup/OtpPage';
import EmailPage from './landing_page/signup/EmailPage';

function StandardLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route element={<StandardLayout />}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
    <Route path="/otp" element={<OtpPage/>}/>
    <Route path="/email" element={<EmailPage/>}/>
  </Routes>
  </BrowserRouter>
);
