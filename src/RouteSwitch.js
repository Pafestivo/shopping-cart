import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Header from './components/Header';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch