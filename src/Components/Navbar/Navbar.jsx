import React, { useContext, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css'

function Navbar() {

    /*===== StoreContext =====*/
    const { favorite } = useContext(StoreContext)

    /*===== FavCount =====*/
    const favCount = favorite?.length || 0;

    /*===== NavOpen =====*/
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    /*===== NavClose =====*/
    const handleCloseMenu = () => { setIsMenuOpen(false) }

    /*===== Shop/Location =====*/
    const location = useLocation();
    const isShopPage = location.pathname === '/shop';

    /*===== LoginState =====*/
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome Back to TechNexus!\n User: ${loginEmail}`);
        setLoginEmail('');
        setLoginPassword('');
        setIsLoginOpen(false);
    };

    return (
        <>
            <header className={isShopPage ? 'shop-header-active' : ''}>
                <nav className='navbar'>
                    <div className='mobile-logo'>
                        <NavLink to="/" className='logo-link' onClick={handleCloseMenu}> Tech <span className='logo-span'> Nexus </span> </NavLink>
                    </div>
                    <ul className={`navbar-list ${isMenuOpen ? "open" : ""}`}>
                        <li className='nav-logo-item'>
                            <NavLink to="/" className='logo-link' onClick={handleCloseMenu}> Tech <span className='logo-span'> Nexus </span> </NavLink>
                        </li>
                        <li className='nav-text-item'>
                            <NavLink to="/" className='nav-menu-link' onClick={handleCloseMenu}> Home </NavLink>
                        </li>
                        <li className='nav-text-item'>
                            <NavLink to="/shop" className='nav-menu-link' onClick={handleCloseMenu}> Shop </NavLink>
                        </li>
                        <li className='nav-icon-item favorite-item'>
                            <NavLink to="/favorites" className='nav-icon-link' onClick={handleCloseMenu}>
                                <i className='bi bi-heart fav-icon'></i>
                                <span className='fav-badge'>{favCount}</span>
                            </NavLink>
                        </li>
                        <li className='nav-icon-item cart-item'>
                            <NavLink to="/cart" className='nav-icon-link' onClick={handleCloseMenu}>
                                <i className='bi bi-cart3 cart-icon'></i>
                            </NavLink>
                        </li>
                        <li className='nav-login-item'>
                            <button className='login-btn' type="button" onClick={() => { setIsLoginOpen(true); handleCloseMenu(); }}>
                                Login
                            </button>
                        </li>
                    </ul>
                    <button className={`navbar-toggle ${isMenuOpen ? 'active-toggle' : ''}`} type='button' onClick={() => setIsMenuOpen(!isMenuOpen)} >
                        <i className={`bi ${isMenuOpen ? 'bi-x-lg toggle-rotate' : 'bi-list'}`}></i>
                    </button>
                </nav> {/* navbar */}
            </header>


            {/* Off-Canvas */}
            <div
                className={`canvas-overlay ${isLoginOpen ? 'active' : ''}`}
                onClick={() => setIsLoginOpen(false)}>
            </div> {/* canvas-overlay */}

            <div className={`canvas-panel ${isLoginOpen ? 'open' : ''}`}>
                <div className="canvas-header">
                    <h5 className="canvas-title">
                        <i className="bi bi-shield-lock-fill"></i> NEXUS GATEWAY
                    </h5>
                    <button type="button" className="canvas-close-btn" onClick={() => setIsLoginOpen(false)}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div> {/* canvas-header */}

                <div className="canvas-body">
                    <form onSubmit={handleLoginSubmit} className="canvas-login-form">
                        <div className="canvas-form-group">
                            <label className="canvas-form-label">Email Address</label>
                            <input
                                type="email"
                                className="canvas-form-input"
                                placeholder="name@example.com"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                            />
                        </div> {/* canvas-form-group */}

                        <div className="canvas-form-group">
                            <label className="canvas-form-label">Secure Password</label>
                            <input
                                type="password"
                                className="canvas-form-input"
                                placeholder="••••••••"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                        </div> {/* canvas-form-group */}

                        <button type="submit" className="canvas-login-btn">
                            Sign In
                        </button>
                    </form> {/* canvas-login-form */}

                    <p className="canvas-register-text">
                        Don't have an account? <Link to="/register" onClick={() => setIsLoginOpen(false)}>Register Now</Link>
                    </p>

                    <div className="canvas-footer">
                        Secure Connection Verified <i className="bi bi-patch-check-fill"></i>
                    </div>
                </div> {/* canvas-body */}
            </div> {/* canvas-panel */}
        </>
    )
}

export default Navbar;
