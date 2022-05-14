import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import MyRecipe from './pages/myrecipe';
import NameForm from './pages/form';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/addrecipe' element={<NameForm/>} />
        <Route path='/myrecipe' element={<MyRecipe/>} />
        <Route path ="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;