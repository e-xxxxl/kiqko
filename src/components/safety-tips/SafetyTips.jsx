import React from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import shape from '../../assets/images/shape2.png';

const SafetyTips = () => {
    return (
        <CommonLayout>
        <section className="all-top-shape">
            <img src={shape} alt="shape" />
            <h1>SAFETY TIPS</h1>
            
        </section>

        <div className="all-container">
        <div className="all-privacy-and-others pb-5 mb-5">
            <div className="page-wrapper-all">
                <Container>


                    <Row>
                    <Col md={12} className="all-title-top mb-4 text-center">
                    <h4 className="mt-5 mb-3">Safety Tips</h4>
                    </Col>
                        <Col md={12}>
                           {/* <h6>Last Updated: August 28, 2021</h6> */}
                           
                            
          <h3>OVERVIEW</h3>
          <p>
          Here are some steps that everyone can follow to ensure their safety while using KIQKO.com. Please take a few minutes to read these tips.
          </p>
          <h3>PROTECTING YOUR ACCOUNT</h3>
<p>
You must use caution when accessing your KIQKO account or any other accounts from a public or shared computer, be aware of your surroundings. You can never be careful.
</p>

<h3>PERSONAL INFORMATION</h3>
<p>
As a member you are in control of your Roqxy.com account, therefore you must be careful about sharing your personal information such as your full name, phone number, email and address. Protect your identity until you are comfortable enough with someone to share it. Also, leave any personal contact information out of your KIQKO profile.</p>


<h3>
FINANCE
</h3>
<p>
Never respond to any request for you to send money, even if the person claims this is for an emergency, specifically a request of an overseas wire transfer. Block this user at once, and report such communication to us immediately, at.</p>


<h3>PHISHING </h3>
<p>Beware of users who send you a private email address or links to external website these are often an indication of phishing attempt.</p>


<h3>COMMUNICATION</h3>
<p>
Ravie will never send you an email asking for your username and password information. Any such communication should be reported immediately.</p>

<h3>MEETING IN PERSON</h3>
        <ul className="privacy-ul">
            

<li>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Before meeting any user in person ask user to go on Live Chat and take a clear screenshot of user's face and compare it to his/her profile photos. If user refused to go on Live Video Chat we strongly suggest that you do not meet this user in person.

</li>
<li>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Meet at a public place and never in a private or remote location, and never at their house, or your home or apartment.
</li>



        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Tell a friend or family member of your plans. Let them know who you are meeting and where and when you will return.</li>

        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Provide a friend or family member with this person's website's username and your captured screenshot from your Live Video Chat session.</li>

        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Bring your phone with you.</li>

        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Drive yourself to and from the first meeting, never accept a ride even if itís offered. Be in charge of your own transportation even if you take a taxi, Uber, Lyft, or from a friend. Securing your own ride is important.</li>

        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Upon arrival at your destination text your friend or family member that youíve arrived and will update them accordingly.</li>

        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Never drink excessive amount of alcohol where you might find yourself in harmís way. If you find yourself a little intoxicated, you should not accept a ride from your date, call a friend or a love one to pick you up.</li>

        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Do not leave your drink unattended, take your drink with you at all times.</li>

        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Do not leave your personal belongings unattended.</li>

      
        </ul>

<h3>REPORT SUSPICIOUS BEHAVIOR</h3>

<ul className="privacy-ul">
            <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Minors using the website KIQKO.com.
</li>

<li>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Users sending harassing or offensive massages.
</li>
<li>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Members behaving inappropriately during or after meeting in person. 
</li>
<li>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Asking for photographs
</li>
<li>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Soliciting for donations or funds.
</li>
<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Fraudulent registration or profile.</li>
<li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Spam or solicitation to sell products or service.</li>
</ul>
<h3>
FINALLY
    </h3>

<p>
Use your common sense and don't be afraid to trust your instincts.
    </p>

<p>
We hope that these simple guidelines helps you make your online dating experience a success.
</p>


    </Col>
                    </Row>

                
                </Container>
            </div>
            </div>
        </div>
    </CommonLayout>
    );
};

export default SafetyTips;