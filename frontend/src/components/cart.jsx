import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartDiv from "../microComponenets/cartDiv";
import { useNavigate } from "react-router-dom";
import styles from "./cart.module.css";
import { loadStripe } from '@stripe/stripe-js';
import Checkoutform from './Checkoutform'; // Assuming Checkoutform component is defined in this file
import {Elements} from '@stripe/react-stripe-js'

import sadge from "../assets/sadge-removebg-preview.png";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const [clientPromise, setClientPromise] = useState();
  const [clientSecret,setClientSecret] = useState()

  async function getPublicKey() {
    try {
      const response = await fetch("http://localhost:3000/stripe/config");
      const pkey = await response.json();
      console.log(pkey);
      setClientPromise(loadStripe(pkey.pkey));
    } catch (error) {
      console.log(error);
    }
  }

  async function paymentIntent(req,res){
    try{

      const response = await fetch("http://localhost:3000/stripe/create-payment-intent",{
        method:"POST",
        body:JSON.stringify({"price":"12"})
      });
      // console.log("hey")
      const data = await response.json()
      setClientSecret(data.clientSecret)
      // console.log(data)
    }catch(error){
      res.send(error.message)
    }
  }
  useEffect(() => {
    getPublicKey();
  }, []); // Add [] to useEffect to run only once when component mounts
  useEffect(()=>{
    paymentIntent()
  },[])
  const nav = useNavigate(); // Assuming useNavigate hook is properly imported

  return (
    <div className={styles.checkOut}>
      <div className={styles.cartContent}>
        {cartItems.length === 0 ? (
          <>
            <div className={styles.emptyCart}>
              <div>
                <img src={sadge} alt="Empty cart" />
              </div>
              <div>
                <p>Your cart is empty, Fill it up please </p>
              </div>
              <button onClick={() => nav("/products")}>Buy now</button>
            </div>
          </>
        ) : (
          cartItems.map((item, index) => (
            <div key={index}>
              <CartDiv item={item} />
            </div>
          ))
        )}
        <div className={styles.subTotal}>
          <span style={{ color: "white" }}>
            Subtotal: ${cartItems.reduce((total, item) => total + item.price, 0)}
          </span>
        </div>
      </div>
      <div className={styles.cardDetailsContainer}>

      {clientPromise && clientSecret&&(<Elements stripe={clientPromise} options={{clientSecret}}>
       <Checkoutform/>

     </Elements>)}
      </div>
    </div>
  );
}

export default Cart;
