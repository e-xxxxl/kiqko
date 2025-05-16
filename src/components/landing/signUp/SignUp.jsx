
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { ArrowRight } from 'lucide-react';
import Container from 'react-bootstrap/esm/Container';
import { Button } from 'react-bootstrap';
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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
        <div className="min-h-screen font-sans bg-[#9B72FE] relative overflow-hidden">
            {/* Animated background */}
            <div 
                className="fixed inset-0 animated-bg transition-all duration-[15000ms] ease-in-out -z-10"
                style={{ 
                    backgroundImage: `
                        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0, transparent 300px),
                        radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.15) 0, transparent 200px),
                        radial-gradient(circle at 10% 80%, rgba(122, 74, 221, 0.3) 0, transparent 400px),
                        radial-gradient(circle at 90% 90%, rgba(122, 74, 221, 0.3) 0, transparent 300px)
                    `,
                    backgroundColor: '#9B72FE'
                }}
            />

            {/* Floating shapes for decoration */}
            <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl animate-pulse"></div>

            <main className="container mx-auto px-4 py-12 lg:py-20">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/20">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#9B72FE]">Create Your Account</h2>
                            <p className="text-gray-600">Join our community to get started</p>
                        </div>

                        {/* Signup Form */}
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-4">
                                {/* Username Field */}
                                <Col md={6} className="mb-4">
                                    <Form.Group controlId="username">
                                        <Form.Label className="block text-sm font-medium text-gray-700 mb-2">Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent ${errors.username ? 'border-red-400' : ''}`}
                                            placeholder="Enter your username"
                                        />
                                        {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username}</p>}
                                    </Form.Group>
                                </Col>

                                {/* Email Field */}
                                <Col md={6} className="mb-4">
                                    <Form.Group controlId="email">
                                        <Form.Label className="block text-sm font-medium text-gray-700 mb-2">Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent ${errors.email ? 'border-red-400' : ''}`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                    </Form.Group>
                                </Col>

                                {/* Gender Field */}
                                <Col md={6} className="mb-4">
                                    <Form.Group controlId="gender">
                                        <Form.Label className="block text-sm font-medium text-gray-700 mb-2">Gender</Form.Label>
                                        <Form.Select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent ${errors.gender ? 'border-red-400' : ''}`}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Form.Select>
                                        {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
                                    </Form.Group>
                                </Col>

                                {/* Password Field */}
                                <Col md={6} className="mb-4">
                                    <Form.Group controlId="password">
                                        <Form.Label className="block text-sm font-medium text-gray-700 mb-2">Password</Form.Label>
                                        <div className="relative">
                                            <Form.Control
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent ${errors.password ? 'border-red-400' : ''}`}
                                                placeholder="Create password"
                                            />
                                            <button 
                                                type="button"
                                                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                                    </Form.Group>
                                </Col>

                                {/* Confirm Password Field */}
                                <Col md={6} className="mb-4">
                                    <Form.Group controlId="confirmPassword">
                                        <Form.Label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</Form.Label>
                                        <div className="relative">
                                            <Form.Control
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent ${errors.confirmPassword ? 'border-red-400' : ''}`}
                                                placeholder="Confirm password"
                                            />
                                            <button 
                                                type="button"
                                                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Password Requirements */}
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li className={`flex items-center ${formData.password.length >= 6 ? 'text-green-600' : ''}`}>
                                        <svg className={`h-4 w-4 mr-2 ${formData.password.length >= 6 ? 'text-green-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {formData.password.length >= 6 ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            )}
                                        </svg>
                                        Minimum 6 characters
                                    </li>
                                    <li className={`flex items-center ${/[A-Z]/.test(formData.password) && /[a-z]/.test(formData.password) ? 'text-green-600' : ''}`}>
                                        <svg className={`h-4 w-4 mr-2 ${/[A-Z]/.test(formData.password) && /[a-z]/.test(formData.password) ? 'text-green-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {/[A-Z]/.test(formData.password) && /[a-z]/.test(formData.password) ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            )}
                                        </svg>
                                        At least one uppercase & lowercase letter
                                    </li>
                                    <li className={`flex items-center ${/\d/.test(formData.password) && /[@$!%*?&]/.test(formData.password) ? 'text-green-600' : ''}`}>
                                        <svg className={`h-4 w-4 mr-2 ${/\d/.test(formData.password) && /[@$!%*?&]/.test(formData.password) ? 'text-green-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {/\d/.test(formData.password) && /[@$!%*?&]/.test(formData.password) ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            )}
                                        </svg>
                                        Include one number and special character
                                    </li>
                                </ul>
                            </div>

                            {/* Submit Button */}
                            <div className="mb-6">
                                <Button 
                                    type="submit" 
                                    className="w-full py-3 px-6 bg-[#9B72FE] text-white font-medium rounded-lg hover:bg-[#8A64E5] transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                                >
                                    Create Account <ArrowRight className="ml-2" size={18} />
                                </Button>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="text-center mb-6">
                                <p className="text-sm text-gray-600">
                                    By creating an account, you agree to our <NavLink to="/terms" className="text-[#9B72FE] hover:underline">Terms of Use</NavLink> and <NavLink to="/privacy" className="text-[#9B72FE] hover:underline">Privacy Policy</NavLink>.
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="px-2 bg-white text-sm text-gray-500">or</span>
                                </div>
                            </div>

                            {/* Login Link */}
                            <div className="text-center">
                                <p className="text-gray-600">
                                    Already have an account? <NavLink to="/login" className="text-[#9B72FE] font-medium hover:underline">Log in here</NavLink>
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignUp;