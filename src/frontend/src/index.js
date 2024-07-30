import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from './landing_page/signup/SignupPage';
import About from './landing_page/about/AboutPage';
import Products from './landing_page/products/ProductsPage';
import Pricing from './landing_page/pricing/PricingPage';
import Footer from './landing_page/common/Footer';
import Navbar from './landing_page/common/Navbar';
import NotFound from './landing_page/common/NotFound';
import Support from "./landing_page/support/SupportPage";
import LoginPage from "./landing_page/LoginComponent/LoginPage";
// import Home from '../../dashboard/src/components/Home';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/Home" element={<Home/>} /> */}
      <Route
          path="/Home"
          element={
            <>
              <iframe
                src="http://localhost:3001" // URL where your dashboard app is running
                style={{ width: '100%', height: '100vh', border: 'none' }}
                title="Home"
              />
            </>
          }
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);