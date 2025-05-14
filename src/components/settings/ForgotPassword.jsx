import React from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Button, Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './Setting.css';

const ForgotPassword = () => {
    return (
        <CommonLayout>
        <section className="all-top-shape">
            <img src={shape} alt="shape" />
            <h1 className="for-h1">Forgot Password</h1>
        </section>
        <div className="all-container">
        <div className="all-container-inner setting-area for-got-area">
                <Container>
                <div className="all-seting-area">
                    <Row>
                        <Col md={12}>
                         <p className="p-up-loc text-center">Enter the email associated with your account. We will email you a link to reset your password.</p>
                        </Col>
                        <Col className="mt-2 offset-md-3" md={6}>
                        <Form.Control className="input-settings text-center" type="email" placeholder="e.g. (”email@sample1.com”)" />
                       
                        <Button className="settings-btn mt-4" variant="primary">Send Link</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-don-acc offset-md-3" md={6}>
                        <Row>
                        <Col md={6}>
                        <label className="label-acc whitspace">Don’t have an account?</label>
                        </Col>
                        <Col md={6}>
                        <Button className="settings-btn mt-4 btn-acc mb-4" variant="primary">Create Account</Button>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    </div>
                </Container>
           
            </div>
        </div>
    </CommonLayout>
    );
};

export default ForgotPassword;