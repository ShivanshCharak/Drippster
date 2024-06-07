import React from 'react'
import { useNavigate } from 'react-router-dom';
import Shimmer from './shimmer';
import styles from './Card.module.css'
import { useSelector } from 'react-redux';
import Card from './Card'


function Store({data}) {
    const nav = useNavigate()
  const shimmerArray = [];
  const itemCount = useSelector(store => store.cart.items);

  for (let i = 0; i < 9; i++) {
    shimmerArray.push(<Shimmer key={i} />);
  }
  function handleCartClick() {
    nav('/cart');
}
function handleChangeCategory(id){
    nav(`/category/${id}`)
}
  return (
    <div className={styles.mainContainer}>
    {/* <div className={styles.filter}>
    <i class="fa-solid fa-filter"></i>
    </div>  */}
    <div className={styles.categories}>
        <span>Categories</span>
        <div className={styles.categoryOptions}>
            <div onClick={()=>handleChangeCategory(1)}>Clothes</div>
            <div onClick={()=>handleChangeCategory(2)} >Electronics</div>
            <div onClick={()=>handleChangeCategory(3)}>Furniture</div>
            <div onClick={()=>handleChangeCategory(4)}>Shoes</div>
        </div>
    </div>
    <div className={styles.cardContainer}>
        {data.length > 0 ? (
          data.map((element) => (
            <>
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
    </div>
  )
}

export default Store