import React ,{useEffect, useState} from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
// import { NavLink } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './profile.css';
import shape from '../../assets/images/shape2.png';
import proficon from '../../assets/images/prof-icon.jpg';
import vaccineIcon from '../../assets/images/vaccineIcon.png';
import profile from '../../assets/images/profilep.jpg';
import profile2 from '../../assets/images/photo3.jpg';
import profile3 from '../../assets/images/photo7.jpg';
import profile4 from '../../assets/images/prs.png';
import profile5 from '../../assets/images/photo6.jpg';
import profile6 from '../../assets/images/photo5.png';
import profile7 from '../../assets/images/fev1.jpg';
import profile8 from '../../assets/images/photo4.png';
import location from '../../assets/images/location.jpg';
import icon1profile from '../../assets/images/icon1.png';
import icon2profile from '../../assets/images/icon2.png';
import icon3profile from '../../assets/images/icon3.png';
import icon4profile from '../../assets/images/vidoechatcon.png';
import Dropdown from 'react-bootstrap/Dropdown';
// import videoicon from '../../assets/images/video-icon.png';
// import add1 from '../../assets/images/add1.png';
// import add2 from '../../assets/images/add2.png';
import sm1 from '../../assets/images/sm1.png';
import sm2 from '../../assets/images/sm2.png';
import sm3 from '../../assets/images/sm3.png';
import sm4 from '../../assets/images/sm4.png';
// import previcon from '../../assets/images/pre.png';
// import nexticon from '../../assets/images/next.png';
import { MdNearMe } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import gender from '../../assets/images/gender.png';
import ages from '../../assets/images/ages.png';
import race from '../../assets/images/race.png';
import maritalstatus from '../../assets/images/maritalstatus.png';
import bodytype from '../../assets/images/bodytype.png';
import havekids from '../../assets/images/havekids.png';
import wantkids from '../../assets/images/wantkids.png';
import herefor from '../../assets/images/herefor.png';
import relocate from '../../assets/images/relocate.png';
import calendar from '../../assets/images/calendar.png';
import threedots from '../../assets/images/3dots.png';
import hideicona from '../../assets/images/hideicona.png';
import blockusericon from '../../assets/images/blockusericon.png';
import reporticon from '../../assets/images/reporticon.png';
import likevac from '../../assets/images/likevac.png';
import verifiedvac from '../../assets/images/verified-vac.png';
import adda from '../../assets/images/addnew.png';
import profilicon1 from '../../assets/images/rewind.png';
import profilicon2 from '../../assets/images/x.png';
import profilicon3 from '../../assets/images/right1.png';
import profilicon4 from '../../assets/images/next1.png';
import ImageGallary from '../imageGallary/ImageGallary';
import { useModal } from 'react-hooks-use-modal';
import HideFormSearch from './HideFormSearch';
import BlockUserPro from './BlockUserPro';
import Accordion from 'react-bootstrap/Accordion'
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
import bodytype2 from '../../assets/images/body-type.png';
import kids2 from '../../assets/images/kids.png';
import wantkids2 from '../../assets/images/want-kids.png';
import herefor2 from '../../assets/images/here-for.png';
import profilevid from '../../assets/images/profilevid.png';
import editIcon from '../../assets/images/edit.png';
import Button from 'react-bootstrap/Button'
import serr from '../../assets/images/serr.png';
import utils from '../utils';

const EditProfile = () => {
  const [isShowHideFormSearch, setIsShowHideFormSearch] = useState(false);
  const [isShowBlockUser, setIsBlockUser] = useState(false);
  const [user, setUser] = useState(null);


     useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(`https://kiqko-backend.onrender.com/api/users/profile/${userId}`);
        const data = await res.json();

        if (res.ok) {
          setUser(data);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
      }
    };

    fetchUser();
  }, []);
   // Gallary Image View Start
   const gallaryImgList = [
      { imgUrl: profile, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile2, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile3, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile4, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile5, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile6, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile7, caption: 'BeBold 2022 BeBless' },
      { imgUrl: profile8, caption: 'BeBold 2022 BeBless' },
  ]
