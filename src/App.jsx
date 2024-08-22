import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./components/Home/Home";
import NewsLetter from "./components/Home/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import Header from "./components/Header/Header";
// import SingleProducts from "./components/SingleProducts/SingleProducts";




function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* <SingleProducts/> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <NewsLetter/>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
