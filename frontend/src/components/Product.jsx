import React from 'react';
import UseFetchedData from '../api/useFetchedData'; // assuming UseFetchedData is a custom hook
import Card from './Card';
import styles from './Card.module.css';
import Shimmer from './shimmer';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

function Product() {
  const nav = useNavigate()
  const data = UseFetchedData(); 
  const shimmerArray = [];
  // console.log(data)
  const itemCount = useSelector(store => store.cart.items);

  for (let i = 0; i < 9; i++) {
    shimmerArray.push(<Shimmer key={i} />);
  }
  function handleCartClick() {
    nav('/cart');
}

  return (
    <>
      <div className={styles.cardContainer}>
        {data.length > 0 ? (
          data.map((element) => (
            <>
            {/* {console.log(element)} */}
            <Card key={element.id} data={element} />
            </>
            
          
          ))
        ) : (
          <>
            {shimmerArray}
          </>
        )}
           <div className={`${styles.shoppingCart} ${styles.activ}`} onClick={handleCartClick} data-product-count={itemCount.length}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
      </div>
    </>
  );
}

export default Product;
