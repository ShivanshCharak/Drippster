import React from 'react'
import styles from './shimmer.module.css';

function shimmer() {
    
  return (

      <div className={styles.card} >

          <div className={styles.masterImage}>
            {/* Render fallback image if main image fails to load */}
          </div>
          <div className={styles.name}>
            <span></span>
          </div>
          <div className={styles.description}>
            <span></span>
          </div>
          <div className={styles.category}>
            <span></span>
          </div>
          <div className={styles.priceButtonFlex}>
                <div className={styles.price}>
                    <span></span>
                </div>
                <div className={styles.button}>
                    {/* <button> Add To cart</button> */}
                </div>
         </div>
        </div>


      );
    
 
}

export default shimmer