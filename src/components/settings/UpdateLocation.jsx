import React, { useEffect, useState } from "react";
import CommonLayout from "../../layouts/Common";
import shape from "../../assets/images/shape2.png";
import searchLocUp from "../../assets/images/searchLocUp.png";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { Form } from "react-bootstrap";
import { Button, Dropdown } from "react-bootstrap";
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

const UpdateLocation = () => {
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    country: "",
  });
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get userId from localStorage when component mounts
    const id = localStorage.getItem("userId");
    if (!id) {
      console.error("User ID not found");
      // You might want to redirect to login here
      return;
    }
    setUserId(id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("No user ID available");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://kiqko-backend.onrender.com/api/users/update-location/${userId}`,
        {
          method: "POST", // or 'POST' depending on your API
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            city: formData.city,
            state: formData.state,
            country: formData.country,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Location updated successfully:", result);
      // Add success notification here
    } catch (error) {
      console.error("Error updating location:", error);
      // Add error notification here
    } finally {
      setIsLoading(false);
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

      <div className="all-container">
        <div className="pr pb-5 mb-5">
          <div className="page-wrapper-all">
            <Container fluid className="px-0 sm:px-2">
              <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-0">
                {/* Navigation Sidebar - Sticky */}
                <div className="w-full lg:w-1/4 flex-shrink-0">
                  <div className="sticky top-20 space-y-6">
                    {/* Online Users Widget */}
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
                </div>

                {/* Main Content Area */}
                <div className="flex-1 min-w-0">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header with Gradient Background */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                      <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                          Update Your Location
                        </h1>
                        <p className="opacity-90">
                          Keep your location updated to find matches near you
                          and improve your experience
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col xl:flex-row gap-8 max-w-5xl mx-auto">
                        {/* Map Section */}
                        <div className="xl:w-1/2">
                          <div className="relative h-64 sm:h-80 xl:h-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                            <img
                              className="w-full h-full object-cover"
                              src={searchLocUp}
                              alt="Location Map"
                            />
                            <div className="absolute inset-0 bg-blue-500/10"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-xs text-sm font-medium flex items-center gap-1.5">
                              <span className="text-blue-600">📍</span>
                              <span className="text-gray-800">
                                Your Current Location
                              </span>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-xs">
                              <button className="text-sm font-medium text-blue-600 flex items-center gap-1.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                Change Location
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Form Section */}
                        <div className="xl:w-1/2">
                          <Form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                City / Town
                              </label>
                              <div className="relative">
                                <Form.Control
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pl-10"
                                  type="text"
                                  name="city"
                                  placeholder="e.g. New York"
                                  value={formData.city}
                                  onChange={handleChange}
                                  required
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <svg
                                    className="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                State / Province
                              </label>
                              <Form.Control
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                type="text"
                                name="state"
                                placeholder="e.g. California"
                                value={formData.state}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Country
                              </label>
                              <div className="relative">
                                <Form.Select
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none pl-10"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleChange}
                                  required
                                >
                                  <option>Country</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="China">China</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Macau">Macau</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Philippines">
                                    Philippines
                                  </option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="South Korea">
                                    South Korea
                                  </option>
                                  <option value="Taiwan">Taiwan</option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Vietnam">Vietnam</option>
                                  <option value="-- Other Countries --">
                                    -- Other Countries --
                                  </option>
                                  <option value="United Kingdom">
                                    United Kingdom
                                  </option>
                                  <option value="United States">
                                    United States
                                  </option>
                                  <option value="Afghanistan">
                                    Afghanistan
                                  </option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Antigua and Barbuda">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Bosnia & Herzegovina">
                                    Bosnia & Herzegovina
                                  </option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="Brunei">Brunei</option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina Faso">
                                    Burkina Faso
                                  </option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cabo Verde">Cabo Verde</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Central African Republic (CAR)">
                                    Central African Republic (CAR)
                                  </option>
                                  <option value="Chad">Chad</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Democratic Republic of Congo">
                                    Democratic Republic of Congo
                                  </option>
                                  <option value="Costa Rica">Costa Rica</option>
                                  <option value="Cote d'Ivoire">
                                    Cote d'Ivoire
                                  </option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czech Republic">
                                    Czech Republic
                                  </option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">
                                    Dominican Republic
                                  </option>
                                  <option value="East Timor">East Timor</option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">
                                    El Salvador
                                  </option>
                                  <option value="Equatorial Guinea">
                                    Equatorial Guinea
                                  </option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Eswatini (formerly Swaziland)">
                                    Eswatini (formerly Swaziland)
                                  </option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands">
                                    Falkland Islands
                                  </option>
                                  <option value="Faroe Islands">
                                    Faroe Islands
                                  </option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="French Guiana">
                                    French Guiana
                                  </option>
                                  <option value="Frech Polynesia">
                                    Frech Polynesia
                                  </option>
                                  <option value="French Southern & Antarctic Lands">
                                    French Southern & Antarctic Lands
                                  </option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Gambia">Gambia</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Gibraltar">Gibraltar</option>
                                  <option value="Glorioso Islands">
                                    Glorioso Islands
                                  </option>
                                  <option value="Greece">Greece</option>
                                  <option value="Greenland">Greenland</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guadeloupe">Guadeloupe</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guernsey Island">
                                    Guernsey Island
                                  </option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guinea-Bissau">
                                    Guinea-Bissau
                                  </option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Heard Island & McDonald Islands">
                                    Heard Island & McDonald Islands
                                  </option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Iran">Iran</option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Isle of Man">
                                    Isle of Man
                                  </option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Jan Mayen">Jan Mayen</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jersey">Jersey</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Juan de Nova Island">
                                    Juan de Nova Island
                                  </option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kiribati">Kiribati</option>
                                  <option value="Kosovo">Kosovo</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Laos">Laos</option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libya">Libya</option>
                                  <option value="Liechtenstein">
                                    Liechtenstein
                                  </option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macau">Macau</option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Marshall Islands">
                                    Marshall Islands
                                  </option>
                                  <option value="Martinique">Martinique</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mayotte">Mayotte</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Micronesia">Micronesia</option>
                                  <option value="Moldova">Moldova</option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montenegro">Montenegro</option>
                                  <option value="Montserrat">Montserrat</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar</option>
                                  <option value="Namibia">Namibia</option>
                                  <option value="Nauru">Nauru</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherlands">
                                    Netherlands
                                  </option>
                                  <option value="Netherlands Antilles">
                                    Netherlands Antilles
                                  </option>
                                  <option value="New Caledonia">
                                    New Caledonia
                                  </option>
                                  <option value="New Zealand">
                                    New Zealand
                                  </option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="Niue">Niue</option>
                                  <option value="No Man's Land">
                                    No Man's Land
                                  </option>
                                  <option value="Norfolk Island">
                                    Norfolk Island
                                  </option>
                                  <option value="North Macedonia (formerly Macedonia)">
                                    North Macedonia (formerly Macedonia)
                                  </option>
                                  <option value="Norway">Norway</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau">Palau</option>
                                  <option value="Panama">Panama</option>
                                  <option value="Palestine">Palestine</option>
                                  <option value="Papua New Guinea">
                                    Papua New Guinea
                                  </option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Pitcain Islands">
                                    Pitcain Islands
                                  </option>
                                  <option value="Philippines">
                                    Philippines
                                  </option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Reunion">Reunion</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russia">Russia</option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="Saint Lucia">
                                    Saint Lucia
                                  </option>
                                  <option value="Saint Pierre & Miquelon">
                                    Saint Pierre & Miquelon
                                  </option>
                                  <option value="Saint Vincent and the Grenadines">
                                    Saint Vincent and the Grenadines
                                  </option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="San Marino">San Marino</option>
                                  <option value="Sao Tome and Principe">
                                    Sao Tome and Principe
                                  </option>
                                  <option value="Saudi Arabia">
                                    Saudi Arabia
                                  </option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra Leone">
                                    Sierra Leone
                                  </option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Sloveni">Sloveni</option>
                                  <option value="Solomon Islands">
                                    Solomon Islands
                                  </option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South Africa">
                                    South Africa
                                  </option>
                                  <option value="South Georgia & the South Sandwich Islands">
                                    South Georgia & the South Sandwich Islands
                                  </option>
                                  <option value="South Korea">
                                    South Korea
                                  </option>
                                  <option value="South Sudan">
                                    South Sudan
                                  </option>
                                  <option value="Spain">Spain</option>
                                  <option value="Spratly Islands">
                                    Spratly Islands
                                  </option>
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Svalbard">Svalbard</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Switzerland">
                                    Switzerland
                                  </option>
                                  <option value="Syria">Syria</option>
                                  <option value="Taiwan">Taiwan</option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania">Tanzania</option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Timor-Leste">
                                    Timor-Leste
                                  </option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tokelau">Tokelau</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad and Tobago">
                                    Trinidad and Tobago
                                  </option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Turkmenistan">
                                    Turkmenistan
                                  </option>
                                  <option value="Turks & Caicos Islands">
                                    Turks & Caicos Islands
                                  </option>
                                  <option value="Tuvalu">Tuvalu</option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="United Arab Emirates">
                                    United Arab Emirates
                                  </option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Vatican City">
                                    Vatican City
                                  </option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Vietnam">Vietnam</option>
                                  <option value="Walls and Futuna">
                                    Walls and Futuna
                                  </option>
                                  <option value="West Bank">West Bank</option>
                                  <option value="Western Sahara">
                                    Western Sahara
                                  </option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                </Form.Select>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <svg
                                    className="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div className="pt-3">
                              <Button
                                className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                                type="submit"
                                disabled={isLoading}
                              >
                                {isLoading ? (
                                  <>
                                    <svg
                                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                                    Updating Location...
                                  </>
                                ) : (
                                  <>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5 mr-2"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                    </svg>
                                    Update Location
                                  </>
                                )}
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default UpdateLocation;