// Gallary Image View End


    // Profile Image View Start
    const [Modal, open, close] = useModal('root', {
      preventScroll: true,
      closeOnOverlayClick: false
  });

  const [imgObj, setImgObj] = useState({});
  const [imgIndex, setImgIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const profileImgList = [
      { imgUrl: profile, caption: 'BeBold 2022 BeBless' },
      // { imgUrl: img3, caption: 'Profile Picture -02' }
  ]

  function viewProfileImg(){ 
      setImgObj(profileImgList[0]);
      setImgIndex(0);
      if(profileImgList.length  <= 1){
          setIsDisabled(true);
      }
      open();
  }

  const ImgViewer = () => (
      <Modal>
          <div className="popup-modal-viewer">
                <div className="user-modal-top"> <span> <img src={imgObj.imgUrl} alt="Images..." />  </span>
                <div className="user-modal-top-details">
                <h5>Sola</h5>
                <p>Long Beach, CA-60</p>
                </div>
                <button className='btn btn_closega' onClick={close}><MdOutlineClose className="arrow-sign" /></button>
                </div>
              <div className="main-view-image"><img src={imgObj.imgUrl} alt="Images..." /></div>
              <div className="user-caption">{imgObj.caption}</div>
              {/* <div style={{ marginBottom: '10px' }} className='customizableDiv'>This is a customizable div</div> */}
              <div className="caption_title">
                    <div className="send-message-user2">
                      <p>
                      <Form.Control className="form-control" type="text" placeholder="Send her a message"/>
                        <button className="btn">Send Message</button>
                      </p>
                    </div>
                  </div>
              <button className='btn btn-next-pre left-posp' onClick={previous} disabled={isDisabled}><MdOutlineArrowBackIosNew/></button>
              <button className='btn btn-next-pre right-posp' onClick={next} disabled={isDisabled}><MdOutlineArrowForwardIos /></button>
             
          </div>
      </Modal>
  )

  function previous() {
      utils.prevImg(profileImgList, setImgObj, setImgIndex, imgIndex)
  }

  function next() {
      utils.nextImg(profileImgList, setImgObj, setImgIndex, imgIndex)
  }
  // Profile Image View End


    return (
    <CommonLayout>
          
          <ImgViewer/>

           <section className="all-top-shape"> 
           <img src={shape} alt="shape" />
           </section>
          
          <div className="all-container"> 
            <div className="pr pb-5 mb-5">
                <div className="page-wrapper-all">
                    <Container>

                        <Row className="m0-all"> 

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
                     <div className="add-banner-left add-nbanner-left2">
                        <img src={adda} alt="adda"/>
                     </div>
                     <div className="add-banner-left add-nbanner-left2 mt-5">
                        <img src={adda} alt="addb"/>
                     </div>
                  </div>
                  </Col>
                  <Col className="text-center" md={9}>
                  <div className="profile-main-part-area-inner mt-profile">
          
            
              <div className="profile-details-area">
              <div className="date-profile-top">
                <p className="member-p">Member since May 29, 2021</p>
                <div className="last-online"> <img src={calendar} alt="calendar" />Last online 1 Day 14 Hours</div>
                </div>
              <div className="profile-pic-user">
                <div className="profile-pic-avater"> <img onClick={viewProfileImg} src={profile} alt="profile" /> 
                <NavLink exact to="/manage-media"><Button className="btn-edit"><img src={editIcon} alt="editIcon" /> </Button></NavLink>
                
                </div>
                <div className="profile-next-prev">
                  {/* <Button className="btn-next-prev me-2"><img src={previcon} alt="prev" /></Button>
                  <Button className="btn-next-prev ms-2"><img src={nexticon} alt="next" /></Button> */}
                   <span className="span-icon">
                  <img src={profilicon1} alt="profilicon1" />
                  </span>
                  <span>
                  <img src={profilicon2} alt="profilicon2" />
                  </span>
                  <span>
                  <img src={profilicon3} alt="profilicon3" />
                  </span>
                  <span className="span-icon">
                  <img src={profilicon4} alt="profilicon4" />
                  </span>
                </div>
              </div>
          
                <div className="profile-user-details text-start">
                   <h1>
  {user?.username}
  <span className="icon-profile">
    <img src={proficon} alt="proficon" />
    <span className="span-tooltip-profile">
      Verified! <img src={verifiedvac} alt="verifiedvac" />
    </span>
  </span>
  <span className="span-vac-icon">
    <NavLink exact to="">
      <img src={vaccineIcon} alt="vaccineIcon" />
      <span className="span-tooltip-profile left-30">
        Yes, I’m Vaccinated <img src={likevac} alt="likevac" />
      </span>
    </NavLink>
  </span>
</h1>
                    <p className="address-p">
                      <span className="location-icon"><img src={location} alt="location" /></span>
                      Bangkok, Thailand
                      <Accordion className="acc-wrapper-custom" defaultActiveKey={['0']} alwaysOpen>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header> <img src={threedots} alt="threedots" /></Accordion.Header>
                            <Accordion.Body>
                              <div className="acc-item-inner">
                             <Dropdown.Item onClick={() => setIsShowHideFormSearch(true)}><img src={hideicona} alt="hideicona" /> Hide from search
                            </Dropdown.Item>
                            {isShowHideFormSearch && <HideFormSearch isShowHideFormSearch={isShowHideFormSearch} handleHideFormSearch={setIsShowHideFormSearch} />}

                            <Dropdown.Item onClick={() => setIsBlockUser(true)}><img src={blockusericon} alt="blockusericon" /> Block user</Dropdown.Item>
                            {isShowBlockUser && <BlockUserPro isShowBlockUser={isShowBlockUser} handleBlockUser={setIsBlockUser} />}

                            <Dropdown.Item>
                            <NavLink exact to="/report">
                            <img src={reporticon} alt="reporticon" /> Report
                            </NavLink>
                            </Dropdown.Item>
                            </div>
                            </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                      {/* <Dropdown className="dotted-drop">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img src={threedots} alt="threedots" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setIsShowHideFormSearch(true)}><img src={hideicona} alt="hideicona" /> Hide from search
                        </Dropdown.Item>
                        {isShowHideFormSearch && <HideFormSearch isShowHideFormSearch={isShowHideFormSearch} handleHideFormSearch={setIsShowHideFormSearch} />}
                       
                        <Dropdown.Item onClick={() => setIsBlockUser(true)}><img src={blockusericon} alt="blockusericon" /> Block user</Dropdown.Item>
                        {isShowBlockUser && <BlockUserPro isShowBlockUser={isShowBlockUser} handleBlockUser={setIsBlockUser} />}
                       
                        <Dropdown.Item>
                        <NavLink exact to="/report">
                          <img src={reporticon} alt="reporticon" /> Report
                          </NavLink>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown> */}
                      </p>
                  <div className="profile-user-details-inner">
                     {/* edit-user-profile */}
                <div className="edit-user-profile">
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img className="edit-icon-user" src={editIcon} alt="editIcon" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               
                <Form.Control as="textarea" rows={7} value ="Woman seeking a Man, 24-34
26, Single, Asian, 5’ 7”
Body type: Slim
Have kids: Yes, they sometimes live at home
Want kids: No
Here for: Long-tern
" />
                </Form.Group>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                {/* end edit-user-profile */}
                <h2>Woman seeking a Man, 24-34</h2>
                              <h3> <span className="pro-icon-all">26, Single, Asian, 5’ 7”</span></h3>
                              <h3><span className="pro-icon-all"> <img src={bodytype2} alt="reporticon" /> </span> Slim</h3>
                              <h3><span className="pro-icon-all"> <img src={kids2} alt="reporticon" /> </span>Yes, they sometimes live at home </h3>
                              <h3><span className="pro-icon-all"> <img src={wantkids2} alt="reporticon" /> </span>No </h3>
                              <h3><span className="pro-icon-all"> <img src={herefor2} alt="reporticon" /> </span> Long-tern</h3>
                  </div>
                </div>
                <div className="all-user-btn"> 
                  <button className="btn mes-btn"> 
                  <img src={icon1profile} alt="icon1profile" />
                  <span>Send Message</span> </button>
                  <NavLink exact to=""><button className="btn like-btn"> <img src={icon2profile} alt="icon2profile" /> <span>Like</span> </button> </NavLink>
                  <NavLink exact to=""><button className="btn block-btn"> <img src={icon3profile} alt="icon3profile" /> <span>Chat</span> </button> </NavLink>
                  <NavLink exact to=""><button className="btn online-btn"> <img src={icon4profile} alt="icon4profile" /> <span>Video Call</span> </button> </NavLink>
                  </div>
              </div>
          
              <Row className="flex-direction-custom">


              <Col md={12} className="text-start ps-5 profile-all-info mt-4">
                        <h2>
                           Headline:
              
                        </h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        </p>
                        <h2 className="mt-4">
                           Best compliment you've ever received:
                           
                        </h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        </p>
                        <h2 className="mt-4">
                        What are your dealbreakers?
                           <div className="edit-user-profile top-22">
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"> 
                <NavLink exact to="/dealbreaker">
                <img className="edit-icon-user" src={editIcon} alt="editIcon" />
                </NavLink>
                </Dropdown.Toggle>

           
                </Dropdown>
                </div>
                        </h2>
                        <p className="mt-2">
                        <span className="span-style">We're not a match if...</span> Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy 
                        </p>

                        <p>
                        <span className="span-style">We're not a match if...</span> Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy 
                        </p>
                        <p>
                        <span className="span-style">We're not a match if...</span> Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy 
                        </p>
                        </Col>
                        <Col md={12} className="mt-4">
                        <ul className="search-user-list search-user-list2 mt-0 mb-all">
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
                        </ul>
                        </Col>
      
            <Col md={12}>
              <div className="middile-part-profile">
              <div className="profile-detaild-middle">
                  <h3 className="text-start h3-all-title mb-3 mt-4">My Photos<span className="details-count ps-2">8</span></h3>
                <div className="my-photo-block">
                <ImageGallary imgList={gallaryImgList}/>  
                </div>
                <h3 className="text-start h3-all-title mt-3 mb-4">Video<span className="details-count ps-2">1</span></h3>
                              <div className="video-block">
                                 <ul>
                                    <li>
                                       <img src={profilevid} alt="profilevid" />
                                    </li>
                                 </ul>
                              </div>
                <h3 className="text-start h3-all-title mb-3 mt-3">About Me
                {/* edit-user-profile */}
                <div className="edit-user-profile top-22">
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img className="edit-icon-user" src={editIcon} alt="editIcon" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               
                <Form.Control as="textarea" rows={10} value ="Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet" />
                </Form.Group>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                {/* end edit-user-profile */}
                </h3>
                  <p className="text-start p-details-profile"> Lorem ipsum dolor sit amet, consectetuer adipuiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
              
              <h3 className="text-start h3-all-title mb-3 mt-2">I’m looking for…
              <NavLink exact to="/basics"><Button className="btn-edit2"><img src={editIcon} alt="editIcon" /> </Button></NavLink>
              </h3>
              <Row>
                <Col md={8}>
                 <ul className="ul-looking-for">
                   <li><img src={gender} alt="gender" /><span>Man</span></li>
                   <li><img src={ages} alt="ages" /><span>24-34</span></li>
                   <li><img src={race} alt="race" /><span>White, Asian, Black, Middle Eastern</span></li>
                   <li><img src={maritalstatus} alt="maritalstatus" /><span>Any</span></li>
                   <li><img src={bodytype} alt="bodytype" /><span>Any</span></li>
                 </ul>
                 
                </Col>
                <Col md={4}>
                <ul className="ul-looking-for">
                   <li><img src={havekids} alt="havekids" /><span>No</span></li>
                   <li><img src={wantkids} alt="wantkids" /><span>No</span></li>
                   <li><img src={herefor} alt="herefor" /><span>Long-term</span></li>
                   <li><img src={relocate} alt="relocate" /><span>No</span></li>
                 </ul>
                </Col>
              </Row>
              
              <h3 className="text-start h3-all-title mt-3 mb-3">Say Hello to Anna1234</h3>
               <div className="search-user-profile">
                  <Form>
                  <Form.Group className="mb-2">
                  <Form.Control className="form-custom" type="text" placeholder="Type your message here" />
                  <span className="send-span"><MdNearMe className="arrow-sign" /></span>
                  </Form.Group>
                  </Form>

               </div>
                </div> 
              </div>
            </Col>
              {/* md-9 */}
            </Row>
        </div>
                            </Col>
                        </Row>


               
                <div className="similar-user">
                  <h5>Similar Users</h5>
                  <Row>
                <Col md={3}>
                  <div className="similar-user-block">
                  <NavLink exact to="">
                  <img className="sm-user-profile" src={sm1} alt="sm1" />
                  <div className="simler-user-details">
                   <h6> Mary123</h6>
                  <p> 31, Female, Single</p>
                  <p> Lomita, CA</p>
                  </div>
                  </NavLink>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="similar-user-block">
                  <NavLink exact to="">
                  <img className="sm-user-profile" src={sm2} alt="sm2" />
                  <div className="simler-user-details">
                   <h6> Suzy</h6>
                  <p> Mary123</p>
                  <p> Lomita, CA</p>
                  </div>
                  </NavLink>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="similar-user-block">
                  <NavLink exact to="">
                  <img className="sm-user-profile" src={sm3} alt="sm3" />
                  <div className="simler-user-details">
                   <h6> Mary123</h6>
                  <p> 31, Female, Single</p>
                  <p> Lomita, CA</p>
                  </div>
                  </NavLink>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="similar-user-block">
                  <NavLink exact to="">
                  <img className="sm-user-profile" src={sm4} alt="sm4" />
                  <div className="simler-user-details">
                   <h6> Suzy</h6>
                  <p> 31, Female, Single</p>
                   <p> Lomita, CA</p>
                  </div>
                  </NavLink>
                  </div>
                </Col>
                
                </Row>   
                </div>
               
                    </Container>
                </div>
                
            </div>
            </div>
    </CommonLayout>
    );
};

export default EditProfile;