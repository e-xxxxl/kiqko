import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import { Mail, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // Initialize history

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('https://kiqko-backend.onrender.com/api/auth/forgot-password', { email });
      toast.success(res.data.message || 'Password reset link sent!');
      history.push('/password-otp', { state: { email } }); // Use history.push
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

            <div className="p-8">
              {/* Header Section */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#9B72FE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#9B72FE]" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[#6C43E0] mb-2">Forgot Password</h2>
                <p className="text-gray-600">
                  Enter the email associated with your account. We'll email you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent transition duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-[#9B72FE] text-white font-medium rounded-lg hover:bg-[#8A64E5] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link <ArrowRight className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => history.push('/signup')} // Use history.push
                  className="text-[#9B72FE] font-medium hover:underline"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;