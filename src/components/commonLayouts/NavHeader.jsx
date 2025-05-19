import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiSearch, 
  FiHeart, 
  FiMessageSquare, 
  FiUser,
  FiMenu,
  FiX,
  FiPlus,
  FiHome,
  FiCompass,
  FiBell,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';
import { IoSparkles } from 'react-icons/io5';
import useravatar from '../../assets/images/fev1.jpg';
import logo from '../../assets/images/logo-inner.png';

const NavHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const detailsRes = await fetch(`https://kiqko-backend.onrender.com/api/users/profilee/${userId}`);
        const detailsData = await detailsRes.json();
        if (detailsRes.ok) {
          setProfileDetails(detailsData);
        } else {
          console.error('Error fetching profile:', detailsData.message);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };
    fetchProfileDetails();
  }, []);

  // Professional purple theme palette with enhanced shades
  const colors = {
    primary: '#9B72FE',       // Main purple
    primaryLight: '#B79AFE',  // Lighter purple
    primaryDark: '#7D5ACF',   // Darker purple
    primaryGradient: 'linear-gradient(135deg, #9B72FE 0%, #7D5ACF 100%)',
    white: '#FFFFFF',         // Pure white
    grayLight: '#F8F9FC',     // Light background
    grayMedium: '#E5E5E5',    // Borders
    grayDark: '#6B6B6B',      // Secondary text
    black: '#1A1A1A',         // Primary text
    shadow: '0 4px 20px rgba(155, 114, 254, 0.15)'
  };

  const navItems = [
    { id: 'home', path: "/", icon: <FiHome size={20} />, text: "Discover" },
    { id: 'search', path: "/search", icon: <FiCompass size={20} />, text: "Explore" },
    { id: 'matches', path: "/matches", icon: <FiHeart size={20} />, text: "Matches" },
    { id: 'chat', path: "/chat", icon: <FiMessageSquare size={20} />, text: "Messages" },
    { id: 'premium', path: "/premium", icon: <IoSparkles size={20} />, text: "Premium" }
  ];

  // Sample notifications data
  const notifications = [
    { id: 1, message: "New match with Jessica", time: "2 minutes ago", unread: true },
    { id: 2, message: "Michael sent you a message", time: "1 hour ago", unread: true },
    { id: 3, message: "Your profile has 5 new views", time: "3 hours ago", unread: false }
  ];

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    if (showUserDropdown) setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
    if (isNotificationDropdownOpen) setIsNotificationDropdownOpen(false);
  };

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNotificationDropdownOpen || showUserDropdown) {
        if (!event.target.closest('.dropdown-container')) {
          setIsNotificationDropdownOpen(false);
          setShowUserDropdown(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotificationDropdownOpen, showUserDropdown]);

  return (
    <>
      {/* Enhanced Desktop Navigation */}
      <header className="hidden md:block fixed w-full z-50 bg-white shadow-md" style={{ 
        borderBottom: `1px solid ${colors.grayMedium}`,
        boxShadow: colors.shadow
      }}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo with enhanced styling */}
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Dating App Logo" className="h-10" />
            </NavLink>

            {/* Upgraded Main Navigation */}
            <nav className="flex items-center space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`relative flex items-center px-5 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeTab === item.id 
                      ? 'text-white' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  style={{
                    background: activeTab === item.id ? colors.primaryGradient : 'transparent',
                    color: activeTab === item.id ? colors.white : colors.grayDark,
                    boxShadow: activeTab === item.id ? '0 4px 12px rgba(155, 114, 254, 0.25)' : 'none'
                  }}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                  
                  {/* Notification indicator for messages */}
                  {item.id === 'chat' && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">3</span>
                  )}
                  
                  {/* Notification indicator for matches */}
                  {item.id === 'matches' && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">2</span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Enhanced User Controls */}
            <div className="flex items-center space-x-6">
              {/* Notification Button with Dropdown */}
              <div className="dropdown-container relative">
                <button 
                  className="p-2 relative text-gray-600 hover:text-primary transition-colors"
                  style={{ color: isNotificationDropdownOpen ? colors.primary : colors.grayDark }}
                  onClick={toggleNotificationDropdown}
                >
                  <FiBell size={22} />
                  <span 
                    className="absolute top-0 right-0 h-4 w-4 flex items-center justify-center text-xs rounded-full bg-red-500 text-white"
                  >
                    2
                  </span>
                </button>
                
                {/* Notification Dropdown */}
                {isNotificationDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-3 z-50 border overflow-hidden"
                    style={{ 
                      borderColor: colors.grayMedium,
                      boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                    }}
                  >
                    <div className="flex justify-between items-center px-4 pb-2 border-b" style={{ borderColor: colors.grayMedium }}>
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                      <button className="text-sm text-primary hover:underline">Mark all as read</button>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 border-b hover:bg-gray-50 transition-colors ${notification.unread ? 'bg-blue-50' : ''}`}
                          style={{ borderColor: colors.grayMedium }}
                        >
                          <div className="flex items-start">
                            <div className="h-10 w-10 rounded-full bg-primary mr-3 flex items-center justify-center text-white">
                              {notification.id === 1 ? <FiHeart /> : notification.id === 2 ? <FiMessageSquare /> : <FiUser />}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800 mb-1">{notification.message}</p>
                              <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                            {notification.unread && (
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="px-4 pt-2 text-center">
                      <button 
                        className="text-primary text-sm font-medium hover:underline"
                        style={{ color: colors.primary }}
                      >
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* User Profile with Enhanced Dropdown */}
              <div className="dropdown-container relative">
                <button 
                  className="flex items-center space-x-3 focus:outline-none"
                  onClick={toggleUserDropdown}
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-sm font-medium hidden lg:block">
                      {profileDetails?.firstName || "User"}
                    </span>
                    <img 
                      src={profileDetails?.photo || useravatar} 
                      alt="User Profile" 
                      className="h-10 w-10 rounded-full object-cover border-2 shadow-sm transition-transform"
                      style={{ 
                        borderColor: colors.primary,
                        transform: showUserDropdown ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                  </div>
                </button>
                
                {/* Enhanced User Dropdown Menu */}
                {showUserDropdown && (
                  <div 
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-3 z-50 border overflow-hidden"
                    style={{ 
                      borderColor: colors.grayMedium,
                      boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                    }}
                  >
                    {/* User info section */}
                    <div className="px-4 py-3 border-b" style={{ borderColor: colors.grayMedium }}>
                      <div className="flex items-center">
                        <img 
                          src={profileDetails?.photo || useravatar}
                          alt="User" 
                          className="h-14 w-14 rounded-full mr-3 object-cover border-2"
                          style={{ borderColor: colors.primaryLight }}
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">{profileDetails?.firstName} {profileDetails?.lastName}</h4>
                          <p className="text-sm text-gray-500">{profileDetails?.email || "user@example.com"}</p>
                          <button 
                            className="text-xs text-primary mt-1 hover:underline"
                            style={{ color: colors.primary }}
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu options */}
                    <div className="py-2">
                      <NavLink 
                        to="/profile" 
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: colors.black }}
                      >
                        <FiUser className="mr-3" size={18} />
                        My Profile
                      </NavLink>
                      <NavLink 
                        to="/settings" 
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: colors.black }}
                      >
                        <FiSettings className="mr-3" size={18} />
                        Account Settings
                      </NavLink>
                      <NavLink 
                        to="/premium" 
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: colors.black }}
                      >
                        <IoSparkles className="mr-3" size={18} />
                        Upgrade to Premium
                      </NavLink>
                      <div className="border-t my-1" style={{ borderColor: colors.grayMedium }}></div>
                      <NavLink 
                        to="/help" 
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: colors.black }}
                      >
                        Help & Support
                      </NavLink>
                      <NavLink 
                        to="/logout" 
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-red-600"
                      >
                        <FiLogOut className="mr-3" size={18} />
                        Sign Out
                      </NavLink>
                    </div>
                    
                    {/* Premium badge for user status */}
                    <div className="mt-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm rounded-lg mx-4 flex items-center">
                      <IoSparkles className="mr-2" size={16} />
                      <span>Premium Member</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation (kept from original) */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t"
        style={{ 
          borderColor: colors.grayMedium,
          boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
        }}
      >
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 4).map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                activeTab === item.id 
                  ? 'text-primary' 
                  : 'text-gray-500'
              }`}
              style={{
                color: activeTab === item.id ? colors.primary : colors.grayDark
              }}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.text}</span>
            </NavLink>
          ))}
          <button 
            className="flex flex-col items-center justify-center w-full h-full text-gray-500 transition-colors hover:text-primary"
            style={{ color: colors.grayDark }}
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu size={20} />
            <span className="text-xs mt-1">More</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (kept from original) */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 overflow-hidden"
            style={{ 
              height: '70vh',
              backgroundColor: colors.white
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 
                className="text-lg font-bold"
                style={{ color: colors.black }}
              >
                Menu
              </h3>
              <button onClick={() => setMobileOpen(false)}>
                <FiX size={24} style={{ color: colors.grayDark }} />
              </button>
            </div>
            
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    activeTab === item.id 
                      ? 'bg-primary bg-opacity-10 text-primary' 
                      : 'text-gray-700'
                  }`}
                  style={{
                    color: activeTab === item.id ? colors.primary : colors.black
                  }}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.text}</span>
                </NavLink>
              ))}
              
              <div 
                className="pt-4 border-t mt-2"
                style={{ borderColor: colors.grayMedium }}
              >
                <div 
                  className="flex items-center p-3 rounded-lg transition-colors hover:bg-gray-50"
                  style={{ color: colors.black }}
                >
                  <img 
                    src={profileDetails?.photo || useravatar} 
                    alt="User" 
                    className="h-8 w-8 rounded-full mr-3 object-cover"
                  />
                  <span>My Account</span>
                </div>
                <NavLink 
                  to="/settings" 
                  className="flex items-center p-3 rounded-lg transition-colors hover:bg-gray-50"
                  style={{ color: colors.black }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mr-3"><FiSettings size={20} /></span>
                  <span>Settings</span>
                </NavLink>
                <NavLink 
                  to="/logout" 
                  className="flex items-center p-3 rounded-lg transition-colors hover:bg-gray-50"
                  style={{ color: colors.black }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mr-3"><FiLogOut size={20} /></span>
                  <span>Sign Out</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavHeader;