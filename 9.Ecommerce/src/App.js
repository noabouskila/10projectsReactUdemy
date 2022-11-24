import {Routes , Route} from "react-router-dom"
import Navbar from "../src/Components/Navbar/Navbar"
import FloatingCart from "../src/Components/FloatingCart/FloatingCart"
import Home from "../src/Pages/Home/Home"
import Products from "./Pages/Products/Products"
import ProductShowCase from '../src/Pages/ProductShowcase/ProductShowCase'
import Contact from "../src/Pages/Contact/Contact"
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart"


function App() {
  return (
    <>
    <Navbar/>
    <FloatingCart/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductShowCase/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shoppingCart" element={<ShoppingCart/>}/>
      </Routes>
    </>
  );
}

export default App;
