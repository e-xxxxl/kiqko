import { React, useState } from "react";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { MdOutlineArrowForward } from "react-icons/md";

const Covid19 = (props) => {

    const [isOpenCovid, setIsOpenCovid] = useState(props.isOpenCovid);
    const handleCloseCovid = () => setIsOpenCovid(false);

    return (
        <>
            <Modal dialogClassName="covid-modal-area custom-all-modal" backdrop="false" show={isOpenCovid}>
                <Modal.Header>
                    <Modal.Title>Covid-19</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="p-all-modal covid-modal about-p-modal text-center">
                        <strong> Are you vaccinated against Covid-19?</strong>
                    </p>
                    <Row className="m-0 mt-3 covid-radio">
                        <Col className="btn-modal-round offset-md-2" lg={12}>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3 mt-1 form-radio-space">
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-Yes`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-No`}
                                        />

                                    </div>
                                ))}
                            </Form>
                        </Col>

                    </Row>
                    <Row className="m-0 mt-2">
                        <Col className="btn-modal-round" lg={12}>
                            <Button className="full-width btn-all-landing margin-all-modal-btn" variant="link" onClick={handleCloseCovid}>
                                Continue<MdOutlineArrowForward className="arrow-sign" />
                            </Button>
                        </Col>


                    </Row>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default Covid19;