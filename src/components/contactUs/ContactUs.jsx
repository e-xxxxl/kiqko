import React from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import emailVontact from '../../assets/images/emailVontact.png';

const ContactUs = () => {
    return (
        <CommonLayout>
            {/* Hero Section with Gradient Background */}
            <section className="w-full h-48 bg-gradient-to-r from-[#855EF1] to-purple-600 relative overflow-hidden">
                <img 
                    src={shape} 
                    alt="Decorative shape" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="container mx-auto h-full flex flex-col items-center justify-center relative z-10 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Us</h1>
                    <p className="text-white/90 text-center max-w-2xl">How can we help you? Our team is here to answer your questions.</p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Contact Image */}
                    <div className="md:w-1/2 p-6 md:p-8 flex items-center justify-center bg-gray-50">
                        <img 
                            src={emailVontact} 
                            alt="Contact illustration" 
                            className="w-full h-auto max-w-md object-contain"
                        />
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-1/2 p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-[#855EF1] mb-6">Send us a message</h2>
                        
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#855EF1] focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#855EF1] focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#855EF1] focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Question
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#855EF1] focus:border-transparent transition-all"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-[#855EF1] text-white font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-md"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Additional Contact Info */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Other ways to reach us</h3>
                            <div className="space-y-2">
                                <p className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-2 text-[#855EF1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    support@yourdatingapp.com
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-2 text-[#855EF1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    +1 (555) 123-4567
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CommonLayout>
    );
};

export default ContactUs;