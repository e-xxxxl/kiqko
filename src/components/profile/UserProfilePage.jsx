import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { MdNearMe, MdVerified, MdLocationOn, MdCalendarToday } from 'react-icons/md';
import { FaHeart, FaComment, FaVideo, FaEllipsisH } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { BsGenderAmbiguous, BsPerson, BsPeople, BsHeartFill } from 'react-icons/bs';
import { RiVipCrownLine } from 'react-icons/ri';
import { GiBodyHeight, GiFamilyHouse } from 'react-icons/gi';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { BiBlock, BiHide } from 'react-icons/bi';
import { FiFlag } from 'react-icons/fi';

import shape from '../../assets/images/shape2.png';
import bgweball from '../../assets/images/bgweball.png';
import profile from '../../assets/images/profilep.jpg';
import verifiedBadge from '../../assets/images/verified-vac.png';
import vaccineIcon from '../../assets/images/vaccineIcon.png';
import { useHistory } from 'react-router-dom';
import ImageGallary from '../imageGallary/ImageGallary';
import SimilarUsersSection from './SimilarUsersSection/SimilarUsersSection';
import axios from 'axios';
import OnlineStatusUpdater from './OnlineUsers/OnlineStatusUpdater';

const UserProfilePage = () => {
    const currentUserId = localStorage.getItem('userId');
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShowHideFormSearch, setIsShowHideFormSearch] = useState(false);
  const [isShowBlockUser, setIsBlockUser] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        
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
    // Implement image viewer modal
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    try {
      // Implement send message API call
      setMessage('');
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-8 text-red-500">
      <p>Error loading profile: {error}</p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Try Again
      </button>
    </div>
  );

  if (!user) return <div className="text-center py-8">User not found</div>;



const handleLike = async () => {
  try {
    const res = await axios.post('https://kiqko-backend.onrender.com/api/users/' + userId + '/like', {
      userId: currentUserId,
    });
    alert(res.data.message);
  } catch (err) {
    console.error('Like error:', err.response?.data || err.message);
    alert(err.response?.data?.message || 'Error');
  }

  console.log('currentUserId:', currentUserId);
  console.log('targetUserId:', userId);
};


  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="relative">
          {/* Cover Photo - Replace with actual cover photo if available */}
          <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          
          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <img
                src={profileDetails?.profilephoto || profile}
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={viewProfileImg}
              />
              {user.isVerified && (
                <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
                  <MdVerified className="text-blue-500 text-xl" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 pb-6 px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-gray-800">{user.username}</h1>
            {user.isVaccinated && (
              <span className="relative group">
                <img src={vaccineIcon} alt="vaccinated" className="w-5 h-5" />
                <span className="absolute hidden group-hover:block bg-white p-2 rounded shadow-lg text-xs w-48 left-1/2 transform -translate-x-1/2 mt-2">
                  Vaccinated <BsHeartFill className="inline ml-1 text-red-500" />
                </span>
              </span>
            )}
          </div>

          <div className="flex justify-center items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <MdLocationOn className="mr-1" />
              {profileDetails?.city && profileDetails?.country ? (
                <span>{profileDetails.city}, {profileDetails.country}</span>
              ) : (
                <span>Location not set</span>
              )}
            </div>
            <div className="flex items-center">
              <MdCalendarToday className="mr-1" />
              <span>
                Member since {new Date(user.createdAt).toLocaleDateString('en-US', { 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
              <IoMdSend />
              <span>Message</span>
            </button>
              <button
      onClick={handleLike}
      className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
    >
      <FaHeart />
      <span>Like</span>
    </button>
            <NavLink to={`/chat/${userId}`} className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors">
              <FaComment />
              <span>Chat</span>
            </NavLink>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors">
              <FaVideo />
              <span>Video</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="relative inline-block">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                <FaEllipsisH />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <div className="py-1">
                  <button 
                    onClick={() => setIsShowHideFormSearch(true)} 
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <BiHide />
                    <span>Hide from search</span>
                  </button>
                  <button 
                    onClick={() => setIsBlockUser(true)} 
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <BiBlock />
                    <span>Block user</span>
                  </button>
                  <NavLink 
                    to={`/report/${userId}`}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <FiFlag />
                    <span>Report</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left max-w-2xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BsGenderAmbiguous className="text-purple-500" />
                <span>{profileDetails?.gender || 'Not specified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <BsPerson className="text-purple-500" />
                <span>{profileDetails?.age || 'Age not specified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <RiVipCrownLine className="text-purple-500" />
                <span>{profileDetails?.ethnicity || 'Ethnicity not specified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <GiBodyHeight className="text-purple-500" />
                <span>{profileDetails?.height || 'Height not specified'}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BsPeople className="text-purple-500" />
                <span>{profileDetails?.maritalStatus || 'Marital status not specified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <GiFamilyHouse className="text-purple-500" />
                <span>{profileDetails?.hasKids || 'Kids information not specified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineEmojiHappy className="text-purple-500" />
                <span>{profileDetails?.wantsKids || 'Kids preference not specified'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="px-6 pb-8 space-y-8">
          {/* Headline */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Headline</h2>
            <p className="text-gray-700">
              {profileDetails?.headline || 'No headline provided'}
            </p>
          </div>

          {/* Compliment */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Best Compliment</h2>
            <p className="text-gray-700">
              {profileDetails?.compliment || 'No compliment shared'}
            </p>
          </div>

          {/* Dealbreakers */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Dealbreakers</h2>
            <div className="space-y-3">
              {profileDetails?.dealbreakers?.length > 0 ? (
                profileDetails.dealbreakers.map((dealbreaker, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
                    <p className="text-gray-700">
                      <span className="font-medium">We're not a match if...</span> {dealbreaker}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No dealbreakers specified</p>
              )}
            </div>
          </div>

          {/* Photos */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Photos</h2>
            <ImageGallary 
              imgList={profileDetails?.media?.filter(m => m.mediaType === 'image') || []} 
            />
          </div>

          {/* About Me */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">About Me</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {profileDetails?.about || 'No information provided'}
            </p>
          </div>

          {/* Looking For */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">I'm Looking For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BsGenderAmbiguous className="text-purple-500" />
                  <span>{profileDetails?.lookingFor || 'Not specified'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdCalendarToday className="text-purple-500" />
                  <span>
                    {profileDetails?.minAgePreference && profileDetails?.maxAgePreference 
                      ? `${profileDetails.minAgePreference}-${profileDetails.maxAgePreference} years`
                      : 'Any age'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <RiVipCrownLine className="text-purple-500" />
                  <span>{profileDetails?.lookingForEthnicity || 'Any ethnicity'}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BsPeople className="text-purple-500" />
                  <span>{profileDetails?.lookingForMaritalStatus || 'Any status'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiFamilyHouse className="text-purple-500" />
                  <span>{profileDetails?.lookingForHasKids || 'Any'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineEmojiHappy className="text-purple-500" />
                  <span>{profileDetails?.lookingForWantsKids || 'Any'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="bg-white border border-gray-200 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Say Hello to {user.username}</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Type your message here..."
                className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
                onClick={handleSendMessage}
                className="absolute right-3 top-3 text-purple-600 hover:text-purple-800"
              >
                <MdNearMe className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Users */}
      <SimilarUsersSection />
      
      {/* Modals */}
      {isShowHideFormSearch && (
        <HideFormSearchModal 
          onClose={() => setIsShowHideFormSearch(false)}
          userId={userId}
        />
      )}
      
      {isShowBlockUser && (
        <BlockUserModal 
          onClose={() => setIsBlockUser(false)}
          userId={userId}
        />
      )}
    </div>
  );
};

// Modal Components
const HideFormSearchModal = ({ onClose, userId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      // API call to hide profile
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold mb-4">Hide Profile</h3>
        <p className="mb-6">Your profile won't appear in search results. You can undo this later in settings.</p>
        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            onClick={handleConfirm}
            disabled={isLoading}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

const BlockUserModal = ({ onClose, userId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      // API call to block user
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold mb-4">Block User</h3>
        <p className="mb-6">You won't see each other's profiles or be able to message each other.</p>
        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            onClick={handleConfirm}
            disabled={isLoading}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Block'}
          </button>
        </div>
      </div>
      <OnlineStatusUpdater userId={localStorage.getItem("userId")} />
    </div>
  );
};

export default UserProfilePage;