import React, { useState } from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Button, Dropdown } from 'react-bootstrap';
import hideicon from '../../assets/images/hide.png';
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
import './Setting.css';
import './logout.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Logout = () => {

    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const history = useHistory();

    const handleLogout = () => {
        setIsLoggingOut(true);
        try {
            // Clear all user-related data from localStorage
            localStorage.removeItem('userId');
            localStorage.removeItem('userData');
            localStorage.removeItem('profileData');

            // Redirect to home page
            history.push('/');
            window.location.reload(); // Optional: if you want to fully reset the app state
        } catch (err) {
            console.error('Error during logout:', err);
            alert('An error occurred during logout');
        } finally {
            setIsLoggingOut(false);
        }
    };

    const handleCancel = () => {
        // Navigate back or to another page
        history.goBack();
    };
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
                                        <div className="online-users-widget bg-white rounded-3 shadow-sm p-3 mb-4 mb-md-5">
                                            <div className="text-center mb-3">
                                                <h5 className="fw-semibold text-dark mb-3 pb-2 border-bottom">Users Online Now</h5>
                                                <div className="d-flex justify-content-around">
                                                    <div className="online-count-card px-3 py-2">
                                                        <div className="text-primary mb-1">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                                            </svg>
                                                        </div>
                                                        <h6 className="text-muted text-uppercase small mb-1">Women</h6>
                                                        <h4 className="fw-bold mb-0">1,234</h4>
                                                    </div>

                                                    <div className="online-count-card px-3 py-2">
                                                        <div className="text-info mb-1">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                                            </svg>
                                                        </div>
                                                        <h6 className="text-muted text-uppercase small mb-1">Men</h6>
                                                        <h4 className="fw-bold mb-0">1,565</h4>
                                                    </div>
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
                                                <li><NavLink exact to="/live-users" activeClassName="active"><img src={liveicon} alt="liveicon" />Live Users</NavLink></li>
                                                <li><NavLink exact to="/who-viewed-you" activeClassName="active"><img src={viewedMe} alt="viewedMe" />Who Viewed Me</NavLink></li>
                                                <li><NavLink exact to="/who-likes-you" activeClassName="active"><img src={myLikes} alt="myLikes" />Who Likes Me</NavLink></li>
                                                <li><NavLink exact to="/my-likes" activeClassName="active"><img src={likesMe} alt="likesMe" />My Likes</NavLink></li>
                                                <li><NavLink exact to="/your-matches" activeClassName="active"><img src={yourm} alt="likesMe" />Your Matches</NavLink></li>
                                                <li><NavLink exact to="/blocked-users" activeClassName="active"><img src={blockedUsers} alt="blockedUsers" />Blocked Users</NavLink></li>
                                                <li><NavLink exact to="/profile" activeClassName="active"> <img src={settingView} alt="settingView" />View Profile</NavLink></li>
                                                <li><NavLink exact to="/edit-basics" activeClassName="active"> <img src={settingEdit} alt="settingEdit" />Edit Profile </NavLink></li>
                                                <li><NavLink exact to="/manage-media" activeClassName="active"><img src={manageMedia} alt="manageMedia" />Manage Media</NavLink></li>
                                                <li><NavLink exact to="/reset-password"><img src={settingReset} alt="settingReset" />Reset Password</NavLink></li>
                                                <li><NavLink exact to="/update-location"><img src={settingUpload} alt="settingUpload" />Update Location</NavLink></li>
                                                <li><NavLink exact to="/hide-profile"><img src={settingHide} alt="settingHide" />Hide Profile</NavLink></li>
                                                <li><NavLink exact to="/delete-account"><img src={settingDelete} alt="settingDelete" />Delete Account</NavLink></li>
                                                <li><NavLink exact to="/logout"><img src={settingLogout} alt="settingLogout" />Logout</NavLink></li>


                                            </ul>
                                        </div>



                                    </div>
                                </Col>
                                <Col md={9}>
                                    {/* Logout Confirmation - with adjusted spacing */}
                                    <div className="profile-main-part-area-inner bg-all-pages">
                                        <div className="logout-container bg-white shadow-sm rounded p-4 p-md-5 mx-auto mt-0" style={{ maxWidth: '1000px' }}>
                                            <Col md={12} className="text-center mb-4">
                                                <h4 className="fw-bold text-primary">Sign Out</h4>
                                                <div className="divider-custom mx-auto my-3">
                                                    <div className="divider-custom-line bg-light"></div>
                                                </div>
                                            </Col>

                                            <div className="all-seting-area-pass py-3">
                                                <Row className="justify-content-center">
                                                    <Col md={12} className="text-center mb-4">
                                                        <div className="logout-icon-container mb-4">
                                                            <div className="icon-wrapper d-flex justify-content-center align-items-center mx-auto rounded-circle"
                                                                style={{ width: '80px', height: '80px', backgroundColor: '#f8f9fa' }}>
                                                                <img
                                                                    className="change-icon"
                                                                    src={hideicon}
                                                                    alt="logout icon"
                                                                    style={{ maxWidth: '40px', opacity: '0.7' }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <h5 className="text-dark mb-1">Ready to leave?</h5>
                                                        <p className="text-muted mb-4">Are you sure you want to end your current session?</p>
                                                    </Col>
                                                </Row>

                                                <Row className="gx-3 justify-content-center mb-3">
                                                    <Col xs={12} md={5} className="mb-2 mb-md-0">
                                                        <Button
                                                            className="w-100 py-2 rounded-pill shadow-sm"
                                                            variant="light"
                                                            onClick={handleCancel}
                                                            disabled={isLoggingOut}
                                                        >
                                                            <span className="fw-medium">Cancel</span>
                                                        </Button>
                                                    </Col>
                                                    <Col xs={12} md={5}>
                                                        <Button
                                                            className="w-100 py-2 rounded-pill shadow-sm"
                                                            variant="btn btn-danger"
                                                            onClick={handleLogout}
                                                            disabled={isLoggingOut}
                                                        >
                                                            <div className="d-flex align-items-center justify-content-center">
                                                                {isLoggingOut && (
                                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                                )}
                                                                <span className="fw-medium">{isLoggingOut ? 'Signing out...' : 'Sign Out'}</span>
                                                            </div>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </div>

                </div>
            </div>
        </CommonLayout >


    );
};

export default Logout;