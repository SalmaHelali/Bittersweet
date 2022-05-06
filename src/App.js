import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navv from "./components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Productlist from "./Pages/productlist";
import Aboutus from "./Pages/Aboutus";
import Signup from "./Pages/Signup";
import Product from "./Pages/Products";

function App() {
  return (
    <div>
      <Navv />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/" element={<Home />} />
        <Route path="/Productlist" element={<Productlist />} />
        <Route path="/Bracelets" element={<Product />} />
        <Route path="/Aboutus" element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default App;
