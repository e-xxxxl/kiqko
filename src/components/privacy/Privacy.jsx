import React from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import shape from '../../assets/images/shape2.png';

const Privacy = () => {
    return (
        <CommonLayout>
        <section className="all-top-shape">
            <img src={shape} alt="shape" />
            <h1>Privacy Policy</h1>
            
        </section>

        <div className="all-container">
        <div className="all-privacy-and-others pb-5 mb-5">
            <div className="page-wrapper-all">
                <Container>


                    <Row>
                    <Col md={12} className="all-title-top mb-4 text-center">
                    <h4 className="mt-5 mb-3">Privacy Policy</h4>
                    </Col>
                        <Col md={12}>
                           {/* <h6>Last Updated: August 28, 2021</h6> */}
                           
                            
                           <h3>OVERVIEW</h3>
       
            <p>
            Please read this privacy statement to ensure that we are committed to keeping secure the privacy of our members' (customers) details.
           </p>
           <p>KIQKO Dating is committed to protect the privacy rights of our users at all times. Any and all the information collected on this site will be kept with the utmost care and will not be used in ways that you have not consented to. If you have any questions, please feel free to call or email us.</p>

<p>In the online registration form you are asked to provide certain personal information such as name, e-mail address, gender, date of birth, and location. You can also provide optional details about yourself. Your personal information is available to you at all times, and you can change,</p> modify, update or delete it.

<p>We require a valid e-mail address because we might need to use it for communication purposes.</p>

<p>It is up to you to post additional information about yourself, name your occupation, education, beliefs, family information, marital status and any other information you so desire, as long as it is not a breach of our Terms of Use.</p>

<p>You cannot post any personal contact information in your profile for whatever reason.</p>

<p>Certain information, such as your IP address, is automatically tracked by our servers while you are using our web site.</p>

<p>A cookie is a piece of data stored on the user's computer tied to information about the user. We use session ID cookies. A session ID cookie simply terminates once a user closes the browser. Some of our business partners use cookies on our site (for example, advertisers). However, we have no access to or control over these cookies, once we have given permission for them to set cookies for advertising.</p>

<p>We use the information of our users for statistical purposes, analyze it in order to target our marketing efforts better, to process payments, to work on further improvement of our web site in order to better serve your online needs. Whatever purpose of the use is, it is most certainly ethical and lawful at all times.</p>

<p>We may user your personal profile information in order to communicate with you by sending notifications that may be of interest to you and/or descriptions and promotions of our new services and offers. You can opt in or out for these notifications.</p>

<p>We expressly state that we retain the right to disclose your information if required by law when the disclosure is necessary to protect our rights.</p>

<p>By using our site, you give us your permission to collect and use your personal information as stated in this Privacy Statement.</p>

<p>We expressly state that if you do not log in and do not use our service for an extended period of time, we retain the right to send you a notification and/or delete the unread messages from our servers.</p>

<p>We do not disclose your password, ever, to anyone, under any circumstances, and we assume no responsibility if, having lost control over your password, you allowed someone to change your personal information on your behalf or use your profile to access our services.</p>

<p>We take all reasonable efforts to prevent your information from loss, misuse and/or alteration and protect your confidentiality and privacy. We cannot guarantee 100% security of information, because nobody on the Internet can; however, we work every day to make sure that your data is secure and you use our services without being subjected to disclosure.</p>

<p>We reserve the right to make changes to our privacy policy and this privacy statement at any time for whatever reason. We do not notify our users of any changes personally, so we encourage you to check the privacy statement from time to time.</p>
                        </Col>
                    </Row>

                
                </Container>
            </div>
            </div>
        </div>
    </CommonLayout>
    );
};

export default Privacy;