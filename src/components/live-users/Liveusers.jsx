import React from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import shape from '../../assets/images/shape2.png';

import { NavLink } from 'react-router-dom';
import fev1 from '../../assets/images/fev1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';
import photo6 from '../../assets/images/photo6.jpg';
import photo7 from '../../assets/images/photo7.jpg';
import adda from '../../assets/images/addnew.png';
import Pagination from 'react-bootstrap/Pagination'
import settingView from '../../assets/images/myProfile.png';
import settingEdit from '../../assets/images/editPofile.png';
import settingUpload from '../../assets/images/updateLocation.png';
import settingReset from '../../assets/images/resetPassword.png';
import settingHide from '../../assets/images/hideProfile.png';
import settingDelete from '../../assets/images/deleteAccount.png';
import settingLogout from '../../assets/images/logout.png';
import manageMedia from '../../assets/images/manageMedia.png';
import viewedMe from '../../assets/images/viewedMe.png';
import myLikes from '../../assets/images/myLikes.png';
import likesMe from '../../assets/images/likesMe.png';
import homea from '../../assets/images/homea.png';
import liveicon from '../../assets/images/liveicon.png';
import yourm from '../../assets/images/yourm.png';
import blockedUsers from '../../assets/images/blockedUsers.png';
import serr from '../../assets/images/serr.png';

const Liveusers = () => {
    return (
        <CommonLayout>
        <section className="all-top-shape"> 
        <img src={shape} alt="shape" />
        </section>
        <div className="all-container"> 
        <div className="pr pb-5 mb-5">
            <div className="page-wrapper-all">
            <Container>

            {/* responise-flex-column-reverse */}
            <Row className="m0-all pr-seti">
            <Col md={3}>
                <div className="left-panel-allpages mar-top-left">
                   <div className="top-user-id text-center">
                       <div className="online-user-all">
                       <h5 className="border-h5">Users Online Now</h5>
                       <div className="online-user-status border-right-online">
                           <h6>Women</h6>
                           <h4>1234</h4>
                       </div>
                       <div className="online-user-status">
                           <h6>men</h6>
                           <h4>1565</h4>
                       </div>
                       </div>
                      
                      
                   </div>
                   
                   
                   <div className="user-type-left">
                       <ul className="list-user-type left-nav">
                           <li>
                           <NavLink exact to="/profile" activeClassName="active"><img src={homea} alt="homea" />Home</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/search-results" activeClassName="active"><img src={serr} alt="liveicon" />Search Results</NavLink>
                           </li>
                           <li><NavLink exact to="/live-users" activeClassName="active"><img src={liveicon} alt="liveicon" />Live Users</NavLink></li>
                           <li><NavLink exact to="/who-viewed-you" activeClassName="active"><img src={viewedMe} alt="viewedMe" />Who Viewed Me</NavLink></li>
                           <li><NavLink exact to="/who-likes-you" activeClassName="active"><img src={myLikes} alt="myLikes" />Who Likes Me</NavLink></li>
                           <li><NavLink exact to="/my-likes" activeClassName="active"><img src={likesMe} alt="likesMe" />My Likes</NavLink></li>
                           <li><NavLink exact to="/your-matches" activeClassName="active"><img src={yourm} alt="likesMe" />Your Matches</NavLink></li>
                           <li><NavLink exact to="/blocked-users" activeClassName="active"><img src={blockedUsers} alt="blockedUsers" />Blocked Users</NavLink></li>
                           <li><NavLink exact to="/profile" activeClassName="active"> <img src={settingView} alt="settingView" />View Profile</NavLink></li>
                           <li><NavLink exact to="/edit-basics" activeClassName="active"> <img src={settingEdit} alt="settingEdit" />Edit Profile </NavLink></li>
                           <li><NavLink exact to="/manage-media" activeClassName="active"><img src={manageMedia} alt="manageMedia" />Manage Media</NavLink></li>
                           <li><NavLink exact to="/reset-password"><img src={settingReset} alt="settingReset" />Reset Password</NavLink></li>
                           <li><NavLink exact to="/update-location"><img src={settingUpload} alt="settingUpload" />Update Location</NavLink></li>
                           <li><NavLink exact to="/hide-profile"><img src={settingHide} alt="settingHide" />Hide Profile</NavLink></li>
                           <li><NavLink exact to="/delete-account"><img src={settingDelete} alt="settingDelete" />Delete Account</NavLink></li>
                           <li><NavLink exact to="/logout"><img src={settingLogout} alt="settingLogout" />Logout</NavLink></li>
                               
                        
                       </ul> 
                    </div>

                    <div className="add-banner-left add-nbanner-left2">
                    <img src={adda} alt="adda"/>
                    </div>

                    <div className="add-banner-left add-nbanner-left2 mt-5">
                    <img src={adda} alt="addb"/>
                    </div>
                    
                </div>
            </Col>
                <Col md={9}>
                    <div className="profile-main-part-area-inner bg-all-pages mar-top-responsive">
                    <Col md={12} className="all-title-top mb-4 text-center">
                            <h4>Live Users</h4>
                        </Col>

                     

                     

                        <Row>
                        <Col md={12} className="mt-4">
                            <ul className="search-user-list search-user-list2 mt-0">
                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>

                                    
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>

                               

                                <li>
                                <img className="user-search-profile" src={photo7} alt="photo7" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                 
                                </li>
                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>

                                <li className="full-width">
                                    <Row>
                                    <Col md={4} className="add-bannerall">
                                    <img src={adda} alt="adda"/>
                                    </Col>
                                    <Col md={4} className="add-bannerall">
                                    <img src={adda} alt="addb"/>
                                    </Col>
                                    <Col md={4} className="add-bannerall">
                                    <img src={adda} alt="addc"/>
                                    </Col>
                                    </Row>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo3} alt="photo3" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={photo6} alt="photo5" />
                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>

                                       
                                    </div>
                                </li>

                               
                                <li>
                                <img className="user-search-profile" src={photo7} alt="photo7" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>

                                       
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                     
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo3} alt="photo3" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={photo6} alt="photo5" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>

                               

                                <li>
                                <img className="user-search-profile" src={photo7} alt="photo7" />
                                <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        </Button>
                                        </div>
                                    </div>
                                </li>
                             
                               
                               
                            </ul>
                        </Col>
                        </Row>

                        <Row>
                            <Col md={12} className="pagination-list text-center">
                            <Pagination>
  
  <Pagination.Prev className="pagi-list-next-pre" />
  <Pagination.Item active>{1}</Pagination.Item>
  

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>{4}</Pagination.Item>
  <Pagination.Item>{5}</Pagination.Item>
  <Pagination.Item>{6}</Pagination.Item>
  <Pagination.Next  className="pagi-list-next-pre"/>
  
</Pagination>
                            </Col>
                        </Row>
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

export default Liveusers;