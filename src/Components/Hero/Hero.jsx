import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {

    const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;

    const textVariants = {
        hidden: { opacity: 0, x: isDesktop ? -50 : 0 },
        visible: { opacity: 1, x: 0 }
    };

    /*===== transition/FramerMotion-ForMobile =====*/
    const textTransition = (delayTime) => ({
        duration: isDesktop ? 1.4 : 0.4,
        delay: isDesktop ? delayTime : 0,
        ease: [0.25, 1, 0.5, 1]
    });


    /*===== ScrollToTop =====*/
    const scrollToTop = () => {
        window.bootstrap?.Offcanvas?.getInstance(document.getElementById('loginOffcanvas'))?.hide();
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
        <section className="hero-container">
            <img
                src='/Images/Electronics/Electronics.jpg'
                alt='electronic'
                className='hero-image'
            />

            <div className="hero-text-content">
                <motion.span
                    className="hero-badge"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={textTransition(0)}
                >
                    NEW ARRIVALS
                </motion.span>

                <motion.h1
                    className="hero-title"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={textTransition(0.25)}
                >
                    Level Up Your Tech <span className="brand-name">TechNexus</span>
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={textTransition(0.5)}
                >
                    Discover the latest electronics, games, and accessories.
                    Find everythind you need in one place, combining quality, performance, and innovation.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={textTransition(0.75)}
                >
                    <Link to={`/shop`}>
                        <button className="btn-shop-now" onClick={scrollToTop}>Shop Now</button>
                    </Link>

                    <Link to={`/shop?section=gaming`}>
                        <button className="btn-explore-gaming">Explore Gaming</button>
                    </Link>
                </motion.div>

            </div> {/* hero-text-content */}

            <motion.div
                className="hero-spline-wrapper"
                initial={{ opacity: 0, x: isDesktop ? 70 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: isDesktop ? 1.6 : 0.5,
                    delay: isDesktop ? 0.3 : 0,
                    ease: [0.25, 1, 0.5, 1]
                }}
            >
                <Spline scene="https://prod.spline.design/VeV5pPUByJl5nA7Q/scene.splinecode" />
            </motion.div>
        </section>
    );
}

export default Hero;
