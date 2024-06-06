import styles from './Home.module.css';
import newArrival from '../assets/newArrival.png'
import girlsSittingTogether from '../assets/girlsSittingTogether.png';
import pepeSwag from '../assets/pepeSwag.jpg'
import summerSale from '../assets/summerSale.png';
import pepe from '../assets/pepe.png'
import { useContext } from 'react';
import { PopUpContext } from '../context/PopUpContext';
export function Home() {
    const {popUp,setPopup} = useContext(PopUpContext)
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
                        <img src={summerSale} alt="Girls Sitting Together" />
                    </div>
                </div>
                <div className={styles.secondLayer}>
                <div className={styles.leftContainer}>
                        <div className={styles.arrival}>
                            <div className={styles.top}>
                                <span>New Arrivals</span> <br/>
                                <img src={newArrival} width="50px"/>
                            </div>
                                <span className={styles.intro}>Dont be Pepega<br/> Check out the new Drips</span>
                            <button>Shop Now</button>
                        </div>
                       
                    </div>

                    <div className={styles.rightContainer}>
                    <div className={styles.arrival}>
                            <div className={styles.top}>
                                <span>Have Coupons? Dont be Dumb Save more</span> <br/>
                                <img src={pepe} alt="Girls Sitting Together" />
                            </div>
                            <button>Apply Coupons</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
