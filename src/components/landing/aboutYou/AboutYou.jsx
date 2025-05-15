import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdOutlineArrowForward } from "react-icons/md";
import Container from 'react-bootstrap/esm/Container';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './About.css';

const AboutYou = () => {
  const [about, setAbout] = useState('');
  const history = useHistory();
  const userId = localStorage.getItem('userId');

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:5000/api/users/about/${userId}`, { about });
      history.push('/basics');
    } catch (error) {
      console.error('Failed to update about info:', error);
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
                  <h4>About Me</h4>
                  <p className="sub-p">To continue you need to add an essay.</p>
                </Col>

                <Row>
                  <Col className="mt-4" md={12}>
                    <div className="about-field-style about-field-area">
                      <Form.Group className="mb-3">
                        <Form.Label>Your Story</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={7}
                          placeholder="To continue you need to add an essay."
                          value={about}
                          onChange={(e) => setAbout(e.target.value)}
                        />
                        <span className="char-span">{about.length}/1000</span>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
              </Row>

              <Row className="m-0-responsive">
                <Col md={6} className="text-center offset-md-3 btn-modal-round mt-23">
                  <Button
                    className="full-width btn-all-landing margin-all-modal-btn btn"
                    variant="link"
                    onClick={handleSubmit}
                  >
                    Continue<MdOutlineArrowForward className="arrow-sign" />
                  </Button>
                </Col>
              </Row>

              <Row className="m-0-responsive">
                <hr className="hr-color mt-3" />
                <p className="text-center app-p mb-0"><span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:</p>
                <div className="col-md-12 text-center">
                  <Button className="btn-app-link"> <img src={apps} alt="apps" /></Button>
                  <Button className="btn-app-link"> <img src={appg} alt="appg" /></Button>
                </div>
              </Row>
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

export default AboutYou;
