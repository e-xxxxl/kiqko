

// import React, { useState, useEffect } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/esm/Col';
// import Row from 'react-bootstrap/esm/Row';
// import Container from 'react-bootstrap/esm/Container';
// import shape from '../../../assets/images/shape2.png';
// import bgweball from '../../../assets/images/bgweball.png';
// import downloadApp from '../../../assets/images/downloadApp.png';
// import apps from '../../../assets/images/apps.png';
// import appg from '../../../assets/images/appg.png';
// import { Button, Dropdown } from 'react-bootstrap';
// import './verify.css'
// import { NavLink } from 'react-router-dom';

// const VerifyEmail = () => {
//   const location = useLocation();
//   const history = useHistory();
//   const email = location?.state?.email;

//   const [otp, setOtp] = useState('');
//   const [verifying, setVerifying] = useState(false);

//   useEffect(() => {
//     if (!email) {
//       history.replace('/signup');
//     }
//   }, [email, history]);

//   const handleResend = async () => {
//     try {
//       const response = await fetch('https://kiqko-backend.onrender.com/api/auth/resend-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert('Verification code resent!');
//       } else {
//         alert('Error resending code.');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Failed to resend code.');
//     }
//   };

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     if (!otp) return alert('Please enter the verification code');

//     setVerifying(true);
//     try {
//       const response = await fetch('https://kiqko-backend.onrender.com/api/auth/verify-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert('Email verified successfully!');
//         history.push('/login'); // redirect after success
//       } else {
//         alert(data.message || 'Invalid or expired code');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Verification failed');
//     } finally {
//       setVerifying(false);
//     }
//   };

//   return (
//     <section className="verify-email-section">
//       <div className="top-shape-decoration">
//         <img src={shape} alt="decorative shape" className="shape-image" />
//       </div>

//       <div className="verify-container">
//         <div className="verify-content-wrapper">
//           <Container>
//             <div className="verification-card">
//               <Row className="justify-content-center">
//                 <Col md={10} lg={8} xl={6}>
//                   <div className="verification-header">
//                     <h4 className="verification-title">Verify Your Email</h4>
//                     <p className="verification-subtext">
//                       We've sent a 6-digit verification code to your email address.
//                       Please enter it below to activate your account.
//                     </p>
//                     <div className="verification-note">
//                       <i className="bi bi-info-circle"></i> Don't forget to check your spam or junk folder
//                     </div>
//                   </div>

//                   <Form onSubmit={handleVerify} className="verification-form">
//                     <div className="email-display">
//                       <h5 className="sent-to-label">Email sent to:</h5>
//                       <span className="email-address">{email}</span>
//                     </div>

//                     <Form.Group controlId="formOtp" className="otp-input-group">
//                       <Form.Label>Verification Code</Form.Label>
//                       <div className="otp-input-container">
//                         <Form.Control
//                           type="text"
//                           placeholder="• • • • • •"
//                           value={otp}
//                           onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                           maxLength={6}
//                           required
//                           className="otp-input"
//                         />
//                         <div className="otp-underline"></div>
//                       </div>
//                     </Form.Group>

//                     <div className="action-buttons">
//                       <Button
//                         type="submit"
//                         className="verify-button"
//                         disabled={verifying}
//                       >
//                         {verifying ? (
//                           <>
//                             <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                             Verifying...
//                           </>
//                         ) : 'Verify Account'}
//                       </Button>
//                     </div>

//                     <div className="resend-code">
//                       Didn't receive the code?{' '}
//                       <button
//                         type="button"
//                         className="resend-link"
//                         onClick={handleResend}
//                       >
//                         Resend code
//                       </button>
//                     </div>
//                   </Form>

//                   <div className="download-app-section">
//                     <div className="divider-with-text">
//                       <span>Get the app</span>
//                     </div>
//                     <p className="app-benefits">
//                       <img src={downloadApp} alt="app icon" className="app-icon" />
//                       Better experience with our mobile app
//                     </p>
//                     <div className="app-download-buttons">
//                       <NavLink to="bout" className="app-download-link">
//                         <img src={apps} alt="App Store" className="app-store-image" />
//                       </NavLink>
//                       <NavLink to="bout" className="app-download-link">
//                         <img src={appg} alt="Google Play" className="play-store-image" />
//                       </NavLink>
//                     </div>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Container>
//         </div>
//       </div>

//       <div className="bottom-shape-decoration">
//         <img src={bgweball} alt="bottom decoration" className="shape-image" />
//       </div>
//     </section>
//   );
// };

// export default VerifyEmail;


import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom'; // Import useHistory
import { ArrowRight, Mail, Smartphone, Download } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
const VerifyEmail = () => {
  const location = useLocation();
  const history = useHistory(); // Use useHistory hook
  const email = location?.state?.email;

  const [otp, setOtp] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (!email) {
      history.push('/signup'); // Use history.push
    }
  }, [email, history]);

  useEffect(() => {
    let timer;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
      setCountdown(30);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  const handleResend = async () => {
    setResendDisabled(true);
    try {
      const response = await axios.post('https://kiqko-backend.onrender.com/api/auth/resend-email', { email });
      if (response.data.success) {
        toast.success('Verification code resent!');
      } else {
        toast.error(response.data.message || 'Error resending code.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to resend code.');
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) return toast.error('Please enter the verification code');

    setVerifying(true);
    try {
      const response = await axios.post('https://kiqko-backend.onrender.com/api/auth/verify-email', { email, otp });
      if (response.data.success) {
        toast.success('Email verified successfully!');
        history.push('/email-verified'); // Use history.push
      } else {
        toast.error(response.data.message || 'Invalid or expired code');
      }
    } catch (err) {
      console.error(err);
      toast.error('Verification failed');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-[#9B72FE] to-[#6C43E0] relative overflow-hidden">
      {/* Animated background */}
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
                <h2 className="text-2xl font-bold text-[#6C43E0] mb-2">Verify Your Email</h2>
                <p className="text-gray-600">
                  We've sent a 6-digit verification code to your email address.
                  Please enter it below to activate your account.
                </p>
              </div>

              {/* Email display */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Email sent to:</p>
                <p className="font-medium text-gray-800 break-all">{email}</p>
              </div>

              {/* Verification Form */}
              <form onSubmit={handleVerify} className="space-y-6">
                {/* OTP Input */}
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                    Verification Code
                  </label>
                  <div className="relative">
                    <input
                      id="otp"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="• • • • • •"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      maxLength={6}
                      className="w-full px-4 py-3 text-center tracking-widest text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Verify Button */}
                <button
                  type="submit"
                  disabled={verifying}
                  className="w-full py-3 px-6 bg-[#9B72FE] text-white font-medium rounded-lg hover:bg-[#8A64E5] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70"
                >
                  {verifying ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    <>
                      Verify Account <ArrowRight className="ml-2" size={18} />
                    </>
                  )}
                </button>

                {/* Resend Code */}
                <div className="text-center text-sm text-gray-600">
                  Didn't receive the code?{' '}
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendDisabled}
                    className={`font-medium ${resendDisabled ? 'text-gray-400' : 'text-[#9B72FE] hover:underline'}`}
                  >
                    {resendDisabled ? `Resend in ${countdown}s` : 'Resend code'}
                  </button>
                </div>
              </form>

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
                  <Smartphone className="mr-2 text-[#9B72FE]" size={16} />
                  <span>Get our mobile app for better experience</span>
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

export default VerifyEmail;