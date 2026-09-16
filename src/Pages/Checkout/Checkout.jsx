import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import './Checkout.css'

function Checkout() {

    const { cart, totalPrice, setCart } = useContext(StoreContext);
    const navigate = useNavigate();

    /*===== FormData =====*/
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    /*===== HandleInput =====*/
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    /*===== HandleForm =====*/
    const handleConfirmOrder = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.address || !formData.cardNumber) {
            alert(" Protocol Error: Please fill all required secure fields!");
            return;
        }
        alert(`TechNexus Order Confirmed!\nThank you ${formData.fullName}.\nYour secure tracking ID is: #NX-${Math.floor(100000 + Math.random() * 900000)}`);
        setCart([]);
        navigate('/');
    };

    /*===== EmptyMessage =====*/
    if (!cart || cart.length === 0) {
        return (
            <main className="checkout-page-empty">
                <div className="empty-checkout-card">
                    <h2> Your Cart is Empty!</h2>
                    <p> Go back to the shop and add some products to your cart first. </p>
                    <button onClick={() => navigate('/shop')}> Back To Shop </button>
                </div>
            </main>
        );
    }

    /*===== ScrollToTop =====*/
    const scrollToTop = () => {
        window.bootstrap?.Offcanvas?.getInstance(document.getElementById('loginOffcanvas'))?.hide();
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    /*===== Particles =====*/
    const particleClasses = ['pr1', 'pr2', 'pr3', 'pr4', 'pr5', 'pr6', 'pr7', 'pr8', 'pr9', 'pr10'
        , 'pr11', 'pr12', 'pr13', 'pr14', 'pr15', 'pr16', 'pr17', 'pr18', 'pr19', 'pr20'];

    return (
        <>
            <main className="checkout-page">
                {particleClasses.map((pr, index) => (
                    <div key={`elec-p-${index}`} className={`particles ${pr}`}></div>
                ))}

                <div className="checkout-container">
                    <section className="checkout-billing-side">
                        <h2 className="checkout-section-title"><i className="bi bi-shield-lock"></i> Secure Checkout</h2>
                        <div className="checkout-line"></div>

                        <form onSubmit={handleConfirmOrder} className="checkout-form">
                            <h4 className="form-title">1. Shipping Information</h4>
                            <div className="input-wrapper">
                                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} required />
                            </div>
                            <div className="input-wrapper">
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="input-wrapper">
                                <input type="text" name="address" placeholder="Shipping Address (City, Street, Block)" value={formData.address} onChange={handleInputChange} required />
                            </div>

                            <h4 className="form-title">2. Payment Proxy (Simulation Card)</h4>
                            <div className="input-wrapper">
                                <input type="text" name="cardNumber" placeholder="0000 0000 0000 0000" maxLength="16" value={formData.cardNumber} onChange={handleInputChange} required />
                            </div>
                            <div className="input-row-flex">
                                <div className="input-wrapper">
                                    <input type="text" name="expiry" placeholder="MM/YY" maxLength="5" value={formData.expiry} onChange={handleInputChange} required />
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" name="cvv" placeholder="CVV" maxLength="3" value={formData.cvv} onChange={handleInputChange} required />
                                </div>
                            </div> {/* input-row-flex */}

                            <button type="submit" className="checkout-submit-btn" onClick={scrollToTop}>
                                <i className="bi bi-credit-card-2-front"></i> Authenticate & Confirm Order
                            </button>
                        </form> {/* checkout-form */}
                    </section> {/* checkout-billing-side */}

                    <section className="checkout-summary-side">
                        <h3 className="summary-title">Order Summary</h3>
                        <div className="checkout-line"></div>

                        <div className="checkout-items-track">
                            {cart.map((item) => (
                                <div key={item.id} className="checkout-item-row">
                                    <img
                                        src={Array.isArray(item.image) ? item.image[0] : (item.images ? item.images[0] : item.image)}
                                        alt={item.title}
                                        className="checkout-item-thumb"
                                    />
                                    <div className="checkout-item-details">
                                        <h5>{item.title}</h5>
                                        <p>{item.quantity}x — <span className="cyan-text">{item.price} $</span></p>
                                    </div>
                                </div>
                            ))}
                        </div> {/* checkout-items-track */}

                        <div className="checkout-invoice-box">
                            <div className="invoice-row">
                                <span>Subtotal:</span>
                                <span>{totalPrice} $</span>
                            </div>
                            <div className="invoice-row">
                                <span>Secure Shipping:</span>
                                <span className="cyan-text">FREE</span>
                            </div>
                            <div className="invoice-row total-row">
                                <span>Total Price:</span>
                                <span className="total-price">{totalPrice} $</span>
                            </div>
                        </div>
                    </section> {/* checkout-summary-side */}

                </div> {/* checkout-container */}
            </main> {/* checkout-page */}
        </>
    )
}

export default Checkout