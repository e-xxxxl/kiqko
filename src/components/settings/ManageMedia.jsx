import React from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import shape from '../../assets/images/shape2.png';
import fev1 from '../../assets/images/fev1.jpg';
import photo2 from '../../assets/images/photo2.jpg';

import photo7 from '../../assets/images/photo7.jpg';
import profile from '../../assets/images/profilep.jpg';
import { MdClear } from 'react-icons/md';
import { MdOutlineArrowForward } from "react-icons/md";
import Form from 'react-bootstrap/Form'


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
import OnlineUsers from '../profile/OnlineUsers/OnlineUsers';
const ManageMedia = () => {
    return (
        <CommonLayout>
            <section className="all-top-shape">
                <img src={shape} alt="shape" className="w-full" />
            </section>

            <div className="all-container">
                <div className="pr pb-5 mb-5">
                    <div className="page-wrapper-all">
                        <Container>
                            {/* Flex container for nav and content */}
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Navigation sidebar - full width on mobile, 1/4 on desktop */}
                                <div className="w-full lg:w-1/4 space-y-6">
                                    {/* Online Users */}
                                    <OnlineUsers/>

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

                                {/* Main content area - full width on mobile, 3/4 on desktop */}
                                <div className="w-full lg:w-3/4">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        {/* Header Section */}
                                        <div className="text-center mb-8">
                                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Media Gallery</h2>
                                            <p className="text-gray-600 max-w-2xl mx-auto">
                                                Here is where you can edit your photos and videos. To be a verified member you need to add a minimum of five photos.
                                            </p>
                                        </div>

                                        {/* Main Content */}
                                        <div className="flex flex-col lg:flex-row gap-8">
                                            {/* Profile Photo Section */}
                                            <div className="w-full lg:w-1/3">
                                                <div className="space-y-4">
                                                    <h3 className="font-medium text-gray-700">Your profile photo</h3>

                                                    <div className="relative group">
                                                        <div className="absolute top-3 right-3 z-10">
                                                            <button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-all hover:scale-110">
                                                                <MdClear className="w-5 h-5" />
                                                            </button>
                                                        </div>
                                                        <img
                                                            src={profile}
                                                            alt="Profile"
                                                            className="w-full h-64 object-cover rounded-xl shadow-sm border border-gray-200 hover:border-purple-300 transition-all"
                                                        />
                                                    </div>

                                                    <textarea
                                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                                                        rows={3}
                                                        placeholder="Add a caption..."
                                                    />
                                                </div>
                                            </div>

                                            {/* Media Grid Section */}
                                            <div className="w-full lg:w-2/3">
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                    {/* Add Photo Button */}
                                                    <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl hover:border-purple-400 bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                                                        <input type="file" className="hidden" multiple />
                                                        <div className="text-purple-500 mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-sm text-gray-600">Add Media</span>
                                                    </label>

                                                    {/* Existing Photos */}
                                                    {[fev1, photo2, photo7].map((photo, index) => (
                                                        <div key={index} className="relative group aspect-square">
                                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 rounded-xl transition-all flex items-center justify-center">
                                                                <button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-all transform translate-y-2 group-hover:translate-y-0">
                                                                    <MdClear className="w-5 h-5" />
                                                                </button>
                                                            </div>
                                                            <img
                                                                src={photo}
                                                                alt={`Media ${index + 1}`}
                                                                className="w-full h-full object-cover rounded-xl shadow-sm border border-gray-200"
                                                            />
                                                        </div>
                                                    ))}

                                                    {/* Empty Slots */}
                                                    {[...Array(8)].map((_, index) => (
                                                        <div key={`empty-${index}`} className="aspect-square bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center">
                                                            <div className="text-gray-400">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Save Button */}
                                        <div className="mt-12 text-center">
                                            <NavLink to="/profile">
                                                <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium py-3 px-8 rounded-full inline-flex items-center shadow-md hover:shadow-lg transition-all">
                                                    Save Changes
                                                    <MdOutlineArrowForward className="ml-2" />
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </CommonLayout>
    );
};

export default ManageMedia;