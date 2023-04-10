import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Header from './components/Header';
import ShopFood from "./components/shop categories/ShopFood";
import ShopEquipment from "./components/shop categories/ShopEquipment";
import ShopToys from "./components/shop categories/ShopToys";
import ShopKennels from "./components/shop categories/ShopKennels";
import ItemPage from "./components/ItemPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
          <Route path="/shop/food" element={<ShopFood />} />
          <Route path="/shop/equipment" element={<ShopEquipment />} />
          <Route path="/shop/toys" element={<ShopToys />} />
          <Route path="/shop/kennels" element={<ShopKennels />} />
          <Route path="shop/:id" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch