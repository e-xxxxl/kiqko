import React, { useState } from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Headline = () => {
    const [headline, setHeadline] = useState('');
    const history = useHistory();
    const userId = localStorage.getItem('userId');

    const handleSubmit = async () => {
        try {
            await axios.post(`https://kiqko-backend.onrender.com/api/users/headline/${userId}`, {
                headline
            });
            history.push('/compliment');
        } catch (error) {
            console.error('Failed to update headline:', error);
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
            {/* Shape */}
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <img src={shape} alt="shape" className="w-full h-auto" />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-purple-800 mb-2">Your Headline</h2>
                        <p className="text-gray-600">Tell people what you're seeking</p>
                    </div>

                    {/* Form */}
                    <div className="mb-10">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full p-4 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                placeholder="e.g. Quirky woman looking for mashed to my potatoes."
                                value={headline}
                                onChange={(e) => setHeadline(e.target.value)}
                                maxLength={100}
                            />
                            <span className="absolute right-3 bottom-3 text-sm text-gray-500 bg-white px-2 rounded">
                                {100 - headline.length}
                            </span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mb-10">
                        <button
                            onClick={handleSubmit}
                            className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
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
                                <NavLink to="bout">
                                    <button className="hover:opacity-80 transition-opacity">
                                        <img src={apps} alt="App Store" className="h-12" />
                                    </button>
                                </NavLink>
                                <NavLink to="bout">
                                    <button className="hover:opacity-80 transition-opacity">
                                        <img src={appg} alt="Google Play" className="h-12" />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Shape */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <img src={bgweball} alt="background" className="w-full h-auto" />
            </div>
        </section>
    );
};

export default Headline;