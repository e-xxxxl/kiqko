import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


const HideFormSearch = ({ isShowHideFormSearch, handleHideFormSearch }) => {
    const allhandleClose = () => handleHideFormSearch(false);
    return (
        <Modal dialogClassName="custom-all-modal modal-all-width hide-form-modal space-all-modal-top"
        show={isShowHideFormSearch}
        onHide={() => handleHideFormSearch(false)}
        backdrop="false"
        keyboard={false}
    >
        <Modal.Header>
            <Modal.Title>Hide From Search</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-5">
            <div className="modal-all-padding">
            <p className="p-all-modal">
            Are you sure you want to remove this user from your search results?

                    </p>

                    <Row className="m-0 mb-2 mb-4 ps-3 pe-5  row">
                        <Col className="btn-modal-round" lg={6}>
                            <Button variant="link" onClick={allhandleClose}>
                                No
                            </Button>
                        </Col>
                        <Col className="btn-modal-round" lg={6}>
                            <Button variant="link">
                            Yes
                            </Button>
                        </Col>
                    </Row>
            </div>



        </Modal.Body>

    </Modal>
    );
};

export default HideFormSearch;