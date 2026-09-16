import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <main className="notfound-page">
                <article className="notfound-board">

                    <div className="notfound-zone">
                        <h1 className="error-zone">404</h1>
                        <div className="notfound-glow"></div>
                    </div>

                    <h2 className="notfound-title"> Error: Sector Not Found</h2>
                    <div className="notfound-line"></div>

                    <p className="notfound-message">
                        The secure link you are trying to decrypt or navigate to does not exist in the TechNexus vault database.
                        It may have been relocated or purged.
                    </p>

                    <button onClick={() => navigate('/')} className="notfound-back-btn">
                        <i className="bi bi-arrow-left"></i> Return To Base
                    </button>

                </article> {/* notfound-board */}
            </main> {/* notfound-page */}
        </>
    );
}

export default NotFound;
