import { StoreContext } from '../../Context/StoreContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product, isCart }) {

    const { favorite, handleRemoveFromCart, handleIncreaseQuantity,
        handleDecreaseQuantity, handleToggleFavorite, handleAddToCart } = useContext(StoreContext)

    /*===== IsFavorite =====*/    
    const isFavorite = favorite ? favorite.some((item) => item.id === product.id) : false

    /*===== ScrollToTop =====*/
    const scrollToTop = () => {
        window.bootstrap?.Offcanvas?.getInstance(document.getElementById('loginOffcanvas'))?.hide();
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
        <>
            <article className='product-card'>
                <div className='product-content'>

                    <Link to={`/productDetails/${product.id}`}>
                        <img src={product.images ? product.images[0] : product.images} alt={product.title} className='product-card-image'
                        onClick={scrollToTop} />
                    </Link>

                    <Link to={`/productDetails/${product.id}`}>
                        <h3 className='product-card-title'> {product.title} </h3>
                    </Link>

                    <p className='product-card-price'> {product.price} $ </p>
                    <p className='product-card-rating'> <i className='bi bi-star-fill'></i> {product.rating} </p>

                    {isCart && (
                        <div className="quantity-control">
                            <button className="qty-btn" onClick={() => handleDecreaseQuantity(product.id)}>
                                <i className="bi bi-dash"></i>
                            </button>
                            <span className="qty-number">{product.quantity}</span>
                            <button className="qty-btn" onClick={() => handleIncreaseQuantity(product.id)}>
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    )}

                    <div className='product-card-actions'>
                        <button className='product-card-favorite' onClick={() => handleToggleFavorite(product)}>
                            <i className={isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
                        </button>

                        {isCart && (
                            <button onClick={() => handleRemoveFromCart(product.id)} className='remove-btn'>
                                <i className='bi bi-trash'></i>
                            </button>
                        )}

                        {!isCart && (
                            <Link to={`/productDetails/${product.id}`}>
                                <button className='product-card-eye' onClick={scrollToTop}>
                                    <i className="bi bi-eye"></i>
                                </button>
                            </Link>
                        )}

                        <button className='product-card-cart' onClick={() => handleAddToCart(product)}>
                            <i className='bi bi-cart'></i>
                        </button>
                    </div> {/* product-card-actions */}
                </div> {/* product-content */}
            </article> {/* product-card */}
        </>
    )
}

export default ProductCard
