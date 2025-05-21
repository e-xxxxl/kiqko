import React from "react";
import CommonLayout from "../../layouts/Common";
import { Col, Row, Container, Button, Pagination } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder, MdLocationOn, MdPerson } from "react-icons/md";
import shape from "../../assets/images/shape2.png";
import fev1 from "../../assets/images/fev1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo6 from "../../assets/images/photo6.jpg";
import photo7 from "../../assets/images/photo7.jpg";
import adda from "../../assets/images/addnew.png";
import OnlineUsers from '../profile/OnlineUsers/OnlineUsers';

// Import all icons
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

const SearchResultsTwo = () => {
  // Sample search results data
  const searchResults = [
    { id: 1, image: fev1, name: "Jeanall", age: 38, location: "Los Angeles, CA", isFavorite: true },
    { id: 2, image: photo2, name: "Alex", age: 29, location: "New York, NY", isFavorite: false },
    { id: 3, image: photo7, name: "Taylor", age: 31, location: "Chicago, IL", isFavorite: true },
    { id: 4, image: photo3, name: "Morgan", age: 27, location: "Miami, FL", isFavorite: false },
    { id: 5, image: photo6, name: "Casey", age: 34, location: "Seattle, WA", isFavorite: false },
    { id: 6, image: fev1, name: "Jamie", age: 25, location: "Austin, TX", isFavorite: true },
  ];

  const toggleFavorite = (id) => {
    // In a real app, you would update state here
    console.log(`Toggled favorite for user ${id}`);
  };

  return (
    <CommonLayout>
      {/* Hero section with gradient background */}
      <section className="hidden md:block h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 overflow-hidden relative">
        <img 
          src={shape} 
          alt="shape" 
          className="w-full h-full object-cover opacity-20 absolute inset-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-black/30"></div>
      </section>

      <div className="bg-gray-50 min-h-screen py-8">
        <Container>
          <Row className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Navigation - 25% width on desktop, full width on mobile */}
            <Col lg={3} className="w-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
                {/* Online Users Card */}
                <OnlineUsers />

                {/* Navigation Menu */}
                <nav className="p-4">
                  <ul className="space-y-1">
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
                              ? 'bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 font-medium border-l-4 border-purple-500' 
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

                {/* Ad Banners */}
                <div className="p-4 space-y-4">
                  <div className="rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                    <img src={adda} alt="Advertisement" className="w-full h-auto rounded-lg shadow-sm" />
                  </div>
                  <div className="rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                    <img src={adda} alt="Advertisement" className="w-full h-auto rounded-lg shadow-sm" />
                  </div>
                </div>
              </div>
            </Col>

            {/* Main Content - 75% width on desktop, full width on mobile */}
            <Col lg={9} className="w-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Page Header */}
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50">
                  <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
                    Search Results
                  </h1>
                  <p className="text-center text-gray-600 mt-2">
                    {searchResults.length} matching profiles found
                  </p>
                </div>

                {/* Search Results List */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.map((user) => (
                      <div 
                        key={user.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="relative">
                          <img
                            src={user.image}
                            alt={user.name}
                            className="w-full h-48 object-cover"
                          />
                          <button
                            onClick={() => toggleFavorite(user.id)}
                            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-all"
                            aria-label={user.isFavorite ? "Remove like" : "Add like"}
                          >
                            {user.isFavorite ? (
                              <MdFavorite className="text-red-500 text-xl" />
                            ) : (
                              <MdFavoriteBorder className="text-gray-400 text-xl hover:text-red-500" />
                            )}
                          </button>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-semibold text-lg">{user.name}, {user.age}</h3>
                            <div className="flex items-center text-white/90">
                              <MdLocationOn className="mr-1" />
                              <span className="text-sm">{user.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <Button 
                            variant="outline-primary" 
                            className="w-full flex items-center justify-center space-x-2"
                            as={NavLink}
                            to="/profile"
                          >
                            <MdPerson />
                            <span>View Profile</span>
                          </Button>
                        </div>
                      </div>
                    ))}

                    
                    {searchResults.map((user) => (
                      <div 
                        key={user.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="relative">
                          <img
                            src={user.image}
                            alt={user.name}
                            className="w-full h-48 object-cover"
                          />
                          <button
                            onClick={() => toggleFavorite(user.id)}
                            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-all"
                            aria-label={user.isFavorite ? "Remove like" : "Add like"}
                          >
                            {user.isFavorite ? (
                              <MdFavorite className="text-red-500 text-xl" />
                            ) : (
                              <MdFavoriteBorder className="text-gray-400 text-xl hover:text-red-500" />
                            )}
                          </button>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-semibold text-lg">{user.name}, {user.age}</h3>
                            <div className="flex items-center text-white/90">
                              <MdLocationOn className="mr-1" />
                              <span className="text-sm">{user.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <Button 
                            variant="outline-primary" 
                            className="w-full flex items-center justify-center space-x-2"
                            as={NavLink}
                            to="/profile"
                          >
                            <MdPerson />
                            <span>View Profile</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ad Banners Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                    {[1, 2, 3].map((ad) => (
                      <div 
                        key={ad} 
                        className="rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
                      >
                        <img 
                          src={adda} 
                          alt={`Advertisement ${ad}`} 
                          className="w-full h-full object-cover rounded-lg shadow-sm" 
                        />
                      </div>
                    ))}
                  </div>

                  {searchResults.length === 0 && (
                    <div className="text-center py-12">
                      <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-gray-600 mb-2">
                        No results found
                      </h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Try adjusting your search filters or broaden your criteria
                      </p>
                      <Button variant="primary" className="mt-4 px-6 py-2 rounded-full">
                        Refine Search
                      </Button>
                    </div>
                  )}

                  {/* Pagination */}
                  <div className="mt-8 flex justify-center">
                    <Pagination className="flex-wrap justify-center">
                      <Pagination.Prev className="mx-1 px-4 py-2 border rounded-l-lg hover:bg-gray-100 transition-colors" />
                      {[1, 2, 3, 4, 5, 6].map((page) => (
                        <Pagination.Item 
                          key={page} 
                          active={page === 1}
                          className={`mx-1 px-4 py-2 border ${page === 1 ? 'bg-purple-100 text-purple-700 border-purple-300' : 'hover:bg-gray-100'} transition-colors`}
                        >
                          {page}
                        </Pagination.Item>
                      ))}
                      <Pagination.Next className="mx-1 px-4 py-2 border rounded-r-lg hover:bg-gray-100 transition-colors" />
                    </Pagination>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default SearchResultsTwo;