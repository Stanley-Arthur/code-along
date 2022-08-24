import React from "react";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductList from "./Pages/ProductList"
import TaskManager from "./Pages/TaskManager";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import NotFound from "./Pages/NotFound"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/task-manager" element={<TaskManager />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
