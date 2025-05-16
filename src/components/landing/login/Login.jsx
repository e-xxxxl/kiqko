
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdOutlineArrowForward, MdVisibility, MdVisibilityOff } from 'react-icons/md';

import Container from 'react-bootstrap/esm/Container';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';

const Login = () => {

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://kiqko-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Login successful!');
        //    localStorage.setItem('userId', data.user.id);

        // Optionally save more user info
        localStorage.setItem('userId', data.user);

        history.push('/profile'); // or dashboard
      } else {
        alert(data.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Try again.');
    }
  };

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
   <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9B72FE] to-[#6C43E0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0">
          <img src={shape} alt="decorative shape" className="w-48 h-48 opacity-20 animate-float" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img src={bgweball} alt="wave pattern" className="w-full opacity-30" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Decorative accent */}
            <div className="h-2 bg-gradient-to-r from-[#9B72FE] to-[#6C43E0]"></div>
            
            <div className="px-8 py-10">
              {/* Header Section */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#6C43E0] mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to access your account</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Username/Email Field */}
                <div>
                  <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Username or Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-[#9B72FE]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id="usernameOrEmail"
                      type="text"
                      placeholder="Enter your username or email"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-[#9B72FE] transition duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-[#9B72FE]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-[#9B72FE] transition duration-200"
                      required
                    />
                    <button 
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#9B72FE]"
                    >
                      {showPassword ? (
                        <MdVisibilityOff className="h-5 w-5" />
                      ) : (
                        <MdVisibility className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-[#9B72FE] focus:ring-[#9B72FE] border-gray-300 rounded"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="/forgot-password" className="font-medium text-[#9B72FE] hover:text-[#6C43E0]">
                      Forgot password?
                    </a>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#9B72FE] hover:bg-[#6C43E0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9B72FE] transition duration-200 transform hover:-translate-y-0.5"
                  >
                    Log In
                    <MdOutlineArrowForward className="ml-2 -mr-1 w-5 h-5" />
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-gray-600">
                  Not a member yet?{' '}
                  <a href="/sign-up" className="font-medium text-[#9B72FE] hover:text-[#6C43E0]">
                    Create an account
                  </a>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                {/* App Download Section */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-[#9B72FE]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Get our mobile app for better experience
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <img src={apps} alt="App Store" className="h-10" />
                    </button>
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <img src={appg} alt="Google Play" className="h-10" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
