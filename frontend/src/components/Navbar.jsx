import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PopUpContext } from '../context/PopUpContext';
import styles from '../components/Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthTypeContext } from '../context/authTypeContext';
import { TokenContext } from '../context/accessTokenContext';
import { UserDetailsContext } from '../context/userDetailsContext';

function Navbar() {
    const [data, setData] = useState(null);
    const { userDetails, setUserDetails } = useContext(UserDetailsContext);
    const { accessToken, setAccessToken } = useContext(TokenContext);
    const [focus, setFocus] = useState(false);
    const { authType, setAuthType } = useContext(AuthTypeContext);
    const location = useLocation();
    const { popUp } = useContext(PopUpContext);
    const [showNavbar, setShowNavbar] = useState(true);
    const nav = useNavigate();

    useEffect(() => {
        const hiddenPaths = ["/auth", "/address"];
        setShowNavbar(!hiddenPaths.includes(location.pathname));
    }, [location.pathname]);

    function handleNav(regType) {
        setAuthType(regType);
        nav('/auth');
    }

    async function handleLogout() {
        fetch("http://localhost:3000/logout", {
            method: "GET",
            credentials: "include"
        }).then(async response => {
            const res = await response.json();
            console.log(res.message);
            nav("/home");
            setAuthType('signup');
            setUserDetails({ username: "" });
            setAccessToken('');
        });
    }

    const getData = async (args) => {
        let data = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${args}`);
        data = await data.json();
        setData(data);
    }

    const debounce = (fn, d) => {
        let timer;
        return function (e) {
            const context = this;
            const args = e.target.value;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.call(context, args);
            }, d);
        };
    }
    function sendToProductDescription(id){
        nav(`/products/${id}`)

    }
    const deBouncingFn = debounce(getData, 300);

    return (
        showNavbar && (
            <nav>
                <div className={styles.gridContainer}>
                    <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        Drippster
                    </div>
                    </div>
                    <div className={styles.middleContainer}>
                        <div className={styles.home}>
                            <span>
                                <Link className={`${styles.link} ${styles.home}`} to="/home">Home</Link>
                            </span>
                        </div>
                        <div className={styles.Products}>
                            <span>
                                <Link className={`${styles.link} ${styles.products}`} to="/products">Products</Link>
                            </span>
                        </div>
                        <div className={styles.Sale}>
                            <span><Link className={styles.link} to="/cart">Cart</Link></span>
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={`${styles.input}`}>
                            <input type="text" onKeyUp={deBouncingFn} onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => setFocus(false), 200)} />
                            {
                                focus && data && (
                                    <div className={styles.dropDown}>
                                        {data.map((item, index) => (
                                            <div onClick={()=>sendToProductDescription(item.id)} key={index} className={styles.dropDownItem}>
                                                
                                                {item.title}
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                        {authType === "signin" && accessToken ? (
                            <>
                                <p onClick={() => { nav("/userDetails") }} style={{ marginRight: "20px" }} className={styles.username}>{userDetails.username.split(" ")[0]}</p>
                                <div onClick={() => { nav("/userDetails") }} style={{ marginRight: "20px" }} className={styles.avatarUploader}></div>
                                <i style={{ color: "white", cursor: "pointer" }} onClick={handleLogout} className="fa-solid fa-right-from-bracket"></i>
                            </>
                        ) : (
                            <>
                                <div className={styles.Login}>
                                    <span onClick={() => handleNav("signup")}>Signup</span>
                                    {popUp && <Auth type={authType} />}
                                </div>
                                <div className={styles.Signup}>
                                    <span onClick={() => handleNav("signin")}>Signin</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        )
    );
}

export default Navbar
