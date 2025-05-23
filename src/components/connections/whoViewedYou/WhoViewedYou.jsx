import React from 'react';
import CommonLayout from "../../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import shape from '../../../assets/images/shape2.png';
import fev1 from '../../../assets/images/fev1.jpg';
import photo2 from '../../../assets/images/photo2.jpg';
import photo3 from '../../../assets/images/photo3.jpg';
import photo4 from '../../../assets/images/photo4.png';
import photo5 from '../../../assets/images/photo5.png';
import photo6 from '../../../assets/images/photo6.jpg';
import photo7 from '../../../assets/images/photo7.jpg';
import myphoto from '../../../assets/images/myphoto.jpg';
import { MdClear } from 'react-icons/md';

import settingView from '../../../assets/images/myProfile.png';
import settingEdit from '../../../assets/images/editPofile.png';
import settingUpload from '../../../assets/images/updateLocation.png';
import settingReset from '../../../assets/images/resetPassword.png';
import settingHide from '../../../assets/images/hideProfile.png';
import settingDelete from '../../../assets/images/deleteAccount.png';
import settingLogout from '../../../assets/images/logout.png';
import manageMedia from '../../../assets/images/manageMedia.png';
import viewedMe from '../../../assets/images/viewedMe.png';
import myLikes from '../../../assets/images/myLikes.png';
import likesMe from '../../../assets/images/likesMe.png';
import homea from '../../../assets/images/homea.png';
import liveicon from '../../../assets/images/liveicon.png';
import yourm from '../../../assets/images/yourm.png';
import blockedUsers from '../../../assets/images/blockedUsers.png';
import serr from '../../../assets/images/serr.png';
import OnlineUsers from '../../profile/OnlineUsers/OnlineUsers';
const WhoViewedYou = () => {
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
         <OnlineUsers/>

        {/* Navigation menu */}
        <nav className="bg-white rounded-xl shadow-sm p-4">
          <ul className="space-y-1">
            {[
              { to: "/profile", icon: homea, text: "Home" },
              { to: "/search-results", icon: serr, text: "Search Results" },
              { to: "/live-users", icon: liveicon, text: "Live Users" },
              { to: "/who-viewed-you", icon: viewedMe, text: "Who Viewed Me", active: true },
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
                    ${isActive || item.active ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50 text-gray-700'}`
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
          {/* Who Viewed You Section */}
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Who Viewed You</h2>
              <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
              <p className="text-gray-500 mt-4">
                These users have viewed your profile recently
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { id: 1, photo: myphoto, name: "User 1", time: "2 hours ago" },
                { id: 2, photo: fev1, name: "User 2", time: "5 hours ago" },
                { id: 3, photo: photo2, name: "User 3", time: "1 day ago" },
                { id: 4, photo: photo3, name: "User 4", time: "1 day ago" },
                { id: 5, photo: photo4, name: "User 5", time: "2 days ago" },
                { id: 6, photo: photo5, name: "User 6", time: "3 days ago" },
                { id: 7, photo: photo6, name: "User 7", time: "1 week ago" },
                { id: 8, photo: photo7, name: "User 8", time: "1 week ago" },
              ].map((user) => (
                <div key={user.id} className="group relative text-center">
                  <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 mb-3 relative">
                    <img 
                      src={user.photo} 
                      alt={`Profile of ${user.name}`} 
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <button 
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                      onClick={() => handleRemoveViewer(user.id)}
                    >
                      <MdClear className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <h4 className="font-medium text-gray-800 truncate">{user.name}</h4>
                  <p className="text-xs text-gray-500">{user.time}</p>
                  <button 
                    className="mt-2 text-sm text-blue-500 hover:text-blue-600 hover:underline"
                    onClick={() => handleViewProfile(user.id)}
                  >
                    View Profile
                  </button>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {[].length === 0 && (
              <div className="text-center py-12">
                <div className="mx-auto max-w-md">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No profile views yet</h3>
                  <p className="mt-1 text-gray-500">Your profile hasn't been viewed by anyone recently.</p>
                  <button 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => history.push('/edit-basics')}
                  >
                    Improve Your Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</CommonLayout>
    );
};

export default WhoViewedYou;