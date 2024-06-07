import styles from './Home.module.css';
import newArrival from '../assets/newArrival.png';
import { useNavigate } from 'react-router-dom';
import girlsSittingTogether from '../assets/girlsSittingTogether.png';
import pepeSwag from '../assets/pepeSwag.jpg';
import summerSale from '../assets/summerSale.png';
import pepe from '../assets/pepe.png';
import { useContext } from 'react';
import { PopUpContext } from '../context/PopUpContext';
import ShimmerHome from './ShimmerHome';
import useCategoryProduct from '../api/useCategoryProduct';
import CategoricalData from './CategoricalData';

export function Home() {
  const { popUp, setPopup } = useContext(PopUpContext);
  const data = useCategoryProduct();
  const nav = useNavigate()
  function handleCategory(id){
    nav(`/category/${id}`)
  }
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.firstLayer}>
          <div className={styles.leftContainer}>
            <div className={styles.SummerSale}>
              Exclusive Summer Sale
            </div>
            <div className={styles.email}>
              <input type="email" placeholder="Enter your Email" /> <button><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div className={styles.middleContainer}>
            <img src={girlsSittingTogether} alt="Girls Sitting Together" />
          </div>
          <div className={styles.rightContainer}>
            <img src={summerSale} alt="Summer Sale" />
          </div>
        </div>
        <div className={styles.secondLayer}>
            <div className={styles.slider}>
              {
                data.length > 0 ? data.map((product, index) => (
                    <div className={styles.card} key={index}>
                    <div className={styles.sliderCategoryInfo}>
                      <p>{product.name === "Electronicssssssss" ? "Electronics" : product.name}</p>
                    </div>
                    <img className={styles.img} src={product.image} alt={product.name} />
                    <button className={styles.goToStore} onClick={()=>handleCategory(product.id)}>Go to store</button>
                    <div className={styles.overlay}></div>
                  </div>
                  
                )) :<><ShimmerHome/><ShimmerHome/><ShimmerHome/><ShimmerHome/><ShimmerHome/></>
              }
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
