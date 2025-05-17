import React, { useState } from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const OtpReset = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        try {
            const res = await axios.post('https://kiqko-backend.onrender.com/api/auth/reset-password-otp', {
                email,
                otp,
                newPassword
            });
            setMessage(res.data.message);
            setTimeout(() => {
                history.push({
                    pathname: '/password-changed'
                });
            }, 1500);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <CommonLayout>
            {/* Hero Section with Gradient Background */}
            <section className="w-full h-40 bg-gradient-to-r from-[#855EF1] to-purple-600 relative overflow-hidden">
                <img 
                    src={shape} 
                    alt="Decorative shape" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="container mx-auto h-full flex items-center justify-center relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Reset Password</h1>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Password Reset</h2>
                        <p className="text-gray-600">
                            Enter the OTP sent to your email and choose a new password.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#855EF1] focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        {/* OTP Input */}
                        <div>
                            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                                OTP Code
                            </label>
                            <input
                                id="otp"
                                type="text"
                                placeholder="Enter 6-digit OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#855EF1] focus:border-transparent transition-all"
                                required
                                maxLength="6"
                            />
                        </div>

                        {/* New Password Input */}
                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                New Password
                            </label>
                            <input
                                id="newPassword"
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#855EF1] focus:border-transparent transition-all"
                                required
                                minLength="8"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Password must be at least 8 characters long
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                                loading 
                                    ? 'bg-[#855EF1]/80 cursor-not-allowed' 
                                    : 'bg-[#855EF1] hover:bg-purple-700'
                            }`}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </div>
                            ) : (
                                'Reset Password'
                            )}
                        </button>

                        {/* Status Messages */}
                        {message && (
                            <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700">
                                {message}
                            </div>
                        )}
                        {error && (
                            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
                                {error}
                            </div>
                        )}
                    </form>

                    {/* Additional Help */}
                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>Didn't receive an OTP? <button className="text-[#855EF1] hover:underline">Resend OTP</button></p>
                    </div>
                </div>
            </div>
        </CommonLayout>
    );
};

export default OtpReset;