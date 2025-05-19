import React from "react";
import CommonLayout from "../../../layouts/Common";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
import shape from "../../../assets/images/shape2.png";
import fev1 from "../../../assets/images/fev1.jpg";
import photo2 from "../../../assets/images/photo2.jpg";
import photo3 from "../../../assets/images/photo3.jpg";
import photo4 from "../../../assets/images/photo4.png";
import photo5 from "../../../assets/images/photo5.png";
import myphoto from "../../../assets/images/myphoto.jpg";
import { MdClear } from "react-icons/md";

import settingView from "../../../assets/images/myProfile.png";
import settingEdit from "../../../assets/images/editPofile.png";
import settingUpload from "../../../assets/images/updateLocation.png";
import settingReset from "../../../assets/images/resetPassword.png";
import settingHide from "../../../assets/images/hideProfile.png";
import settingDelete from "../../../assets/images/deleteAccount.png";
import settingLogout from "../../../assets/images/logout.png";
import manageMedia from "../../../assets/images/manageMedia.png";
import viewedMe from "../../../assets/images/viewedMe.png";
import myLikes from "../../../assets/images/myLikes.png";
import likesMe from "../../../assets/images/likesMe.png";
import homea from "../../../assets/images/homea.png";
import liveicon from "../../../assets/images/liveicon.png";
import yourm from "../../../assets/images/yourm.png";
import blockedUsers from "../../../assets/images/blockedUsers.png";
import serr from "../../../assets/images/serr.png";
const BlockedUsers = () => {
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
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <h5 className="font-semibold text-gray-800 border-b pb-3 mb-4 text-center">
            Users Online Now
          </h5>
          <div className="flex justify-around">
            <div className="text-center p-3">
              <div className="text-pink-500 mb-2">
                <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h6 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Women</h6>
              <h4 className="text-xl font-bold text-gray-800">1,234</h4>
            </div>
            <div className="text-center p-3">
              <div className="text-blue-500 mb-2">
                <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h6 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Men</h6>
              <h4 className="text-xl font-bold text-gray-800">1,565</h4>
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="bg-white rounded-xl shadow-sm p-4">
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
          {/* Blocked Users Section */}
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Blocked Users</h2>
              <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { id: 1, photo: myphoto },
                { id: 2, photo: fev1 },
                { id: 3, photo: photo2 },
                { id: 4, photo: photo3 },
                { id: 5, photo: photo4 },
                { id: 6, photo: photo5 },
              ].map((user) => (
                <div key={user.id} className="relative group">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={user.photo} 
                      alt={`Blocked user ${user.id}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button 
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    onClick={() => handleUnblock(user.id)}
                  >
                    <MdClear className="w-4 h-4" />
                  </button>
                  <div className="mt-2 text-center">
                    <button 
                      className="text-sm text-blue-500 hover:underline"
                      onClick={() => handleViewProfile(user.id)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {[].length === 0 && (
              <div className="text-center py-12">
                <div className="mx-auto max-w-md">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 5.636l3.536 3.536m0 5.656l-3.536 3.536" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No blocked users</h3>
                  <p className="mt-1 text-gray-500">You haven't blocked any users yet.</p>
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

export default BlockedUsers;
