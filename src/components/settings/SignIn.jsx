import React from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';

const SignIn = () => {
    return (
        <CommonLayout>
        <section className="all-top-shape">
            <img src={shape} alt="shape" />
            <h1>Sign In</h1>
        </section>
        <div className="all-container">
        <div className="all-container-inner setting-area">
                <Container>
                <div className="all-seting-area-pass">
                    <Row>
                        <Col md={12}>
                         <p className="p-up-loc text-center mb-2">Welcome Back!</p>
                         <p className="p-up-loc text-center"> You may sign in with your new password to access your KIQKO account.</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                        <Form.Control className="input-settings text-center" type="mail" placeholder="Email" />
                        </Col>
                        <Col md={6}>
                        <Form.Control className="input-settings text-center" type="password" placeholder="Password" />
                            </Col>
                          
                        </Row>
                        <Row className="mt-4 pt-2">
                        <Col md={6}>
                        <Form.Group className="mb-3 check-form" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                        </Col>
                        <Col md={6}>
                                <p className="p-up-loc text-end forget-pss">Forgot your password?</p>
                            </Col>
                        </Row>
              
                        <Col md={6} className="text-center offset-md-3">
                            <Button className="settings-btn mt-4" variant="primary">Sign in</Button>
                            </Col>
                    </div>
                </Container>
           
            </div>
        </div>
    </CommonLayout>
    );
};

export default SignIn;