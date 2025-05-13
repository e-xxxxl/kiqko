import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import './NavHeader.css';
import useravatar from '../../assets/images/fev1.jpg';

import searchnav from '../../assets/images/searchnav.png';
import golive from '../../assets/images/golive.png';
import postvodeo from '../../assets/images/postvodeo.png';
import uploadimage from '../../assets/images/uploadimage.png';
import chat from '../../assets/images/chat.png';
import notification from '../../assets/images/notification.png';

import logoi from '../../assets/images/logo-inner.png';
// import { NavDropdown } from 'react-bootstrap';
// import settingView from '../../assets/images/myProfile.png';
// import settingEdit from '../../assets/images/editPofile.png';
// import settingUpload from '../../assets/images/updateLocation.png';
// import settingReset from '../../assets/images/resetPassword.png';
// import settingHide from '../../assets/images/hideProfile.png';
// import settingDelete from '../../assets/images/deleteAccount.png';
// import settingLogout from '../../assets/images/logout.png';
// import manageMedia from '../../assets/images/manageMedia.png';
// import viewedMe from '../../assets/images/viewedMe.png';
// import myLikes from '../../assets/images/myLikes.png';
// import likesMe from '../../assets/images/likesMe.png';
// import yourm from '../../assets/images/yourm.png';
// import blockedUsers from '../../assets/images/blockedUsers.png';


import Dropdown from 'react-bootstrap/Dropdown'

const NavHeader = () => {
    return (
        <div>
            <Navbar className="customHeader" bg="light" expand="lg">
                <Container>
                    <Row>
                        <Col md={2} className="nav-grid-cutom">
                            <h2 className="navLogo"> <NavLink exact to="/"><img src={logoi} alt="logoi" /></NavLink></h2>
                        </Col>
                        <Col md={9} className="nav-grid-cutom">

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="m-auto custom-navbar">
                                <NavLink exact to="/search-filters" activeClassName="active"><span><img src={searchnav} alt="searchnav" /></span>SEARCH</NavLink>
                                    <NavLink exact to="" activeClassName="active"><span><img src={golive} alt="golive" /></span>Go Live</NavLink>
                                    <NavLink exact to="/" activeClassName="active"><span><img src={postvodeo} alt="postvodeo" /></span>Post video</NavLink>
                                    <NavLink exact to="/" activeClassName="active"><span><img src={uploadimage} alt="uploadimage" /></span>Upload Image</NavLink>
                                    <NavLink exact to="/" activeClassName="active"><span><img src={chat} alt="chat" /></span>Chat</NavLink>
                                    <NavLink exact to="/Notifications" activeClassName="active"><span><img src={notification} alt="notification" /></span>Notifications</NavLink>
                                  
                                </Nav>
                            </Navbar.Collapse>

                            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="m-auto custom-navbar">
                                    <NavLink exact to="/profile" activeClassName="active">HOME</NavLink>
                                    <NavLink exact to="/search-filters" activeClassName="active">SEARCH</NavLink>
                                    <NavDropdown title="CONNECTIONS" id="basic-nav-dropdown" className="all-drop-down">
                                        <NavDropdown.Item><NavLink exact to="/who-viewed-you" activeClassName="active"><img src={viewedMe} alt="viewedMe" />Who Viewed Me</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink exact to="/who-likes-you" activeClassName="active"><img src={myLikes} alt="myLikes" />Who Likes Me</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink exact to="/my-likes" activeClassName="active"><img src={likesMe} alt="likesMe" />My Likes</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink exact to="/your-matches" activeClassName="active"><img src={yourm} alt="likesMe" />Your Matches</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink exact to="/blocked-users" activeClassName="active"><img src={blockedUsers} alt="blockedUsers" />Blocked Users</NavLink></NavDropdown.Item>
                                    </NavDropdown>
                                    

                                    <NavLink exact to="/notifications" activeClassName="active">NOTIFICATIONS</NavLink>
                                    <NavLink exact to="/mailbox" activeClassName="active">MESSAGES</NavLink>
                                   <NavDropdown title="SETTINGS" id="basic-nav-dropdown" className="all-drop-down setting-nav">
                                    <Dropdown.Item><NavLink exact to="/profile" activeClassName="active"> <img src={settingView} alt="settingView" />View Profile</NavLink></Dropdown.Item>
                                    <Dropdown.Item><NavLink exact to="/edit-basics" activeClassName="active"> <img src={settingEdit} alt="settingEdit" />Edit Profile </NavLink></Dropdown.Item>
                                    <Dropdown.Item><NavLink exact to="/manage-media" activeClassName="active"><img src={manageMedia} alt="manageMedia" />Manage Media</NavLink></Dropdown.Item>
                                    <Dropdown.Item><NavLink exact to="/reset-password"><img src={settingReset} alt="settingReset" />Reset Password</NavLink></Dropdown.Item>
                                        <Dropdown.Item><NavLink exact to="/update-location"><img src={settingUpload} alt="settingUpload" />Update Location</NavLink></Dropdown.Item>
                                        <Dropdown.Item> <NavLink exact to="/hide-profile"><img src={settingHide} alt="settingHide" />Hide Profile</NavLink></Dropdown.Item>
                                        <Dropdown.Item><NavLink exact to="/delete-account"><img src={settingDelete} alt="settingDelete" />Delete Account</NavLink></Dropdown.Item>
                                        <Dropdown.Item> <NavLink exact to="/logout"><img src={settingLogout} alt="settingLogout" />Logout</NavLink></Dropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse> */}
                        </Col>
                        <Col md={1}  className="nav-grid-cutom">
                            <Dropdown className="useravatar-dropdown setting-drop-down">
                                <Dropdown.Toggle id="dropdown-basic">
                                    <div className="useravatar">
                                        <img src={useravatar} alt="useravatar" />
                                    </div>
                                </Dropdown.Toggle>
                                
                            </Dropdown>
                            

                        </Col>
                    </Row>


                </Container>
            </Navbar>
        </div>
    );
};

export default NavHeader;