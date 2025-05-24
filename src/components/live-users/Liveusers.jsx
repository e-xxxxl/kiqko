import React from "react";
import CommonLayout from "../../layouts/Common";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import shape from "../../assets/images/shape2.png";

import { NavLink } from "react-router-dom";
import fev1 from "../../assets/images/fev1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo6 from "../../assets/images/photo6.jpg";
import photo7 from "../../assets/images/photo7.jpg";
import adda from "../../assets/images/addnew.png";
import Pagination from "react-bootstrap/Pagination";
import settingView from "../../assets/images/myProfile.png";
import settingEdit from "../../assets/images/editPofile.png";
import settingUpload from "../../assets/images/updateLocation.png";
import settingReset from "../../assets/images/resetPassword.png";
import settingHide from "../../assets/images/hideProfile.png";
import settingDelete from "../../assets/images/deleteAccount.png";
import settingLogout from "../../assets/images/logout.png";
import manageMedia from "../../assets/images/manageMedia.png";
import viewedMe from "../../assets/images/viewedMe.png";
import myLikes from "../../assets/images/myLikes.png";
import likesMe from "../../assets/images/likesMe.png";
import homea from "../../assets/images/homea.png";
import liveicon from "../../assets/images/liveicon.png";
import yourm from "../../assets/images/yourm.png";
import blockedUsers from "../../assets/images/blockedUsers.png";
import serr from "../../assets/images/serr.png";
import OnlineUsers from "../profile/OnlineUsers/OnlineUsers";

