
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdOutlineArrowForward } from "react-icons/md";
import Container from 'react-bootstrap/esm/Container';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import Button from '@restart/ui/esm/Button';
import './login.css';
import { NavLink, useHistory } from 'react-router-dom';

const Login = () => {

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://kiqko-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Login successful!');
        //    localStorage.setItem('userId', data.user.id);

    // Optionally save more user info
    localStorage.setItem('userId', data.user);

        history.push('/profile'); // or dashboard
      } else {
        alert(data.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Try again.');
    }
  };

  return (
    <section className="login-page">
      {/* Background Elements */}
      <div className="login-background">
        <div className="top-decoration">
          <img src={shape} alt="decorative shape" className="floating-shape" />
        </div>
        <div className="bottom-decoration">
          <img src={bgweball} alt="wave pattern" className="wave-pattern" />
        </div>
      </div>

      {/* Main Content */}
      <div className="login-container">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <div className="login-card">
                {/* Header Section */}
                <div className="login-header text-center mb-4">
                  <h2 className="welcome-text">Welcome Back</h2>
                  <p className="login-subtext">Sign in to access your account</p>
                </div>

                {/* Login Form */}
                <Form onSubmit={handleLogin} className="auth-form">
                  <Row>
                    {/* Username/Email Field */}
                    <Col md={12} className="mb-3">
                      <Form.Group controlId="usernameOrEmail">
                        <Form.Label className="input-label">Username or Email</Form.Label>
                        <div className="input-with-icon">
                          <i className="bi bi-person input-icon"></i>
                          <Form.Control
                            type="text"
                            placeholder="Enter your username or email"
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                            className="modern-input"
                            required
                          />
                        </div>
                      </Form.Group>
                    </Col>

                    {/* Password Field */}
                    <Col md={12} className="mb-3">
                      <Form.Group controlId="password">
                        <Form.Label className="input-label">Password</Form.Label>
                        <div className="input-with-icon">
                          <i className="bi bi-lock input-icon"></i>
                          <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="modern-input"
                            required
                          />
                          <i className="bi bi-eye-slash password-toggle"></i>
                        </div>
                      </Form.Group>
                    </Col>

                    {/* Remember Me & Forgot Password */}
                    <Col md={12} className="mb-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <Form.Check
                          type="checkbox"
                          id="rememberMe"
                          label="Remember me"
                          className="remember-check"
                        />
                        <NavLink to="/forgot-password" className="forgot-password">
                          Forgot Password?
                        </NavLink>
                      </div>
                    </Col>

                    {/* Submit Button */}
                    <Col md={12} className="mb-4">
                      <Button type="submit" className="login-button w-100">
                        Log In <MdOutlineArrowForward className="button-arrow" />
                      </Button>
                    </Col>

                    {/* Sign Up Link */}
                    <Col md={12} className="text-center mb-4">
                      <p className="signup-prompt">
                        Not a member yet? <NavLink to="/sign-up" className="signup-link">Create an account</NavLink>
                      </p>
                    </Col>

                    {/* Divider */}
                    <Col md={12} className="mb-4">
                      <div className="divider-with-text">
                        <span className="divider-line"></span>
                        <span className="divider-text">or</span>
                        <span className="divider-line"></span>
                      </div>
                    </Col>

                    {/* App Download Section */}
                    <Col md={12} className="text-center">
                      <div className="app-download-section">
                        <p className="download-text mb-3">
                          <img src={downloadApp} alt="download" className="download-icon" />
                          Get our mobile app for better experience
                        </p>
                        <div className="app-buttons">
                          <Button variant="link" className="app-download-btn">
                            <img src={apps} alt="App Store" />
                          </Button>
                          <Button variant="link" className="app-download-btn">
                            <img src={appg} alt="Google Play" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
 );
};

export default Login;
