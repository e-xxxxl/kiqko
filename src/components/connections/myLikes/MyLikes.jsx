import React from "react";
import CommonLayout from "../../../layouts/Common";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import shape from "../../../assets/images/shape2.png";
import fev1 from "../../../assets/images/fev1.jpg";
import photo2 from "../../../assets/images/photo2.jpg";
import photo3 from "../../../assets/images/photo3.jpg";
import photo4 from "../../../assets/images/photo4.png";
import photo5 from "../../../assets/images/photo5.png";
import myphoto from "../../../assets/images/myphoto.jpg";
import { MdClear, MdFavorite, MdFavoriteBorder } from "react-icons/md";

// Import all icons
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
import { useEffect, useState } from "react";
import axios from "axios";
import { FaComment } from "react-icons/fa";
import OnlineUsers from "../../profile/OnlineUsers/OnlineUsers";

const MyLikes = () => {
 
const [likedUsers, setLikedUsers] = useState([]);
const [loading, setLoading] = useState(true);

// Replace this with your actual auth context or storage method
const currentUserId = localStorage.getItem("userId");

useEffect(() => {
  const fetchLikedUsers = async () => {
    try {
      const res = await axios.get(`https://kiqko-backend.onrender.com/api/users/likes/${currentUserId}`);
      setLikedUsers(res.data); // Adjust if your backend returns a different structure
    } catch (err) {
      console.error("Failed to fetch liked users:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchLikedUsers();
}, [currentUserId]);

const toggleFavorite = (id) => {
  console.log(`Toggled favorite for user ${id}`);
  // Optionally implement unliking functionality
};
  return (
    <CommonLayout>
      {/* Hero section with gradient background */}
      <section className="hidden md:block h-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 overflow-hidden relative">
        <img 
          src={shape} 
          alt="shape" 
          className="w-full h-full object-cover opacity-20 absolute inset-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-black/30"></div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <Container className="py-8">
          <Row className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Navigation - 25% width on desktop, full width on mobile */}
            <Col lg={3} className="w-full">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Online Users Card */}
                <OnlineUsers/>

                {/* Navigation Menu */}
                <nav className="p-4">
                  <ul className="space-y-2">
                    {[
                      { to: "/profile", icon: homea, text: "Home" },
                      { to: "/search-results", icon: serr, text: "Search Results" },
                      { to: "/live-users", icon: liveicon, text: "Live Users" },
                      { to: "/who-viewed-you", icon: viewedMe, text: "Who Viewed Me" },
                      { to: "/who-likes-you", icon: myLikes, text: "Who Likes Me" },
                      { to: "/my-likes", icon: likesMe, text: "My Likes" },
                      { to: "/your-matches", icon: yourm, text: "Your Matches" },
                      { to: "/blocked-users", icon: blockedUsers, text: "Blocked Users" },
                      { to: "/profile", icon: settingView, text: "View Profile" },
                      { to: "/edit-basics", icon: settingEdit, text: "Edit Profile" },
                      { to: "/manage-media", icon: manageMedia, text: "Manage Media" },
                      { to: "/reset-password", icon: settingReset, text: "Reset Password" },
                      { to: "/update-location", icon: settingUpload, text: "Update Location" },
                      { to: "/hide-profile", icon: settingHide, text: "Hide Profile" },
                      { to: "/delete-account", icon: settingDelete, text: "Delete Account" },
                      { to: "/logout", icon: settingLogout, text: "Logout" },
                    ].map((item) => (
                      <li key={item.text}>
                        <NavLink
                          to={item.to}
                          className={({ isActive }) => 
                            `flex items-center space-x-3 p-3 rounded-lg transition-all ${isActive 
                              ? 'bg-purple-100 text-purple-700 font-medium' 
                              : 'text-gray-700 hover:bg-gray-100'}`
                          }
                        >
                          <img src={item.icon} alt={item.text} className="w-5 h-5" />
                          <span>{item.text}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Col>

            {/* Main Content - 75% width on desktop, full width on mobile */}
            <Col lg={9} className="w-full">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Page Header */}
                <div className="p-6 border-b border-gray-200">
                  <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
                    My Likes
                  </h1>
                  <p className="text-center text-gray-600 mt-2">
                    People you've liked and matched with
                  </p>
                </div>

               {/* Liked Users Grid */}
<div className="p-6">
  {loading ? (
    <div className="text-center py-12 text-gray-500">Loading liked users...</div>
  ) : likedUsers.length > 0 ? (
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
  {likedUsers.map((user) => (
    <div 
      key={user._id}
      className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={user.profile?.profilephoto || "/default-profile.jpg"}
          alt={user.username}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-lg">{user.username}</h3>
      </div>
      <div className="absolute bottom-3 left-3">
        <NavLink
          to={`/chat/${user._id}`}
          className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
        >
          <FaComment />
          <span>Chat</span>
        </NavLink>
      </div>
      <button
        onClick={() => toggleFavorite(user._id)}
        className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-all"
        aria-label={user.isFavorite ? "Remove like" : "Add like"}
      >
        {user.isFavorite ? (
          <MdFavorite className="text-red-500 text-xl" />
        ) : (
          <MdFavoriteBorder className="text-gray-400 text-xl" />
        )}
      </button>
    </div>
  ))}
</div>

  ) : (
    <div className="text-center py-12">
      <div className="text-gray-400 mb-4">
        <MdFavoriteBorder className="text-5xl mx-auto" />
      </div>
      <h3 className="text-xl font-medium text-gray-600 mb-2">
        No likes yet
      </h3>
      <p className="text-gray-500">
        Start liking profiles to see them appear here
      </p>
    </div>
  )}
</div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default MyLikes;