const Liveusers = () => {
  // NavItem component for cleaner code
  // Mobile NavItem component
  function NavItemMobile({ to, icon, text }) {
    return (
      <NavLink
        exact
        to={to}
        activeClassName="bg-blue-100 text-blue-600"
        className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 min-w-[70px]"
      >
        <img src={icon} alt={text} className="w-5 h-5 mb-1" />
        <span className="text-xs text-center">{text}</span>
      </NavLink>
    );
  }

  // Desktop NavItem component (unchanged from your original)
  function NavItem({ to, icon, text }) {
    return (
      <li>
        <NavLink
          exact
          to={to}
          activeClassName="bg-blue-50 text-blue-600 font-medium"
          className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <img src={icon} alt={text} className="w-5 h-5 flex-shrink-0" />
          <span>{text}</span>
        </NavLink>
      </li>
    );
  }

  return (
    <CommonLayout>
<div className="relative">
        {/* Mobile version (shown on small screens) */}
        <section className="md:hidden h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-indigo-600/30">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                fill="white"
                opacity="0.1"
              />
            </svg>
          </div>
          <div className="container mx-auto px-4 h-full flex items-center"></div>
        </section>

        {/* Desktop version (shown on medium+ screens) */}
        <section className="hidden md:block h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="container mx-auto px-6 h-full flex items-center justify-between"></div>
        </section>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Collapsible on mobile */}
          <div className="w-full lg:w-80 flex-shrink-0 order-2 lg:order-1">
            {/* User status card */}
            <OnlineUsers />

            {/* Navigation */}
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Mobile Horizontal Navigation (shows on small screens) */}
              <div className="md:hidden overflow-x-auto pb-3">
                <div className="flex space-x-2 w-max">
                  {/* All navigation items in a single scrollable row */}
                  <NavItemMobile to="/profile" icon={homea} text="Home" />
                  <NavItemMobile
                    to="/search-results"
                    icon={serr}
                    text="Search"
                  />
                  <NavItemMobile to="/live-users" icon={liveicon} text="Live" />
                  <NavItemMobile
                    to="/who-viewed-you"
                    icon={viewedMe}
                    text="Viewed Me"
                  />
                  <NavItemMobile
                    to="/who-likes-you"
                    icon={myLikes}
                    text="Likes Me"
                  />
                  <NavItemMobile
                    to="/my-likes"
                    icon={likesMe}
                    text="My Likes"
                  />
                  <NavItemMobile
                    to="/your-matches"
                    icon={yourm}
                    text="Matches"
                  />
                  <NavItemMobile
                    to="/blocked-users"
                    icon={blockedUsers}
                    text="Blocked"
                  />

                  <NavItemMobile
                    to="/manage-media"
                    icon={manageMedia}
                    text="Manage Media"
                  />

                  <NavItemMobile
                    to="/edit-basics"
                    icon={settingEdit}
                    text="Edit"
                  />

                  <NavItemMobile
                    to="/hide-profile"
                    icon={settingHide}
                    text="Hide Profile"
                  />

                  <NavItemMobile
                    to="/delete-account"
                    icon={settingDelete}
                    text="Delete Account"
                  />

                  <NavItemMobile
                    to="/update-location"
                    icon={settingUpload}
                    text="Update Location"
                  />

                  <NavItemMobile
                    to="/manage-media"
                    icon={manageMedia}
                    text="Media"
                  />
                  <NavItemMobile
                    to="/reset-password"
                    icon={settingReset}
                    text="Password"
                  />
                  <NavItemMobile
                    to="/logout"
                    icon={settingLogout}
                    text="Logout"
                  />
                </div>
              </div>

              {/* Desktop Vertical Navigation (unchanged) */}
              <ul className="hidden md:block space-y-2">
                {/* Main Actions */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                    Discover
                  </h3>
                  <div className="space-y-1">
                    <NavItem to="/profile" icon={homea} text="Home" />
                    <NavItem
                      to="/search-results"
                      icon={serr}
                      text="Search Results"
                    />
                    <NavItem
                      to="/live-users"
                      icon={liveicon}
                      text="Live Users"
                    />
                  </div>
                </div>

                {/* Connections */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                    Connections
                  </h3>
                  <div className="space-y-1">
                    <NavItem
                      to="/who-viewed-you"
                      icon={viewedMe}
                      text="Who Viewed Me"
                    />
                    <NavItem
                      to="/who-likes-you"
                      icon={myLikes}
                      text="Who Likes Me"
                    />
                    <NavItem to="/my-likes" icon={likesMe} text="My Likes" />
                    <NavItem
                      to="/your-matches"
                      icon={yourm}
                      text="Your Matches"
                    />
                    <NavItem
                      to="/blocked-users"
                      icon={blockedUsers}
                      text="Blocked Users"
                    />
                  </div>
                </div>

                {/* Profile Management */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                    Profile
                  </h3>
                  <div className="space-y-1">
                    <NavItem
                      to="/profile"
                      icon={settingView}
                      text="View Profile"
                    />
                    <NavItem
                      to="/edit-basics"
                      icon={settingEdit}
                      text="Edit Profile"
                    />
                    <NavItem
                      to="/manage-media"
                      icon={manageMedia}
                      text="Manage Media"
                    />
                  </div>
                </div>

                {/* Account Settings */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                    Settings
                  </h3>
                  <div className="space-y-1">
                    <NavItem
                      to="/reset-password"
                      icon={settingReset}
                      text="Reset Password"
                    />
                    <NavItem
                      to="/update-location"
                      icon={settingUpload}
                      text="Update Location"
                    />
                    <NavItem
                      to="/hide-profile"
                      icon={settingHide}
                      text="Hide Profile"
                    />
                    <NavItem
                      to="/delete-account"
                      icon={settingDelete}
                      text="Delete Account"
                    />
                    <NavItem to="/logout" icon={settingLogout} text="Logout" />
                  </div>
                </div>
              </ul>
            </div>

            {/* Ad banners */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={adda} alt="Advertisement" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={adda} alt="Advertisement" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 order-1 lg:order-2">
            {/* Live users header with search */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Live Users
                    </h2>
                    <p className="text-gray-500">Currently active members</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search live users..."
                        className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <svg
                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live users grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                {
                  id: 1,
                  photo: fev1,
                  name: "Jeanall",
                  age: 38,
                  location: "Los Angeles, CA",
                  online: true,
                },
                {
                  id: 2,
                  photo: photo2,
                  name: "Sarah",
                  age: 29,
                  location: "New York, NY",
                  online: true,
                },
                {
                  id: 3,
                  photo: photo7,
                  name: "Emma",
                  age: 31,
                  location: "Chicago, IL",
                  online: true,
                },
                {
                  id: 4,
                  photo: photo3,
                  name: "Olivia",
                  age: 27,
                  location: "Miami, FL",
                  online: true,
                },
                {
                  id: 5,
                  photo: photo6,
                  name: "Sophia",
                  age: 25,
                  location: "Austin, TX",
                  online: true,
                },
                {
                  id: 6,
                  photo: fev1,
                  name: "Isabella",
                  age: 33,
                  location: "Seattle, WA",
                  online: true,
                },
                {
                  id: 7,
                  photo: photo2,
                  name: "Mia",
                  age: 28,
                  location: "Denver, CO",
                  online: true,
                },
                {
                  id: 8,
                  photo: photo7,
                  name: "Amelia",
                  age: 30,
                  location: "Boston, MA",
                  online: true,
                },
              ].map((user) => (
                <div
                  key={user.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
                >
                  <div className="relative">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="w-full h-48 object-cover"
                    />
                    {user.online && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                        LIVE
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {user.name}, {user.age}
                        </h3>
                        <p className="text-gray-500 text-sm">{user.location}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>Like</span>
                      </button>
                      <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span>Chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ad banners row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={adda} alt="Advertisement" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={adda} alt="Advertisement" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={adda} alt="Advertisement" className="w-full h-auto" />
              </div>
            </div>

            {/* More live users */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                {
                  id: 9,
                  photo: photo3,
                  name: "Charlotte",
                  age: 26,
                  location: "San Francisco, CA",
                  online: true,
                },
                {
                  id: 10,
                  photo: photo6,
                  name: "Ava",
                  age: 32,
                  location: "Portland, OR",
                  online: true,
                },
                {
                  id: 11,
                  photo: fev1,
                  name: "Harper",
                  age: 29,
                  location: "Phoenix, AZ",
                  online: true,
                },
              ].map((user) => (
                <div
                  key={user.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
                >
                  <div className="relative">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="w-full h-48 object-cover"
                    />
                    {user.online && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                        LIVE
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {user.name}, {user.age}
                        </h3>
                        <p className="text-gray-500 text-sm">{user.location}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>Like</span>
                      </button>
                      <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span>Chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 flex justify-center">
                <nav className="flex items-center gap-1">
                  <button className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="px-4 py-1 rounded-lg bg-blue-500 text-white font-medium">
                    1
                  </button>
                  <button className="px-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                    2
                  </button>
                  <button className="px-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                    3
                  </button>
                  <button className="px-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                    4
                  </button>
                  <button className="px-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                    5
                  </button>
                  <button className="px-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                    6
                  </button>
                  <button className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Liveusers;
