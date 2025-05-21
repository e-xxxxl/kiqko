import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { MdNearMe } from 'react-icons/md';
import { Dropdown } from 'react-bootstrap';

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
import SimilarUsersSection from './SimilarUsersSection/SimilarUsersSection';
import OnlineUsers from './OnlineUsers/OnlineUsers';
import OnlineStatusUpdater from './OnlineUsers/OnlineStatusUpdater';


const UserProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShowHideFormSearch, setIsShowHideFormSearch] = useState(false);
  const [isShowBlockUser, setIsBlockUser] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        
        // Fetch user data and profile details in parallel
        const [userResponse, profileResponse] = await Promise.all([
          fetch(`https://kiqko-backend.onrender.com/api/users/profile/${userId}`),
          fetch(`https://kiqko-backend.onrender.com/api/users/profilee/${userId}`)
        ]);

        if (!userResponse.ok || !profileResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await userResponse.json();
        const profileData = await profileResponse.json();

        setUser(userData);
        setProfileDetails(profileData);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  const viewProfileImg = () => {
    // Implement image viewer modal if needed
    console.log('View profile image');
  };

  if (loading) return <div className="text-center py-8">Loading profile...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!user) return <div className="text-center py-8">User not found</div>;

  return (
    <div className="w-full md:w-3/4">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Profile Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            Member since {new Date(user.createdAt).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </p>
          <div className="flex items-center text-gray-600">
            <img src={calendar} alt="calendar" className="w-4 h-4 mr-1" />
            Last online recently
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
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            {user.username}
            {user.isVerified && (
              <span className="relative group">
                <img src={proficon} alt="verified" className="w-5 h-5" />
                <span className="absolute hidden group-hover:block bg-white p-2 rounded shadow-lg text-xs w-32 left-1/2 transform -translate-x-1/2 mt-2">
                  Verified! <img src={verifiedvac} alt="verified" className="inline ml-1" />
                </span>
              </span>
            )}
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
            {profileDetails?.city && profileDetails?.country ? (
              <>
                <img src={location} alt="location" className="w-4 h-4" />
                {profileDetails.city}, {profileDetails.country}
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
                    <Dropdown.Item 
                      onClick={() => setIsShowHideFormSearch(true)} 
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                    >
                      <img src={hideicona} alt="hide" className="w-4 h-4" />
                      Hide from search
                    </Dropdown.Item>
                    {isShowHideFormSearch && (
                      <HideFormSearch 
                        isShowHideFormSearch={isShowHideFormSearch} 
                        handleHideFormSearch={setIsShowHideFormSearch} 
                        userId={userId}
                      />
                    )}
                    <Dropdown.Item 
                      onClick={() => setIsBlockUser(true)} 
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                    >
                      <img src={blockusericon} alt="block" className="w-4 h-4" />
                      Block user
                    </Dropdown.Item>
                    {isShowBlockUser && (
                      <BlockUserPro 
                        isShowBlockUser={isShowBlockUser} 
                        handleBlockUser={setIsBlockUser} 
                        userId={userId}
                      />
                    )}
                    <Dropdown.Item className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                      <NavLink exact to={`/report/${userId}`} className="flex items-center gap-2">
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
              </>
            ) : (
              <p className="text-gray-500">No profile information available</p>
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
          <NavLink to={`/chat/${userId}`}>
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
              {profileDetails?.headline || 'Not specified'}
            </p>
          </div>

          {/* Compliment */}
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-2">Best compliment you've ever received:</h2>
            <p className="text-gray-700">
              {profileDetails?.compliment || 'Not specified'}
            </p>
          </div>

          {/* Dealbreakers */}
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-2">What are your dealbreakers?</h2>
            <div className="space-y-2">
              {profileDetails?.dealbreakers?.length > 0 ? (
                profileDetails.dealbreakers.map((dealbreaker, index) => (
                  <p key={index} className="text-gray-700">
                    <span className="font-medium">We're not a match if...</span> {dealbreaker}
                  </p>
                ))
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

          {/* Photos */}
          <div className="text-left mt-8">
            <h3 className="text-xl font-semibold mb-4">My Photos</h3>
            <div className="my-photo-block">
              <ImageGallary imgList={profileDetails?.media?.filter(m => m.mediaType === 'image') || []} />
            </div>
          </div>

          {/* Video */}
          {profileDetails?.media?.some(m => m.mediaType === 'video') && (
            <div className="text-left mt-8">
              <h3 className="text-xl font-semibold mb-4">Video</h3>
              <div className="video-block">
                {profileDetails.media
                  .filter(m => m.mediaType === 'video')
                  .map((video, index) => (
                    <div key={index} className="mb-4">
                      <video controls className="w-full rounded-lg">
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* About Me */}
          <div className="text-left mt-8">
            <h3 className="text-xl font-semibold mb-3">About Me</h3>
            <p className="text-gray-700">
              {profileDetails?.about || 'Not specified'}
            </p>
          </div>

          {/* Looking For */}
          <div className="text-left mt-8">
            <h3 className="text-xl font-semibold mb-4">I'm looking for...</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <img src={gender} alt="gender" className="w-4 h-4" />
                  <span>{profileDetails?.lookingFor || 'Not specified'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={ages} alt="age" className="w-4 h-4" />
                  <span>
                    {profileDetails?.minAgePreference && profileDetails?.maxAgePreference 
                      ? `${profileDetails.minAgePreference}-${profileDetails.maxAgePreference}`
                      : 'Not specified'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={race} alt="race" className="w-4 h-4" />
                  <span>{profileDetails?.lookingForEthnicity || 'Any'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={maritalstatus} alt="status" className="w-4 h-4" />
                  <span>{profileDetails?.lookingForMaritalStatus || 'Any'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={bodytype} alt="body" className="w-4 h-4" />
                  <span>{profileDetails?.lookingForBodyType || 'Any'}</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <img src={havekids} alt="kids" className="w-4 h-4" />
                  <span>{profileDetails?.lookingForHasKids || 'Any'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={wantkids} alt="want kids" className="w-4 h-4" />
                  <span>{profileDetails?.lookingForWantsKids || 'Any'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={herefor} alt="purpose" className="w-4 h-4" />
                  <span>{profileDetails?.lookingForRelationshipType || 'Not specified'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={relocate} alt="relocate" className="w-4 h-4" />
                  <span>{profileDetails?.openToRelocation ? 'Yes' : 'No'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Message Form */}
          <div className="text-left mt-8">
            <h3 className="text-xl font-semibold mb-4">Say Hello to {user.username}</h3>
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
    </div>
  );
};

// Implement these components according to your needs
const HideFormSearch = ({ isShowHideFormSearch, handleHideFormSearch, userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`https://kiqko-backend.onrender.com/api/${userId}/hide-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isHidden: true })
      });

      if (!response.ok) {
        throw new Error('Failed to update profile visibility');
      }

      handleHideFormSearch(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Hide Profile from Search</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <p className="mb-4">Are you sure you want to hide your profile from search results?</p>
        <div className="flex justify-end gap-2">
          <button 
            onClick={() => handleHideFormSearch(false)}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

const BlockUserPro = ({ isShowBlockUser, handleBlockUser, userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Implement your block user API call here
      // Example:
      // const response = await fetch(`/api/block-user/${userId}`, { method: 'POST' });
      // if (!response.ok) throw new Error('Failed to block user');
      
      handleBlockUser(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Block User</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <p className="mb-4">Are you sure you want to block this user? You won't see each other's profiles or messages.</p>
        <div className="flex justify-end gap-2">
          <button 
            onClick={() => handleBlockUser(false)}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Block User'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;