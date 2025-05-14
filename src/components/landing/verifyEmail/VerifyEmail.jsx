

import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import { Button, Dropdown } from 'react-bootstrap';
import './verify.css'
import { NavLink } from 'react-router-dom';

const VerifyEmail = () => {
  const location = useLocation();
  const history = useHistory();
  const email = location?.state?.email;

  const [otp, setOtp] = useState('');
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    if (!email) {
      history.replace('/signup');
    }
  }, [email, history]);

  const handleResend = async () => {
    try {
      const response = await fetch('https://kiqko-backend.onrender.com/api/auth/resend-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Verification code resent!');
      } else {
        alert('Error resending code.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to resend code.');
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) return alert('Please enter the verification code');

    setVerifying(true);
    try {
      const response = await fetch('https://kiqko-backend.onrender.com/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Email verified successfully!');
        history.push('/login'); // redirect after success
      } else {
        alert(data.message || 'Invalid or expired code');
      }
    } catch (err) {
      console.error(err);
      alert('Verification failed');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <section className="verify-email-section">
      <div className="top-shape-decoration">
        <img src={shape} alt="decorative shape" className="shape-image" />
      </div>

      <div className="verify-container">
        <div className="verify-content-wrapper">
          <Container>
            <div className="verification-card">
              <Row className="justify-content-center">
                <Col md={10} lg={8} xl={6}>
                  <div className="verification-header">
                    <h4 className="verification-title">Verify Your Email</h4>
                    <p className="verification-subtext">
                      We've sent a 6-digit verification code to your email address.
                      Please enter it below to activate your account.
                    </p>
                    <div className="verification-note">
                      <i className="bi bi-info-circle"></i> Don't forget to check your spam or junk folder
                    </div>
                  </div>

                  <Form onSubmit={handleVerify} className="verification-form">
                    <div className="email-display">
                      <h5 className="sent-to-label">Email sent to:</h5>
                      <span className="email-address">{email}</span>
                    </div>

                    <Form.Group controlId="formOtp" className="otp-input-group">
                      <Form.Label>Verification Code</Form.Label>
                      <div className="otp-input-container">
                        <Form.Control
                          type="text"
                          placeholder="• • • • • •"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          maxLength={6}
                          required
                          className="otp-input"
                        />
                        <div className="otp-underline"></div>
                      </div>
                    </Form.Group>

                    <div className="action-buttons">
                      <Button
                        type="submit"
                        className="verify-button"
                        disabled={verifying}
                      >
                        {verifying ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Verifying...
                          </>
                        ) : 'Verify Account'}
                      </Button>
                    </div>

                    <div className="resend-code">
                      Didn't receive the code?{' '}
                      <button
                        type="button"
                        className="resend-link"
                        onClick={handleResend}
                      >
                        Resend code
                      </button>
                    </div>
                  </Form>

                  <div className="download-app-section">
                    <div className="divider-with-text">
                      <span>Get the app</span>
                    </div>
                    <p className="app-benefits">
                      <img src={downloadApp} alt="app icon" className="app-icon" />
                      Better experience with our mobile app
                    </p>
                    <div className="app-download-buttons">
                      <NavLink to="bout" className="app-download-link">
                        <img src={apps} alt="App Store" className="app-store-image" />
                      </NavLink>
                      <NavLink to="bout" className="app-download-link">
                        <img src={appg} alt="Google Play" className="play-store-image" />
                      </NavLink>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>

      <div className="bottom-shape-decoration">
        <img src={bgweball} alt="bottom decoration" className="shape-image" />
      </div>
    </section>
  );
};

export default VerifyEmail;
