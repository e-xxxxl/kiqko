import React, { useState } from "react";
import CommonLayout from "../../layouts/Common";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import "./editBasics.css";
import shape from "../../assets/images/shape2.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import OnlineUsers from "../profile/OnlineUsers/OnlineUsers";
import OnlineStatusUpdater from "../profile/OnlineUsers/OnlineStatusUpdater";
const EditBasics = () => {
  const [formData, setFormData] = useState({
    gender: "",
    birthDate: {
      month: "",
      day: "",
      year: "",
    },
    ethnicity: "",
    maritalStatus: "",
    height: "165cm - (5'5\")",
    age: "19", // Add this line with a default value
    bodyType: "",
    hasKids: "",
    wantsKids: "",
    hereFor: "",
    wouldRelocate: "",
  });
  const userId = localStorage.getItem("userId");

  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBirthdayChange = (part, value) => {
    setFormData((prev) => ({
      ...prev,
      birthDate: {
        ...prev.birthDate,
        [part]: value,
      },
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { month, day, year } = formData.birthDate;

    // Convert to valid date string: "YYYY-MM-DD"
    const formattedBirthDate = new Date(
      `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    );

    // Replace birthDate object with proper Date
    const formattedData = {
      ...formData,
      birthDate: formattedBirthDate,
    };
    try {
      const res = await fetch(
        `https://kiqko-backend.onrender.com/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );
      if (res.ok) {
        history.push("/profile");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
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

  // if (loading) return <div>Loading...</div>;

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
              {/* Flex container for nav and content */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Navigation sidebar - takes full width on mobile, 1/4 on desktop */}
                <div className="w-full md:w-1/4 space-y-6">
                  {/* Online Users */}
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

                {/* Main content area - takes full width on mobile, 3/4 on desktop */}
                <div className="w-full md:w-3/4">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="mb-6 text-center">
                      <h4 className="text-[#9b72fe] text-2xl font-bold">
                        Edit Profile Details
                      </h4>
                      <p className="text-gray-500 mt-2">
                        Complete your profile to improve your matches
                      </p>
                    </div>

                    <div className="space-y-6">
                      <form
                        onSubmit={handleSubmit}
                        className="needs-validation"
                        noValidate
                      >
                        {/* Personal Information Section */}
                        <div className="card bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                          <div className="card-header bg-gradient-to-r from-[#9b72fe] to-[#7e5af9] p-4">
                            <h5 className="mb-0 text-white text-lg font-semibold">
                              Personal Information
                            </h5>
                          </div>
                          <div className="card-body p-6 space-y-6">
                            {/* Gender Selection */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-3">
                                I am a
                              </label>
                              <div className="flex flex-wrap gap-4">
                                {["Woman", "Man"].map((gender) => (
                                  <div
                                    key={gender}
                                    className="flex items-center"
                                  >
                                    <input
                                      className="h-5 w-5 text-[#9b72fe] border-gray-300 focus:ring-[#9b72fe]"
                                      type="radio"
                                      id={gender}
                                      checked={formData.gender === gender}
                                      onChange={() =>
                                        handleChange("gender", gender)
                                      }
                                    />
                                    <label
                                      className="ml-2 text-gray-700"
                                      htmlFor={gender}
                                    >
                                      {gender}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Birthday Selection */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-3">
                                Birthday
                              </label>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <select
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b72fe] focus:border-[#9b72fe]"
                                    value={formData.birthDate.month}
                                    onChange={(e) =>
                                      handleBirthdayChange(
                                        "month",
                                        e.target.value
                                      )
                                    }
                                    required
                                  >
                                    <option value="">Month</option>
                                    {Array.from({ length: 12 }, (_, i) => (
                                      <option key={i + 1} value={i + 1}>
                                        {new Date(0, i).toLocaleString(
                                          "default",
                                          { month: "long" }
                                        )}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div>
                                  <select
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b72fe] focus:border-[#9b72fe]"
                                    value={formData.birthDate.day}
                                    onChange={(e) =>
                                      handleBirthdayChange(
                                        "day",
                                        e.target.value
                                      )
                                    }
                                    required
                                  >
                                    <option value="">Day</option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                      <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div>
                                  <select
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b72fe] focus:border-[#9b72fe]"
                                    value={formData.birthDate.year}
                                    onChange={(e) =>
                                      handleBirthdayChange(
                                        "year",
                                        e.target.value
                                      )
                                    }
                                    required
                                  >
                                    <option value="">Year</option>
                                    {Array.from({ length: 100 }, (_, i) => {
                                      const year = new Date().getFullYear() - i;
                                      return (
                                        <option key={year} value={year}>
                                          {year}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                            </div>

                            {/* Ethnicity Selection */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-3">
                                Ethnicity
                              </label>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                  "White / Caucasian",
                                  "Asian",
                                  "Black / African Descent",
                                  "Latino / Hispanic",
                                  "North American",
                                  "East Indian",
                                  "Pacific Islander",
                                  "Middle Eastern",
                                  "Mixed Race",
                                  "Other Race",
                                ].map((race) => (
                                  <div key={race} className="flex items-center">
                                    <input
                                      className="h-4 w-4 text-[#9b72fe] border-gray-300 focus:ring-[#9b72fe]"
                                      type="radio"
                                      id={race.replace(/\s+/g, "")}
                                      checked={formData.ethnicity === race}
                                      onChange={() =>
                                        handleChange("ethnicity", race)
                                      }
                                    />
                                    <label
                                      className="ml-2 text-gray-700 text-sm"
                                      htmlFor={race.replace(/\s+/g, "")}
                                    >
                                      {race}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Physical Attributes Section */}
                        <div className="card bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                          <div className="card-header bg-gradient-to-r from-[#9b72fe] to-[#7e5af9] p-4">
                            <h5 className="mb-0 text-white text-lg font-semibold">
                              Physical Attributes
                            </h5>
                          </div>
                          <div className="card-body p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Height */}
                              <div>
                                <label className="block text-gray-700 font-medium mb-3">
                                  Height
                                </label>
                                <select
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b72fe] focus:border-[#9b72fe]"
                                  value={formData.height}
                                  onChange={(e) =>
                                    handleChange("height", e.target.value)
                                  }
                                >
                                  {[
                                    "150cm - (4'11\")",
                                    "152cm - (5'0\")",
                                    "155cm - (5'1\")",
                                    "157cm - (5'2\")",
                                    "160cm - (5'3\")",
                                    "163cm - (5'4\")",
                                    "165cm - (5'5\")",
                                    "168cm - (5'6\")",
                                    "170cm - (5'7\")",
                                    "173cm - (5'8\")",
                                    "175cm - (5'9\")",
                                    "178cm - (5'10\")",
                                    "180cm - (5'11\")",
                                    "183cm - (6'0\")",
                                    "185cm - (6'1\")",
                                    "188cm - (6'2\")",
                                    "191cm - (6'3\")",
                                    "193cm - (6'4\")",
                                    "195cm - (6'5\")",
                                    "198cm - (6'6\")",
                                    "201cm - (6'7\")",
                                    "203cm - (6'8\")",
                                    "205cm - (6'9\")",
                                    "208cm - (6'10\")",
                                    "210cm - (6'11\")",
                                    "213cm - (7'0\")",
                                    // ... other height options
                                  ].map((height) => (
                                    <option key={height} value={height}>
                                      {height}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              {/* Age */}
                              <div>
                                <label className="block text-gray-700 font-medium mb-3">
                                  Age
                                </label>
                                <select
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9b72fe] focus:border-[#9b72fe]"
                                  value={formData.age}
                                  onChange={(e) =>
                                    handleChange("age", e.target.value)
                                  }
                                >
                                  {Array.from(
                                    { length: 82 },
                                    (_, i) => i + 19
                                  ).map((age) => (
                                    <option key={age} value={age.toString()}>
                                      {age}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              {/* Body Type */}
                              <div className="col-span-full">
                                <label className="block text-gray-700 font-medium mb-3">
                                  Body Type
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                  {[
                                    "Slim / Slender",
                                    "Athletic / Fit",
                                    // ... other body types
                                  ].map((type) => (
                                    <div
                                      key={type}
                                      className="flex items-center"
                                    >
                                      <input
                                        className="h-4 w-4 text-[#9b72fe] border-gray-300 focus:ring-[#9b72fe]"
                                        type="radio"
                                        id={type.replace(/\s+/g, "")}
                                        checked={formData.bodyType === type}
                                        onChange={() =>
                                          handleChange("bodyType", type)
                                        }
                                      />
                                      <label
                                        className="ml-2 text-gray-700 text-sm"
                                        htmlFor={type.replace(/\s+/g, "")}
                                      >
                                        {type}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Lifestyle Section */}
                        <div className="card bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                          <div className="card-header bg-gradient-to-r from-[#9b72fe] to-[#7e5af9] p-4">
                            <h5 className="mb-0 text-white text-lg font-semibold">
                              Lifestyle
                            </h5>
                          </div>
                          <div className="card-body p-6 space-y-6">
                            {/* Marital Status */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-3">
                                Marital Status
                              </label>
                              <div className="flex flex-wrap gap-4">
                                {[
                                  "Single",
                                  "Divorced",
                                  "Separated",
                                  "Widowed",
                                  "Attached",
                                ].map((status) => (
                                  <div
                                    key={status}
                                    className="flex items-center"
                                  >
                                    <input
                                      className="h-4 w-4 text-[#9b72fe] border-gray-300 focus:ring-[#9b72fe]"
                                      type="radio"
                                      id={status}
                                      checked={
                                        formData.maritalStatus === status
                                      }
                                      onChange={() =>
                                        handleChange("maritalStatus", status)
                                      }
                                    />
                                    <label
                                      className="ml-2 text-gray-700"
                                      htmlFor={status}
                                    >
                                      {status}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Children */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-gray-700 font-medium mb-3">
                                  Have Kids
                                </label>
                                <div className="space-y-2">
                                  {[
                                    "No",
                                    "Yes, they live at home",
                                    "Yes, they sometimes live at home",
                                    "Yes, they live away from home",
                                  ].map((option) => (
                                    <div
                                      key={option}
                                      className="flex items-center"
                                    >
                                      <input
                                        className="h-4 w-4 text-[#9b72fe] border-gray-300 focus:ring-[#9b72fe]"
                                        type="radio"
                                        id={option.replace(/\s+/g, "")}
                                        checked={formData.hasKids === option}
                                        onChange={() =>
                                          handleChange("hasKids", option)
                                        }
                                      />
                                      <label
                                        className="ml-2 text-gray-700 text-sm"
                                        htmlFor={option.replace(/\s+/g, "")}
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <label className="block text-gray-700 font-medium mb-3">
                                  Want Kids
                                </label>
                                <div className="space-y-2">
                                  {["Yes", "No", "Maybe", "Undecided"].map(
                                    (option) => (
                                      <div
                                        key={option}
                                        className="flex items-center"
                                      >
                                        <input
                                          className="h-4 w-4 text-[#9b72fe] border-gray-300 focus:ring-[#9b72fe]"
                                          type="radio"
                                          id={`w${option}`}
                                          checked={
                                            formData.wantsKids === option
                                          }
                                          onChange={() =>
                                            handleChange("wantsKids", option)
                                          }
                                        />
                                        <label
                                          className="ml-2 text-gray-700 text-sm"
                                          htmlFor={`w${option}`}
                                        >
                                          {option}
                                        </label>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Relationship Preferences Section */}
                        <div className="card bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                          <div className="card-header bg-gradient-to-r from-[#9b72fe] to-[#7e5af9] p-4">
                            <h5 className="mb-0 text-white text-lg font-semibold">
                              Relationship Preferences
                            </h5>
                          </div>
                          <div className="card-body p-6 space-y-6">
                            {/* Here For */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-3">
                                Looking For
                              </label>
                              <div className="flex flex-wrap gap-4">
                                {[
                                  "Long-term",
                                  "Short-term",
                                  "Dating",
                                  "Friendship",
                                  "Hangout Buddy",
                                ].map((option) => (
                                  <div
                                    key={option}
                                    className="flex items-center"
                                  >
                                    <input
                                      className="h-4 w-4 text-[#9b72fe] border-gray-300 focus:ring-[#9b72fe]"
                                      type="radio"
                                      id={option.replace(/\s+/g, "")}
                                      checked={formData.hereFor === option}
                                      onChange={() =>
                                        handleChange("hereFor", option)
                                      }
                                    />
                                    <label
                                      className="ml-2 text-gray-700"
                                      htmlFor={option.replace(/\s+/g, "")}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Relocate */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-3">
                                Willing to Relocate
                              </label>
                              <div className="flex flex-wrap gap-4">
                                {["No", "Yes", "Undecided"].map((option) => (
                                  <div
                                    key={option}
                                    className="flex items-center"
                                  >
                                    <input
                                      className="h-4 w-4 text-[#9b72fe] border-gray-300 focus:ring-[#9b72fe]"
                                      type="radio"
                                      id={`${option}r`}
                                      checked={
                                        formData.wouldRelocate === option
                                      }
                                      onChange={() =>
                                        handleChange("wouldRelocate", option)
                                      }
                                    />
                                    <label
                                      className="ml-2 text-gray-700"
                                      htmlFor={`${option}r`}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-8">
                          <button
                            type="submit"
                            className="bg-gradient-to-r from-[#9b72fe] to-[#7e5af9] hover:from-[#8a63f7] hover:to-[#6d4cf5] text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-200 transform hover:scale-105"
                          >
                            Save Profile Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <OnlineStatusUpdater userId={localStorage.getItem("userId")} />
    </CommonLayout>
  );
};

export default EditBasics;
