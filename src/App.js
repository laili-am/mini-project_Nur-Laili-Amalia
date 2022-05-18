import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import AddRecipe from "./pages/AddRecipe/form";
import Navbar from "./components/Navbar/Navbar";
import FormRecipe from "./pages/MyRecipe/formmyrecipe";
import EditRecipe from "./pages/EditRecipe/editrecipe";
import NotFound from "./pages/NotFound/notfound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/myrecipe" element={<FormRecipe />} />
          <Route path="/editrecipe/:id" element={<EditRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
