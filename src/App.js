import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Checkout from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';
import Content from './Components/Content/Content';
import Productdetails from './Components/Productdetails/Productdetails';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import CartContextProvider from './Components/CartContext';
import Confirmation from './Components/Checkout/Confirmation';
import ContentSamsung from './Components/Content/FilteredContent/ContentSamsung';
import ContentApple from './Components/Content/FilteredContent/ContentApple';
import ContentGoogle from './Components/Content/FilteredContent/ContentGoogle';
import ContentXiaomi from './Components/Content/FilteredContent/ContentXiaomi';
import ContentOnePlus from './Components/Content/FilteredContent/ContentOnePlus';



function App() {
  return (
    <Router>
    <div className="App">
       <NavBar />   
       <CartContextProvider>
       <Routes>
       <Route path='' element={ <Homepage /> } />
       <Route path='/products' element={<Content />} />
       <Route path='/products/apple' element={<ContentApple />} />
       <Route path='/products/samsung' element={<ContentSamsung />} />
       <Route path='/products/google' element={<ContentGoogle />} />
       <Route path='/products/xiaomi' element={<ContentXiaomi />} />
       <Route path='products/oneplus' element={<ContentOnePlus />} />
      <Route path='/order/:id' element={<Productdetails />} /> 
       <Route path='/cart' element={<Cart />} />
      <Route path='/checkout/' element={<Checkout />} />
      <Route path='/checkout/Confirmation' element={<Confirmation />} /> 
      </Routes>
      </CartContextProvider>
    </div>
    </Router>
  );
}

export default App;
