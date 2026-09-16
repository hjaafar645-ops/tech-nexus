import { useNavigate, useParams } from 'react-router-dom'
import { localProducts } from '../../Data/ProductsData'
import { StoreContext } from '../../Context/StoreContext'
import { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css';
import './ProductsDetails.css'

function ProductsDetails() {

  /*===== StoreContext =====*/
  const { favorite, handleToggleFavorite, handleAddToCart } = useContext(StoreContext)

  /*===== productID =====*/
  const { id } = useParams()

  /*===== Navigate =====*/
  const navigate = useNavigate()

  /*===== findedProduct =====*/
  const details = localProducts.find((item) => String(item.id) === String(id))

  /*===== SwiperState =====*/
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  /*===== ForAnyError =====*/
  if (!details) {
    return <h2 style={{ color: '#00f0ff', textAlign: 'center', marginTop: '100px' }}> Item Not Found In Vault!</h2>
  }

  /*===== isFavorite/forHeart =====*/
  const isFavorite = favorite ? favorite.some((item) => item.id === details.id) : false

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
      <main className='details-page'>
        {particleClasses.map((pr, index) => (
          <div key={`elec-p-${index}`} className={`particles ${pr}`}></div>
        ))}
        
        <article className='details-board-panel'>
          <div className='details-board-content'>
            <div className="details-visual-side">
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="main-details-swiper"
              >
                {details.images && details.images.map((imgUrl, index) => (
                  <SwiperSlide key={`main-slide-${index}`}>
                    <img src={imgUrl} alt={details.title} className='details-board-image' />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbs-details-swiper"
              >
                {details.images && details.images.map((imgUrl, index) => (
                  <SwiperSlide key={`thumb-slide-${index}`}>
                    <img src={imgUrl} alt="thumbnail" className="details-thumbnail" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> {/* details-visual-side */}

            <div className="details-board-info">
              <h3 className='details-board-title'> {details.title} </h3>
              <p className='details-board-price'> {details.price} $ </p>
              <p className='details-board-rating'>
                <i className='bi bi-star-fill'></i> {details.rating}
              </p>

              <div className="details-board-description">
                <h4 className="details-spec-title">Technical Specifications:</h4>
                <p className="details-spec-text">
                  {details.description}
                </p>
              </div> {/* details-board-description */}

              <div className='details-board-actions'>
                <button className='details-favorite-btn' onClick={() => handleToggleFavorite(details)}>
                  <i className={isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
                </button>
                <button className='details-cart-btn' onClick={() => handleAddToCart(details)}>
                  <i className='bi bi-cart'></i> Add To Cart
                </button>
              </div> {/* details-board-actions */}

              <button onClick={() => { navigate('/shop'); scrollToTop(); }} className="details-back-btn">
                <i className='bi bi-arrow-left'></i> Back To Shop
              </button>
            </div> {/* details-board-info */}
          </div> {/* details-board-content */}
        </article>
      </main>
    </>
  )
}

export default ProductsDetails
