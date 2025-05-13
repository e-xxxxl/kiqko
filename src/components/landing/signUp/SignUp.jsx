// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/esm/Col';
// import Row from 'react-bootstrap/esm/Row';
// import { MdOutlineArrowForward } from "react-icons/md";
// import Container from 'react-bootstrap/esm/Container';
// import shape from '../../../assets/images/shape2.png';
// import bgweball from '../../../assets/images/bgweball.png';
// import downloadApp from '../../../assets/images/downloadApp.png';
// import apps from '../../../assets/images/apps.png';
// import appg from '../../../assets/images/appg.png';
// import Button from '@restart/ui/esm/Button';
// import { NavLink } from 'react-router-dom';

// const SignUp = () => {
//     return (
//      <section>
//         <section className="all-top-shape all-shape-inner">
//             <img src={shape} alt="shape" />
//         </section>
//         <div className="all-container margin-bottom-step">
//         <div className="all-container-inner setting-area position-top-all">
//                 <Container>
//                 <div className="all-seting-area">
//                     <Row className="m-0-responsive">
//                     <Col md={12} className="all-title-top mb-1 text-center">
//                             <h4>Sign Up</h4>
//                         </Col>
//                         <Col md={12}>
//                          <p className="p-up-loc text-center mt-1">Please complete this form to create an account.
//                         </p>
//                         </Col>
//                     </Row>
//                     <Form>
//                     <Row className="m-0-responsive">
//                     <Col md={6}>
//                         <Form.Group className="mb-2">
//                         <Form.Control className="form-custom" type="text" placeholder="Username" />
//                         </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                         <Form.Group className="mb-2">
//                         <Form.Control className="form-custom" type="email" placeholder="Email Address" />
//                     </Form.Group>
//                     </Col>

//                     <Col md={6}>
//                         <Form.Group className="mb-2">
//                         <Form.Control className="form-custom" type="password" placeholder="Password" />
//                         </Form.Group>
//                     </Col>

//                     <Col md={6}>
//                         <Form.Group className="mb-2">
//                         <Form.Control className="form-custom" type="password" placeholder="Confirm Password" />
//                         </Form.Group>
//                     </Col>

//                     <Col md={12}>
//                         <p className="all-login-p text-center"> Password must have at least 6 characters, one uppercase letter, one lowercase letter, one number and one special character.</p>
//                     </Col>

//                         <Col md={6} className="text-center offset-md-3 btn-modal-round">
//                         <NavLink exact to="/verify-email">
//                             <Button className="full-width btn-all-landing margin-all-modal-btn btn" variant="link">
//                         Submit<MdOutlineArrowForward className="arrow-sign" />
//                         </Button>
//                         </NavLink>
//                     </Col>

//                     <Col lg={12}>
//                         <p className="all-login-p text-center mb-0"> By clicking Submit button you agree with our Terms of Use & Privacy Policy.</p>
//                         <p className="login-p link-color color-blue-link">
//                         <strong>Have an account?  <NavLink exact to="/login">Login</NavLink></strong>
//                     </p>
//                     </Col>
//                     </Row>
//                     <Row  className="m-0-responsive">
//                         <hr className="hr-color mt-1"></hr>

//                         <p className="text-center app-p mb-0"><span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:</p>

//                        <div className="col-md-12 text-center">
//                        <NavLink exact to="bout"><Button className="btn-app-link"> <img src={apps} alt="apps" /></Button></NavLink>
//                        <NavLink exact to="bout"><Button className="btn-app-link"> <img src={appg} alt="appg" /></Button></NavLink>
//                        </div>
//                     </Row>
                    
//                     </Form>
//                     </div>
//                 </Container>
           
//             </div>
//             {/* shape-footer-all */}
//             <div className="shape-footer-all">
//             <img src={bgweball} alt="bgweball" />
//             </div>
//             {/* shape-footer-all */}
//         </div>
       
//         </section>
//     );
// };

// export default SignUp;


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
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
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
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                username: formData.username,
                email: formData.email,
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
        <section>
            <section className="all-top-shape all-shape-inner">
                <img src={shape} alt="shape" />
            </section>
            <div className="all-container margin-bottom-step">
                <div className="all-container-inner setting-area position-top-all">
                    <Container>
                        <div className="all-seting-area">
                            <Row className="m-0-responsive">
                                <Col md={12} className="all-title-top mb-1 text-center">
                                    <h4>Sign Up</h4>
                                </Col>
                                <Col md={12}>
                                    <p className="p-up-loc text-center mt-1">Please complete this form to create an account.</p>
                                </Col>
                            </Row>
                            <Form onSubmit={handleSubmit}>
                                <Row className="m-0-responsive">
                                    <Col md={6}>
                                        <Form.Group className="mb-2">
                                            <Form.Control
                                                className={`form-custom ${errors.username ? 'is-invalid' : ''}`}
                                                type="text"
                                                placeholder="Username"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                            />
                                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-2">
                                            <Form.Control
                                                className={`form-custom ${errors.email ? 'is-invalid' : ''}`}
                                                type="email"
                                                placeholder="Email Address"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-2">
                                            <Form.Control
                                                className={`form-custom ${errors.password ? 'is-invalid' : ''}`}
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-2">
                                            <Form.Control
                                                className={`form-custom ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                                type="password"
                                                placeholder="Confirm Password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                            />
                                            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <p className="all-login-p text-center"> Password must have at least 6 characters, one uppercase letter, one lowercase letter, one number and one special character.</p>
                                    </Col>

                                    <Col md={6} className="text-center offset-md-3 btn-modal-round">
                                        <Button
                                            type="submit"
                                            className="full-width btn-all-landing margin-all-modal-btn btn"
                                            variant="link"
                                        >
                                            Submit<MdOutlineArrowForward className="arrow-sign" />
                                        </Button>
                                    </Col>

                                    <Col lg={12}>
                                        <p className="all-login-p text-center mb-0"> By clicking Submit button you agree with our Terms of Use & Privacy Policy.</p>
                                        <p className="login-p link-color color-blue-link">
                                            <strong>Have an account?  <NavLink exact to="/login">Login</NavLink></strong>
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="m-0-responsive">
                                    <hr className="hr-color mt-1"></hr>

                                    <p className="text-center app-p mb-0"><span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:</p>

                                    <div className="col-md-12 text-center">
                                        <NavLink exact to="bout"><Button className="btn-app-link"> <img src={apps} alt="apps" /></Button></NavLink>
                                        <NavLink exact to="bout"><Button className="btn-app-link"> <img src={appg} alt="appg" /></Button></NavLink>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </Container>
                </div>
                <div className="shape-footer-all">
                    <img src={bgweball} alt="bgweball" />
                </div>
            </div>
        </section>
    );
};

export default SignUp;
