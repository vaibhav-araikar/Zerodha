import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import Awards from "./landing_page/home/Awards.jsx";
import Education from "./landing_page/home/Education.jsx";
import Hero from "./landing_page/home/Hero.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import Pricing from "./landing_page/home/Pricing.jsx";
import Stats from "./landing_page/home/Stats.jsx";
import NotFound from "./landing_page/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
        // * means agar kisi bhi uppar wale routes ke liye match nahi hua to ye
        route chalega
      </Routes>
      <Footer />
    </StrictMode>
  </BrowserRouter>,
);
