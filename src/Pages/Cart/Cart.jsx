import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart() {

  const { cart, totalPrice } = useContext(StoreContext);

  /*===== Particles =====*/
  const particleClasses = ['pr1', 'pr2', 'pr3', 'pr4', 'pr5', 'pr6', 'pr7', 'pr8', 'pr9', 'pr10'
    , 'pr11', 'pr12', 'pr13', 'pr14', 'pr15', 'pr16', 'pr17', 'pr18', 'pr19', 'pr20'];

  /*===== ScrollToTop =====*/
  const scrollToTop = () => {
    window.bootstrap?.Offcanvas?.getInstance(document.getElementById('loginOffcanvas'))?.hide();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <main className='cart-page'>
        {particleClasses.map((pr, index) => (
          <div key={`elec-p-${index}`} className={`particles ${pr}`}></div>
        ))}
        <section className='cart-section'>
          <div className="section-content">
            <div className="section-title">
              <h1 className="cart-title"> Your Cart</h1>
            </div>

            {(!cart || cart.length === 0) ? (
              <p className="empty-message"> No cart yet </p>
            ) : (
              <div className='product-grid'>
                {cart.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isCart={true}
                    />
                  )
                })}
              </div>
            )}

            <div className="cart-summary-box">

              <div className="summary-row">
                <span className="summary-label">Total Price:</span>
                <span className="summary-value">{Number(totalPrice)} $</span>
              </div>
              <Link to="/checkout" onClick={scrollToTop}>
                <button className="checkout-btn">
                  Proceed To Checkout <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div> {/* cart-summary-box */}

          </div> {/* section-content */}
        </section> {/* cart-section */}
      </main>
    </>
  )
}

export default Cart
