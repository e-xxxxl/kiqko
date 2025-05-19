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
import OnlineUsers from "../profile/OnlineUsers/OnlineUsers";
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
  {/* Top decorative shape - hidden on mobile */}
  <section className="hidden md:block">
    <img src={shape} alt="shape" className="w-full" />
  </section>

  {/* Main container */}
  <div className="container mx-auto px-4 py-6">
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        {/* Online users widget */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <OnlineUsers />
        </div>

        {/* Navigation menu */}
        <nav className="bg-white rounded-lg shadow-sm p-4">
          <ul className="space-y-1">
            {[
              { to: "/profile", icon: homea, text: "Home" },
              { to: "/search-results", icon: serr, text: "Search Results" },
              { to: "/live-users", icon: liveicon, text: "Live Users" },
              { to: "/who-viewed-you", icon: viewedMe, text: "Who Viewed Me" },
              { to: "/who-likes-you", icon: myLikes, text: "Who Likes Me" },
              { to: "/my-likes", icon: likesMe, text: "My Likes" },
              { to: "/your-matches", icon: yourm, text: "Your Matches" },
              { to: "/blocked-users", icon: blockedUsers, text: "Blocked Users" },
              { to: "/profile", icon: settingView, text: "View Profile" },
              { to: "/edit-basics", icon: settingEdit, text: "Edit Profile" },
              { to: "/manage-media", icon: manageMedia, text: "Manage Media" },
              { to: "/reset-password", icon: settingReset, text: "Reset Password" },
              { to: "/update-location", icon: settingUpload, text: "Update Location" },
              { to: "/hide-profile", icon: settingHide, text: "Hide Profile" },
              { to: "/delete-account", icon: settingDelete, text: "Delete Account" },
              { to: "/logout", icon: settingLogout, text: "Logout" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 
                    `flex items-center gap-3 p-3 rounded-lg transition-colors
                    ${isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50 text-gray-700'}`
                  }
                >
                  <img src={item.icon} alt={item.text} className="w-5 h-5" />
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="w-full lg:w-3/4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Delete Account Section */}
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Delete Account
              </h2>
              <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">
                  Deleting your account will <span className="font-semibold">permanently remove</span> all your data from our system.
                  This action cannot be undone.
                </p>
                <p className="text-gray-600">
                  Consider <NavLink to="/hide-profile" className="text-blue-500 hover:underline">hiding your profile</NavLink> instead if you want to take a break.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 px-6 py-3 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                  onClick={() => history.push('/profile')}
                >
                  Cancel
                </button>
                <button
                  className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 shadow-sm hover:shadow-md"
                  onClick={() => setShowModal(true)}
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Deleting...
                    </>
                  ) : 'Delete Account'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Confirmation Modal */}
  {showModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 animate-fade-in-up">
        <div className="text-center mb-4">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mt-3">Final Confirmation</h3>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-600 mb-2">
            This will <span className="font-bold text-red-500">permanently delete</span> your account and all associated data.
          </p>
          <p className="text-gray-500 text-sm">
            This action cannot be undone. All your matches, messages, and profile information will be lost forever.
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={handleDeleteAccount}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Deleting...
              </>
            ) : 'Yes, Delete Permanently'}
          </button>
        </div>
      </div>
    </div>
  )}
</CommonLayout>
    )
};

export default DeleteAccount;