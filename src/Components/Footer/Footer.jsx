import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {

  /*===== ScrollToTop =====*/
  const scrollToTop = () => {
    window.bootstrap?.Offcanvas?.getInstance(document.getElementById('loginOffcanvas'))?.hide();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-upLine"></div>
        <div className="footer-container">
          <div className="footer-column brand-column">
            <Link to="/" className="footer-logo" onClick={scrollToTop}>
              Tech <span className="logo-span"> Nexus </span>
            </Link>
            <p className="footer-brand-text">
              Next-generation hub combining supreme quality,
              relentless performance, and future innovation. Equip your tactical setup today.
            </p>
          </div> {/* footer-column/brand-column */}

          <div className="footer-column">
            <h4 className="footer-column-title"> Explore </h4>
            <ul className="footer-links-list">
              <li><Link to="/" onClick={scrollToTop}> Home Gateway </Link></li>
              <li><Link to="/shop" onClick={scrollToTop}> Shop </Link></li>
              <li><Link to="/favorites" onClick={scrollToTop}> Your Wishlist </Link></li>
              <li><Link to="/cart" onClick={scrollToTop}> Secure Cart </Link></li>
            </ul>
          </div> {/* footer-column */}

          <div className="footer-column">
            <h4 className="footer-column-title"> Support & Trust </h4>
            <ul className="footer-links-list">
              <li><Link to="/about" onClick={scrollToTop}> About TechNexus </Link></li>
              <li><Link to="/contact" onClick={scrollToTop}> Contact Protocols </Link></li>
              <li><Link> Privacy & Terms </Link></li>
            </ul>
          </div> {/* footer-column */}

          <div className="footer-column social-column">
            <h4 className="footer-column-title"> Connect </h4>
            <p className="footer-brand-text"> Stay synced with upcoming hardware arrivals. </p>
            <div className="footer-social-icons">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-link"><i className="bi bi-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-link"><i className="bi bi-linkedin"></i></a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="social-icon-link"><i className="bi bi-discord"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-link"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div> {/* footer-column/social-column */}

        <div className="footer-copyright-zone">
          <div className="footer-copyright-line"></div>
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <span className="cyan-text"> TechNexus </span>
            Global. All secure connections verified | Designed by Jafar .
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
