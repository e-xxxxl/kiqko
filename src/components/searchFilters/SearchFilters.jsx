import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import shape from '../../assets/images/shape2.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowForward } from "react-icons/md";
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
const SearchFilters = (props) => {
    return (

<CommonLayout>
<section className="all-top-shape"> 
<img src={shape} alt="shape" />
</section>
<div className="all-container"> 
<div className="pb-5 mb-5">
    <div className="page-wrapper-all">
    <Container className="width-full-responsive">
    <Row className="responise-flex-column-reverse m0-all">
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
                           <NavLink exact to="/profile" activeClassName="active"><img src={homea} alt="homea" />HOME</NavLink>
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
        <div className="profile-main-part-area-inner bg-all-pages margin-top-sear-filter pl-r-pr-r width-extra">
            <Col md={12} className="all-title-top mb-4 text-center">
            <h4>Search Filters</h4>
                {/* <h4 className="search-filter-h4">Search Filters</h4> */}
            </Col>

            
                <div className="page-wrapper-all">
                    
                        <div className="pageWrapper-inner mt-5">
                        <Row className="m-0-responsive">
                            <h4 className="sarch-sub-deading">Distance Search</h4>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                        <Form.Control className="form-custom" type="text" placeholder="City / Town" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                        <Form.Control className="form-custom" type="text" placeholder="State / Province" />
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Select className="form-custom" size="lg">
                        <option>Country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Central African Republic (CAR)">Central African Republic (CAR)</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Democratic Republic of Congo">Democratic Republic of Congo</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Eswatini (formerly Swaziland)">Eswatini (formerly Swaziland)</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="Frech Polynesia">Frech Polynesia</option>
                    <option value="French Southern & Antarctic Lands">French Southern & Antarctic Lands</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Glorioso Islands">Glorioso Islands</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey Island">Guernsey Island</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island & McDonald Islands">Heard Island & McDonald Islands</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Jan Mayen">Jan Mayen</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Juan de Nova Island">Juan de Nova Island</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="No Man's Land">No Man's Land</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="North Macedonia (formerly Macedonia)">North Macedonia (formerly Macedonia)</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Pitcain Islands">Pitcain Islands</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre & Miquelon">Saint Pierre & Miquelon</option>
                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Sloveni">Sloveni</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia & the South Sandwich Islands">South Georgia & the South Sandwich Islands</option>
                    <option value="South Korea">South Korea</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Spratly Islands">Spratly Islands</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard">Svalbard</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks & Caicos Islands">Turks & Caicos Islands</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Walls and Futuna">Walls and Futuna</option>
                    <option value="West Bank">West Bank</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                        </Form.Select>
                    </Col>

                    <Col md={6} className="mar-top-8">
                        <Form.Group className="mb-2">
                        <Form.Control className="form-custom" type="text" placeholder="Zip / Postal Code" />
                        </Form.Group>
                    </Col>
             
                        {/* <Col md={6} className="text-center btn-modal-round mt-3">
                        <NavLink exact to="/">
                            <Button className="full-width btn-all-landing margin-all-modal-btn btn" variant="link">
                        Save<MdOutlineArrowForward className="arrow-sign" />
                        </Button>
                        </NavLink>
                    </Col> */}
                    
                    <Col md={6} className="text-center btn-modal-round mt-3 mt-1-res offset-md-3">
                        <NavLink exact to="/search-results">
                            <Button className="full-width btn-all-landing margin-all-modal-btn btn" variant="link">
                        Save & Search<MdOutlineArrowForward className="arrow-sign" />
                        </Button>
                        </NavLink>
                    </Col>
                    <hr className="hr-color mt-2"></hr>
                    </Row>
                 
                     
                            <Row>
                            <h4 className="sarch-sub-deading mb-3 mt-3">Advanced Search</h4>
                                <Col md={12} className="pr-0-responsive">
                                    <label className="labelForm">I'm Seeking a</label>
                                    {/* activebtn class need to use for active button */}
                                    <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Mans" name="sgender"/>
                                    <label for="Mans">Woman</label>
                                 </Button>
                                  
                                 <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Womans" name="sgender"/>
                                    <label for="Womans">Man</label>
                                 </Button>
                                   
                                </Col>
                            </Row>

                            <Row className ="row-custom-width row">
                                <label className="labelForm mt-4">Between the ages of </label>
                                <Col className="pe-0" md={4}>
                                    <Form.Select className="form-custom-inner brder-form" size="lg">
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26" selected="selected">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>
                                        <option value="51">51</option>
                                        <option value="52">52</option>
                                        <option value="53">53</option>
                                        <option value="54">54</option>
                                        <option value="55">55</option>
                                        <option value="56">56</option>
                                        <option value="57">57</option>
                                        <option value="58">58</option>
                                        <option value="59">59</option>
                                        <option value="60">60</option>
                                        <option value="61">61</option>
                                        <option value="62">62</option>
                                        <option value="63">63</option>
                                        <option value="64">64</option>
                                        <option value="65">65</option>
                                        <option value="66">66</option>
                                        <option value="67">67</option>
                                        <option value="68">68</option>
                                        <option value="69">69</option>
                                        <option value="70">70</option>
                                        <option value="71">71</option>
                                        <option value="72">72</option>
                                        <option value="73">73</option>
                                        <option value="74">74</option>
                                        <option value="75">75</option>
                                        <option value="76">76</option>
                                        <option value="77">77</option>
                                        <option value="78">78</option>
                                        <option value="79">79</option>
                                    </Form.Select>
                                </Col>
                                <Col className="ps-1 pe-0 text-center" md={1}>
                                    <span className="to-span"><strong>to</strong></span>
                                </Col>
                                <Col className="ps-1 ps-0 pl-13px" md={4}>
                                    <Form.Select className="form-custom-inner brder-form" size="lg">
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
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34" selected="selected">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>
                                        <option value="51">51</option>
                                        <option value="52">52</option>
                                        <option value="53">53</option>
                                        <option value="54">54</option>
                                        <option value="55">55</option>
                                        <option value="56">56</option>
                                        <option value="57">57</option>
                                        <option value="58">58</option>
                                        <option value="59">59</option>
                                        <option value="60">60</option>
                                        <option value="61">61</option>
                                        <option value="62">62</option>
                                        <option value="63">63</option>
                                        <option value="64">64</option>
                                        <option value="65">65</option>
                                        <option value="66">66</option>
                                        <option value="67">67</option>
                                        <option value="68">68</option>
                                        <option value="69">69</option>
                                        <option value="70">70</option>
                                        <option value="71">71</option>
                                        <option value="72">72</option>
                                        <option value="73">73</option>
                                        <option value="74">74</option>
                                        <option value="75">75</option>
                                        <option value="76">76</option>
                                        <option value="77">77</option>
                                        <option value="78">78</option>
                                        <option value="79">79</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row className="me-0">
                            <Col className="mt-4 pe-0 pt-3" md={12}>
                                    <label className="labelForm">Race</label>
                                    
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="WhiteCaucasians" name="WhiteCaucasians"/>
                                    <label for="WhiteCaucasians"> White / Caucasian</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Asians" name="Asians"/>
                                    <label for="Asians">Asian</label>
                                    </Button>
                                    
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="BlackAfricanDecent" name="BlackAfricanDecent"/>
                                    <label for="BlackAfricanDecent">Black / African Decent</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="EastIndians" name="EastIndians"/>
                                    <label for="EastIndians">East Indian</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="LatinoHispanics" name="LatinoHispanics"/>
                                    <label for="LatinoHispanics">Latino / Hispanic</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="MiddleEasterns" name="MiddleEasterns"/>
                                    <label for="MiddleEasterns">Middle Eastern</label>
                                    </Button>
                                   
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="MixedRaces" name="MixedRaces"/>
                                    <label for="MixedRaces">Mixed Race</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="NativeAmericans" name="NativeAmericans"/>
                                    <label for="NativeAmericans">Native American</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="PacificIslanders" name="PacificIslanders"/>
                                    <label for="PacificIslanders">Pacific Islander</label>
                                    </Button>
                                  
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Anys" name="Anys"/>
                                    <label for="Anys">Any</label>
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                            <Col className="mt-4 pt-3" md={12}>
                                    <label className="labelForm">Marital Status</label>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Singles" name="Singles"/>
                                    <label for="Singles">Single</label>
                                    </Button>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Divorceds" name="Divorceds"/>
                                    <label for="Divorceds">Divorced</label>
                                    </Button>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Separateds" name="Separated"s/>
                                    <label for="Separateds">Separated</label>
                                    </Button>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Widoweds" name="Widoweds"s/>
                                    <label for="Widoweds">Widowed</label>
                                    </Button>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Attacheds" name="Attacheds"s/>
                                    <label for="Attacheds">Attached</label>
                                    </Button>
                                    
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Anyss" name="Anyss"/>
                                    <label for="Anyss">Any</label>
                                    </Button>

                                   
                                </Col>
                            </Row>

                            <Row className ="row-custom-width row">
                                <label className="labelForm mt-4">Height</label>
                                <Col className="pe-0" md={5}>
                                <Form.Select className="form-custom-inner brder-form font-small" size="lg">
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
                               
                                <Col className="ps-1 ps-0 pl-13px mar-top-8" md={5}>
                                <Form.Select className="form-custom-inner brder-form font-small" size="lg">
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
                            <Row>
                            <Col className="mt-4 pt-3 body-type-btn" md={12}>
                                    <label className="labelForm">Body Type</label>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="SlimSlenders" name="SlimSlenders"/>
                                    <label for="SlimSlenders">Slim / Slender</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="AthleticFits" name="AthleticFits"/>
                                    <label for="AthleticFits">Athletic / Fit</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Averages" name="Averages"/>
                                    <label for="Averages">Average</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Curvyss" name="Curvyss"/>
                                    <label for="Curvyss">Curvy</label>
                                    </Button>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Muscularss" name="Muscularss"/>
                                    <label for="Muscularss">Muscular</label>
                                    </Button>
                                   
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="extrapoundss" name="extrapoundss"/>
                                    <label className="btn-mid-small" for="extrapoundss">A few extra pounds</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Beautifulss" name="Beautifulss"/>
                                    <label className="btn-mid-small" for="Beautifulss">Big and Beautiful</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Heavyss" name="Heavyss"/>
                                    <label for="Heavyss">Heavy</label>
                                    </Button>
                                    
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Anybs" name="Anybs"/>
                                    <label for="Anybs">Any</label>
                                    </Button>
                                   
                                </Col>
                            </Row>



                            <Row>
                                <Col className="mt-4 pt-3 kid-btn" md={12}>
                                    <label className="labelForm">Have Kids</label>
                                    <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Nohs" name="havek"/>
                                    <label for="Nohs">No</label>
                                     </Button>
                                     <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Yeshs" name="havek"/>
                                    <label for="Yeshs">Yes</label>
                                     </Button>
                                     <Button className="formBtn all-select-btnr" variant="primary">
                                    <input type="radio" id="Anyhs" name="havek"/>
                                    <label for="Anyhs">Any</label>
                                     </Button>
                                    
                                   
                                   
                                </Col>
                            </Row>

                            <Row>
                            <Col className="mt-4 pt-3 kid-btn" md={12}>
                                    <label className="labelForm">Want Kids</label>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Yeswk" name="Yeswk"/>
                                    <label for="Yeswk">Yes</label>
                                     </Button>
                                     <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Nowk" name="Nowk"/>
                                    <label for="Nowk">No</label>
                                     </Button>
                                     <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Maybek" name="Maybek"/>
                                    <label for="Maybek">Maybe</label>
                                     </Button>
                                     <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Anywk" name="Anywk"/>
                                    <label for="Anywk">Any</label>
                                     </Button>
                                   
                                </Col>
                            </Row>

                            <Row className="m-0-responsive here-for">
                                <Col className="mt-4 pt-3 kid-btn" md={12}>
                                    <label className="labelForm">Here For</label>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="hLongterm" name="hLongterm"/>
                                    <label for="hLongterm">Long-term</label>
                                    </Button>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="shortterm" name="shortterm"/>
                                    <label for="shortterm">Short-term</label>
                                    </Button>

                                  
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="hDating" name="hDating"/>
                                    <label for="hDating">Dating</label>
                                    </Button>
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Friendship" name="Friendship"/>
                                    <label for="Friendship">Friendship</label>
                                    </Button>
                                    
                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="HangoutBuddyh" name="HangoutBuddyh"/>
                                    <label for="HangoutBuddyh">Hangout Buddy</label>
                                    </Button>

                                    <Button className="formBtn all-select-btn" variant="primary">
                                    <input type="checkbox" id="Anyhf" name="Anyhf"/>
                                    <label for="Anyhf">Any</label>
                                    </Button>
                                    
                                    
                                </Col>
                            </Row>

                            <Row>
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
                                    <input type="radio" id="rAny" name="relocate"/>
                                    <label className="btn-mid" for="rAny">Any</label>
                                </Button>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                          
                            <Col className="mt-12 mt-5 mar-top-8 offset-md-3" md={6}>
                            <NavLink exact to="/search-results">
                                    <Button className="all-btn-round mt-4 text-start" variant="primary">Save & Search<MdOutlineArrowForward className="arrow-sign position-arrow"/></Button>
                                </NavLink>
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

export default SearchFilters;