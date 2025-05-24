import React, { useEffect, useState } from "react";
import CommonLayout from "../../layouts/Common";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
// import { NavLink } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import "./profile.css";
import shape from "../../assets/images/shape2.png";
import proficon from "../../assets/images/prof-icon.jpg";
import vaccineIcon from "../../assets/images/vaccineIcon.png";
import profile from "../../assets/images/profilep.jpg";
import profile2 from "../../assets/images/photo3.jpg";
import profile3 from "../../assets/images/photo7.jpg";
import profile4 from "../../assets/images/prs.png";
import profile5 from "../../assets/images/photo6.jpg";
import profile6 from "../../assets/images/photo5.png";
import profile7 from "../../assets/images/fev1.jpg";
import profile8 from "../../assets/images/photo4.png";
import location from "../../assets/images/location.jpg";
import icon1profile from "../../assets/images/icon1.png";
import icon2profile from "../../assets/images/icon2.png";
import icon3profile from "../../assets/images/icon3.png";
import icon4profile from "../../assets/images/vidoechatcon.png";
import Dropdown from "react-bootstrap/Dropdown";
// import videoicon from '../../assets/images/video-icon.png';
// import add1 from '../../assets/images/add1.png';
// import add2 from '../../assets/images/add2.png';
import sm1 from "../../assets/images/sm1.png";
import sm2 from "../../assets/images/sm2.png";
import sm3 from "../../assets/images/sm3.png";
import sm4 from "../../assets/images/sm4.png";
// import previcon from '../../assets/images/pre.png';
// import nexticon from '../../assets/images/next.png';
import { MdNearMe } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import { MdClear } from "react-icons/md";

import gender from "../../assets/images/gender.png";
import ages from "../../assets/images/ages.png";
import race from "../../assets/images/race.png";
import maritalstatus from "../../assets/images/maritalstatus.png";
import bodytype from "../../assets/images/bodytype.png";
import havekids from "../../assets/images/havekids.png";
import wantkids from "../../assets/images/wantkids.png";
import herefor from "../../assets/images/herefor.png";
import relocate from "../../assets/images/relocate.png";
import calendar from "../../assets/images/calendar.png";
import threedots from "../../assets/images/3dots.png";
import hideicona from "../../assets/images/hideicona.png";
import blockusericon from "../../assets/images/blockusericon.png";
import reporticon from "../../assets/images/reporticon.png";
import likevac from "../../assets/images/likevac.png";
import verifiedvac from "../../assets/images/verified-vac.png";
import adda from "../../assets/images/addnew.png";
import profilicon1 from "../../assets/images/rewind.png";
import profilicon2 from "../../assets/images/x.png";
import profilicon3 from "../../assets/images/right1.png";
import profilicon4 from "../../assets/images/next1.png";
import ImageGallary from "../imageGallary/ImageGallary";
import { useModal } from "react-hooks-use-modal";
import HideFormSearch from "./HideFormSearch";
import BlockUserPro from "./BlockUserPro";
import Accordion from "react-bootstrap/Accordion";
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
import bodytype2 from "../../assets/images/body-type.png";
import kids2 from "../../assets/images/kids.png";
import wantkids2 from "../../assets/images/want-kids.png";
import herefor2 from "../../assets/images/here-for.png";
import profilevid from "../../assets/images/profilevid.png";
import serr from "../../assets/images/serr.png";

import utils from "../utils";
import { Link } from "react-router-dom/cjs/react-router-dom";
import SimilarUsersSection from "./SimilarUsersSection/SimilarUsersSection";
import OnlineUsers from "./OnlineUsers/OnlineUsers";
import OnlineStatusUpdater from "./OnlineUsers/OnlineStatusUpdater";
import axios from "axios";
import { MdClear, MdChevronLeft, MdChevronRight } from "react-icons/md";

const Profile = () => {
  const userId = localStorage.getItem("userId");

  // Add this hook call

  const [isShowHideFormSearch, setIsShowHideFormSearch] = useState(false);
  const [isShowBlockUser, setIsBlockUser] = useState(false);
  const [user, setUser] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [media, setMedia] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = (index) => {
    setCurrentPhotoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrev = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const res = await fetch(
          `https://kiqko-backend.onrender.com/api/users/location/${userId}`
        );
        const data = await res.json();
        setUserLocation(data); // data will be { city, state, country }
      } catch (err) {
        console.error("Failed to fetch location:", err);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    const fetchProfileDetails = async () => {
      const userId = localStorage.getItem("userId");

      try {
        const detailsRes = await fetch(
          `https://kiqko-backend.onrender.com/api/users/profilee/${userId}`
        );
        const detailsData = await detailsRes.json();
        console.log(detailsData);

        if (detailsRes.ok) {
          setProfileDetails(detailsData); // this will be the user's profile
          // setDe(detailsData);
        } else {
          console.error("Error fetching profile:", detailsData.message);
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    const fetchData = async () => {
      try {
        // Fetch basic user data
        const userRes = await fetch(
          `https://kiqko-backend.onrender.com/api/users/profile/${userId}`
        );
        const userData = await userRes.json();
        console.log(userData);

        if (userRes.ok) {
          setUser(userData);

          //  // Fetch additional profile details
          //  const detailsRes = await fetch(`https://kiqko-backend.onrender.com/api/users/${userId}`);
          //  const detailsData = await detailsRes.json();

          //  if (detailsRes.ok) {
          //    setProfileDetails(detailsData);
          //  }
        } else {
          console.error(userData.message);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    fetchProfileDetails();
  }, []);

  useEffect(() => {
    const fetchUserMedia = async () => {
      if (!userId) {
        setError("User not authenticated");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://kiqko-backend.onrender.com/api/users/${userId}/media`,
          { withCredentials: true } // Add this to include cookies
        );

        console.log("API Response:", response.data); // Debug log

        // Check response structure
        if (response.data && Array.isArray(response.data)) {
          // If the API returns an array directly
          const normalizedMedia = response.data.map((item) => ({
            _id: item._id || item.id,
            url: item.url,
          }));
          setMedia(normalizedMedia);
        } else if (response.data && Array.isArray(response.data.media)) {
          // If the API returns an object with media array
          const normalizedMedia = response.data.media.map((item) => ({
            _id: item._id || item.id,
            url: item.url,
          }));
          setMedia(normalizedMedia);
        } else if (
          response.data &&
          response.data.profile &&
          Array.isArray(response.data.profile.media)
        ) {
          // If the API returns a nested structure
          const normalizedMedia = response.data.profile.media.map((item) => ({
            _id: item._id || item.id,
            url: item.url,
          }));
          setMedia(normalizedMedia);
        } else {
          // Fallback for empty state
          setMedia([]);
        }

        setError(null);
      } catch (err) {
        console.error("Failed to fetch media:", err);
        setError("Failed to load media. Please refresh the page.");
        setMedia([]); // Reset to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserMedia();
  }, [userId]);

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

  //   if (!user) return <p>Loading...</p>;

  // Gallary Image View Start
  const gallaryImgList = [
    { imgUrl: profile, caption: "BeBold 2022 BeBless" },
    { imgUrl: profile2, caption: "BeBold 2022 BeBless" },
    { imgUrl: profile3, caption: "BeBold 2022 BeBless" },
    { imgUrl: profile4, caption: "BeBold 2022 BeBless" },
    { imgUrl: profile5, caption: "BeBold 2022 BeBless" },
    { imgUrl: profile6, caption: "BeBold 2022 BeBless" },
    { imgUrl: profile7, caption: "BeBold 2022 BeBless" },
    { imgUrl: profile8, caption: "BeBold 2022 BeBless" },
    // { imgUrl: img8, caption: 'BeBold 2022 BeBless' }
  ];
  // Gallary Image View End
  // Profile Image View Start
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  const [imgObj, setImgObj] = useState({});
  const [imgIndex, setImgIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const profileImgList = [
    { imgUrl: profile, caption: "BeBold 2022 BeBless" },
    // { imgUrl: img3, caption: 'Profile Picture -02' }
  ];
  function viewProfileImg() {
    setImgObj(profileImgList[0]);
    setImgIndex(0);
    if (profileImgList.length <= 1) {
      setIsDisabled(true);
    }
    open();
  }
  const ImgViewer = () => (
    <Modal>
      <div className="popup-modal-viewer">
        <div className="user-modal-top">
          <span>
            {" "}
            <img src={imgObj.imgUrl} alt="Images..." />{" "}
          </span>
          <div className="user-modal-top-details">
            <h5>Sola</h5>
            <p>Long Beach, CA-60</p>
          </div>
          <button className="btn btn_closega" onClick={close}>
            <MdOutlineClose className="arrow-sign" />
          </button>
        </div>
        <div className="main-view-image">
          <img src={imgObj.imgUrl} alt="Images..." />
        </div>
        <div className="user-caption">{imgObj.caption}</div>
        {/* <div style={{ marginBottom: '10px' }} className='customizableDiv'>This is a customizable div
   </div>
   */}
        <div className="caption_title">
          <div className="send-message-user2">
            <p>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Send her a message"
              />
              <button className="btn">Send Message</button>
            </p>
          </div>
        </div>
        <button
          className="btn btn-next-pre left-posp"
          onClick={previous}
          disabled={isDisabled}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <button
          className="btn btn-next-pre right-posp"
          onClick={next}
          disabled={isDisabled}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </Modal>
  );
  function previous() {
    utils.prevImg(profileImgList, setImgObj, setImgIndex, imgIndex);
  }
  function next() {
    utils.nextImg(profileImgList, setImgObj, setImgIndex, imgIndex);
  }
  // Profile Image View End
  return (
    <CommonLayout>
      <ImgViewer />
      {/* Hero section with decorative shape */}
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

      <div className="container mx-auto px-4 py-5 mb-5">
        <div className="relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Panel */}
              <div className="w-full md:w-1/4 space-y-6">
                <OnlineUsers />

                {/* Navigation */}
                <div className="bg-purple rounded-lg shadow-md p-4">
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

                {/* Ads */}
                <div className="space-y-5">
                  <img src={adda} alt="ad" className="w-full rounded-lg" />
                  <img src={adda} alt="ad" className="w-full rounded-lg" />
                </div>
              </div>

              {/* Main Content */}
              <div className="w-full md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  {/* Profile Header */}
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-600">Member since May 29, 2021</p>
                    <div className="flex items-center text-gray-600">
                      <img
                        src={calendar}
                        alt="calendar"
                        className="w-4 h-4 mr-1"
                      />
                      Last online 1 Day 14 Hours
                    </div>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      <img
                        onClick={viewProfileImg}
                        src={profileDetails?.profilephoto || profile}
                        alt="profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    <div className="flex gap-4">
                      <span>
                        <img src={profilicon1} alt="icon" className="w-6 h-6" />
                      </span>
                      <span>
                        <img src={profilicon2} alt="icon" className="w-6 h-6" />
                      </span>
                      <span>
                        <img src={profilicon3} alt="icon" className="w-6 h-6" />
                      </span>
                      <span>
                        <img src={profilicon4} alt="icon" className="w-6 h-6" />
                      </span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="text-center mb-8 px-4 sm:px-6">
                    {/* Username with badges */}
                    <div className="flex flex-col items-center mb-4">
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-2">
                        {user?.username}
                        {/* Verified Badge */}
                        <span className="relative group">
                          <img
                            src={proficon}
                            alt="verified"
                            className="w-5 h-5 hover:opacity-80 transition-opacity"
                          />
                          <span className="absolute hidden group-hover:block bg-white p-2 rounded-lg shadow-md text-xs w-36 left-1/2 transform -translate-x-1/2 mt-2 border border-gray-100 z-10">
                            <div className="flex items-center justify-center gap-1">
                              Verified!
                              <img
                                src={verifiedvac}
                                alt="verified"
                                className="w-4 h-4"
                              />
                            </div>
                          </span>
                        </span>

                        {/* Vaccinated Badge */}
                        <span className="relative group">
                          <NavLink exact to="">
                            <img
                              src={vaccineIcon}
                              alt="vaccine"
                              className="w-5 h-5 hover:opacity-80 transition-opacity"
                            />
                            <span className="absolute hidden group-hover:block bg-white p-2 rounded-lg shadow-md text-xs w-48 left-1/2 transform -translate-x-1/2 mt-2 border border-gray-100 z-10">
                              <div className="flex items-center justify-center gap-1">
                                Yes, I'm Vaccinated
                                <img
                                  src={likevac}
                                  alt="like"
                                  className="w-4 h-4"
                                />
                              </div>
                            </span>
                          </NavLink>
                        </span>
                      </h1>

                      {/* Location with menu */}
                      <div className="flex items-center justify-center gap-2 mb-4">
                        {userLocation?.city && userLocation?.country ? (
                          <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                            <img
                              src={location}
                              alt="location"
                              className="w-4 h-4 opacity-70 mr-1"
                            />
                            <span className="text-sm text-gray-700">
                              {userLocation.city}, {userLocation.country}
                            </span>
                            <Accordion
                              className="inline-block ml-1"
                              defaultActiveKey={["0"]}
                              alwaysOpen
                            >
                              <Accordion.Item eventKey="0" className="border-0">
                                <Accordion.Header className="p-0 !shadow-none">
                                  <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                                    <img
                                      src={threedots}
                                      alt="menu"
                                      className="w-4 h-4 opacity-70 cursor-pointer"
                                    />
                                  </button>
                                </Accordion.Header>
                                <Accordion.Body className="absolute right-0 mt-1 bg-white shadow-md rounded-md p-2 z-20 w-56 border border-gray-100">
                                  <div className="space-y-1">
                                    <Dropdown.Item
                                      onClick={() =>
                                        setIsShowHideFormSearch(true)
                                      }
                                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm text-gray-700"
                                    >
                                      <img
                                        src={hideicona}
                                        alt="hide"
                                        className="w-4 h-4 opacity-70"
                                      />
                                      Hide from search
                                    </Dropdown.Item>
                                    {isShowHideFormSearch && (
                                      <HideFormSearch
                                        isShowHideFormSearch={
                                          isShowHideFormSearch
                                        }
                                        handleHideFormSearch={
                                          setIsShowHideFormSearch
                                        }
                                      />
                                    )}
                                    <Dropdown.Item
                                      onClick={() => setIsBlockUser(true)}
                                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm text-gray-700"
                                    >
                                      <img
                                        src={blockusericon}
                                        alt="block"
                                        className="w-4 h-4 opacity-70"
                                      />
                                      Block user
                                    </Dropdown.Item>
                                    {isShowBlockUser && (
                                      <BlockUserPro
                                        isShowBlockUser={isShowBlockUser}
                                        handleBlockUser={setIsBlockUser}
                                      />
                                    )}
                                    <Dropdown.Item className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm text-gray-700">
                                      <NavLink
                                        exact
                                        to="/report"
                                        className="flex items-center gap-2 w-full"
                                      >
                                        <img
                                          src={reporticon}
                                          alt="report"
                                          className="w-4 h-4 opacity-70"
                                        />
                                        Report
                                      </NavLink>
                                    </Dropdown.Item>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                            No location set
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Profile Information */}
                    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left">
                      {profileDetails ? (
                        <>
                          <h2 className="font-semibold text-gray-800 mb-4 text-lg">
                            {profileDetails.gender === "Woman"
                              ? "Woman seeking Man"
                              : profileDetails.gender === "Man"
                              ? "Man seeking Woman"
                              : "Not specified"}
                            {profileDetails.age && `, ${profileDetails.age}`}
                          </h2>

                          <div className="space-y-3">
                            {/* Basic Info */}
                            <div className="flex items-start gap-3">
                              <div className="flex-1">
                                <p className="text-gray-700">
                                  {[
                                    profileDetails.maritalStatus,
                                    profileDetails.ethnicity,
                                    profileDetails.height,
                                  ]
                                    .filter(Boolean)
                                    .join(" • ")}
                                </p>
                              </div>
                            </div>

                            {/* Details with icons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                              <div className="flex items-center gap-2">
                                <img
                                  src={bodytype2}
                                  alt="body type"
                                  className="w-5 h-5 opacity-70"
                                />
                                <span className="text-gray-700">
                                  {profileDetails.bodyType || "Not specified"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <img
                                  src={kids2}
                                  alt="kids"
                                  className="w-5 h-5 opacity-70"
                                />
                                <span className="text-gray-700">
                                  {profileDetails.hasKids || "Not specified"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <img
                                  src={wantkids2}
                                  alt="wants kids"
                                  className="w-5 h-5 opacity-70"
                                />
                                <span className="text-gray-700">
                                  {profileDetails.wantsKids || "Not specified"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <img
                                  src={herefor2}
                                  alt="relationship"
                                  className="w-5 h-5 opacity-70"
                                />
                                <span className="text-gray-700">
                                  {profileDetails.hereFor || "Not specified"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <Link
                            to="/edit-basics"
                            className="inline-block mt-6 px-5 py-2.5 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                          >
                            Edit Information
                          </Link>
                        </>
                      ) : (
                        <div className="text-center py-4">
                          <Link
                            to="/edit-profile"
                            className="inline-block px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                          >
                            Add Your Information
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                      <img
                        src={icon1profile}
                        alt="message"
                        className="w-5 h-5"
                      />
                      <span>Send Message</span>
                    </button>
                    <NavLink exact to="">
                      <button className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded hover:bg-pink-200">
                        <img
                          src={icon2profile}
                          alt="like"
                          className="w-5 h-5"
                        />
                        <span>Like</span>
                      </button>
                    </NavLink>
                    <NavLink exact to="">
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded hover:bg-green-200">
                        <img
                          src={icon3profile}
                          alt="chat"
                          className="w-5 h-5"
                        />
                        <span>Chat</span>
                      </button>
                    </NavLink>
                    <NavLink exact to="">
                      <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded hover:bg-purple-200">
                        <img
                          src={icon4profile}
                          alt="video"
                          className="w-5 h-5"
                        />
                        <span>Video Call</span>
                      </button>
                    </NavLink>
                  </div> */}

                  {/* Profile Sections */}
                  <div className="space-y-6">
                    {/* Headline */}
                    <div className="text-left relative group">
                      <div className="flex justify-between items-start">
                        <h2 className="text-xl font-semibold mb-2">
                          Headline:
                        </h2>
                        <NavLink
                          to="/headline"
                          className="flex items-center px-3 py-1 text-sm rounded-full bg-[#9B72FE] bg-opacity-10 text-white hover:bg-opacity-20 transition-all"
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            ></path>
                          </svg>
                          Edit Profile Info
                        </NavLink>
                      </div>
                      <p className="text-gray-700">
                        {profileDetails?.headline || "Not specified"}
                      </p>
                    </div>

                    {/* Compliment */}
                    <div className="text-left">
                      <h2 className="text-xl font-semibold mb-2">
                        Best compliment you've ever received:
                      </h2>
                      <p className="text-gray-700">
                        {profileDetails?.compliment || "Not specified"}
                      </p>
                    </div>

                    {/* Dealbreakers */}
                    <div className="text-left">
                      <h2 className="text-xl font-semibold mb-2">
                        What are your dealbreakers?
                      </h2>
                      <div className="space-y-2">
                        {profileDetails?.dealbreakers?.length > 0 ? (
                          profileDetails.dealbreakers.map(
                            (dealbreaker, index) => (
                              <p key={index} className="text-gray-700">
                                <span className="font-medium">
                                  We're not a match if...
                                </span>{" "}
                                {dealbreaker}
                              </p>
                            )
                          )
                        ) : (
                          <p className="text-gray-700">Not specified</p>
                        )}
                      </div>
                    </div>
                    {/* Ads */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <img src={adda} alt="ad" className="w-full rounded" />
                      <img src={adda} alt="ad" className="w-full rounded" />
                      <img src={adda} alt="ad" className="w-full rounded" />
                    </div>

                    {/* Photos Section */}
                    {/* Photos Section */}
                    <div className="mt-10">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          My Photos
                          <span className="ml-2 text-gray-500 dark:text-gray-400 font-medium">
                            {media.length}
                          </span>
                        </h3>
                      </div>

                      {/* Photo Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {media.map((item, index) => (
                          <div
                            key={item._id}
                            className="relative group aspect-square rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                            onClick={() => openModal(index)}
                          >
                            {/* Hover Overlay with Delete Button */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteMedia(item._id);
                                }}
                                className="bg-white/90 hover:bg-white text-red-500 rounded-full p-2 shadow-lg transition-all transform translate-y-3 group-hover:translate-y-0 hover:scale-110"
                                disabled={isLoading}
                                aria-label="Delete photo"
                              >
                                <MdClear className="w-5 h-5" />
                              </button>
                            </div>

                            {/* Image */}
                            <img
                              src={item.url}
                              alt={`User upload ${item._id}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://via.placeholder.com/300?text=Photo+Not+Available";
                              }}
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Photo Modal */}
                    {isModalOpen && (
                      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                        <button
                          onClick={closeModal}
                          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                          aria-label="Close gallery"
                        >
                          <MdClear className="w-8 h-8" />
                        </button>

                        <div className="relative w-full max-w-4xl max-h-[90vh]">
                          {/* Navigation Arrows */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              goToPrev();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all"
                            aria-label="Previous photo"
                          >
                            <MdChevronLeft className="w-8 h-8" />
                          </button>

                          {/* Current Photo */}
                          <img
                            src={media[currentPhotoIndex]?.url}
                            alt={`Gallery view ${currentPhotoIndex + 1} of ${
                              media.length
                            }`}
                            className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://via.placeholder.com/800?text=Photo+Not+Available";
                            }}
                          />

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              goToNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all"
                            aria-label="Next photo"
                          >
                            <MdChevronRight className="w-8 h-8" />
                          </button>

                          {/* Photo Counter */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {currentPhotoIndex + 1} / {media.length}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Video
                    <div className="text-left mt-8">
                      <h3 className="text-xl font-semibold mb-4">
                        Video <span className="text-gray-500">1</span>
                      </h3>
                      <div className="video-block">
                        <ul>
                          <li>
                            <img
                              src={profilevid}
                              alt="video"
                              className="w-full rounded"
                            />
                          </li>
                        </ul>
                      </div>
                    </div> */}

                    {/* About Me */}
                    <div className="text-left mt-8">
                      <h3 className="text-xl font-semibold mb-3">About Me</h3>
                      <p className="text-gray-700">
                        {profileDetails?.about || "Not specified"}
                      </p>
                    </div>

                    {/* Looking For */}
                    <div className="text-left mt-8">
                      <h3 className="text-xl font-semibold mb-4">
                        I'm looking for...
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <img
                              src={gender}
                              alt="gender"
                              className="w-4 h-4"
                            />
                            <span>Man</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <img src={ages} alt="age" className="w-4 h-4" />
                            <span>24-34</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <img src={race} alt="race" className="w-4 h-4" />
                            <span>White, Asian, Black, Middle Eastern</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src={maritalstatus}
                              alt="status"
                              className="w-4 h-4"
                            />
                            <span>Any</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src={bodytype}
                              alt="body"
                              className="w-4 h-4"
                            />
                            <span>Any</span>
                          </li>
                        </ul>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <img
                              src={havekids}
                              alt="kids"
                              className="w-4 h-4"
                            />
                            <span>No</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src={wantkids}
                              alt="want kids"
                              className="w-4 h-4"
                            />
                            <span>No</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src={herefor}
                              alt="purpose"
                              className="w-4 h-4"
                            />
                            <span>Long-term</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src={relocate}
                              alt="relocate"
                              className="w-4 h-4"
                            />
                            <span>No</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Message Form */}
                    <div className="text-left mt-8">
                      <h3 className="text-xl font-semibold mb-4">
                        Say Hello to {user?.username}
                      </h3>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Type your message here"
                          className="w-full p-3 border rounded-lg pr-10"
                        />
                        <span className="absolute right-3 top-3 text-blue-500 cursor-pointer">
                          <MdNearMe className="text-xl" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Similar Users */}

                <SimilarUsersSection />
                {/* <div className="mt-8">
                           <h5 className="text-xl font-semibold mb-4">Similar Users</h5>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                 <NavLink exact to="">
                                    <img src={sm1} alt="user" className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                       <h6 className="font-bold">Mary123</h6>
                                       <p className="text-sm text-gray-600">31, Female, Single</p>
                                       <p className="text-sm text-gray-600">Lomita, CA</p>
                                    </div>
                                 </NavLink>
                              </div>
                              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                 <NavLink exact to="">
                                    <img src={sm2} alt="user" className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                       <h6 className="font-bold">Suzy</h6>
                                       <p className="text-sm text-gray-600">Mary123</p>
                                       <p className="text-sm text-gray-600">Lomita, CA</p>
                                    </div>
                                 </NavLink>
                              </div>
                              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                 <NavLink exact to="">
                                    <img src={sm3} alt="user" className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                       <h6 className="font-bold">Mary123</h6>
                                       <p className="text-sm text-gray-600">31, Female, Single</p>
                                       <p className="text-sm text-gray-600">Lomita, CA</p>
                                    </div>
                                 </NavLink>
                              </div>
                              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                 <NavLink exact to="">
                                    <img src={sm4} alt="user" className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                       <h6 className="font-bold">Suzy</h6>
                                       <p className="text-sm text-gray-600">31, Female, Single</p>
                                       <p className="text-sm text-gray-600">Lomita, CA</p>
                                    </div>
                                 </NavLink>
                              </div>
                           </div>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <OnlineStatusUpdater userId={localStorage.getItem("userId")} />
    </CommonLayout>
  );
};
export default Profile;
