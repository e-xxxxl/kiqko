import React from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import shape from '../../assets/images/shape2.png';

import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

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

const Report = () => {
    return (
        <CommonLayout>
<section className="all-top-shape"> 
<img src={shape} alt="shape" />
</section>
<div className="all-container"> 
<div className="pr pb-5 mb-5">
    <div className="page-wrapper-all">
    <Container>
    <Row className="responise-flex-column-reverse">
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
                              <NavLink exact to="/live-users" activeClassName="active"><img src={liveicon} alt="liveicon" />Live Users</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/who-viewed-you" activeClassName="active"><img src={viewedMe} alt="viewedMe" />Who Viewed Me</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/who-likes-you" activeClassName="active"><img src={myLikes} alt="myLikes" />Who Likes Me</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/my-likes" activeClassName="active"><img src={likesMe} alt="likesMe" />My Likes</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/your-matches" activeClassName="active"><img src={yourm} alt="likesMe" />Your Matches</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/blocked-users" activeClassName="active"><img src={blockedUsers} alt="blockedUsers" />Blocked Users</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/profile" activeClassName="active"> <img src={settingView} alt="settingView" />View Profile</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/edit-basics" activeClassName="active"> <img src={settingEdit} alt="settingEdit" />Edit Profile </NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/manage-media" activeClassName="active"><img src={manageMedia} alt="manageMedia" />Manage Media</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/reset-password"><img src={settingReset} alt="settingReset" />Reset Password</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/update-location"><img src={settingUpload} alt="settingUpload" />Update Location</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/hide-profile"><img src={settingHide} alt="settingHide" />Hide Profile</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/delete-account"><img src={settingDelete} alt="settingDelete" />Delete Account</NavLink>
                           </li>
                           <li>
                              <NavLink exact to="/logout"><img src={settingLogout} alt="settingLogout" />Logout</NavLink>
                           </li>
                        </ul>
                     </div>
                 
                  </div>
                  </Col>
    <Col className="text-center" md={9}>
        <div className="profile-main-part-area-inner bg-all-pages">
            <Col md={12} className="all-title-top">
                <h4>Report</h4>
                 <p>
                Report Your Concern
                </p>
            </Col>
            <Row>
                    <Col className="text-center report-table" md={12}>
                        <Table  responsive="sm" striped className="table-report">
                            <thead>
                            <tr>
                                <th colSpan="2" className="text-start font-segoeui"><span className="reportspan"> Block "USERNAME" and remove from my search results.</span></th>
                                </tr>
                                <tr>
                                <th colSpan="2" className="text-start"><span className="reportspan"><strong>Reasons</strong></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="text-start"><span className="reportspan">Fake profile/scammer</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">User appears to be under 18 years of age</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-start"><span className="reportspan">Vulgar text in profile</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">Photos or videos obscene or illegal acts
</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">Photos or videos of minors</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">Harrassment/Stalking</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">Vulgar Language</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group  controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">Profile includes user's personal informations</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">User is married</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">References to illegal activities</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">Commercial solicitations</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">URL link to other sites</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-start"><span className="reportspan">Requested chat outside of website</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>


                            <tr>
                                <td className="text-start"><span className="reportspan">Requested money from me  
</span></td>
                                <td className="td-width-report check-report">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                </Form.Group>
                                </td>
                            </tr>


                            </tbody>
                        </Table>
                </Col>
                   </Row>

               

                   <Row>
                       <Col className="mt-12 text-center offset-md-3" md={5}>
                           <NavLink exact to="/">
                               <Button className="mt-5 text-center settings-btn font-segoeui" variant="primary">Submit</Button>
                           </NavLink>
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

export default Report;