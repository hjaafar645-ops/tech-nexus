import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './Favorites.css'

function Favorites() {
  
  const { favorite } = useContext(StoreContext);

  /*===== Particles =====*/
  const particleClasses = ['pr1', 'pr2', 'pr3', 'pr4', 'pr5', 'pr6', 'pr7', 'pr8', 'pr9', 'pr10'
    , 'pr11', 'pr12', 'pr13', 'pr14', 'pr15', 'pr16', 'pr17', 'pr18', 'pr19', 'pr20'];

  return (
    <>
      <main className="favorite-page">
        {particleClasses.map((pr, index) => (
          <div key={`elec-p-${index}`} className={`particles ${pr}`}></div>
        ))}
        <section className='favorite-section'>
          <div className="section-content">
            <h1 className="favorites-title"> Your Wishlist </h1>
            {(!favorite || favorite.length === 0) ? (
              <p className="empty-message"> No favorites yet </p>
            ) : (
              <div className="product-grid">
                {favorite.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  )
                })}
              </div>
            )}
          </div> {/* section-content */}
        </section> {/* favorite-section */}
      </main>
    </>
  )
}

export default Favorites
