import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdOutlineArrowForward } from "react-icons/md";
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import './UploadPhoto.css';



const UploadPhoto = (props) => {
    return (
<section>
    <section className="all-top-shape all-shape-inner">
        <img src={shape} alt="shape" />
    </section>
    <div className="all-container margin-bottom-step">
        <div className="all-container-inner setting-area position-top-all">

        <div className="all-seting-area">
        <Col md={12}>
        <div className="profile-main-part-area-inner mb-0 bg-all-pages mt-0 pb-0">
            <Col md={12} className="all-title-top mb-4 text-center">
                <h4>Upload Photos</h4>
                <p className="sub-p">
                To continue you need to add a photo.<br/>
                To be a verified member you need to add a minimum of four photos.
                </p>
            </Col>
        <div className="page-wrapper-all">
        <Row>
        <Col className="text-center" md={12}>
            <div className="add-photo-upload">
                <input type="file" />
            </div>

        {/* <div className="caption-field">
            <div className="form-field-row caption-area">
            <Form.Group className="mb-2">
                <Form.Control className="form-custom upload-field-photo" type="text" placeholder="Add Caption (Max 99 characters)" />
            </Form.Group>
            </div>

            <div className="check-upload">
            <Form.Group className="mb-3 check-form check-long" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Make this my main picture" />
            </Form.Group>
            </div>
        </div> */}
        </Col>
        </Row>


        <Row className="mt-5">
            <Col className="mt-12" md={12}>
            <NavLink exact to="/manage-media">
            <Button className="all-btn-round mt-4" variant="primary">Continue<MdOutlineArrowForward className="arrow-sign arrowba" /></Button>
            </NavLink>
            </Col>
        </Row>
        <Row>
        <hr className="hr-color mt-4"></hr>
        <p className="text-center app-p mb-0"><span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:</p>
        <div className="col-md-12 text-center">
        <NavLink exact to="bout"><Button className="btn-app-link"> <img src={apps} alt="apps" /></Button></NavLink>
        <NavLink exact to="bout"><Button className="btn-app-link"> <img src={appg} alt="appg" /></Button></NavLink>
        </div>
        </Row>         
        </div>
        </div>
        </Col>
        </div>
        <div className="clearfix"></div>
    </div>
    <div className="clearfix"></div>
    {/* shape-footer-all */}
    <div className="shape-footer-all footershape-basics">
    <img src={bgweball} alt="bgweball" />
    </div>
    {/* shape-footer-all */}
    </div>

</section>


       
    );
};

export default UploadPhoto;