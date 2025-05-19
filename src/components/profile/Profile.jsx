import React, { useEffect, useState } from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
// import { NavLink } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './profile.css';
import shape from '../../assets/images/shape2.png';
import proficon from '../../assets/images/prof-icon.jpg';
import vaccineIcon from '../../assets/images/vaccineIcon.png';
import profile from '../../assets/images/profilep.jpg';
import profile2 from '../../assets/images/photo3.jpg';
import profile3 from '../../assets/images/photo7.jpg';
import profile4 from '../../assets/images/prs.png';
import profile5 from '../../assets/images/photo6.jpg';
import profile6 from '../../assets/images/photo5.png';
import profile7 from '../../assets/images/fev1.jpg';
import profile8 from '../../assets/images/photo4.png';
import location from '../../assets/images/location.jpg';
import icon1profile from '../../assets/images/icon1.png';
import icon2profile from '../../assets/images/icon2.png';
import icon3profile from '../../assets/images/icon3.png';
import icon4profile from '../../assets/images/vidoechatcon.png';
import Dropdown from 'react-bootstrap/Dropdown';
// import videoicon from '../../assets/images/video-icon.png';
// import add1 from '../../assets/images/add1.png';
// import add2 from '../../assets/images/add2.png';
import sm1 from '../../assets/images/sm1.png';
import sm2 from '../../assets/images/sm2.png';
import sm3 from '../../assets/images/sm3.png';
import sm4 from '../../assets/images/sm4.png';
// import previcon from '../../assets/images/pre.png';
// import nexticon from '../../assets/images/next.png';
import { MdNearMe } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdClear } from "react-icons/md";

import gender from '../../assets/images/gender.png';
import ages from '../../assets/images/ages.png';
import race from '../../assets/images/race.png';
import maritalstatus from '../../assets/images/maritalstatus.png';
import bodytype from '../../assets/images/bodytype.png';
import havekids from '../../assets/images/havekids.png';
import wantkids from '../../assets/images/wantkids.png';
import herefor from '../../assets/images/herefor.png';
import relocate from '../../assets/images/relocate.png';
import calendar from '../../assets/images/calendar.png';
import threedots from '../../assets/images/3dots.png';
import hideicona from '../../assets/images/hideicona.png';
import blockusericon from '../../assets/images/blockusericon.png';
import reporticon from '../../assets/images/reporticon.png';
import likevac from '../../assets/images/likevac.png';
import verifiedvac from '../../assets/images/verified-vac.png';
import adda from '../../assets/images/addnew.png';
import profilicon1 from '../../assets/images/rewind.png';
import profilicon2 from '../../assets/images/x.png';
import profilicon3 from '../../assets/images/right1.png';
import profilicon4 from '../../assets/images/next1.png';
import ImageGallary from '../imageGallary/ImageGallary';
import { useModal } from 'react-hooks-use-modal';
import HideFormSearch from './HideFormSearch';
import BlockUserPro from './BlockUserPro';
import Accordion from 'react-bootstrap/Accordion'
import settingView from '../../assets/images/myProfile.png';
import settingEdit from '../../assets/images/editPofile.png';
import settingUpload from '../../assets/images/updateLocation.png';
import settingReset from '../../assets/images/resetPassword.png';
import settingHide from '../../assets/images/hideProfile.png';
import settingDelete from '../../assets/images/deleteAccount.png';
import settingLogout from '../../assets/images/logout.png';
import manageMedia from '../../assets/images/manageMedia.png';
import viewedMe from '../../assets/images/viewedMe.png';
import myLikes from '../../assets/images/myLikes.png';
import likesMe from '../../assets/images/likesMe.png';
import homea from '../../assets/images/homea.png';
import liveicon from '../../assets/images/liveicon.png';
import yourm from '../../assets/images/yourm.png';
import blockedUsers from '../../assets/images/blockedUsers.png';
import bodytype2 from '../../assets/images/body-type.png';
import kids2 from '../../assets/images/kids.png';
import wantkids2 from '../../assets/images/want-kids.png';
import herefor2 from '../../assets/images/here-for.png';
import profilevid from '../../assets/images/profilevid.png';
import serr from '../../assets/images/serr.png';





