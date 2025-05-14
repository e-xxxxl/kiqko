import React, { useState } from 'react';
import './Delete.css';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
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
// import './Setting.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const DeleteAccount = () => {
    const [showModal, setShowModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const history = useHistory();
    const userId = localStorage.getItem('userId');


    const handleDeleteAccount = async () => {
        if (!userId) {
            alert('User ID not found');
            return;
        }

        setIsDeleting(true);
        try {
            const res = await fetch(`https://kiqko-backend.onrender.com/api/users/delete/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // First check if the response is JSON
            const contentType = res.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await res.text();
                throw new Error(text || 'Server returned non-JSON response');
            }

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to delete account');
            }

            // Clear all user-related data from localStorage
            localStorage.removeItem('userId');
            localStorage.removeItem('userData');
            localStorage.removeItem('profileData');

            // Redirect to home page
            history.push('/');
            window.location.reload();

        } catch (err) {
            console.error('Error deleting account:', err);
            // Show the raw error message if it's HTML, but truncate it
            const errorMessage = err.message.includes('<!DOCTYPE')
                ? 'Server error occurred'
                : err.message;
            alert(errorMessage);
        } finally {
            setIsDeleting(false);
            setShowModal(false);
        }
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
                                    <div className="profile-main-part-area-inner bg-all-pages mb-0-see">
                                        <Col md={12} className="all-title-top mb-4 text-center">
                                            <h4>Delete Account </h4>
                                        </Col>

                                        <div className="all-seting-area-pass">
                                            <Row>
                                                <Col md={12}>
                                                    <p className="p-update-premium text-start">
                                                        Deleting your account will permanently remove all your data from our system.
                                                        This action cannot be undone.
                                                    </p>
                                                    <p className="p-update-premium mt-4 click-delete text-start">
                                                        Consider <NavLink to="/hide-profile">hiding your profile</NavLink> instead if you want to take a break.
                                                    </p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md={6} className="pr-1 up-field">
                                                    <Button
                                                        className="btn-upgrade btn-later"
                                                        variant="primary"
                                                        onClick={() => history.push('/profile')}
                                                    >
                                                        Cancel
                                                    </Button>
                                                </Col>
                                                <Col md={6} className="pl-0 up-field">
                                                    <Button
                                                        className="btn-upgrade btn-upgrade-now"
                                                        variant="danger"
                                                        onClick={() => setShowModal(true)}
                                                        disabled={isDeleting}
                                                    >
                                                        {isDeleting ? 'Deleting...' : 'Delete Account'}
                                                    </Button>
                                                </Col>
                                            </Row>

                                            {/* Confirmation Modal */}
                                            {showModal && (
                                                <div className="modal-overlay">
                                                    <div className="modal-content animate__animated animate__fadeInUp">
                                                        <div className="modal-header">
                                                            <div className="warning-icon">
                                                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                                                        stroke="#DC3545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <h3 className="modal-title">Final Confirmation</h3>
                                                        </div>

                                                        <div className="modal-body">
                                                            <p className="warning-text">
                                                                This will <span className="highlight">permanently delete</span> your account and all associated data.
                                                            </p>
                                                            <p className="warning-subtext">
                                                                This action cannot be undone. All your matches, messages, and profile information will be lost forever.
                                                            </p>
                                                        </div>

                                                        <div className="modal-footer">
                                                            <button
                                                                className="btn btn-secondary text-dark"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                className="btn btn-danger text-dark"
                                                                onClick={handleDeleteAccount}
                                                                disabled={isDeleting}
                                                            >
                                                                {isDeleting ? (
                                                                    <>
                                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                                        Deleting...
                                                                    </>
                                                                ) : (
                                                                    'Yes, Delete Permanently'
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </CommonLayout>
    )
};

export default DeleteAccount;