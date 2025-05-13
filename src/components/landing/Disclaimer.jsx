import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import { MdOutlineArrowForward } from "react-icons/md";
const Disclaimer = ({ isShowDisclaimer, handleDisclaimer }) => {
    return (
        <div>
            <Modal dialogClassName="custom-all-modal modal-all-width space-all-modal-top"
                show={isShowDisclaimer}
                onHide={() => handleDisclaimer(false)}
                backdrop="false"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Disclaimer</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-2">
                    <div className="modal-all-padding">
                        <Row>
                            <Col lg={12}>
                                <h5 className="notice-h4">Notice:</h5>
                                <p className="notice-p">
                                    You understand that you are solely responsible for your interaction with other members. Furthermore, you understand and agree that the company currently does not conduct criminal background checks on its
                                    members. The company also does not inquire into the backgrounds of all of its members or attemps to verify the statements of its members. The company makes no representations or warranties as to the conduct of
                                    members. The company reserves the right to conduct any criminal background check or other screenings
                                    (such as sex offender register searches), at anytime and using available public records.

                                </p>

                                <Form.Group className="mb-3 check-form check-long" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check here to indicate that you have read and agree 
to the terms of the Disclaimer." />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="btn-modal-round" lg={12}>
                                <Button className="full-width btn-all-landing margin-all-modal-btn" variant="link">
                                    Continue<MdOutlineArrowForward className="arrow-sign" />
                                </Button>
                            </Col>


                        </Row>
                    </div>



                </Modal.Body>

            </Modal>
        </div>
    );
};

export default Disclaimer;