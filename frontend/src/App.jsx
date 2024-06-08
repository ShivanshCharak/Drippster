import React from 'react';
import { createRoot } from 'react-dom/client'; // New root API for React 18

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home } from './components/Home';
import Product from './components/Product';
import Sale from './components/Sale';
import Auth from './_auth/auth';
import Cart from './components/cart';

import Details from './components/Details';

import Profile from './components/Profile';


import Userdetails from './components/UserDetails'
import Address from './components/Address';
import CategoricalData from './components/CategoricalData';
import Footer from './components/Footer';


function App() {


  return (
    <>
        <Navbar />

      <Routes>
        <Route path="/cart" element={<Cart></Cart>}/>
        {/* <Route path="/checkout" element={<Stripe/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/address" element={<Address />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="userDetails" element={<Userdetails/>}/>
        <Route path="/category/:id" element={<CategoricalData/>}/>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
