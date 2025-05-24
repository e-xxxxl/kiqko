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
const WhoViewedYou = () => {
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

      {/* Main container */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            {/* Online users widget */}
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

          {/* Main content area */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Who Viewed You Section */}
              <div className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Who Viewed You
                  </h2>
                  <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
                  <p className="text-gray-500 mt-4">
                    These users have viewed your profile recently
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[
                    {
                      id: 1,
                      photo: myphoto,
                      name: "User 1",
                      time: "2 hours ago",
                    },
                    { id: 2, photo: fev1, name: "User 2", time: "5 hours ago" },
                    { id: 3, photo: photo2, name: "User 3", time: "1 day ago" },
                    { id: 4, photo: photo3, name: "User 4", time: "1 day ago" },
                    {
                      id: 5,
                      photo: photo4,
                      name: "User 5",
                      time: "2 days ago",
                    },
                    {
                      id: 6,
                      photo: photo5,
                      name: "User 6",
                      time: "3 days ago",
                    },
                    {
                      id: 7,
                      photo: photo6,
                      name: "User 7",
                      time: "1 week ago",
                    },
                    {
                      id: 8,
                      photo: photo7,
                      name: "User 8",
                      time: "1 week ago",
                    },
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
                      <h4 className="font-medium text-gray-800 truncate">
                        {user.name}
                      </h4>
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
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">
                        No profile views yet
                      </h3>
                      <p className="mt-1 text-gray-500">
                        Your profile hasn't been viewed by anyone recently.
                      </p>
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={() => history.push("/edit-basics")}
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
