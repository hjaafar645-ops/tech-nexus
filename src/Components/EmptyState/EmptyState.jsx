import './EmptyState.css';

function EmptyState({ message, actionText, onActionClick }) {
  return (
    <div className="empty-container">
      <div className="empty-icon-wrapper">
        <div className="empty-radar-glow"></div>
        <div className="empty-box-icon">
          <div className="box-lid"></div>
        </div> {/* empty-box-icon */}
      </div> {/* empty-icon-wrapper */}

      <h2 className="empty-title">No Items Available</h2>
      <p className="empty-message">
        {message || "The inventory is currently empty or no items matched your search criteria."}
      </p>

      {actionText && onActionClick && (
        <button className="empty-action-button" onClick={onActionClick}>
          {actionText}
        </button>
      )}
    </div> 
  );
}

export default EmptyState;
