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
const YourMatches = () => {
    return (
       <CommonLayout>
  {/* Hero section with decorative shape */}
  <div className="relative">
    <section className="hidden md:block h-24 bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden">
      <img src={shape} alt="shape" className="w-full h-full object-cover opacity-20" />
    </section>
  </div>

  {/* Main content container */}
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar - Collapsible on mobile */}
      <div className="w-full lg:w-80 flex-shrink-0">
        {/* User status card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Community Activity</h3>
            <div className="flex justify-between px-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-gray-500">Women Online</h4>
                <p className="text-xl font-bold text-gray-800">1,234</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-gray-500">Men Online</h4>
                <p className="text-xl font-bold text-gray-800">1,565</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white rounded-xl shadow-lg overflow-hidden">
          <ul className="space-y-1 p-2">
            {[
              { to: "/profile", icon: homea, text: "Home" },
              { to: "/search-results", icon: serr, text: "Search" },
              { to: "/live-users", icon: liveicon, text: "Live Users" },
              { to: "/who-viewed-you", icon: viewedMe, text: "Profile Views" },
              { to: "/who-likes-you", icon: myLikes, text: "Likes" },
              { to: "/my-likes", icon: likesMe, text: "My Likes" },
              { to: "/your-matches", icon: yourm, text: "Matches", active: true },
              { to: "/blocked-users", icon: blockedUsers, text: "Blocked" },
              { 
                to: "/profile", 
                icon: settingView, 
                text: "My Profile",
                submenu: [
                  { to: "/edit-basics", text: "Edit Profile" },
                  { to: "/manage-media", text: "Manage Media" },
                  { to: "/reset-password", text: "Password" },
                  { to: "/update-location", text: "Location" },
                  { to: "/hide-profile", text: "Hide Profile" },
                  { to: "/delete-account", text: "Delete Account" }
                ]
              },
              { to: "/logout", icon: settingLogout, text: "Logout" }
            ].map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <div className="group">
                    <NavLink
                      to={item.to}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700"
                    >
                      <img src={item.icon} alt={item.text} className="w-5 h-5" />
                      <span className="flex-1">{item.text}</span>
                      <svg className="w-4 h-4 text-gray-400 transform group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>
                    <div className="pl-8 hidden group-hover:block">
                      {item.submenu.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.to}
                          className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          {subItem.text}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Matches header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Your Matches</h1>
                <p className="text-gray-500">People you've connected with</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search matches..."
                    className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Matches grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            { id: 1, photo: myphoto, name: "Alex", age: 28, location: "New York", matchPercent: 92 },
            { id: 2, photo: fev1, name: "Sam", age: 25, location: "Los Angeles", matchPercent: 88 },
            { id: 3, photo: photo2, name: "Jordan", age: 30, location: "Chicago", matchPercent: 95 },
            { id: 4, photo: photo3, name: "Taylor", age: 26, location: "Miami", matchPercent: 84 },
            { id: 5, photo: photo4, name: "Casey", age: 29, location: "Seattle", matchPercent: 91 },
            { id: 6, photo: photo5, name: "Riley", age: 27, location: "Austin", matchPercent: 87 },
            { id: 7, photo: photo6, name: "Morgan", age: 31, location: "Denver", matchPercent: 89 },
            { id: 8, photo: photo7, name: "Jamie", age: 24, location: "Boston", matchPercent: 93 }
          ].map((match) => (
            <div key={match.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative">
                <img 
                  src={match.photo} 
                  alt={match.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <button 
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    onClick={() => handleRemoveMatch(match.id)}
                  >
                    <MdClear className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-bold text-xl">{match.name}, {match.age}</h3>
                      <p className="text-white/90 text-sm">{match.location}</p>
                    </div>
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {match.matchPercent}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between gap-2">
                  <button className="flex-1 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Message</span>
                  </button>
                  <button className="flex-1 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {[].length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="mx-auto max-w-md">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">No matches yet</h3>
              <p className="mt-2 text-gray-500">When you match with someone, they'll appear here.</p>
              <div className="mt-6">
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                  onClick={() => history.push('/search-results')}
                >
                  Find Potential Matches
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</CommonLayout>
    );
};

export default YourMatches;