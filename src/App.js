import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
//pages
import Home from "./pages/home/Home";
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { Products } from './shared/products';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import { ThemeProvider } from "./context/ThemeProvider";
import About from "./pages/About/About";
function App() {

  const getLocalStorage = () => {
    let newCartData = localStorage.getItem("cartData");

    if (!newCartData) {
      return []
    } else {
      return JSON.parse(newCartData)
    }
  }

  const [products, setProducts] = useState(Products)
  const [cartItems, setCartItems] = useState(getLocalStorage());
  const [showPopup, setShowPopup] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  const notify = () => toast("Item added to your cart", {
    // position: "top-center",
    autoClose: 2000,
  });


  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  }
  const onAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      const newItem = { ...item, quantity: 1 };
      setAddedItem(newItem);
      notify()
      return [...prevCartItems, newItem];

    });

  };
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartItems))
  }, [cartItems])

  const handleDecrement = (item) => {

    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ?
            { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1 }
            : cartItem)
      }
      return prevCartItems;
    })
  }

  const handleIncrement = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
      }
      return prevCartItems;
    })

  }

  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar cartItems={cartItems} />
          <div className="main-content">
            <Routes >
              <Route exact path="/" element={<Home products={products} onHandleClick={onAddToCart} />} />
              <Route path="/shop" element={<Shop products={products} onHandleClick={onAddToCart} />} />
              <Route path="/about" element={<About />} />
              <Route exact path="/cart"
                element={
                  <Cart
                    cartItems={cartItems}
                    onRemove={removeItemFromCart}
                    setCartItems={setCartItems}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement} />
                } />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}


export default App;


