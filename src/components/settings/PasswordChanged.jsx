import React from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import changeicon from '../../assets/images/chan-icon.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Button, Dropdown } from 'react-bootstrap';
import './Setting.css';

const PasswordChanged = () => {
    return (
        <CommonLayout>
        <section className="all-top-shape">
            <img src={shape} alt="shape" />
            <h1 className="for-h1">Password Changed</h1>
        </section>
        <div className="all-container">
        <div className="all-container-inner setting-area for-got-area">
                <Container>
                <div className="all-seting-area-pass">
                    <Row>
                        <Col md={12}>
                         <p className="p-up-loc text-center">Password changed successfully.</p>
                        </Col>

                        <Col md={12} className="text-center mt-5">
                        <img className="change-icon" src={changeicon} alt="changeicon" />
                        </Col>

                        <Col md={6} className="text-center offset-md-3 mt-4">
                            <Button className="settings-btn mt-4" variant="primary">Return to Sign in</Button>
                         </Col>
                    </Row>
                    
                    </div>
                </Container>
           
            </div>
        </div>
    </CommonLayout>
    );
};

export default PasswordChanged;