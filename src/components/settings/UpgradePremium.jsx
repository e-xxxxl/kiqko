import React from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import photo2 from '../../assets/images/photo2.jpg';
import photo4 from '../../assets/images/photo4.png';
import photo5 from '../../assets/images/photo5.png';
import photo6 from '../../assets/images/photo6.jpg';
import photo7 from '../../assets/images/photo7.jpg';
import './Setting.css';


const UpgradePremium = () => {
    return (

        <CommonLayout>
<section className="all-top-shape"> 
<img src={shape} alt="shape" />
</section>
<div className="all-container"> 
<div className="pr pb-5 mb-5">
    <div className="page-wrapper-all">
    <Container>
    <Row>
    <Col md={3}>
        <div className="left-panel-allpages">
           <div className="top-user-id text-center">
               <h5>Users Online Now</h5>
               <h4>13123</h4>
           </div>

           <div className="user-type-left">
               <h6>You’re their type</h6>
               <ul className="list-user-type">
                   <li>
                   <NavLink exact to="/">
                       <div className="user-left-profile">
                       <img src={photo7} alt="photo7" />
                       </div>
                       <div className="user-right-details">
                           <h4>Njoylife, 48</h4>
                           <span>Carlsbad, CA</span>
                       </div>
                       </NavLink>
                   </li>
                   <li>
                   <NavLink exact to="/">
                       <div className="user-left-profile">
                       <img src={photo6} alt="photo3" />
                       </div>
                       <div className="user-right-details">
                           <h4>Rondi, 46</h4>
                           <span>Newport Beach, CA</span>
                       </div>
                       </NavLink>
                   </li>

                   <li>
                   <NavLink exact to="/">
                       <div className="user-left-profile">
                       <img src={photo5} alt="photo7" />
                       </div>
                       <div className="user-right-details">
                       <h4>Tamara, 46</h4>
                           <span>Newport Beach, CA</span>
                       </div>
                       </NavLink>
                   </li>

                   <li>
                   <NavLink exact to="/">
                       <div className="user-left-profile">
                       <img src={photo2} alt="photo7" />
                       </div>
                       <div className="user-right-details">
                           <h4>Bella, 55</h4>
                           <span>Arcadia, CA</span>
                       </div>
                       </NavLink>
                   </li>

                   <li>
                   <NavLink exact to="/">
                       <div className="user-left-profile">
                       <img src={photo4} alt="photo7" />
                       </div>
                       <div className="user-right-details">
                           <h4>Billy, 30</h4>
                           <span>Arcadia, CA</span>
                       </div>
                       </NavLink>
                   </li>
               </ul>
            </div>

        </div>
    </Col>
    <Col md={9}>
        <div className="profile-main-part-area-inner bg-all-pages">
            <Col md={12} className="all-title-top mb-4 text-center">
                <h4>Upgrade To Premium </h4>
            </Col>
            <div className="all-seting-area">
                    <Row>
                        <Col md={12}>
                            
                         <p className="p-update-premium">You currently have a Free membership without access to our Live Video Chat.</p>
                         <p className="p-update-premium">Upgrade to Premium to access Live Video Chat and start a conversation with someone special today.</p>
                         <p className="p-update-premium">Premium Membership is only $6.49 per month with no long-term commitment, cancel anytime policy.</p>
                         <p className="p-update-premium">To avoid locking you in a Long-Term-Lock-In-Contracts like the others do we offer you a straightforward monthly billing of $6.49 and a cancel anytime policy. 
No gimmicks! No Tokens, Coins, Gift Emoji, and Boost, to buy. Just simple monthly billing. All prices in US Dollars. Taxes included.</p>
                         <p className="p-update-premium text-center mb-0 font-size-setting">Recurring Billing. Cancel any time.</p>
                         <p className="p-update-premium">
                         KIQKO Premium is a monthly subscription charged to your iTunes Account and your account will be charged within 24 hours prior to the end of current period. 
Auto renewal may be turned off at any time by going to your settings in the iTunes store offer purchase. 
To cancel Google Play Store auto renewal login to your Google Play Store account and Tap the Account icon in the upper right corner and follow instructions.
                         </p>
                        </Col>
                    </Row>

                    <Row>
                    <Col md={6} className="pr-1">
                    <Button className="btn-upgrade btn-later font-segoeui" variant="primary">Later</Button>
                    </Col>
                    <Col md={6} className="pl-0">
                    <Button className="btn-upgrade btn-upgrade-now font-segoeui" variant="primary">Upgrade Me Now</Button>
                    </Col>
                    </Row>
                    </div>
        </div>
    </Col>
    </Row>
    </Container>
    </div>

</div>
</div>
</CommonLayout>

    );
};

export default UpgradePremium;