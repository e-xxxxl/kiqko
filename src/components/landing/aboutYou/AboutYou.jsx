import React, { useState } from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AboutYou = () => {
  const [about, setAbout] = useState('');
  const history = useHistory();
  const userId = localStorage.getItem('userId');

  const handleSubmit = async () => {
    try {
      await axios.post(`https://kiqko-backend.onrender.com/api/users/about/${userId}`, { about });
      history.push("/upload-photo");
    } catch (error) {
      console.error('Failed to update about info:', error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 relative overflow-hidden">
      {/* Top Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <img src={shape} alt="shape" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">About Me</h2>
            <p className="text-gray-600 text-lg">To continue you need to add an essay</p>
          </div>

          {/* Textarea */}
          <div className="mb-10">
            <div className="relative">
              <label className="block text-sm font-medium text-blue-800 mb-2">Your Story</label>
              <textarea
                rows={7}
                className="w-full p-4 border-2 border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-blue-300 transition-all duration-200 resize-none"
                placeholder="Tell us about yourself (e.g., your interests, personality, what you're looking for)..."
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                maxLength={1000}
              />
              <span className={`absolute right-3 bottom-3 text-sm px-2 rounded ${about.length === 1000 ? 'text-red-500' : 'text-gray-500'}`}>
                {about.length}/1000
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-10">
            <button
              onClick={handleSubmit}
              disabled={!about.trim() || about.length < 50} // Minimum 50 characters
              className={`flex items-center justify-center px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-200 ${
                about.trim() && about.length >= 50
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-xl transform hover:-translate-y-1' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue <MdOutlineArrowForward className="ml-2" />
            </button>
          </div>

          {/* App Download Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <img src={downloadApp} alt="Download app" className="h-5 mr-2" />
                <span className="text-gray-700">Download our app for:</span>
              </div>
              <div className="flex space-x-4">
                <button className="hover:opacity-80 transition-opacity focus:outline-none">
                  <img src={apps} alt="App Store" className="h-12" />
                </button>
                <button className="hover:opacity-80 transition-opacity focus:outline-none">
                  <img src={appg} alt="Google Play" className="h-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <img src={bgweball} alt="background" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default AboutYou;