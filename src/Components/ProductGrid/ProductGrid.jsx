import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

function ProductGrid({ products }) {
    return (
        <>
            <div className='product-grid'>
                {products.map((product) => {
                    return (
                        <ProductCard 
                            key={product.id}
                            product={product}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ProductGrid
