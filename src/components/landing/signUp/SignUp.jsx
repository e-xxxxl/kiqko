

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
import './Signup.css';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
         gender: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

   const validateForm = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!formData.username.trim()) {
        newErrors.username = 'Username is required';
    }

    if (!formData.gender) {
        newErrors.gender = 'Gender is required';
    }

    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
        newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
        newErrors.password = 'Password must have at least 6 characters, one uppercase, one lowercase, one number and one special character';
    }

    if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const response = await axios.post('https://kiqko-backend.onrender.com/api/auth/signup', {
                username: formData.username,
                email: formData.email,
                 gender: formData.gender,
                password: formData.password
            });

            if (response.data.success) {
                toast.success('Registration successful! Please verify your email.');
                history.push({
                    pathname: '/verify-email',
                    state: { email: formData.email }
                });
            }
        } catch (error) {
            if (error.response) {
                const errorMsg = error.response.data.message || 'Registration failed';
                toast.error(errorMsg);
                if (error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            } else {
                toast.error('Network error. Please try again.');
            }
        }
    };

    return (
        <section className="signup-section">
            {/* Background Shapes */}
            <div className="background-shapes">
                <img src={shape} alt="decorative shape" className="top-shape" />
                <img src={bgweball} alt="background wave" className="bottom-wave" />
            </div>

            {/* Main Form Container */}
            <Container className="signup-container">
                <Row className="justify-content-center">
                    <Col lg={8} xl={6}>
                        <div className="signup-card">
                            {/* Header Section */}
                            <div className="text-center mb-4">
                                <h2 className="signup-title">Create Your Account</h2>
                                <p className="signup-subtitle">Join our community to get started</p>
                            </div>

                            {/* Signup Form */}
                            <Form onSubmit={handleSubmit} className="signup-form">
                                <Row>
                                    {/* Username Field */}
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="username">
                                            <Form.Label className="form-label">Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                className={`form-control-custom ${errors.username ? 'is-invalid' : ''}`}
                                                placeholder="Enter your username"
                                            />
                                            {errors.username && <div className="invalid-feedback animated-feedback">{errors.username}</div>}
                                        </Form.Group>
                                    </Col>

                                    {/* Email Field */}
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="email">
                                            <Form.Label className="form-label">Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="your@email.com"
                                            />
                                            {errors.email && <div className="invalid-feedback animated-feedback">{errors.email}</div>}
                                        </Form.Group>
                                    </Col>
                                



                                    {/* Password Field */}
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="password">
                                            <Form.Label className="form-label">Password</Form.Label>
                                            <div className="password-input-group">
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className={`form-control-custom ${errors.password ? 'is-invalid' : ''}`}
                                                    placeholder="Create password"
                                                />
                                                <i className="bi bi-eye-slash password-toggle"></i>
                                            </div>
                                            {errors.password && <div className="invalid-feedback animated-feedback">{errors.password}</div>}
                                        </Form.Group>
                                    </Col>

                                    {/* Confirm Password Field */}
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="confirmPassword">
                                            <Form.Label className="form-label">Confirm Password</Form.Label>
                                            <div className="password-input-group">
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    className={`form-control-custom ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                                    placeholder="Confirm password"
                                                />
                                                <i className="bi bi-eye-slash password-toggle"></i>
                                            </div>
                                            {errors.confirmPassword && <div className="invalid-feedback animated-feedback">{errors.confirmPassword}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* Gender Field */}
<Col md={6} className="mb-3">
    <Form.Group controlId="gender">
        <Form.Label className="form-label">Gender</Form.Label>
        <Form.Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`form-control-custom ${errors.gender ? 'is-invalid' : ''}`}
        >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </Form.Select>
        {errors.gender && (
            <div className="invalid-feedback animated-feedback">{errors.gender}</div>
        )}
    </Form.Group>
</Col>

                                {/* Password Requirements */}
                                <div className="password-requirements mb-4">
                                    <p className="requirement-text">
                                        <i className="bi bi-check-circle"></i> Minimum 6 characters
                                    </p>
                                    <p className="requirement-text">
                                        <i className="bi bi-check-circle"></i> At least one uppercase & lowercase letter
                                    </p>
                                    <p className="requirement-text">
                                        <i className="bi bi-check-circle"></i> Include one number and special character
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid mb-3">
                                    <Button type="submit" className="signup-button">
                                        Create Account <MdOutlineArrowForward className="button-arrow" />
                                    </Button>
                                </div>

                                {/* Terms & Conditions */}
                                <div className="terms-agreement text-center mb-4">
                                    <p className="terms-text">
                                        By creating an account, you agree to our <NavLink to="/terms" className="terms-link">Terms of Use</NavLink> and <NavLink to="/privacy" className="terms-link">Privacy Policy</NavLink>.
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="divider-with-text mb-4">
                                    <span className="divider-text">or</span>
                                </div>

                                {/* Login Link */}
                                <div className="text-center mb-4">
                                    <p className="login-redirect">
                                        Already have an account? <NavLink to="/login" className="login-link">Log in here</NavLink>
                                    </p>
                                </div>

                                {/* App Download Section */}
                                <div className="app-download-section text-center">
                                    <p className="download-text mb-3">
                                        <img src={downloadApp} alt="Download app" className="download-icon" /> Get our mobile app for better experience
                                    </p>
                                    <div className="app-buttons">
                                        <Button variant="link" className="app-download-btn">
                                            <img src={apps} alt="App Store" className="app-icon" />
                                        </Button>
                                        <Button variant="link" className="app-download-btn">
                                            <img src={appg} alt="Google Play" className="app-icon" />
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SignUp;
