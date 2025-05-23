import React, { useEffect } from "react";
import CommonLayout from "../../layouts/Common";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import shape from "../../assets/images/shape2.png";
import fev1 from "../../assets/images/fev1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo7 from "../../assets/images/photo7.jpg";
import profile from "../../assets/images/profilep.jpg";
import { MdClear } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import Form from "react-bootstrap/Form";

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
import { useState, useRef } from "react";
import axios from "axios"; // or your preferred HTTP client
import OnlineStatusUpdater from "../profile/OnlineUsers/OnlineStatusUpdater";

const ManageMedia = () => {
  // State for uploaded media
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const userId = localStorage.getItem("userId");
  const fileInputRef = useRef(null);

  // Fetch user media on component mount
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
          const normalizedMedia = response.data.map(item => ({
            _id: item._id || item.id,
            url: item.url
          }));
          setMedia(normalizedMedia);
        } else if (response.data && Array.isArray(response.data.media)) {
          // If the API returns an object with media array
          const normalizedMedia = response.data.media.map(item => ({
            _id: item._id || item.id,
            url: item.url
          }));
          setMedia(normalizedMedia);
        } else if (response.data && response.data.profile && Array.isArray(response.data.profile.media)) {
          // If the API returns a nested structure
          const normalizedMedia = response.data.profile.media.map(item => ({
            _id: item._id || item.id,
            url: item.url
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

  // Handle file upload
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    
    setIsLoading(true);
    setError(null);
    
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("media", file);
    });
    
    try {
      const response = await fetch(
        `https://kiqko-backend.onrender.com/api/users/${userId}/media`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );
      
      const data = await response.json();
      console.log("Upload response:", data); // Debug log
      
      if (response.ok) {
        // Handle different response structures
        let newMedia = [];
        
        if (data.media && Array.isArray(data.media)) {
          newMedia = data.media.map(item => ({
            _id: item._id || item.id,
            url: item.url
          }));
        }
        
        // Update state with new media
        setMedia(prev => {
          // Create a map of existing IDs to avoid duplicates
          const existingIds = new Set(prev.map(item => item._id));
          // Only add items that don't already exist in the state
          const uniqueNewMedia = newMedia.filter(item => !existingIds.has(item._id));
          return [...prev, ...uniqueNewMedia];
        });
        
        setSuccess("Upload successful!");
        setTimeout(() => setSuccess(null), 3000);
      } else {
        throw new Error(data.message || "Upload failed");
      }
    } catch (err) {
      setError(err.message || "Upload failed. Please try again.");
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // Handle media deletion
  const handleDeleteMedia = async (mediaId) => {
    if (!mediaId) {
      console.error("Invalid media ID");
      return;
    }
    
    if (window.confirm("Are you sure you want to delete this media?")) {
      try {
        setIsLoading(true);
        await axios.delete(
          `https://kiqko-backend.onrender.com/api/users/${userId}/media/${mediaId}`,
          { withCredentials: true } // Add this to include cookies
        );
        
        setMedia(prev => prev.filter(item => item._id !== mediaId));
        setSuccess("Media deleted successfully!");
        setTimeout(() => setSuccess(null), 3000);
      } catch (err) {
        setError("Failed to delete media. Please try again.");
        console.error("Delete error:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Handle save changes
  const handleSaveChanges = async () => {
    try {
      setIsLoading(true);
      await axios.put(
        `https://kiqko-backend.onrender.com/api/users/${userId}/media/order`,
        {
          mediaIds: media.map(m => m._id),
        },
        { withCredentials: true } // Add this to include cookies
      );
      
      setSuccess("Changes saved successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError("Failed to save changes. Please try again.");
      console.error("Save error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <CommonLayout>
      <section className="all-top-shape">
        <img src={shape} alt="shape" className="w-full" />
      </section>

      <div className="all-container">
        <div className="pr pb-5 mb-5">
          <div className="page-wrapper-all">
            <Container>
              {/* Flex container for nav and content */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Navigation sidebar - full width on mobile, 1/4 on desktop */}
                <div className="w-full lg:w-1/4 space-y-6">
                  {/* Online Users */}
                  <OnlineUsers />

                  {/* Navigation */}
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <ul className="space-y-2">
                      <li>
                        <NavLink
                          exact
                          to="/profile"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img src={homea} alt="home" className="w-5 h-5" />{" "}
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/search-results"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img src={serr} alt="search" className="w-5 h-5" />{" "}
                          Search Results
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/live-users"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img src={liveicon} alt="live" className="w-5 h-5" />{" "}
                          Live Users
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/who-viewed-you"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={viewedMe}
                            alt="viewed"
                            className="w-5 h-5"
                          />{" "}
                          Who Viewed Me
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/who-likes-you"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img src={myLikes} alt="likes" className="w-5 h-5" />{" "}
                          Who Likes Me
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/my-likes"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={likesMe}
                            alt="my likes"
                            className="w-5 h-5"
                          />{" "}
                          My Likes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/your-matches"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img src={yourm} alt="matches" className="w-5 h-5" />{" "}
                          Your Matches
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/blocked-users"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={blockedUsers}
                            alt="blocked"
                            className="w-5 h-5"
                          />{" "}
                          Blocked Users
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/profile"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={settingView}
                            alt="profile"
                            className="w-5 h-5"
                          />{" "}
                          View Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/edit-basics"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={settingEdit}
                            alt="edit"
                            className="w-5 h-5"
                          />{" "}
                          Edit Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/manage-media"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={manageMedia}
                            alt="media"
                            className="w-5 h-5"
                          />{" "}
                          Manage Media
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/reset-password"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={settingReset}
                            alt="reset"
                            className="w-5 h-5"
                          />{" "}
                          Reset Password
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/update-location"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={settingUpload}
                            alt="location"
                            className="w-5 h-5"
                          />{" "}
                          Update Location
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/hide-profile"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={settingHide}
                            alt="hide"
                            className="w-5 h-5"
                          />{" "}
                          Hide Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/delete-account"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={settingDelete}
                            alt="delete"
                            className="w-5 h-5"
                          />{" "}
                          Delete Account
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/logout"
                          activeClassName="text-blue-600 font-medium"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                        >
                          <img
                            src={settingLogout}
                            alt="logout"
                            className="w-5 h-5"
                          />{" "}
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main content area - full width on mobile, 3/4 on desktop */}
                <div className="w-full lg:w-3/4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Media Gallery
                      </h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Here is where you can edit your photos and videos. To be
                        a verified member you need to add a minimum of five
                        photos.
                      </p>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Profile Photo Section */}
                      <div className="w-full lg:w-1/3">
                        <div className="space-y-4">
                          <h3 className="font-medium text-gray-700">
                            Your profile photo
                          </h3>

                          <div className="relative group">
                            <div className="absolute top-3 right-3 z-10">
                              <button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-all hover:scale-110">
                                <MdClear className="w-5 h-5" />
                              </button>
                            </div>
                            <img
                              src={profile}
                              alt="Profile"
                              className="w-full h-64 object-cover rounded-xl shadow-sm border border-gray-200 hover:border-purple-300 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Media Grid Section */}
                      <div className="w-full lg:w-2/3">
                        {error && (
                          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                            {error}
                          </div>
                        )}

                        {success && (
                          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                            {success}
                          </div>
                        )}

                        {isLoading && media.length === 0 ? (
                          <div className="flex justify-center items-center h-64">
                            <svg className="animate-spin h-12 w-12 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {/* Add Photo Button */}
                            <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl hover:border-purple-400 bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                              <input
                                type="file"
                                className="hidden"
                                multiple
                                onChange={handleFileChange}
                                ref={fileInputRef}
                                accept="image/*,video/*"
                                disabled={isLoading}
                              />
                              <div className="text-purple-500 mb-2">
                                {isLoading ? (
                                  <svg className="animate-spin h-8 w-8 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-sm text-gray-600">
                                {isLoading ? "Uploading..." : "Add Media"}
                              </span>
                            </label>

                            {/* Existing Media */}
                            {media.map((item) => (
                              <div key={item._id} className="relative group aspect-square">
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 rounded-xl transition-all flex items-center justify-center">
                                  <button
                                    onClick={() => handleDeleteMedia(item._id)}
                                    className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-all transform translate-y-2 group-hover:translate-y-0"
                                    disabled={isLoading}
                                  >
                                    <MdClear className="w-5 h-5" />
                                  </button>
                                </div>
                                <img
                                  src={item.url}
                                  alt={`Media ${item._id}`}
                                  className="w-full h-full object-cover rounded-xl shadow-sm border border-gray-200"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/150';
                                    console.error(`Failed to load image: ${item.url}`);
                                  }}
                                />
                              </div>
                            ))}

                            {/* Empty Slots */}
                            {[...Array(Math.max(0, 12 - media.length))].map((_, index) => (
                              <div key={`empty-${index}`} className="aspect-square bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center">
                                <div className="text-gray-400">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Save Button */}
                    <div className="mt-12 text-center">
                      <button
                        onClick={handleSaveChanges}
                        disabled={isLoading}
                        className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium py-3 px-8 rounded-full inline-flex items-center shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            Saving...
                            <svg className="animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </>
                        ) : (
                          <>
                            Save Changes
                            <MdOutlineArrowForward className="ml-2" />
                          </>
                        )}
                      </button>
                      
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

export default ManageMedia;