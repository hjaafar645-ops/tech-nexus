import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails';
import Favorites from './Pages/Favorites/Favorites';
import Cart from './Pages/Cart/Cart';
import Checkout from "./Pages/Checkout/Checkout";
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Footer from "./Components/Footer/Footer";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/shop' element={< Shop />}></Route>
          <Route path='/favorites' element={< Favorites />}></Route>
          <Route path='/productDetails/:id' element={< ProductsDetails />}></Route>
          <Route path='/cart' element={< Cart />}></Route>
          <Route path="/checkout" element={< Checkout />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
          <Route path='*' element={< NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App