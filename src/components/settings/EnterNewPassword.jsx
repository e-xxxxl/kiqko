import React, { useState } from "react";
import CommonLayout from "../../layouts/Common";
import shape from "../../assets/images/shape2.png";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { Button, Dropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Setting.css";
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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OnlineUsers from "../profile/OnlineUsers/OnlineUsers";
const EnterNewPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const history = useHistory();
  const userId = localStorage.getItem("userId");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User ID not found. Please log in again.");
      return;
    }

    // Basic validation
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    //  http://localhost:5000/api/auth/reset-password
    setIsResetting(true);
    try {
      const res = await fetch(
        "https://kiqko-backend.onrender.com/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            currentPassword,
            newPassword,
          }),
        }
      );

      // First check if the response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        throw new Error(text || "Server returned non-JSON response");
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      // Show success message
      alert("Password reset successfully!");

      // Optionally redirect to profile page
      history.push("/profile");
    } catch (err) {
      console.error("Error resetting password:", err);
      // Show the raw error message if it's HTML, but truncate it
      const errorMessage = err.message.includes("<!DOCTYPE")
        ? "Server error occurred"
        : err.message;
      alert(errorMessage);
    } finally {
      setIsResetting(false);
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
      <div className="all-container">
        <div className="pr pb-5 mb-5">
          <div className="page-wrapper-all">
            <Container>
              <Row>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full lg:w-1/4 space-y-6">
                    {/* Online Users */}
                    <OnlineUsers />

                    {/* Navigation */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                      {/* Mobile Horizontal Navigation (shows on small screens) */}
                      <div className="md:hidden overflow-x-auto pb-3">
                        <div className="flex space-x-2 w-max">
                          {/* All navigation items in a single scrollable row */}
                          <NavItemMobile
                            to="/profile"
                            icon={homea}
                            text="Home"
                          />
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

                  <div className="flex-1">
                    <div className="bg-white rounded-xl shadow-lg p-3 mx-auto">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">
                          Reset Password
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-3 rounded-full"></div>
                      </div>

                      {/* Password Requirements */}
                      <div className="mb-8">
                        <p className="text-gray-600 font-medium mb-3">
                          Password must contain:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                          <li className="flex items-center">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            At least 6 characters
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            At least 1 uppercase letter
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            At least 1 lowercase letter
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            At least 1 number
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            At least 1 special character
                          </li>
                        </ul>
                      </div>

                      {/* Form */}
                      <form
                        onSubmit={handleResetPassword}
                        className="space-y-6"
                      >
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="currentPassword"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Current Password
                            </label>
                            <input
                              id="currentPassword"
                              type="password"
                              placeholder="Enter current password"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                              value={currentPassword}
                              onChange={(e) =>
                                setCurrentPassword(e.target.value)
                              }
                              required
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="newPassword"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                New Password
                              </label>
                              <input
                                id="newPassword"
                                type="password"
                                placeholder="Enter new password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Confirm New Password
                              </label>
                              <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm new password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            disabled={isResetting}
                            className={`w-full md:w-auto px-8 py-3 rounded-full font-medium text-white transition-all ${
                              isResetting
                                ? "bg-purple-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 shadow-md hover:shadow-lg"
                            }`}
                          >
                            {isResetting ? (
                              <span className="flex items-center justify-center">
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                                Resetting...
                              </span>
                            ) : (
                              "Reset Password"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default EnterNewPassword;
