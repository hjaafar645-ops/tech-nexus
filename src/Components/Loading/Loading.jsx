import './Loading.css';

function Loading() {
    return (
        <div className="loading-container">
            <div className="loader">
                <div className="spinner-ring"></div>
                <div className="spinner-inner"></div>
                <div className="spinner"></div>
            </div> {/* loader */}
            <h3 className="loading-text">Loading Products...</h3>
            <p className="loading-subtext">Please wait a moment...</p>
        </div>
    );
}

export default Loading;
