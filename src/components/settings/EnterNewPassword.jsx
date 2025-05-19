import React, { useState } from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Button, Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Setting.css';
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
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const EnterNewPassword = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isResetting, setIsResetting] = useState(false);
    const history = useHistory();
    const userId = localStorage.getItem('userId');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!userId) {
            alert('User ID not found. Please log in again.');
            return;
        }

        // Basic validation
        if (newPassword !== confirmPassword) {
            alert('New passwords do not match');
            return;
        }

        //  http://localhost:5000/api/auth/reset-password
        setIsResetting(true);
        try {
            const res = await fetch('https://kiqko-backend.onrender.com/api/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    currentPassword,
                    newPassword
                })
            });

            // First check if the response is JSON
            const contentType = res.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await res.text();
                throw new Error(text || 'Server returned non-JSON response');
            }

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to reset password');
            }

            // Show success message
            alert('Password reset successfully!');

            // Optionally redirect to profile page
            history.push('/profile');

        } catch (err) {
            console.error('Error resetting password:', err);
            // Show the raw error message if it's HTML, but truncate it
            const errorMessage = err.message.includes('<!DOCTYPE')
                ? 'Server error occurred'
                : err.message;
            alert(errorMessage);
        } finally {
            setIsResetting(false);
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
                                <div className='flex flex-col lg:flex-row gap-6'>

                                    <div className="w-full lg:w-1/4 space-y-6">
                                        {/* Online Users */}
                                        <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                            <h5 className="font-bold border-b pb-2 mb-3">Users Online Now</h5>
                                            <div className="flex justify-between">
                                                <div className="w-1/2 pr-2 border-r">
                                                    <h6 className="text-sm text-gray-600">Women</h6>
                                                    <h4 className="text-xl font-bold">1234</h4>
                                                </div>
                                                <div className="w-1/2 pl-2">
                                                    <h6 className="text-sm text-gray-600">Men</h6>
                                                    <h4 className="text-xl font-bold">1565</h4>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Navigation */}
                                        <div className="bg-white rounded-lg shadow-md p-4">
                                            <ul className="space-y-2">
                                                <li>
                                                    <NavLink exact to="/profile" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={homea} alt="home" className="w-5 h-5" /> Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/search-results" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={serr} alt="search" className="w-5 h-5" /> Search Results
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/live-users" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={liveicon} alt="live" className="w-5 h-5" /> Live Users
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/who-viewed-you" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={viewedMe} alt="viewed" className="w-5 h-5" /> Who Viewed Me
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/who-likes-you" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={myLikes} alt="likes" className="w-5 h-5" /> Who Likes Me
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/my-likes" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={likesMe} alt="my likes" className="w-5 h-5" /> My Likes
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/your-matches" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={yourm} alt="matches" className="w-5 h-5" /> Your Matches
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/blocked-users" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={blockedUsers} alt="blocked" className="w-5 h-5" /> Blocked Users
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/profile" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={settingView} alt="profile" className="w-5 h-5" /> View Profile
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/edit-basics" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={settingEdit} alt="edit" className="w-5 h-5" /> Edit Profile
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/manage-media" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={manageMedia} alt="media" className="w-5 h-5" /> Manage Media
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/reset-password" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={settingReset} alt="reset" className="w-5 h-5" /> Reset Password
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/update-location" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={settingUpload} alt="location" className="w-5 h-5" /> Update Location
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/hide-profile" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={settingHide} alt="hide" className="w-5 h-5" /> Hide Profile
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/delete-account" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={settingDelete} alt="delete" className="w-5 h-5" /> Delete Account
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/logout" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                                        <img src={settingLogout} alt="logout" className="w-5 h-5" /> Logout
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>





                                    <div className="flex-1">

                                        <div className="bg-white rounded-xl shadow-lg p-3 mx-auto">
                                            {/* Header */}
                                            <div className="text-center mb-8">
                                                <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
                                                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-3 rounded-full"></div>
                                            </div>

                                            {/* Password Requirements */}
                                            <div className="mb-8">
                                                <p className="text-gray-600 font-medium mb-3">Password must contain:</p>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                                    <li className="flex items-center">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        At least 6 characters
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        At least 1 uppercase letter
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        At least 1 lowercase letter
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        At least 1 number
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        At least 1 special character
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Form */}
                                            <form onSubmit={handleResetPassword} className="space-y-6">
                                                <div className="space-y-4">
                                                    <div>
                                                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                                            Current Password
                                                        </label>
                                                        <input
                                                            id="currentPassword"
                                                            type="password"
                                                            placeholder="Enter current password"
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                                            value={currentPassword}
                                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                                                New Password
                                                            </label>
                                                            <input
                                                                id="newPassword"
                                                                type="password"
                                                                placeholder="Enter new password"
                                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                                                value={newPassword}
                                                                onChange={(e) => setNewPassword(e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                                                Confirm New Password
                                                            </label>
                                                            <input
                                                                id="confirmPassword"
                                                                type="password"
                                                                placeholder="Confirm new password"
                                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                                                value={confirmPassword}
                                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button
                                                        type="submit"
                                                        disabled={isResetting}
                                                        className={`w-full md:w-auto px-8 py-3 rounded-full font-medium text-white transition-all ${isResetting
                                                            ? 'bg-purple-400 cursor-not-allowed'
                                                            : 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 shadow-md hover:shadow-lg'}`}
                                                    >
                                                        {isResetting ? (
                                                            <span className="flex items-center justify-center">
                                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                                Resetting...
                                                            </span>
                                                        ) : (
                                                            'Reset Password'
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                </div>



                            </Row>
                        </Container>
                    </div>

                </div>
            </div>
        </CommonLayout>

    );
};

export default EnterNewPassword;