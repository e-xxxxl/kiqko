import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
// import downloadApp from '../../../assets/images/downloadApp.png';
// import apps from '../../../assets/images/apps.png';
// import appg from '../../../assets/images/appg.png';
import { MdOutlineArrowForward } from "react-icons/md";
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const VerifyCode = () => {
    return (
        <section>
        <section className="all-top-shape all-shape-inner">
            <img src={shape} alt="shape" />
        </section>
        <div className="all-container margin-bottom-step">
        <div className="all-container-inner setting-area position-top-all">
                <Container>
                <div className="all-seting-area">
                    <Row>
                        <Col md={12} className="all-title-top mb-1 text-center">
                        <h4>Verify Code</h4>
                        </Col>
                     
                    </Row>

                    <p className="text-center p-all-modal p-verify mb-0 mt-3 font-medium">
                Enter the verification code.
                    </p>
                    <span className="veriv-span-notification">The verification code did not match. Please try again <br/>or tap on “Resend code” to get a new code.</span>
                    <Form>
                 <table className="verify-code-table mt-5">
                     <tbody>
                         <tr>
                             <td  style={{margin:'50px'}}><input className="form-control code-verify-input" /></td>
                             <td  style={{margin:'50px'}}><input className="form-control code-verify-input" /></td>
                             <td  style={{margin:'50px'}}><input className="form-control code-verify-input" /></td>
                             <td  style={{margin:'50px'}}><input className="form-control code-verify-input" /></td>
                         </tr>
                     </tbody>
                 </table>
                 <p className="text-center p-verufy-all-small color-blue-link mt-4"><strong> <NavLink exact to="/verify-code">Resend code</NavLink></strong></p>
                 </Form>
                 
                 <Col md={6} className="text-center offset-md-3 btn-modal-round">
                        <NavLink exact to="/email-verified">
                            <Button className="full-width btn-all-landing margin-all-modal-btn btn btn-veri-code" variant="link">
                            Verify Code<MdOutlineArrowForward className="arrow-sign" />
                        </Button>
                        </NavLink>
                    </Col>
                    {/* <Row className="m-0-responsive">
                        <hr className="hr-color margintop-141"></hr>

                        <p className="text-center app-p mb-0"><span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:</p>

                       <div className="col-md-12 text-center">
                       <NavLink exact to="bout"><Button className="btn-app-link"> <img src={apps} alt="apps" /></Button></NavLink>
                       <NavLink exact to="bout"><Button className="btn-app-link"> <img src={appg} alt="appg" /></Button></NavLink>
                       </div>
                    </Row> */}
                    
                
                    </div>
                </Container>
           
            </div>
            {/* shape-footer-all */}
            <div className="shape-footer-all">
            <img src={bgweball} alt="bgweball" />
            </div>
            {/* shape-footer-all */}
        </div>
       


        </section>
           

       
    );
};

export default VerifyCode;