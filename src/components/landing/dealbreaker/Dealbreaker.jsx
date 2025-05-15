import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { MdOutlineArrowForward } from "react-icons/md";
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Dealbreaker = () => {
  const [dealbreakers, setDealbreakers] = useState(['', '', '']);
  const history = useHistory();
  const userId = localStorage.getItem('userId');

  const handleChange = (index, value) => {
    const newDealbreakers = [...dealbreakers];
    newDealbreakers[index] = value;
    setDealbreakers(newDealbreakers);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:5000/api/users/dealbreaker/${userId}`, {
        dealbreakers,
      });
      history.push('/about-you');
    } catch (error) {
      console.error('Failed to update dealbreakers:', error);
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
                  <h4 className="mb-1">Your Dealbreakers</h4>
                  <p className="sub-p">What are your dealbreakers?</p>
                </Col>

                <Row>
                  <Col md={12}>
                    <div className="about-field-style about-field-area">
                      {[0, 1, 2].map((i) => (
                        <Form.Group key={i} className="mb-2">
                          <Form.Label>We're not a match if...</Form.Label>
                          <Form.Control
                            className="input-head"
                            type="text"
                            placeholder="e.g. (you're a gamer.)"
                            value={dealbreakers[i]}
                            onChange={(e) => handleChange(i, e.target.value)}
                          />
                          <span className="char-span">{dealbreakers[i]?.length || 0}/100</span>
                        </Form.Group>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Row>

              <Row className="m-0-responsive">
                <Col md={6} className="text-center offset-md-3 btn-modal-round mt-5 pt-4">
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
                <p className="text-center app-p mb-0">
                  <span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:
                </p>

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

export default Dealbreaker;
