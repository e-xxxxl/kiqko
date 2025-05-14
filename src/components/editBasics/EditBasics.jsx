import React, { useState } from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import './editBasics.css';
import shape from '../../assets/images/shape2.png';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';


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
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const EditBasics = () => {
const [formData, setFormData] = useState({
    gender: '',
    birthDate: {
      month: '',
      day: '',
      year: ''
    },
    ethnicity: '',
    maritalStatus: '',
    height: '165cm - (5\'5")',
    age: '19', // Add this line with a default value
    bodyType: '',
    hasKids: '',
    wantsKids: '',
    hereFor: '',
    wouldRelocate: ''
});
   const userId = localStorage.getItem('userId');

    const history = useHistory();
     const [loading, setLoading] = useState(true);


 const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBirthdayChange = (part, value) => {
    setFormData(prev => ({
      ...prev,
      birthDate: {
        ...prev.birthDate,
        [part]: value
      }
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { month, day, year } = formData.birthDate;

  // Convert to valid date string: "YYYY-MM-DD"
  const formattedBirthDate = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);

  // Replace birthDate object with proper Date
  const formattedData = {
    ...formData,
    birthDate: formattedBirthDate,
  };
    try {
      const res = await fetch(`https://kiqko-backend.onrender.com/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData)
      });
      if (res.ok) {
       history.push('/profile')
      }
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  // if (loading) return <div>Loading...</div>;

  
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

             
                    
                </div>
            </Col>
    <Col md={9}>
        {/* <div className="profile-main-part-area-inner bg-all-pages">
            <Col md={12} className="all-title-top mb-4 text-center">
                <h4>Edit Basics</h4>
            </Col>

      
            <div className="page-wrapper-all">
                    
                    <div className="pageWrapper-inner mt-5 basic-page basic-page-full">
                        <Row className="m-0-responsive">
                            <Col md={12}>
                                <label className="labelForm">I am a</label>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Female" disabled name="gender"/>
                                    <label for="Female">Woman</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Male" disabled name="gender"/>
                                    <label for="Male">Man</label>
                                </Button>
                            </Col>
                        </Row>

                        <Row className="row-custom-width m-0-responsive">
                            <label className="labelForm mt-4">Birthday</label>
                            <Col className="ps-1 p-ends-res pe-2" md={4}>
                                        <Form.Select className="form-custom-inner brder-form" size="lg" disabled>
                                            <option>Month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </Form.Select>
                                    </Col>
                                    <Col className="ps-2 p-ends-res pe-1" md={4}>
                                        <Form.Select className="form-custom-inner brder-form" size="lg" disabled>
                                            <option>Day</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </Form.Select>
                                    </Col>
                                    <Col className="pe-2" md={4}>
                                        <Form.Select className="form-custom-inner brder-form" size="lg" disabled>
                                            <option Year>Year</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                            <option value="1969">1969</option>
                                            <option value="1968">1968</option>
                                            <option value="1967">1967</option>
                                            <option value="1966">1966</option>
                                            <option value="1965">1965</option>
                                            <option value="1964">1964</option>
                                            <option value="1963">1963</option>
                                            <option value="1962">1962</option>
                                            <option value="1961">1961</option>
                                            <option value="1960">1960</option>
                                            <option value="1959">1959</option>
                                            <option value="1958">1958</option>
                                            <option value="1957">1957</option>
                                            <option value="1956">1956</option>
                                            <option value="1955">1955</option>
                                            <option value="1954">1954</option>
                                            <option value="1953">1953</option>
                                            <option value="1952">1952</option>
                                            <option value="1951">1951</option>
                                            <option value="1950">1950</option>
                                            <option value="1949">1949</option>
                                            <option value="1948">1948</option>
                                            <option value="1947">1947</option>
                                            <option value="1946">1946</option>
                                            <option value="1945">1945</option>
                                            <option value="1944">1944</option>
                                            <option value="1943">1943</option>
                                            <option value="1942">1942</option>
                                            <option value="1941">1941</option>
                                            <option value="1940">1940</option>
                                            <option value="1939">1939</option>
                                            <option value="1938">1938</option>
                                            <option value="1937">1937</option>
                                            <option value="1936">1936</option>
                                            <option value="1935">1935</option>
                                            <option value="1934">1934</option>
                                            <option value="1933">1933</option>
                                            <option value="1932">1932</option>
                                            <option value="1931">1931</option>
                                            <option value="1930">1930</option>
                                            <option value="1929">1929</option>
                                            <option value="1928">1928</option>
                                            <option value="1927">1927</option>
                                            <option value="1926">1926</option>
                                            <option value="1925">1925</option>
                                        </Form.Select>
                                    </Col>
                        </Row>

                        <Row className="m-0-responsive">
                            <Col className="mt-4 pt-3" md={12}>
                                <label className="labelForm">Race</label>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="White" disabled name="race"/>
                                  <label for="White">White / Caucasian</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Asian"  disabled name="race"/>
                                  <label for="Asian">Asian</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Blacka" disabled name="race"/>
                                  <label for="Blacka"> Black / African Decent</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Latino" disabled name="race"/>
                                  <label for="Latino">  Latino / Hispanic</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Northa" disabled name="race"/>
                                  <label for="Northa"> North American</label>
                                </Button>
                               
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Easti" disabled name="race"/>
                                  <label for="Easti"> East Indian</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="PacificI" disabled name="race"/>
                                  <label for="PacificI">Pacific Islander</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="MiddleEastern" disabled name="race"/>
                                  <label for="MiddleEastern"> Middle Eastern</label>
                                </Button>
                               
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="MixedRace" disabled name="race"/>
                                  <label for="MixedRace"> Mixed Race</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="OtherRace" disabled name="race"/>
                                  <label for="OtherRace"> Other Race</label>
                                </Button>
                                
                            </Col>
                        </Row>

                        <Row className="m-0-responsive">
                            <Col className="mt-4 pt-3" md={12}>
                                <label className="labelForm">Marital Status</label>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Single" name="maritalStatus"/>
                                  <label className="btn-mid" for="Single">Single</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Divorced" name="maritalStatus"/>
                                  <label className="btn-mid" for="Divorced"> Divorced</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Separated" name="maritalStatus"/>
                                  <label className="btn-mid" for="Separated">Separated</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Widowed" name="maritalStatus"/>
                                  <label className="btn-mid" for="Widowed"> Widowed</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Attached" name="maritalStatus"/>
                                  <label className="btn-mid" for="Attached">Attached</label>
                                </Button>
                            </Col>
                        </Row>

                        <Row className="m-0-responsive">
                            <label className="labelForm mt-4">Height</label>
                            <Col className="pe-0" md={3}>
                            <Form.Select className="form-custom-inner brder-form font-small" disabled size="lg">
                                    <option>150cm - (4'11")</option>
                                    <option>152cm - (5'0")</option>
                                    <option>155cm - (5'1")</option>
                                    <option>157cm - (5'2")</option>
                                    <option>160cm - (5'3")</option>
                                    <option>163cm - (5'4")</option>
                                    <option value="165cm" selected="selected">165cm - (5'5")</option>
                                    <option>168cm - (5'6")</option>
                                    <option>170cm - (5'7")</option>
                                    <option>173cm - (5'8")</option>
                                    <option>175cm - (5'9")</option>
                                    <option>178cm - (5'10")</option>
                                    <option>180cm - (5'11")</option>
                                    <option>183cm - (6'0")</option>
                                    <option>185cm - (6'1")</option>
                                    <option>188cm - (6'2")</option>
                                    <option>191cm - (6'3")</option>
                                    <option>193cm - (6'4")</option>
                                    <option>195cm - (6'5")</option>
                                    <option>198cm - (6'6")</option>
                                    <option>201cm - (6'7")</option>
                                    <option>203cm - (6'8"</option>
                                    <option>205cm - (6'9")</option>
                                    <option>208cm - (6'10")</option>
                                    <option>210cm - (6'11")</option>
                                    <option>213cm - (7'0")</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="m-0-responsive">
                            <Col className="mt-4 pt-3 body-type-btnr" md={12}>
                                <label className="labelForm">Body Type</label>
                                
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Slim" name="bodyType"/>
                                  <label for="Slim"> Slim / Slender</label>
                                </Button>
                                
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Athleticf" name="bodyType"/>
                                  <label for="Athleticf">Athletic / Fit</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Average2" name="bodyType"/>
                                  <label for="Average2">Average</label>
                                </Button>


                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Curvy" name="bodyType"/>
                                  <label for="Curvy">Curvy</label>
                                </Button>
                               
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Muscular" name="bodyType"/>
                                  <label for="Muscular">Muscular</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="extra" name="bodyType"/>
                                  <label for="extra" className="btn-mid-small"> A few extra pounds</label>
                                </Button>

                                
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Beautiful" name="bodyType"/>
                                  <label for="Beautiful" className="btn-mid-small"> Big and Beautiful</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Heavy" name="bodyType"/>
                                  <label for="Heavy"> Heavy</label>
                                </Button>
                               
                            </Col>
                        </Row>
                        <Row className="m-0-responsive">
                            <Col className="mt-4 pt-3 kid-btn" md={12}>
                                <label className="labelForm">Have Kids</label>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="No" name="kids"/>
                                    <label for="No">No</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="liveathome" name="kids"/>
                                    <label for="liveathome">Yes, they live at home</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="sometimeshome" name="kids"/>
                                    <label for="sometimeshome">Yes, they sometimes live at home</label>
                                </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="liveawayfromhome" name="kids"/>
                                    <label for="liveawayfromhome">Yes, they live away from home</label>
                                </Button>

                                
                            </Col>
                        </Row>

                        <Row className="m-0-responsive">
                            <Col className="mt-4 pt-3 kid-btn" md={12}>
                                <label className="labelForm">Want Kids</label>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="wYes" name="wantkids"/>
                                    <label for="wYes">Yes</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="wNo" name="wantkids"/>
                                    <label for="wNo">No</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="wMaybe" name="wantkids"/>
                                    <label for="wMaybe">Maybe</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Uwndecided" name="wantkids"/>
                                    <label for="Uwndecided">Undecided</label>
                                </Button>
                                
                                
                            </Col>
                        </Row>

                        <Row className="m-0-responsive here-for">
                            <Col className="mt-4 pt-3 kid-btn" md={12}>
                                <label className="labelForm">Here For</label>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Longterm" name="hereFor"/>
                                  <label className="btn-mid" for="Longterm">Long-term</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                        <input type="radio" id="shortterm" name="hereFor"/>
                                          <label className="btn-mid" for="shortterm">Short-term</label>
                                        </Button>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Dating" name="hereFor"/>
                                  <label for="Dating">Dating</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="Friendship" name="hereFor"/>
                                  <label for="Friendship">Friendship</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                <input type="radio" id="HangoutBuddy" name="hereFor"/>
                                  <label for="HangoutBuddy">Hangout Buddy</label>
                                </Button>
                            </Col>
                        </Row>

                        <Row className="m-0-responsive">
                            <Col className="mt-4 pt-3 kid-btn" md={12}>
                                <label className="labelForm">Relocate</label>

                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Nor" name="relocate"/>
                                    <label for="Nor">No</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Yesr" name="relocate"/>
                                    <label for="Yesr">Yes</label>
                                </Button>
                                <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Undecidedr" name="relocate"/>
                                    <label for="Undecidedr">Undecided</label>
                                </Button>
                            </Col>
                        </Row>

                        <Row>
                        <Col className="mt-12 mt-5" md={12}>
                            <NavLink exact to="/">
                                <Button className="all-btn-round mt-4 text-center" variant="primary">NEXT</Button>
                            </NavLink>
                        </Col>
                    </Row>
                    </div>
                
         

            </div>
       
       

        </div> */}

          <div className="profile-main-part-area-inner bg-all-pages">
      <Col md={12} className="all-title-top mb-4 text-center">
        <h4>Edit Basics</h4>
      </Col>

      <div className="page-wrapper-all">
        <div className="pageWrapper-inner mt-5 basic-page basic-page-full">
          <form onSubmit={handleSubmit}>
            {/* Gender Selection */}
            <Row className="m-0-responsive">
              <Col md={12}>
                <label className="labelForm">I am a</label>
                <Button 
                  className={`formBtn all-select-btnr ${formData.gender === 'Woman' ? 'active' : ''}`}
                  variant="primary"
                  onClick={() => handleChange('gender', 'Woman')}
                  type="button"
                >
                  <input 
                    type="radio" 
                    id="Female" 
                    checked={formData.gender === 'Woman'}
                    onChange={() => {}}
                  />
                  <label htmlFor="Female">Woman</label>
                </Button>
                <Button 
                  className={`formBtn all-select-btnr ${formData.gender === 'Man' ? 'active' : ''}`}
                  variant="primary"
                  onClick={() => handleChange('gender', 'Man')}
                  type="button"
                >
                  <input 
                    type="radio" 
                    id="Male" 
                    checked={formData.gender === 'Man'}
                    onChange={() => {}}
                  />
                  <label htmlFor="Male">Man</label>
                </Button>
              </Col>
            </Row>

            {/* Birthday Selection */}
            <Row className="row-custom-width m-0-responsive">
              <label className="labelForm mt-4">Birthday</label>
              <Col className="ps-1 p-ends-res pe-2" md={4}>
                <Form.Select 
                  className="form-custom-inner brder-form" 
                  size="lg"
                  value={formData.birthDate.month}
                  onChange={(e) => handleBirthdayChange('month', e.target.value)}
                >
                  <option value="">Month</option>
                  {Array.from({length: 12}, (_, i) => (
                    <option key={i+1} value={i+1}>
                      {new Date(0, i).toLocaleString('default', {month: 'long'})}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col className="ps-2 p-ends-res pe-1" md={4}>
                <Form.Select 
                  className="form-custom-inner brder-form" 
                  size="lg"
                  value={formData.birthDate.day}
                  onChange={(e) => handleBirthdayChange('day', e.target.value)}
                >
                  <option value="">Day</option>
                  {Array.from({length: 31}, (_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col className="pe-2" md={4}>
                <Form.Select 
                  className="form-custom-inner brder-form" 
                  size="lg"
                  value={formData.birthDate.year}
                  onChange={(e) => handleBirthdayChange('year', e.target.value)}
                >
                  <option value="">Year</option>
                  {Array.from({length: 100}, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </Form.Select>
              </Col>
            </Row>

            {/* Ethnicity Selection */}
            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3" md={12}>
                <label className="labelForm">Race</label>
                {[
                  'White / Caucasian',
                  'Asian',
                  'Black / African Decent',
                  'Latino / Hispanic',
                  'North American',
                  'East Indian',
                  'Pacific Islander',
                  'Middle Eastern',
                  'Mixed Race',
                  'Other Race'
                ].map(race => (
                  <Button 
                    key={race}
                    className={`formBtn all-select-btnr ${formData.ethnicity === race ? 'active' : ''}`}
                    variant="primary"
                    onClick={() => handleChange('ethnicity', race)}
                    type="button"
                  >
                    <input 
                      type="radio" 
                      id={race.replace(/\s+/g, '')} 
                      checked={formData.ethnicity === race}
                      onChange={() => {}}
                    />
                    <label htmlFor={race.replace(/\s+/g, '')}>{race}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            {/* Marital Status */}
            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3" md={12}>
                <label className="labelForm">Marital Status</label>
                {['Single', 'Divorced', 'Separated', 'Widowed', 'Attached'].map(status => (
                  <Button 
                    key={status}
                    className={`formBtn all-select-btnr ${formData.maritalStatus === status ? 'active' : ''}`}
                    variant="primary"
                    onClick={() => handleChange('maritalStatus', status)}
                    type="button"
                  >
                    <input 
                      type="radio" 
                      id={status} 
                      checked={formData.maritalStatus === status}
                      onChange={() => {}}
                    />
                    <label className="btn-mid" htmlFor={status}>{status}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            {/* Height */}
            <Row className="m-0-responsive">
              <label className="labelForm mt-4">Height</label>
              <Col className="pe-0" md={3}>
                <Form.Select 
                  className="form-custom-inner brder-form font-small" 
                  size="lg"
                  value={formData.height}
                  onChange={(e) => handleChange('height', e.target.value)}
                >
                  {[
                    '150cm - (4\'11")', '152cm - (5\'0")', '155cm - (5\'1")', '157cm - (5\'2")',
                    '160cm - (5\'3")', '163cm - (5\'4")', '165cm - (5\'5")', '168cm - (5\'6")',
                    '170cm - (5\'7")', '173cm - (5\'8")', '175cm - (5\'9")', '178cm - (5\'10")',
                    '180cm - (5\'11")', '183cm - (6\'0")', '185cm - (6\'1")', '188cm - (6\'2")',
                    '191cm - (6\'3")', '193cm - (6\'4")', '195cm - (6\'5")', '198cm - (6\'6")',
                    '201cm - (6\'7")', '203cm - (6\'8")', '205cm - (6\'9")', '208cm - (6\'10")',
                    '210cm - (6\'11")', '213cm - (7\'0")'
                  ].map(height => (
                    <option key={height} value={height}>{height}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

  {/* Age */}
<Row className="m-0-responsive">
  <label className="labelForm mt-4">Age</label>
  <Col className="pe-0" md={3}>
    <Form.Select 
      className="form-custom-inner brder-form font-small" 
      size="lg"
      value={formData.age}
      onChange={(e) => handleChange('age', e.target.value)}
    >
     {Array.from({length: 82}, (_, i) => i + 19).map(age => (
        <option key={age} value={age.toString()}>{age}</option>
      ))}
    </Form.Select>
  </Col>
</Row>

            {/* Body Type */}
            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3 body-type-btnr" md={12}>
                <label className="labelForm">Body Type</label>
                {[
                  'Slim / Slender', 'Athletic / Fit', 'Average', 'Curvy',
                  'Muscular', 'A few extra pounds', 'Big and Beautiful', 'Heavy'
                ].map(type => (
                  <Button 
                    key={type}
                    className={`formBtn all-select-btnr ${formData.bodyType === type ? 'active' : ''}`}
                    variant="primary"
                    onClick={() => handleChange('bodyType', type)}
                    type="button"
                  >
                    <input 
                      type="radio" 
                      id={type.replace(/\s+/g, '')} 
                      checked={formData.bodyType === type}
                      onChange={() => {}}
                    />
                    <label htmlFor={type.replace(/\s+/g, '')}>{type}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            {/* Have Kids */}
            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3 kid-btn" md={12}>
                <label className="labelForm">Have Kids</label>
                {[
                  'No',
                  'Yes, they live at home',
                  'Yes, they sometimes live at home',
                  'Yes, they live away from home'
                ].map(option => (
                  <Button 
                    key={option}
                    className={`formBtn all-select-btnr ${formData.hasKids === option ? 'active' : ''}`}
                    variant="primary"
                    onClick={() => handleChange('hasKids', option)}
                    type="button"
                  >
                    <input 
                      type="radio" 
                      id={option.replace(/\s+/g, '')} 
                      checked={formData.hasKids === option}
                      onChange={() => {}}
                    />
                    <label htmlFor={option.replace(/\s+/g, '')}>{option}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            {/* Want Kids */}
            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3 kid-btn" md={12}>
                <label className="labelForm">Want Kids</label>
                {['Yes', 'No', 'Maybe', 'Undecided'].map(option => (
                  <Button 
                    key={option}
                    className={`formBtn all-select-btnr ${formData.wantsKids === option ? 'active' : ''}`}
                    variant="primary"
                    onClick={() => handleChange('wantsKids', option)}
                    type="button"
                  >
                    <input 
                      type="radio" 
                      id={`w${option}`} 
                      checked={formData.wantsKids === option}
                      onChange={() => {}}
                    />
                    <label htmlFor={`w${option}`}>{option}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            {/* Here For */}
            <Row className="m-0-responsive here-for">
              <Col className="mt-4 pt-3 kid-btn" md={12}>
                <label className="labelForm">Here For</label>
                {['Long-term', 'Short-term', 'Dating', 'Friendship', 'Hangout Buddy'].map(option => (
                  <Button 
                    key={option}
                    className={`formBtn all-select-btnr ${formData.hereFor === option ? 'active' : ''}`}
                    variant="primary"
                    onClick={() => handleChange('hereFor', option)}
                    type="button"
                  >
                    <input 
                      type="radio" 
                      id={option.replace(/\s+/g, '')} 
                      checked={formData.hereFor === option}
                      onChange={() => {}}
                    />
                    <label htmlFor={option.replace(/\s+/g, '')}>{option}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            {/* Relocate */}
            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3 kid-btn" md={12}>
                <label className="labelForm">Relocate</label>
                {['No', 'Yes', 'Undecided'].map(option => (
                  <Button 
                    key={option}
                    className={`formBtn all-select-btnr ${formData.wouldRelocate === option ? 'active' : ''}`}
                    variant="primary"
                    onClick={() => handleChange('wouldRelocate', option)}
                    type="button"
                  >
                    <input 
                      type="radio" 
                      id={`${option}r`} 
                      checked={formData.wouldRelocate === option}
                      onChange={() => {}}
                    />
                    <label htmlFor={`${option}r`}>{option}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            <Row>
              <Col className="mt-12 mt-5" md={12}>
                <Button 
                  type="submit" 
                  className="all-btn-round mt-4 text-center" 
                  variant="primary"
                >
                  SAVE CHANGES
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  {/* );
}; */}
    </Col>
    </Row>
    </Container>
    </div>

</div>
</div>
</CommonLayout>
    );
};

export default EditBasics;