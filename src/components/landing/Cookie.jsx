import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Cookie.css';

const Cookie = ({ isOpen: initialIsOpen = true }) => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    
    if (cookieConsent) {
      setShow(false);
    } else {
      setShow(initialIsOpen);
    }
    
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 100);
  }, [initialIsOpen]);
  
  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    setTimeout(() => setShow(false), 300);
  };
  
  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    setTimeout(() => setShow(false), 300);
  };
  
  const handleOpenSettings = () => {
    setShow(true);
    setTimeout(() => setIsVisible(true), 100);
  };
  
  return (
    <>
      <Modal 
        show={show} 
        onHide={() => {}} 
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName={`cookie-consent-modal ${isVisible ? 'visible' : ''}`}
      >
        <Modal.Header className="cookie-header">
          <div className="cookie-icon-container">
            <span role="img" aria-label="Cookie">🍪</span>
          </div>
          <Modal.Title>We Care About Your Privacy</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <div className="cookie-description">
            <p>
              We use essential cookies to make our site work. With your consent, we may also use 
              non-essential cookies to improve your experience and analyze our traffic. 
              <a href="/privacy-policy"> Learn more</a>.
            </p>
            
            <div className="cookie-preferences">
              <button className="preference-toggle">
                <span className="toggle-label">Essential Cookies</span>
                <span className="toggle-badge">Always Active</span>
              </button>
              <button className="preference-toggle">
                <span className="toggle-label">Analytics Cookies</span>
                <div className="toggle-switch">
                  <input type="checkbox" id="analytics-toggle" defaultChecked />
                  <label htmlFor="analytics-toggle"></label>
                </div>
              </button>
              <button className="preference-toggle">
                <span className="toggle-label">Marketing Cookies</span>
                <div className="toggle-switch">
                  <input type="checkbox" id="marketing-toggle" />
                  <label htmlFor="marketing-toggle"></label>
                </div>
              </button>
            </div>
          </div>
        </Modal.Body>
        
        <Modal.Footer className="cookie-footer">
          <Button 
            variant="outline-primary text-dark" 
            onClick={handleReject}
            className="cookie-btn reject-btn"
          >
            Reject All
          </Button>
          <Button 
            variant="primary text-dark" 
            onClick={handleAccept}
            className="cookie-btn accept-btn"
          >
            Accept All
          </Button>
          <Button 
            variant="primary text-dark" 
            onClick={handleAccept}
            className="cookie-btn save-btn"
          >
            Save Preferences
          </Button>
        </Modal.Footer>
      </Modal>
      
      {!show && (
        <button 
          onClick={handleOpenSettings}
          className={`cookie-settings-button ${isVisible ? 'visible' : ''}`}
          aria-label="Cookie settings"
        >
          <span role="img" aria-hidden="true">🍪</span>
          <span className="settings-tooltip">Cookie Settings</span>
        </button>
      )}
    </>
  );
};

export default Cookie;