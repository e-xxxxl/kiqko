
import { ArrowRight, Mail, Smartphone, Download } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdOutlineArrowForward } from "react-icons/md";
import Container from 'react-bootstrap/esm/Container';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import verifiedIcon from '../../../assets/images/verifiedIcon.png';
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const EmailVerified = () => {
    return (
        <div className="min-h-screen font-sans bg-gradient-to-br from-[#9B72FE] to-[#6C43E0] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 opacity-20 animate-float">
                    <div className="w-full h-full bg-white rounded-full"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full opacity-30">
                    <div className="w-full h-48 bg-white/20"></div>
                </div>
            </div>

            <main className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
                <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Decorative accent */}
                        <div className="h-2 bg-gradient-to-r from-[#9B72FE] to-[#6C43E0]"></div>
                        
                        <div className="p-8 text-center">
                            {/* Header Section */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-[#6C43E0] mb-4">Email Verified</h2>
                                <p className="text-gray-600">
                                    Congratulations! Your email has been successfully verified.
                                </p>
                            </div>

                            {/* Verified Icon */}
                            <div className="my-8 flex justify-center">
                                <div className="w-24 h-24 rounded-full bg-[#9B72FE]/10 flex items-center justify-center">
                                    <CheckCircle className="text-[#9B72FE]" size={48} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Login Button */}
                            <NavLink to="/login">
                                <button className="w-full py-3 px-6 bg-[#9B72FE] text-white font-medium rounded-lg hover:bg-[#8A64E5] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
                                    Login <MdOutlineArrowForward className="ml-2" size={18} />
                                </button>
                            </NavLink>

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="px-2 bg-white text-sm text-gray-500">or</span>
                                </div>
                            </div>

                            {/* App Download Section */}
                            <div className="text-center">
                                <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                                    <Download className="mr-2 text-[#9B72FE]" size={16} />
                                    <span>Download our app for better experience</span>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button className="p-1 rounded-md hover:bg-gray-100">
                                        <img src={apps} alt="App Store" className="h-10" />
                                    </button>
                                    <button className="p-1 rounded-md hover:bg-gray-100">
                                        <img src={appg} alt="Google Play" className="h-10" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EmailVerified;