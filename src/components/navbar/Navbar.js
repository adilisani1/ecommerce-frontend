import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DarkMode from '../Darkmode/Darkmode';

const Navbar = (props) => {
    const [showNav, setShowNav] = useState(false);
    const [isActiveHeader, setIsActiveHeader] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 50) {
                setIsActiveHeader(true);
            } else {
                setIsActiveHeader(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleNavbar = () => {
        setShowNav(prevState => !prevState);
    };

    return (
        <>


            {/* <!--Side Menu Modal-- > */}
            <div className={`side-menu-items ${isMenuOpen ? 'active' : ''} `} >
                <div className="close">
                    <ion-icon name="close-outline" class="close-icon" onClick={toggleMenu}></ion-icon>
                </div>

                <ul className="nav-side-menu" onClick={toggleMenu}>
                    <li className="">
                        <Link className="" to="/">Home</Link>
                    </li>
                    <li className="">
                        <Link className="" to="/shop">Shop</Link>
                    </li>
                    <li className="">
                        <Link className="" to="/">Deals</Link>
                    </li>
                    <li className="">
                        <Link className="" to="/">Contact Us</Link>
                    </li>
                </ul>

                <div className="side-menu-social">
                    {/* <span className="fab fa-facebook-f"></span> */}
                    <span className="ri-facebook-fill"></span>
                    <span className="ri-twitter-fill"></span>
                    <span className="ri-instagram-fill"></span>

                </div>

            </div>


            {/* <!--Header--> */}
            <header className={`header-wrap ${isActiveHeader ? "active" : ""} ${showNav ? "show" : ""}`}>

                <div className="header-inner ">
                    <div className="logo-area">
                        <Link className="navbar-brand text-muted" to="/">
                            <img className="logo-image" src="./images/logo/ecommerce-web-logo.png" alt="logo-img" />
                        </Link>
                    </div>

                    {/* <DarkMode /> */}
                    <nav className="navigation-container " >
                        <ul className="nav-menu" >
                            <li class="mobile-search">
                                <input type="text" className="form-control" placeholder="Search Product......." />
                                <i className="search-mobile-icon text-white ri-search-line " ></i>

                            </li>

                            <li className="" onClick={toggleNavbar}>
                                <Link className="" to="/">Home</Link>
                            </li>
                            <li className="" onClick={toggleNavbar}>
                                <Link className="" to="/shop">Shop</Link>
                            </li>
                            <li className="" onClick={toggleNavbar}>
                                <Link className="" to="/">Deals</Link>
                            </li>
                            <li className="" onClick={toggleNavbar}>
                                <Link className="" to="/">Contact Us</Link>
                            </li>

                            <li className="position-relative">
                                <Link className="" to="/cart" onClick={toggleNavbar}>
                                    <i class="ri-shopping-bag-fill"></i>
                                    {props.cartItems.length > 0 && (
                                        <span className="cart-count-badge">{props.cartItems.length}</span>
                                    )}
                                    {/* <span className="cart-count-badge">{props.cartItems.length}</span> */}
                                </Link>
                            </li>

                            <li className="">
                                <a className="" href="#">
                                    <i class="ri-heart-line"></i>
                                </a>
                            </li>

                            <li>
                                <a className='search'>
                                    <i className="search-icon ri-search-line " data-bs-toggle="modal" data-bs-target="#search-box"></i>
                                </a>
                            </li>

                        </ul>

                    </nav>

                    <div className="mobile-nav-items " onClick={toggleNavbar}>

                        <i className="menu-icon text-white ri-menu-line"></i>
                        <i class="close-icon text-white ri-close-line"></i>
                    </div>

                </div>


                {/*  < !--SideBar--> */}
                <section className="sidebar">
                    <div className="menu-area">
                        <div className="side-menu-icon">
                            <img className="menu-image" src="./images/logo/menu-icon.svg" alt="logo" onClick={toggleMenu} />
                        </div>
                        <ul className="social-icons">
                            <li><span className="icon text-white ri-facebook-fill"></span></li>
                            <li><span className="icon text-white ri-twitter-fill"></span></li>
                            <li><span className="icon text-white ri-instagram-fill"></span></li>
                        </ul>
                    </div>
                </section>


            </header>

            {/* <!--Search Modal-- > */}
            <div className="modal fade modal-dark-wrapper" id="search-box" aria-hidden="true" aria-labelledby="search-box"
                tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content modal-dark">
                        <a className="logo-header" href="#"> <img src="./images/logo/ecommerce-web-logo.png" /> </a>
                        <a href="#" className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                            &times;
                        </a>
                        <div className="modal-search">
                            <div className="modal-search-inner">

                                <input className="search-input form-control" placeholder="Search Product......." type="text" />
                                {/* <ion-icon class="search-icon text-white" name="search-outline"> */}
                                <i className="search-icon text-white ri-search-line " data-bs-toggle="modal" data-bs-target="#search-box"></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Navbar;




