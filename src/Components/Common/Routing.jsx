import React from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Shop from '../../Pages/Shop'
import About from '../../Pages/About'
import Contact from '../../Pages/Contact'
import Privacy from '../../Pages/Static/Privacy'
import Acessibility from '../../Pages/Static/Acessibility'
import Refund from '../../Pages/Static/Refund'
import Shipping from '../../Pages/Static/Shipping'
import Term from '../../Pages/Static/Term'
import Home from '../../Pages/Home'
import Product from '../../Pages/Product/Product';
import Checkout from '../Checkout/Checkout';
const Routing = () => {

const location = useLocation(); 
  const showNavbar =
    location.pathname === '/' || location.pathname === '/Shop'|| location.pathname === '/About'|| location.pathname === '/Contact';


   return (
    <div>
    {showNavbar && <Navbar/> }
      
<Routes>
<Route path="/" element={<Home />} />   
 <Route path="/Product/:id" element={<Product />} />
 <Route path="/Shop" element={<Shop />} />
 <Route path="/CheckOut/:id" element={<Checkout />} />
<Route path="/About" element={<About />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Privacy" element={<Privacy />} />
<Route path="/Acessibility" element={<Acessibility />} />
<Route path="/Refund" element={<Refund />} />
<Route path="/Shipping" element={<Shipping />} />
<Route path="/Term" element={<Term />} />
</Routes>
</div>
  )
}

export default Routing