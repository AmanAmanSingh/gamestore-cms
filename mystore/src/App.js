import './App.css';
import { useEffect, useState } from "react";

import { gamesDatafromApi } from './utility/api';
import Headers from './component/header/headers';
import Home from './component/home/home';
import { cartContext } from './component/cartcontext';
import Cart from './component/cart/cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CheckOut from './component/checkout/checkout';
import OrderSuccess from './component/checkout/paymentsuccess';

function App() {
  const [gameCart, setGameCart] = useState([])
  const [cartItem, setCartItem] = useState([])
  return (
    <>
      <cartContext.Provider value={{ gameCart, setGameCart, cartItem, setCartItem }}>
        <BrowserRouter>
          <Headers />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/success' element={<OrderSuccess />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>

    </>

  );
}

export default App;
