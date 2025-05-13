import React from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import shape from '../../assets/images/shape2.png';
import liveIcon from '../../assets/images/live_user.png';
import './searchResults.css';
import { NavLink } from 'react-router-dom';
import fev1 from '../../assets/images/fev1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';
import photo4 from '../../assets/images/photo4.png';
import photo5 from '../../assets/images/photo5.png';
import photo6 from '../../assets/images/photo6.jpg';
import photo7 from '../../assets/images/photo7.jpg';
import myphoto from '../../assets/images/myphoto.jpg';
import userchat from '../../assets/images/userchat.png';
import userclose from '../../assets/images/userclose.png';
import userselect from '../../assets/images/userselect.png';
import { MdFiberManualRecord } from 'react-icons/md';
import Pagination from 'react-bootstrap/Pagination'

const SearchResults = () => {
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
                <Col className="text-center" md={12}>
                    <div className="profile-main-part-area-inner bg-all-pages">

                    <Col md={12} className="all-title-top mb-4">
                            <h4>Featured Members</h4>
                        </Col>
                        <Col md={12}>
                        <OwlCarousel className='owl-theme  custom-owl-featured mt-3' items={5}
                           loop margin={24} nav
                            
                            dots={false}>
                            <div class='item'>
                                <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div class='item'>
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={photo5} alt="photo5" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div class='item'>
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={photo3} alt="photo3" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div class='item'>
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={photo6} alt="photo6" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div class='item'>
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={photo7} alt="photo7" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div class='item'>
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div class='item'>
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={photo3} alt="photo3" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div class='item'>
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={photo4} alt="photo4" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
                            </div>
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={photo5} alt="photo5" />
                                    <div className="user-search-icon">
                                        <div className="user-search-icon-inner">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>
                                </ul>
  
</OwlCarousel>
                        </Col>

                        <Col md={12} className="all-title-top mb-4">
                            <h4>Search Results</h4>
                        </Col>

                        <Col md={12} className="mt-2">
                        <div className="live-user-online">
                        <span>
                        <img src={liveIcon} alt="liveIcon" />
                           </span>
                        <h3>Live!</h3>
                        </div>
                            </Col>
                        <Row>
                        <Col md={12}>
                        <OwlCarousel className='owl-theme  search-slide mt-3' items={9}
                           loop margin={10} nav
                            
                            dots={false}>
                            <div class='item'>
                            <img src={fev1} alt="fev1" />
                            </div>
                            <div class='item'>
                            <img src={photo3} alt="photo3" />
                            </div>
                            <div class='item'>
                            <img src={photo4} alt="photo4" />
                            </div>
                            <div class='item'>
                            <img src={photo5} alt="photo5" />
                            </div>
                            <div class='item'>
                            <img src={photo6} alt="photo6" />
                            </div>
                            <div class='item'>
                            <img src={photo7} alt="photo7" />
                            </div>
                            <div class='item'>
                            <img src={myphoto} alt="myphoto" />
                            </div>
                            <div class='item'>
                            <img src={photo2} alt="photo2" />
                            </div>
                            <div class='item'>
                            <img src={photo4} alt="photo4" />
                            </div>
                            <div class='item'>
                            <img src={photo5} alt="photo5" />
                            </div>
                            <div class='item'>
                            <img src={photo6} alt="photo6" />
                            </div>
                            <div class='item'>
                            <img src={photo7} alt="photo7" />
                            </div>
  
</OwlCarousel>
                        </Col>

                       
                        </Row>

                        <Row>
                        <Col md={12} className="mt-4">
                            <ul className="search-user-list">
                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>

                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">AnnaMiMi</NavLink></h5>
                                        <span>44</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        Just going where the with…
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo3} alt="photo3" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">NikkolleSG</NavLink></h5>
                                        <span>36</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        Guarantee to make you…
                                        </p>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={photo6} alt="photo5" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        You enjoy meeting me?
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo7} alt="photo7" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Becky</NavLink></h5>
                                        <span>40</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        You enjoy meeting me?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">AnnaMiMi</NavLink></h5>
                                        <span>44</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        Just going where the with…
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo3} alt="photo3" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">NikkolleSG</NavLink></h5>
                                        <span>36</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        Guarantee to make you…
                                        </p>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={photo6} alt="photo5" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        You enjoy meeting me?
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo7} alt="photo7" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Becky</NavLink></h5>
                                        <span>40</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        You enjoy meeting me?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        {/* <img src={userclose} alt="userclose" /> */}
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        {/* <img src={userclose} alt="userclose" /> */}
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">AnnaMiMi</NavLink></h5>
                                        <span>44</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        Just going where the with…
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo3} alt="photo3" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        {/* <img src={userclose} alt="userclose" /> */}
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">NikkolleSG</NavLink></h5>
                                        <span>36</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        Guarantee to make you…
                                        </p>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={photo6} alt="photo5" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        {/* <img src={userclose} alt="userclose" /> */}
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        You enjoy meeting me?
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo7} alt="photo7" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        {/* <img src={userclose} alt="userclose" /> */}
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Becky</NavLink></h5>
                                        <span>40</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        You enjoy meeting me?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={fev1} alt="fev1" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5> <NavLink exact to="/">Jeanall </NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>
                                        <p>
                                        Just going where the with…
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo2} alt="photo2" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">AnnaMiMi</NavLink></h5>
                                        <span>44</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        Just going where the with…
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo3} alt="photo3" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">NikkolleSG</NavLink></h5>
                                        <span>36</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        Guarantee to make you…
                                        </p>
                                    </div>
                                </li>
                                <li>
                                <img className="user-search-profile" src={photo6} alt="photo5" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Jeanall</NavLink></h5>
                                        <span>38</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        You enjoy meeting me?
                                        </p>
                                    </div>
                                </li>

                                <li>
                                <img className="user-search-profile" src={photo7} alt="photo7" />
                                    <div className="user-search-icon">
                                        <span>
                                        <img src={userchat} alt="userchat" />
                                        </span>
                                        <span>
                                        <img src={userclose} alt="userclose" />
                                        </span>
                                        <span>
                                        <img src={userselect} alt="userselect" />
                                        </span>
                                    </div>

                                    <div className="user-search-details">
                                        <div className="user-details-row">
                                        <h5><NavLink exact to="/">Becky</NavLink></h5>
                                        <span>40</span>
                                        </div>
                                        <div className="user-details-row">
                                        <h6>Los Angeles, CA</h6>
                                        <Button className="" variant="success">
                                        <MdFiberManualRecord />Online</Button>
                                        </div>

                                        <p>
                                        You enjoy meeting me?
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        </Row>

                        <Row>
                            <Col md={12} className="pagination-list">
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

export default SearchResults;