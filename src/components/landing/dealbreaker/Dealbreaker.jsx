import React, { useState } from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Dealbreaker = () => {
  const [dealbreakers, setDealbreakers] = useState(['', '', '']);
  const history = useHistory();
  const userId = localStorage.getItem('userId');

  const handleChange = (index, value) => {
    const newDealbreakers = [...dealbreakers];
    newDealbreakers[index] = value;
    setDealbreakers(newDealbreakers);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`https://kiqko-backend.onrender.com/api/users/dealbreaker/${userId}`, {
        dealbreakers,
      });
      history.push('/about-you');
    } catch (error) {
      console.error('Failed to update dealbreakers:', error);
    }
  };

  const allFieldsFilled = dealbreakers.every(breaker => breaker.trim() !== '');

  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 relative overflow-hidden">
      {/* Top Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <img src={shape} alt="shape" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-rose-700 mb-2">Your Dealbreakers</h2>
            <p className="text-gray-600 text-lg">What are your dealbreakers?</p>
          </div>

          {/* Dealbreaker Inputs */}
          <div className="space-y-6 mb-10">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative">
                <label className="block text-sm font-medium text-rose-800 mb-1">
                  We're not a match if...
                </label>
                <input
                  type="text"
                  className="w-full p-4 border-2 border-rose-100 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-gray-700 placeholder-rose-300 transition-all duration-200"
                  placeholder="e.g. you're a gamer"
                  value={dealbreakers[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  maxLength={100}
                />
                <span className={`absolute right-3 bottom-3 text-sm px-2 rounded ${dealbreakers[i]?.length === 100 ? 'text-red-500' : 'text-gray-500'}`}>
                  {dealbreakers[i]?.length || 0}/100
                </span>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-10">
            <button
              onClick={handleSubmit}
              disabled={!allFieldsFilled}
              className={`flex items-center justify-center px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-200 ${
                allFieldsFilled 
                  ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white hover:shadow-xl transform hover:-translate-y-1' 
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

export default Dealbreaker;