import React, { useState } from 'react';
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
  FiBell
} from 'react-icons/fi';
import { IoSparkles } from 'react-icons/io5';
import useravatar from '../../assets/images/fev1.jpg';
import logo from '../../assets/images/logo-inner.png';

const NavHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Romantic color palette
  const colors = {
    primary: '#FF4D97', // Vibrant pink
    secondary: '#FF85A2', // Soft pink
    dark: '#3A0E4A', // Deep purple
    light: '#FFE5EC', // Pale pink
    accent: '#FF9F1C' // Golden accent
  };

  const navItems = [
    { id: 'home', path: "/", icon: <FiHome size={22} />, text: "Discover" },
    { id: 'search', path: "/search", icon: <FiCompass size={22} />, text: "Explore" },
    { id: 'matches', path: "/matches", icon: <FiHeart size={22} />, text: "Matches" },
    { id: 'chat', path: "/chat", icon: <FiMessageSquare size={22} />, text: "Messages" },
    { id: 'premium', path: "/premium", icon: <IoSparkles size={22} />, text: "Premium" }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden md:block fixed w-full z-50 bg-white shadow-sm" style={{ borderBottom: `1px solid ${colors.light}` }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Dating App Logo" className="h-8" />
            </NavLink>

            {/* Main Navigation */}
            <nav className="flex space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`flex flex-col items-center px-4 py-2 text-sm font-medium rounded-full transition-all ${activeTab === item.id ? 'text-white' : 'text-gray-600 hover:text-' + colors.primary}`}
                  style={{
                    backgroundColor: activeTab === item.id ? colors.primary : 'transparent'
                  }}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span className="mb-1">{item.icon}</span>
                  <span>{item.text}</span>
                </NavLink>
              ))}
            </nav>

            {/* User Controls */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-pink-500 relative">
                <FiBell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 focus:outline-none">
                  <img 
                    src={useravatar} 
                    alt="User Profile" 
                    className="h-8 w-8 rounded-full object-cover border-2 border-white shadow"
                    style={{ borderColor: colors.primary }}
                  />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block border" style={{ borderColor: colors.light }}>
                  <NavLink 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  >
                    My Profile
                  </NavLink>
                  <NavLink 
                    to="/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Settings
                  </NavLink>
                  <div className="border-t my-1" style={{ borderColor: colors.light }}></div>
                  <NavLink 
                    to="/logout" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Sign Out
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t" style={{ borderColor: colors.light }}>
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 4).map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full ${activeTab === item.id ? 'text-' + colors.primary : 'text-gray-500'}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.text}</span>
            </NavLink>
          ))}
          <button 
            className="flex flex-col items-center justify-center w-full h-full text-gray-500"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu size={20} />
            <span className="text-xs mt-1">More</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6" style={{ height: '70vh' }}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold" style={{ color: colors.dark }}>Menu</h3>
              <button onClick={() => setMobileOpen(false)}>
                <FiX size={24} className="text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg ${activeTab === item.id ? 'bg-pink-50 text-' + colors.primary : 'text-gray-700'}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.text}</span>
                </NavLink>
              ))}
              
              <div className="pt-4 border-t" style={{ borderColor: colors.light }}>
                <div className="flex items-center p-3 rounded-lg text-gray-700">
                  <img 
                    src={useravatar} 
                    alt="User" 
                    className="h-8 w-8 rounded-full mr-3 object-cover"
                  />
                  <span>My Account</span>
                </div>
                <NavLink 
                  to="/settings" 
                  className="flex items-center p-3 rounded-lg text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mr-3"><FiUser size={20} /></span>
                  <span>Settings</span>
                </NavLink>
                <NavLink 
                  to="/logout" 
                  className="flex items-center p-3 rounded-lg text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mr-3"><FiX size={20} /></span>
                  <span>Sign Out</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add some style for active state */}
      <style jsx global>{`
        .active {
          position: relative;
        }
        .active:after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: ${colors.primary};
        }
      `}</style>
    </>
  );
};

export default NavHeader;