import utils from '../utils';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Profile = () => {
   const [isShowHideFormSearch, setIsShowHideFormSearch] = useState(false);
   const [isShowBlockUser, setIsBlockUser] = useState(false);
   const [user, setUser] = useState(null);
   const [profileDetails, setProfileDetails] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [userLocation, setUserLocation] = useState(null);



  
   useEffect(() => {
      const fetchLocation = async () => {
         try {
            const userId = localStorage.getItem('userId');
            const res = await fetch(`https://kiqko-backend.onrender.com/api/users/location/${userId}`);
            const data = await res.json();
            setUserLocation(data); // data will be { city, state, country }
         } catch (err) {
            console.error('Failed to fetch location:', err);
         }
      };

      fetchLocation();
   }, []);


   useEffect(() => {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      const fetchProfileDetails = async () => {
         const userId = localStorage.getItem('userId');

         try {
            const detailsRes = await fetch(`https://kiqko-backend.onrender.com/api/users/profilee/${userId}`);
            const detailsData = await detailsRes.json();
            console.log(detailsData);


            if (detailsRes.ok) {
               setProfileDetails(detailsData); // this will be the user's profile
               // setDe(detailsData);
            } else {
               console.error('Error fetching profile:', detailsData.message);
            }
         } catch (err) {
            console.error('Error:', err);
         }
      };


      const fetchData = async () => {
         try {
            // Fetch basic user data
            const userRes = await fetch(`https://kiqko-backend.onrender.com/api/users/profile/${userId}`);
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
            console.error('Error fetching data:', err);
         } finally {
            setIsLoading(false);
         }
      };

      fetchData(); fetchProfileDetails();
   }, []);


   //   if (!user) return <p>Loading...</p>;


   // Gallary Image View Start
   const gallaryImgList = [
      { imgUrl: profile, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile2, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile3, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile4, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile5, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile6, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile7, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile8, caption: 'BeBold 2022 BeBless' },
      // { imgUrl: img8, caption: 'BeBold 2022 BeBless' }
   ]
   // Gallary Image View End
   // Profile Image View Start
   const [Modal, open, close] = useModal('root', {
      preventScroll: true,
      closeOnOverlayClick: false
   });
   const [imgObj, setImgObj] = useState({});
   const [imgIndex, setImgIndex] = useState(0);
   const [isDisabled, setIsDisabled] = useState(false);
   const profileImgList = [
      { imgUrl: profile, caption: 'BeBold 2022 BeBless' },
      // { imgUrl: img3, caption: 'Profile Picture -02' }
   ]
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
               <span> <img src={imgObj.imgUrl} alt="Images..." />  </span>
               <div className="user-modal-top-details">
                  <h5>Sola</h5>
                  <p>Long Beach, CA-60</p>
               </div>
               <button className='btn btn_closega' onClick={close}>
                  <MdOutlineClose className="arrow-sign" />
               </button>
            </div>
            <div className="main-view-image"><img src={imgObj.imgUrl} alt="Images..." /></div>
            <div className="user-caption">{imgObj.caption}</div>
            {/* <div style={{ marginBottom: '10px' }} className='customizableDiv'>This is a customizable div
   </div>
   */}
            <div className="caption_title">
               <div className="send-message-user2">
                  <p>
                     <Form.Control className="form-control" type="text" placeholder="Send her a message" />
                     <button className="btn">Send Message</button>
                  </p>
               </div>
            </div>
            <button className='btn btn-next-pre left-posp' onClick={previous} disabled={isDisabled}>
               <MdOutlineArrowBackIosNew />
            </button>
            <button className='btn btn-next-pre right-posp' onClick={next} disabled={isDisabled}>
               <MdOutlineArrowForwardIos />
            </button>
         </div>
      </Modal>
   )
   function previous() {
      utils.prevImg(profileImgList, setImgObj, setImgIndex, imgIndex)
   }
   function next() {
      utils.nextImg(profileImgList, setImgObj, setImgIndex, imgIndex)
   }
   // Profile Image View End
   return (
   <CommonLayout>
  <ImgViewer />
  <section className="relative w-full overflow-hidden">
    <img src={shape} alt="shape" className="w-full" />
  </section>
  
  <div className="container mx-auto px-4 py-5 mb-5">
    <div className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Panel */}
          <div className="w-full md:w-1/4 space-y-6">
            {/* Online Users */}
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h5 className="font-bold border-b pb-2 mb-3">Users Online Now</h5>
              <div className="flex justify-between">
                <div className="w-1/2 pr-2 border-r">
                  <h6 className="text-sm text-gray-600">Women</h6>
                  <h4 className="text-xl font-bold">1234</h4>
                </div>
                <div className="w-1/2 pl-2">
                  <h6 className="text-sm text-gray-600">Men</h6>
                  <h4 className="text-xl font-bold">1565</h4>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <NavLink exact to="/profile" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={homea} alt="home" className="w-5 h-5" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/search-results" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={serr} alt="search" className="w-5 h-5" /> Search Results
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/live-users" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={liveicon} alt="live" className="w-5 h-5" /> Live Users
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/who-viewed-you" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={viewedMe} alt="viewed" className="w-5 h-5" /> Who Viewed Me
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/who-likes-you" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={myLikes} alt="likes" className="w-5 h-5" /> Who Likes Me
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/my-likes" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={likesMe} alt="my likes" className="w-5 h-5" /> My Likes
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/your-matches" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={yourm} alt="matches" className="w-5 h-5" /> Your Matches
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/blocked-users" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={blockedUsers} alt="blocked" className="w-5 h-5" /> Blocked Users
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/profile" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={settingView} alt="profile" className="w-5 h-5" /> View Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/edit-basics" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={settingEdit} alt="edit" className="w-5 h-5" /> Edit Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/manage-media" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={manageMedia} alt="media" className="w-5 h-5" /> Manage Media
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/reset-password" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={settingReset} alt="reset" className="w-5 h-5" /> Reset Password
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/update-location" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={settingUpload} alt="location" className="w-5 h-5" /> Update Location
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/hide-profile" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={settingHide} alt="hide" className="w-5 h-5" /> Hide Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/delete-account" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={settingDelete} alt="delete" className="w-5 h-5" /> Delete Account
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/logout" activeClassName="text-blue-600 font-medium" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={settingLogout} alt="logout" className="w-5 h-5" /> Logout
                  </NavLink>
                </li>
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
                  <img src={calendar} alt="calendar" className="w-4 h-4 mr-1" />
                  Last online 1 Day 14 Hours
                </div>
              </div>

              {/* Profile Picture */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <img
                    onClick={viewProfileImg}
                    src={profileDetails?.photo || profile}
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
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                  {user?.username}
                  <span className="relative group">
                    <img src={proficon} alt="verified" className="w-5 h-5" />
                    <span className="absolute hidden group-hover:block bg-white p-2 rounded shadow-lg text-xs w-32 left-1/2 transform -translate-x-1/2 mt-2">
                      Verified! <img src={verifiedvac} alt="verified" className="inline ml-1" />
                    </span>
                  </span>
                  <span className="relative group">
                    <NavLink exact to="">
                      <img src={vaccineIcon} alt="vaccine" className="w-5 h-5" />
                      <span className="absolute hidden group-hover:block bg-white p-2 rounded shadow-lg text-xs w-48 left-1/2 transform -translate-x-1/2 mt-2">
                        Yes, I'm Vaccinated <img src={likevac} alt="like" className="inline ml-1" />
                      </span>
                    </NavLink>
                  </span>
                </h1>

                <p className="text-gray-600 mb-4 flex items-center justify-center gap-1">
                  {userLocation?.city && userLocation?.country ? (
                    <>
                      <img src={location} alt="location" className="w-4 h-4" />
                      {userLocation.city}, {userLocation.country}
                    </>
                  ) : (
                    <span>No location set</span>
                  )}
                  
                  <Accordion className="inline-block" defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="p-0">
                        <img src={threedots} alt="menu" className="w-4 h-4 cursor-pointer" />
                      </Accordion.Header>
                      <Accordion.Body className="absolute bg-white shadow-lg rounded-md p-2 z-10">
                        <div className="space-y-2">
                          <Dropdown.Item onClick={() => setIsShowHideFormSearch(true)} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                            <img src={hideicona} alt="hide" className="w-4 h-4" />
                            Hide from search
                          </Dropdown.Item>
                          {isShowHideFormSearch && <HideFormSearch isShowHideFormSearch={isShowHideFormSearch} handleHideFormSearch={setIsShowHideFormSearch} />}
                          <Dropdown.Item onClick={() => setIsBlockUser(true)} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                            <img src={blockusericon} alt="block" className="w-4 h-4" />
                            Block user
                          </Dropdown.Item>
                          {isShowBlockUser && <BlockUserPro isShowBlockUser={isShowBlockUser} handleBlockUser={setIsBlockUser} />}
                          <Dropdown.Item className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                            <NavLink exact to="/report" className="flex items-center gap-2">
                              <img src={reporticon} alt="report" className="w-4 h-4" />
                              Report
                            </NavLink>
                          </Dropdown.Item>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </p>

                <div className="text-left max-w-2xl mx-auto">
                  {profileDetails ? (
                    <>
                      <h2 className="font-semibold mb-2">
                        {profileDetails.gender === 'Woman' ? 'Woman seeking Man' :
                         profileDetails.gender === 'Man' ? 'Man seeking Woman' :
                         'Not specified'}
                        {profileDetails.age && ` age(${profileDetails.age}) +`}
                      </h2>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2">
                          <span className="inline-flex items-center">
                            {profileDetails.age && `${profileDetails.age}, `}
                            {profileDetails.maritalStatus && `${profileDetails.maritalStatus}, `}
                            {profileDetails.ethnicity && `${profileDetails.ethnicity}, `}
                            {profileDetails.height && profileDetails.height}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <img src={bodytype2} alt="body type" className="w-4 h-4" />
                          {profileDetails.bodyType || 'Not specified'}
                        </p>
                        <p className="flex items-center gap-2">
                          <img src={kids2} alt="kids" className="w-4 h-4" />
                          {profileDetails.hasKids || 'Not specified'}
                        </p>
                        <p className="flex items-center gap-2">
                          <img src={wantkids2} alt="wants kids" className="w-4 h-4" />
                          {profileDetails.wantsKids || 'Not specified'}
                        </p>
                        <p className="flex items-center gap-2">
                          <img src={herefor2} alt="relationship" className="w-4 h-4" />
                          {profileDetails.hereFor || 'Not specified'}
                        </p>
                      </div>
                      <Link to="/edit-basics" className="inline-block mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                        Edit Information
                      </Link>
                    </>
                  ) : (
                    <Link to="/edit-profile" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Add Your Information
                    </Link>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                  <img src={icon1profile} alt="message" className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                <NavLink exact to="">
                  <button className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded hover:bg-pink-200">
                    <img src={icon2profile} alt="like" className="w-5 h-5" />
                    <span>Like</span>
                  </button>
                </NavLink>
                <NavLink exact to="">
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded hover:bg-green-200">
                    <img src={icon3profile} alt="chat" className="w-5 h-5" />
                    <span>Chat</span>
                  </button>
                </NavLink>
                <NavLink exact to="">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded hover:bg-purple-200">
                    <img src={icon4profile} alt="video" className="w-5 h-5" />
                    <span>Video Call</span>
                  </button>
                </NavLink>
              </div>

              {/* Profile Sections */}
              <div className="space-y-6">
                {/* Headline */}
                <div className="text-left">
                  <h2 className="text-xl font-semibold mb-2">Headline:</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  </p>
                </div>

                {/* Compliment */}
                <div className="text-left">
                  <h2 className="text-xl font-semibold mb-2">Best compliment you've ever received:</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  </p>
                </div>

                {/* Dealbreakers */}
                <div className="text-left">
                  <h2 className="text-xl font-semibold mb-2">What are your dealbreakers?</h2>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">We're not a match if...</span> Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">We're not a match if...</span> Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">We're not a match if...</span> Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy
                    </p>
                  </div>
                </div>

                {/* Ads */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <img src={adda} alt="ad" className="w-full rounded" />
                  <img src={adda} alt="ad" className="w-full rounded" />
                  <img src={adda} alt="ad" className="w-full rounded" />
                </div>

                {/* Photos */}
                <div className="text-left mt-8">
                  <h3 className="text-xl font-semibold mb-4">My Photos <span className="text-gray-500">9</span></h3>
                  <div className="my-photo-block">
                    <ImageGallary imgList={gallaryImgList} />
                  </div>
                </div>

                {/* Video */}
                <div className="text-left mt-8">
                  <h3 className="text-xl font-semibold mb-4">Video <span className="text-gray-500">1</span></h3>
                  <div className="video-block">
                    <ul>
                      <li>
                        <img src={profilevid} alt="video" className="w-full rounded" />
                      </li>
                    </ul>
                  </div>
                </div>

                {/* About Me */}
                <div className="text-left mt-8">
                  <h3 className="text-xl font-semibold mb-3">About Me</h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  </p>
                </div>

                {/* Looking For */}
                <div className="text-left mt-8">
                  <h3 className="text-xl font-semibold mb-4">I'm looking for...</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <img src={gender} alt="gender" className="w-4 h-4" />
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
                        <img src={maritalstatus} alt="status" className="w-4 h-4" />
                        <span>Any</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <img src={bodytype} alt="body" className="w-4 h-4" />
                        <span>Any</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <img src={havekids} alt="kids" className="w-4 h-4" />
                        <span>No</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <img src={wantkids} alt="want kids" className="w-4 h-4" />
                        <span>No</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <img src={herefor} alt="purpose" className="w-4 h-4" />
                        <span>Long-term</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <img src={relocate} alt="relocate" className="w-4 h-4" />
                        <span>No</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Message Form */}
                <div className="text-left mt-8">
                  <h3 className="text-xl font-semibold mb-4">Say Hello to {user?.username}</h3>
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
            <div className="mt-8">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</CommonLayout>
   );
};
export default Profile; 