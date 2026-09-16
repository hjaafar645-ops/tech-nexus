import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
import ErrorState from '../../Components/ErrorState/ErrorState'
import EmptyState from '../../Components/EmptyState/EmptyState'
import ProductGrid from '../../Components/ProductGrid/ProductGrid'
import { localProducts } from '../../Data/ProductsData'
import './Shop.css'

function Shop() {

    /*===== SearchState =====*/
    const [search, setSearch] = useState("")

    /*===== LocationState =====*/
    const location = useLocation()

    /*===== API-Data =====*/
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const getProducts = async () => {
        setLoading(true)
        setError(null)
        try {
            const [electronicsResponse, gamingResponse] = await Promise.all([
                fetch("https://dummyjson.com"),
                fetch("https://freetogame.com")
            ]);

            if (!electronicsResponse.ok || !gamingResponse.ok) {
                throw new Error("Failed to load store products. Please try again.");
            }

            const electronicsData = await electronicsResponse.json();
            const gamingData = await gamingResponse.json();

            const electronicsProducts = electronicsData.products.map((product) => ({
                id: `electronics-${product.id}`,
                title: product.title,
                price: product.price,
                rating: product.rating || 4.5,
                image: (product.images && product.images.length > 0) ? product.images[0] : product.thumbnail,
                category: "electronics"
            }));

            const gamingProducts = gamingData.map((game) => ({
                id: `gaming-${game.id}`,
                title: game.title,
                price: 59.99,
                rating: 4.8,
                image: game.thumbnail,
                category: "gaming"
            }));

            setProducts([...electronicsProducts, ...gamingProducts]);

        } catch (error) {
            setProducts(localProducts);
            setError(null);
            console.warn("CORS/Network restriction hit. Deploying local fallback data safely.", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    /*===== Location-For-GameZone =====*/
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.get('section') === 'gaming' && !loading) {

            setTimeout(() => {
                const gamingElement = document.getElementById('gaming-section');
                if (gamingElement) {
                    gamingElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location, loading]);


    /*===== Loading/Error/EmptyPage =====*/
    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorState message={error} onRetry={getProducts} />
    }

    if (products.length === 0) {
        return (
            <EmptyState
                message="The cyber vault is empty! No products available at the moment."
                actionText="Reload Vault"
                onActionClick={getProducts}
            />
        );
    }

    /*===== Products-Category =====*/
    const electronicsProducts = products.filter(product => product.category === "electronics");
    const gamingProducts = products.filter(product => product.category === "gaming")


    /*===== Brands-Img =====*/
    const brands = [
        { id: 1, name: "Android", image: "Images/SVG-Brand/android.svg" },
        { id: 2, name: "Asus", image: "Images/SVG-Brand/asus.svg" },
        { id: 3, name: "Intel", image: "Images/SVG-Brand/intel.svg" },
        { id: 4, name: "EpiceGames", image: "Images/SVG-Brand/epicgames.svg" },
        { id: 5, name: "LG", image: "Images/SVG-Brand/lg.svg" },
        { id: 6, name: "Nvidia", image: "Images/SVG-Brand/nvidia.svg" },
        { id: 7, name: "Steam", image: "Images/SVG-Brand/steam.svg" }
    ]

    /*===== Particles =====*/
    const particleClasses = ['pr1', 'pr2', 'pr3', 'pr4', 'pr5', 'pr6', 'pr7', 'pr8', 'pr9', 'pr10'
        , 'pr11', 'pr12', 'pr13', 'pr14', 'pr15', 'pr16', 'pr17', 'pr18', 'pr19', 'pr20'];


    /*===== Products-Filtered =====*/
    const filteredElectronics = electronicsProducts.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase())
    })
    const filteredGames = gamingProducts.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <main className="shop-page">

            <div className='shop-search'>
                <div className='search-wrapper'>
                    <i className="bi bi-search search-icon"></i>
                    <input type='text' placeholder='Search ...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <div className='search-border'></div>
                </div>
            </div> {/*shop-search*/}

            <div className="shop-page-main">

                <section className='elec-section-full'>
                    <div className="background-particles-container">
                        {particleClasses.map((pr, index) => (
                            <div key={`elec-p-${index}`} className={`particles ${pr}`}></div>
                        ))}
                    </div>
                    <div className="section-content-container">
                        <div className="section-title-wrapper">
                            <h2 className='elec-title'><i className="bi bi-cpu"></i> Next-Gen Electronics</h2>
                            <div className="neon-line elec-line"></div>
                        </div>

                        <ProductGrid
                            products={filteredElectronics}
                        />
                    </div>
                </section> {/* elec-section-full */}

                <section className='brand-section'>
                    <div className='brand-track'>
                        {[...brands, ...brands].map((brand, index) => (
                            <img key={`${brand.id}-${index}`} className='brand-img' src={brand.image} alt={brand.name} />
                        ))}
                    </div>
                </section> {/* brand-section */}

                <section id="gaming-section" className='gaming-section-full'>
                    <div className="background-particles-container">
                        {particleClasses.map((pr, index) => (
                            <div key={`gaming-p-${index}`} className={`particles ${pr}`}></div>
                        ))}
                    </div>
                    <div className="section-content-container">
                        <div className="section-title-wrapper">
                            <h2 className='gaming-title'><i className="bi bi-controller"></i> Premium Gaming Zone</h2>
                            <div className="neon-line gaming-line"></div>
                        </div>
                        <ProductGrid
                            products={filteredGames}
                        />
                    </div>
                </section> {/* gaming-section-full */}

                <button
                    className="scroll-to-top-btn"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <i className="bi bi-arrow-up-short"></i>
                </button>
            </div> {/* shop-page */}
        </main>
    )
}

export default Shop
