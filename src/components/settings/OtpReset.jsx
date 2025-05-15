import React, { useState } from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Button, Form, Alert, Spinner } from 'react-bootstrap';
import './Setting.css';
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

    const handleSubmit = async () => {
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
            history.push({
                pathname: '/password-changed'
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <CommonLayout>
            <section className="all-top-shape">
                <img src={shape} alt="shape" />
                <h1 className="for-h1">Reset Password</h1>
            </section>
            <div className="all-container">
                <div className="all-container-inner setting-area for-got-area">
                    <Container>
                        <div className="all-seting-area">
                            <Row>
                                <Col md={12}>
                                    <p className="p-up-loc text-center">
                                        Enter the OTP sent to your email and choose a new password.
                                    </p>
                                </Col>
                                <Col className="mt-2 offset-md-3" md={6}>
                                    <Form.Control
                                        className="input-settings text-center mb-3"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Control
                                        className="input-settings text-center mb-3"
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                    <Form.Control
                                        className="input-settings text-center mb-3"
                                        type="password"
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <Button className="settings-btn mt-2" variant="primary" onClick={handleSubmit} disabled={loading}>
                                        {loading ? <Spinner animation="border" size="sm" /> : 'Reset Password'}
                                    </Button>
                                    {message && <Alert variant="success" className="mt-3">{message}</Alert>}
                                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </CommonLayout>
    );
};

export default OtpReset;
