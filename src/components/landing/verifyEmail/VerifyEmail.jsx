// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/esm/Col';
// import Row from 'react-bootstrap/esm/Row';
// import Container from 'react-bootstrap/esm/Container';
// import shape from '../../../assets/images/shape2.png';
// import bgweball from '../../../assets/images/bgweball.png';
// import downloadApp from '../../../assets/images/downloadApp.png';
// import apps from '../../../assets/images/apps.png';
// import appg from '../../../assets/images/appg.png';
// import Button from '@restart/ui/esm/Button';
// import { NavLink } from 'react-router-dom';


// const VerifyEmail = () => {
//     return (
     
//                 <section>
//         <section className="all-top-shape all-shape-inner">
//             <img src={shape} alt="shape" />
//         </section>
//         <div className="all-container margin-bottom-step">
//         <div className="all-container-inner setting-area position-top-all">
//                 <Container>
//                 <div className="all-seting-area">
//                     <Row>
//                     <Col md={12} className="all-title-top mb-1 text-center">
//                             <h4>Verify Email</h4>
//                         </Col>
//                         <Col md={12}>
//                          <p className="p-up-loc text-center mt-1 mb-2">
//                          To activate your account, we sent you a verification code <br/>
// to the email address you sign up with.
//                         </p>
//                         </Col>
//                     </Row>
//                     <Form>
//                     <Row>
//                     <Col lg={12}>
//                         <p className="all-login-p text-center mb-0 mt-0"> Please check your spam or junk folder.</p>
//                         <h5 className="text-center h5-verify">Email sent to:</h5>
//                     <span className="text-center span-verify">********123@gmail.com</span>
//                     <p className="text-center p-verufy-all-small color-blue-link mt-5 pt-2"><strong> <NavLink exact to="/verify-code">Resend code</NavLink></strong></p>
//                         <p className="login-p link-color">
                        
//                     </p>
//                     </Col>
//                     </Row>
//                     <Row className="m-0-responsive">
//                         <hr className="hr-color margintop-116"></hr>

//                         <p className="text-center app-p mb-0"><span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:</p>

//                        <div className="col-md-12 text-center">
//                        <NavLink exact to="bout"><Button className="btn-app-link"> <img src={apps} alt="apps" /></Button></NavLink>
//                        <NavLink exact to="bout"><Button className="btn-app-link"> <img src={appg} alt="appg" /></Button></NavLink>
//                        </div>
//                     </Row>
                    
//                     </Form>
//                     </div>
//                 </Container>
           
//             </div>
//             {/* shape-footer-all */}
//             <div className="shape-footer-all">
//             <img src={bgweball} alt="bgweball" />
//             </div>
//             {/* shape-footer-all */}
//         </div>
       
//         </section>
           
                    
     
//     );
// };

// export default VerifyEmail;


import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import Button from '@restart/ui/esm/Button';
import { NavLink } from 'react-router-dom';

const VerifyEmail = () => {
  const location = useLocation();
  const history = useHistory();
  const email = location?.state?.email;

  const [otp, setOtp] = useState('');
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    if (!email) {
      history.replace('/signup');
    }
  }, [email, history]);

  const handleResend = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/resend-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Verification code resent!');
      } else {
        alert('Error resending code.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to resend code.');
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) return alert('Please enter the verification code');

    setVerifying(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Email verified successfully!');
        history.push('/login'); // redirect after success
      } else {
        alert(data.message || 'Invalid or expired code');
      }
    } catch (err) {
      console.error(err);
      alert('Verification failed');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <section>
      <section className="all-top-shape all-shape-inner">
        <img src={shape} alt="shape" />
      </section>
      <div className="all-container margin-bottom-step">
        <div className="all-container-inner setting-area position-top-all">
          <Container>
            <div className="all-seting-area">
              <Row>
                <Col md={12} className="all-title-top mb-1 text-center">
                  <h4>Verify Email</h4>
                </Col>
                <Col md={12}>
                  <p className="p-up-loc text-center mt-1 mb-2">
                    To activate your account, we sent you a verification code <br />
                    to the email address you signed up with.
                  </p>
                </Col>
              </Row>

              <Form onSubmit={handleVerify}>
                <Row>
                  <Col lg={12}>
                    <p className="all-login-p text-center mb-0 mt-0">
                      Please check your spam or junk folder.
                    </p>
                    <h5 className="text-center h5-verify">Email sent to:</h5>
                    <span className="text-center span-verify d-block">{email}</span>

                    {/* OTP input */}
                    <Form.Group controlId="formOtp" className="text-center mt-4">
                      <Form.Label>Enter verification code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        required
                        style={{ maxWidth: '200px', margin: '0 auto' }}
                      />
                    </Form.Group>

                    <div className="text-center mt-3">
                      <Button
                        type="submit"
                        className="btn btn-primary"
                        disabled={verifying}
                      >
                        {verifying ? 'Verifying...' : 'Verify Code'}
                      </Button>
                    </div>

                    <p
                      className="text-center p-verufy-all-small color-blue-link mt-4 pt-2"
                      onClick={handleResend}
                      style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      <strong>Resend code</strong>
                    </p>
                  </Col>
                </Row>

                <Row className="m-0-responsive">
                  <hr className="hr-color margintop-116"></hr>
                  <p className="text-center app-p mb-0">
                    <span>
                      <img src={downloadApp} alt="downloadApp" />
                    </span>
                    Download our app for:
                  </p>
                  <div className="col-md-12 text-center">
                    <NavLink exact to="bout">
                      <Button className="btn-app-link">
                        <img src={apps} alt="apps" />
                      </Button>
                    </NavLink>
                    <NavLink exact to="bout">
                      <Button className="btn-app-link">
                        <img src={appg} alt="appg" />
                      </Button>
                    </NavLink>
                  </div>
                </Row>
              </Form>
            </div>
          </Container>
          <div className="shape-footer-all">
            <img src={bgweball} alt="bgweball" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
