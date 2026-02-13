import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/custom/header/Header";
import Footer from "./Components/custom/footer/Footer";
import Home from "./Components/screen/Home/Home";
import Shop from "./Components/screen/shop/Shop";
import About from "./Components/screen/about/About";
import ContactUs from "./Components/screen/ContactUs/ContactUs";
import SellerMainPage from "./Components/custom/SellerDashboard/SellerMainPage";
import AddProducts from "./Components/custom/SellerDashboard/AddProducts";
import ProductList from "./Components/custom/SellerDashboard/ProductList";
import Orders from "./Components/custom/SellerDashboard/Orders";
import { useLocation } from "react-router-dom";
import SellerHeader from "./Components/custom/SellerDashboard/SellerHeader/SellerHeader";
import CartPage from "./Components/custom/header/components/CartPage";
import { products } from "./Components/custom/data/data";
import { CartProvider } from "./Components/context/CartContext";

const App = () => {
  const location = useLocation();
  const pathName = location.pathname;
  console.log("the path name is", pathName)


 



  return (

    <div className="min-h-screen  mt-[85px]">

      {
        pathName === "/admin" ? <SellerHeader /> : <Header  />
      }
      

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Parent admin route */}
          <Route path="/admin/*" element={<SellerMainPage />}>
            {/* <Route path="add" element={<AddProducts />} />
    <Route path="products" element={<ProductList />} />
    <Route path="orders" element={<Orders />} /> */}
          </Route>
        </Routes>
      
      {
        pathName === "/admin" ? "" : <Footer />
      }

    </div>
  );
};

export default App;
