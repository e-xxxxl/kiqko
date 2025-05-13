import { React, useState } from "react";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

const Cookie = (props) => {

    const [isOpen, setIsOpen] = useState(props.isOpen);
    const handleClose = () => setIsOpen(false);

    return (
        <>

            <Modal dialogClassName="cookie-modal" backdrop="static" show={isOpen}>
                
                
                <Modal.Body className="p-0">
                    

                    <Row className="m-0">
                        <Col lg={6}>
                        <p className="p-cookie-footer">
                    This website uses cookies to offer you a better browsing experience. <br/>
By using our site you agree to our use of cookies.
                    </p>
                        </Col>
                        <Col className="cookie-bitn-footer" lg={5}>
                            <Button>
                                Decline
                            </Button>
                            <Button>
                                Accept
                            </Button>
                            <Modal.Header className="border-0 cookie-noti-header" onClick={handleClose} closeButton>
                    
                </Modal.Header>
                        </Col>
                       
                    </Row>
                </Modal.Body>
           
            </Modal>
        </>
    );
}

export default Cookie;