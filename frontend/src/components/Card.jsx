import React, { useState } from 'react';
import styles from './Card.module.css';
import fallbackImage from '../assets/nope-not-here.webp';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/productInfoContext';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import Button from '../microComponenets/Button'

function Card({ data }) {

  const nav = useNavigate();
  const { productData, setProductData } = useContext(ProductContext);
  const [toCart,setToCart] = useState("")
  const [isAddedToCart,setIsAddedToCart] = useState('')

  const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cart.items)

  function discCropper(data) {
    if (data.description.length > 30) {
      return data.description.slice(0, 20) + '... read more';
    } else {
      return data.description; // Return the original description if it's shorter than 30 characters
    }
  }

  function handleClick(data) {
    setProductData(data);
    nav(`/products/${data.id}`);
  }
  function handleButtonClick(data){
    //  nav("/cart") 
    // setToCart(true)
    setIsAddedToCart(true)
    dispatch(addItem(data))
  }

  return (
    // isValid ?
      <div className={styles.card} >
        {/* {console.log(isValid)} */}
        {/* <img  src={ data.images[0]} onError={(e) => (e.target.src = fallbackImage)} /> */}
        
        <div className={styles.masterImage} onClick={()=>handleClick(data)} key={data.id}>
          {/* Render fallback image if main image fails to load */}
          <img  className={ toCart &&styles.flyingImage} src={ data.images[0]} onError={(e) => (e.target.src = fallbackImage)} />
        </div>
        <div className={styles.name}>
          <span>{data.title}</span>
        </div>
        <div className={styles.description}>
          <span>{discCropper(data)}</span>
        </div>
        <div className={styles.category}>
          <span>{data.category.name}</span>
        </div>
        <div className={styles.priceButtonFlex}>
          <div className={styles.price}>
            <span> Price <span>{data.price}</span> $</span>
          </div>
          {/* {console.log(cartTimes)} */}
          {/* {console.log(cartTimes)} */}
          <div className={styles.button}>
         {!isAddedToCart ?<button onClick={() => handleButtonClick(data)}>
          Add to cart
          </button>:<Button data={data}/> } 


          </div>
        </div>
      </div>
      // : null
  );
}

export default Card;
