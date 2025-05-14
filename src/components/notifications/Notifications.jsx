import React from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import shape from '../../assets/images/shape2.png';
import Form from 'react-bootstrap/Form';
import { MdOutlineArrowForward } from "react-icons/md";
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import settingView from '../../assets/images/myProfile.png';
import settingEdit from '../../assets/images/editPofile.png';
import settingUpload from '../../assets/images/updateLocation.png';
import settingReset from '../../assets/images/resetPassword.png';
import settingHide from '../../assets/images/hideProfile.png';
import settingDelete from '../../assets/images/deleteAccount.png';
import settingLogout from '../../assets/images/logout.png';
import manageMedia from '../../assets/images/manageMedia.png';
import viewedMe from '../../assets/images/viewedMe.png';
import myLikes from '../../assets/images/myLikes.png';
import likesMe from '../../assets/images/likesMe.png';
import homea from '../../assets/images/homea.png';
import liveicon from '../../assets/images/liveicon.png';
import yourm from '../../assets/images/yourm.png';
import blockedUsers from '../../assets/images/blockedUsers.png';
import serr from '../../assets/images/serr.png';
import './notifications.css';

const Notifications = () => {
    return (

        <CommonLayout>
<section className="all-top-shape"> 
<img src={shape} alt="shape" />
</section>
<div className="all-container"> 
<div className="pr pb-5 mb-5">
    <div className="page-wrapper-all">
    <Container>
    <Row>
    <Col md={3}>
<div className="left-panel-allpages mar-top-left">
   <div className="top-user-id text-center">
      <div className="online-user-all">
         <h5 className="border-h5">Users Online Now</h5>
         <div className="online-user-status border-right-online">
            <h6>Women</h6>
            <h4>1234</h4>
         </div>
         <div className="online-user-status">
            <h6>men</h6>
            <h4>1565</h4>
         </div>
      </div>
   </div>
   <div className="user-type-left">
      <ul className="list-user-type left-nav">
         <li>
            <NavLink exact to="/profile" activeClassName="active"><img src={homea} alt="homea" />Home</NavLink>
         </li>
         <li>
                              <NavLink exact to="/search-results" activeClassName="active"><img src={serr} alt="liveicon" />Search Results</NavLink>
                           </li>
         <li>
            <NavLink exact to="/live-users" activeClassName="active"><img src={liveicon} alt="liveicon" />Live Users</NavLink>
         </li>
         <li>
            <NavLink exact to="/who-viewed-you" activeClassName="active"><img src={viewedMe} alt="viewedMe" />Who Viewed Me</NavLink>
         </li>
         <li>
            <NavLink exact to="/who-likes-you" activeClassName="active"><img src={myLikes} alt="myLikes" />Who Likes Me</NavLink>
         </li>
         <li>
            <NavLink exact to="/my-likes" activeClassName="active"><img src={likesMe} alt="likesMe" />My Likes</NavLink>
         </li>
         <li>
            <NavLink exact to="/your-matches" activeClassName="active"><img src={yourm} alt="likesMe" />Your Matches</NavLink>
         </li>
         <li>
            <NavLink exact to="/blocked-users" activeClassName="active"><img src={blockedUsers} alt="blockedUsers" />Blocked Users</NavLink>
         </li>
         <li>
            <NavLink exact to="/profile" activeClassName="active"> <img src={settingView} alt="settingView" />View Profile</NavLink>
         </li>
         <li>
            <NavLink exact to="/edit-basics" activeClassName="active"> <img src={settingEdit} alt="settingEdit" />Edit Profile </NavLink>
         </li>
         <li>
            <NavLink exact to="/manage-media" activeClassName="active"><img src={manageMedia} alt="manageMedia" />Manage Media</NavLink>
         </li>
         <li>
            <NavLink exact to="/reset-password"><img src={settingReset} alt="settingReset" />Reset Password</NavLink>
         </li>
         <li>
            <NavLink exact to="/update-location"><img src={settingUpload} alt="settingUpload" />Update Location</NavLink>
         </li>
         <li>
            <NavLink exact to="/hide-profile"><img src={settingHide} alt="settingHide" />Hide Profile</NavLink>
         </li>
         <li>
            <NavLink exact to="/delete-account"><img src={settingDelete} alt="settingDelete" />Delete Account</NavLink>
         </li>
         <li>
            <NavLink exact to="/logout"><img src={settingLogout} alt="settingLogout" />Logout</NavLink>
         </li>
      </ul>
   </div>
</div>
</Col>
    <Col md={9}>
        <div className="profile-main-part-area-inner setting-area bg-all-pages noti-area">
            <Col md={12} className="all-title-top mb-4 text-center">
                <h4>Push Notifications</h4>
                 <p className="all-top-title text-center top-0 mt-4 pt-2 font-bold">
                Enable or Disable Push Notifications
            </p>
            </Col>
            <div className="all-seting-area-pass margin-auto-all notification-area">
            <Row>
                        <Col md={12} className="mt-2">
                           <ul className="ul-notification">
                               <div className="notification-left">
                               Items                                                                           
                               </div>
                               <div className="notification-right">
                               Enable                                                                           
                               </div>

                               <li>
                                   <p className="notifiaction-list-left">Email me when I get a new messages</p>
                                   <div className="notification-switch">
                                   <div className="radio-list">
                                    <Form.Check
                                        type="switch" 
                                        id="custom-switch"/>

                                </div>
                                   </div>
                               </li>
                               <li>
                                   <p className="notifiaction-list-left">Email me when I get a new chat request</p>
                                   <div className="notification-switch">
                                   <div className="radio-list">
                                    <Form.Check
                                        type="switch" 
                                        id="custom-switch"/>

                                </div>
                                   </div>
                               </li>
                               <li>
                                   <p className="notifiaction-list-left">Email me when I get a video chat request</p>
                                   <div className="notification-switch">
                                   <div className="radio-list">
                                    <Form.Check
                                        type="switch" 
                                        id="custom-switch"/>

                                </div>
                                   </div>
                               </li>
                               <li>
                                   <p className="notifiaction-list-left">Email me when someone viewed me</p>
                                   <div className="notification-switch">
                                   <div className="radio-list">
                                    <Form.Check
                                        type="switch" 
                                        id="custom-switch"/>

                                </div>
                                   </div>
                               </li>
                               <li>
                                   <p className="notifiaction-list-left">Email me when someone likes me</p>
                                   <div className="notification-switch">
                                   <div className="radio-list">
                                    <Form.Check
                                        type="switch" 
                                        id="custom-switch"/>

                                </div>
                                   </div>
                               </li>
                           </ul>
                        </Col>
                        <Col className="mt-12 mb-5 pb-5 text-center" md={12}>
                            <Button className="all-btn-round noti-btn" variant="primary">Save<MdOutlineArrowForward className="arrow-sign position-arrow"/></Button>
                        </Col>
                    </Row>
                    
                    </div>

        </div>
    </Col>
    </Row>
    </Container>
    </div>

</div>
</div>
</CommonLayout>

    
    );
};

export default Notifications;