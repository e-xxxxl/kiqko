import React, { useState } from "react";
import CommonLayout from "../../layouts/Common";
import shape from "../../assets/images/shape2.png";
import hideicon from "../../assets/images/hide.png";
import { NavLink } from "react-router-dom";

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
import "./Setting.css";
import "./logout.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Logout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    setIsLoggingOut(true);
    try {
      // Clear all user-related data from localStorage
      localStorage.removeItem("userId");
      localStorage.removeItem("userData");
      localStorage.removeItem("profileData");

      // Redirect to home page
      history.push("/");
      window.location.reload(); // Optional: if you want to fully reset the app state
    } catch (err) {
      console.error("Error during logout:", err);
      alert("An error occurred during logout");
    } finally {
      setIsLoggingOut(false);
    }
  };

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
  

  const handleCancel = () => {
    // Navigate back or to another page
    history.goBack();
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
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <OnlineUsers />
            </div>
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
                      <NavItemMobile
                        to="/live-users"
                        icon={liveicon}
                        text="Live"
                      />
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
                        to="/edit-basics"
                        icon={settingEdit}
                        text="Edit"
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
                        <NavItem
                          to="/my-likes"
                          icon={likesMe}
                          text="My Likes"
                        />
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
                        <NavItem
                          to="/logout"
                          icon={settingLogout}
                          text="Logout"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
          </div>

          {/* Main content area */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Logout Confirmation Section */}
              <div className="p-8 text-center">
                <div className="max-w-md mx-auto">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-100 p-5 rounded-full">
                      <img
                        src={hideicon}
                        alt="Logout"
                        className="w-10 h-10 opacity-75"
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Ready to leave?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Are you sure you want to end your current session?
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleCancel}
                      disabled={isLoggingOut}
                      className="px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 flex items-center justify-center gap-2"
                    >
                      {isLoggingOut ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Signing Out...
                        </>
                      ) : (
                        "Sign Out"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Logout;
