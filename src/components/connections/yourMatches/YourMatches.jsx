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
import photo6 from "../../../assets/images/photo6.jpg";
import photo7 from "../../../assets/images/photo7.jpg";
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
import OnlineUsers from "../../profile/OnlineUsers/OnlineUsers";
const YourMatches = () => {
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
      {/* Hero section with decorative shape */}
      <div className="relative">
        <section className="hidden md:block h-24 bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden">
          <img
            src={shape}
            alt="shape"
            className="w-full h-full object-cover opacity-20"
          />
        </section>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Collapsible on mobile */}
          <div className="w-full lg:w-80 flex-shrink-0">
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
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Matches header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      Your Matches
                    </h1>
                    <p className="text-gray-500">
                      People you've connected with
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search matches..."
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

            {/* Matches grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  id: 1,
                  photo: myphoto,
                  name: "Alex",
                  age: 28,
                  location: "New York",
                  matchPercent: 92,
                },
                {
                  id: 2,
                  photo: fev1,
                  name: "Sam",
                  age: 25,
                  location: "Los Angeles",
                  matchPercent: 88,
                },
                {
                  id: 3,
                  photo: photo2,
                  name: "Jordan",
                  age: 30,
                  location: "Chicago",
                  matchPercent: 95,
                },
                {
                  id: 4,
                  photo: photo3,
                  name: "Taylor",
                  age: 26,
                  location: "Miami",
                  matchPercent: 84,
                },
                {
                  id: 5,
                  photo: photo4,
                  name: "Casey",
                  age: 29,
                  location: "Seattle",
                  matchPercent: 91,
                },
                {
                  id: 6,
                  photo: photo5,
                  name: "Riley",
                  age: 27,
                  location: "Austin",
                  matchPercent: 87,
                },
                {
                  id: 7,
                  photo: photo6,
                  name: "Morgan",
                  age: 31,
                  location: "Denver",
                  matchPercent: 89,
                },
                {
                  id: 8,
                  photo: photo7,
                  name: "Jamie",
                  age: 24,
                  location: "Boston",
                  matchPercent: 93,
                },
              ].map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
                >
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
                          <h3 className="text-white font-bold text-xl">
                            {match.name}, {match.age}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {match.location}
                          </p>
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
                        <svg
                          className="w-5 h-5 text-gray-600"
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
                        <span>Message</span>
                      </button>
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
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {[].length === 0 && (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="mx-auto max-w-md">
                  <svg
                    className="mx-auto h-16 w-16 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">
                    No matches yet
                  </h3>
                  <p className="mt-2 text-gray-500">
                    When you match with someone, they'll appear here.
                  </p>
                  <div className="mt-6">
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                      onClick={() => history.push("/search-results")}
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
