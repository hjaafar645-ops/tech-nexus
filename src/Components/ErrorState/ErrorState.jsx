import './ErrorState.css'; 

function ErrorState({ message, onRetry }) {
  return (
    <div className="error-container">
      <div className="error-icon-wrapper">
        <div className="error-pulse-glow"></div>
        <span className="error-mark">!</span>
      </div> {/* error-icon-wrapper */}
      
      <h2 className="error-title">Oops! Something Went Wrong</h2>
      <p className="error-message">
        {message || "We couldn't load the products. Please check your internet connection."}
      </p>
      
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div> 
  );
}

export default ErrorState;
