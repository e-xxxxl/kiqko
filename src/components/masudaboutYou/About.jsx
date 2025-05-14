import React from 'react'
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import './About.css';
import { Form } from 'react-bootstrap';
import { Button, Dropdown } from 'react-bootstrap';
import Covid19 from './Covid19';


const About = () => {
    return (
        <CommonLayout>
        <Covid19 isOpenCovid={true} />
        <section className="all-top-shape">
            <img src={shape} alt="shape" />
            <h1>About You</h1>
            <p className="all-top-title text-center">To continue you need to add a headline and an essay.</p>
        </section>
        <div className="all-container">
        <div className="all-container-inner">
                <div className="about-you">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="about-field-style">
                            <Form.Group className="mb-3">
                                <Form.Label>ADD HEADLINE</Form.Label>
                                <Form.Control className="input-head" type="email" placeholder="e.g. Looking for someone to love" />
                                <span className="char-span">max 125 characters</span>
                            </Form.Group>
                        </div>
                    </Col>

                    <Col className="mt-4" md={12}>
                        <div className="about-field-style">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>YOUR STORY</Form.Label>
                                <Form.Control as="textarea" rows={7} placeholder="To continue you need to add an essay." />
                                <span className="char-span">max 500 characters</span>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                <Row>
            <Col className="mt-12 mt-4 mb-5 pb-5 text-center" md={12}>
                <Button className="all-btn-round mt-4" variant="primary">NEXT</Button>
            </Col>
        </Row>
            </Container>
           
        </div>
        </div>

       
        </div>
    </CommonLayout>
    );
};

export default About;