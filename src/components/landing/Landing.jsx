import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Landing.css';
import logo from '../../assets/images/logo.png';
import craeicon from '../../assets/images/craeicon.png';
import loginicon from '../../assets/images/loginicon.png';
import apple from '../../assets/images/apple.png';
import paly from '../../assets/images/paly.png';
import Cookie from './Cookie';

const Landing = () => {
  return (
    <div className="landing-page">
      <Cookie isOpen={true} />
      
      <section className="landing-section">
        <div className="particles"></div>
        <Container className="landing-container">
          {/* Header with Logo */}
          <Row className="justify-content-center mb-4 mb-lg-5">
            <Col xs={8} md={6} lg={4} xl={3} xxl={2}>
              <div className="brand-logo">
                <img src={logo} alt="KIQKO Logo" className="logo-img" />
                <h1 className="brand-name">KIQKO</h1>
              </div>
            </Col>
          </Row>
          
          {/* Main Content */}
          <div className="main-content-wrapper">
            {/* Main Heading */}
            <Row className="justify-content-center mb-3 mb-lg-4">
              <Col xs={12} lg={10} xl={8}>
                <h2 className="main-heading">MEET ASIAN SINGLES</h2>
              </Col>
            </Row>
            
            {/* Free Tagline */}
            <Row className="justify-content-center mb-4 mb-lg-5">
              <Col xs={12}>
                <div className="free-tagline">
                  <h3 className="free-text">FREE!</h3>
                  <span className="to-text">to</span>
                </div>
              </Col>
            </Row>
            
            {/* Features */}
            <Row className="justify-content-center mb-5 mb-lg-6">
              <Col xs={12}>
                <div className="features">
                  <span className="feature">Post</span>
                  <span className="feature-divider">|</span>
                  <span className="feature">Search</span>
                  <span className="feature-divider">|</span>
                  <span className="feature">Chat</span>
                  <span className="feature-divider">|</span>
                  <span className="feature">Connect</span>
                  <span className="feature-divider">|</span>
                  <span className="feature">Date</span>
                </div>
              </Col>
            </Row>
          </div>
          
          {/* Action Buttons */}
          <Row className="justify-content-center action-buttons gx-3">
            <Col xs={12} sm={6} lg={5} xl={4} className="mb-3 mb-sm-0">
              <NavLink to="/sign-up">
                <Button variant="light" className="create-account-btn">
                  <img src={craeicon} alt="Create icon" className="btn-icon" />
                  Create Account
                </Button>
              </NavLink>
            </Col>
            <Col xs={12} sm={6} lg={5} xl={4}>
              <NavLink to="/login">
                <Button variant="primary" className="login-btn">
                  <img src={loginicon} alt="Login icon" className="btn-icon" />
                  Login
                </Button>
              </NavLink>
            </Col>
          </Row>
          
          {/* App Download Section */}
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={12} className="text-center">
              <p className="download-text  text-dark">Get the app</p>
              <div className="download-buttons">
                <NavLink to="/" className="download-link">
                  <img src={apple} alt="App Store" className="download-img" />
                </NavLink>
                <NavLink to="/" className="download-link">
                  <img src={paly} alt="Google Play" className="download-img" />
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Landing;