import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { FaComment } from "react-icons/fa";
import OnlineUsers from "../../profile/OnlineUsers/OnlineUsers";

const WhoLkesYou = () => {
  const [whoLikedMe, setWhoLikedMe] = useState([]);
  const [loading, setisLoading] = useState(true);
  const currentUserId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchWhoLikedMe = async () => {
      try {
        const res = await axios.get(
          `https://kiqko-backend.onrender.com/api/users/liked-by/${currentUserId}`
        );
        setWhoLikedMe(res.data);
      } catch (error) {
        console.error("Error fetching who liked me:", error);
      } finally {
        setisLoading(false);
      }
    };

    fetchWhoLikedMe();
  }, [currentUserId]);

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
          <div className="w-full">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg animate-pulse">
                  Loading who liked you...
                </p>
              </div>
            ) : whoLikedMe.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">
                  No one has liked your profile yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {whoLikedMe.map((user) => (
                  <div
                    key={user._id}
                    className="bg-white rounded-2xl shadow-md p-4 group hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                      <img
                        src={user.profile?.profilephoto || "/default.jpg"}
                        alt={`Profile of ${user.username}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <button
                        className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow hover:bg-white transition-colors"
                        onClick={() => handleRemoveLike(user._id)}
                        title="Remove Like"
                      >
                        <MdClear className="w-4 h-4 text-gray-600" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                        <span className="text-white text-xs font-medium">
                          {formatDistanceToNow(new Date(user.createdAt), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-center font-semibold text-gray-800 text-sm truncate">
                      {user.username}
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      <NavLink
                        to={`/profile/${user._id}`}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
                      >
                        View
                      </NavLink>
                      <button
                        className="px-3 py-1 bg-pink-500 text-white rounded-full text-xs hover:bg-pink-600 transition-colors"
                        onClick={() => handleLikeBack(user._id)}
                      >
                        Like Back
                      </button>
                      <NavLink
                        to={`/chat/${user._id}`}
                        className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs hover:bg-green-200"
                      >
                        <FaComment className="w-4 h-4" />
                        Chat
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default WhoLkesYou;
