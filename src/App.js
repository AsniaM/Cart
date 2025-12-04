import logo from './logo.svg';
import './App.css';
import Routing from './Components/Common/Routing';
import Footer from './Components/Common/Footer';
import { CartProvider } from './Components/Cart/Cartcontext';
import Cartdraw from './Components/Cart/Cartdraw';


function App() {
  return (
    <>
  <CartProvider>
  <Routing/>
  <Cartdraw/>
  </CartProvider>
  <Footer/>
  
    </>
    
  );
}

export default App;
