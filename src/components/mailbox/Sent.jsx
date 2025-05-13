import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Button } from 'react-bootstrap';
import profilesent from '../../assets/images/prs.png';
import videoi from '../../assets/images/videoi.png';
import vers from '../../assets/images/vers.png';
import repb from '../../assets/images/replyb.png';
import deleteall from '../../assets/images/deleteall.png';
import "./sent.css";



const Sent = () => {
    return (
        <Row>
        <Col md={6}>
            <div className="sent-left-profile">
            <div className="profile-left-sent">
            <img src={profilesent} alt="profilesent" />
             </div>
             <div className="profile-sent-details">
                 <h4>Anna</h4>
                 <p>
                    Single<br/>
                    25, Female<br/>
                    Long Beach, CA
                 </p>
            </div>
            </div>
        </Col>

        <Col md={6} className="text-end">
        <span className="ver-span"> <span className="vers-icon-sent"><img src={vers} alt="vers" /></span>Verified</span>
        <span className="video-icon-sent"><img src={videoi} alt="videoi" /></span>
        <p className="p-time-sent">
        Date / Time:<br/>
Today 04:22 pm
        </p>
        </Col>
        <Col md={12}>
        <p className="p-user-message mt-3 pt-2">
            Hi,<br/>
            <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </span>

            <label>
            Take Care,<br/>
            Anna.
            </label>
        </p>
        </Col>

        <Col md={6}>
        <Button className="btn-reply text-end mt-3" variant="" >
         <img src={repb} alt="repb" />Reply             
        </Button>
        </Col> 
        <Col md={6}>
        <div className="footer-table delete-sent text-end mt-4">
        <label>Delete<img src={deleteall} alt="deleteall" /></label>
    </div>
        </Col>
        </Row>


    );
};

export default Sent;