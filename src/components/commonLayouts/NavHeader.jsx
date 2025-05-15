import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, Button, Form, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { 
  FiSearch, 
  FiVideo, 
  FiImage, 
  FiMessageSquare, 
  FiBell,
  FiUser,
  FiMenu,
  FiX,
  FiPlus,
  FiHome
} from 'react-icons/fi';
import { BsBroadcast, BsGrid3X3Gap } from 'react-icons/bs';
import { RiLiveLine } from 'react-icons/ri';
import './NavHeader.css';
import useravatar from '../../assets/images/fev1.jpg';
import logo from '../../assets/images/logo-inner.png';

const NavHeader = () => {
  const [expanded, setExpanded] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navItems = [
    { path: "/", icon: <FiHome size={18} />, text: "Home" },
    { path: "/search-filters", icon: <FiSearch size={18} />, text: "Search" },
    { path: "#live", icon: <RiLiveLine size={18} />, text: "Live" },
    { path: "#video", icon: <FiVideo size={18} />, text: "Video" },
    { path: "#image", icon: <FiImage size={18} />, text: "Image" },
    { path: "#chat", icon: <FiMessageSquare size={18} />, text: "Chat" },
    { path: "/notifications", icon: <FiBell size={18} />, text: "Alerts" }
  ];

  return (
    <>
      <Navbar expand="lg" className="premium-navbar" variant="dark">
        <Container fluid>
          {/* Brand Logo */}
          <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
            <img src={logo} alt="Premium Brand" className="brand-logo" />
          </Navbar.Brand>

          {/* Mobile Controls */}
          <div className="d-flex d-lg-none align-items-center gap-2">
            <Button 
              variant="link" 
              className="mobile-search-toggle p-0"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FiSearch size={20} className="text-white" />
            </Button>
            <Navbar.Toggle 
              aria-controls="main-navigation" 
              className="navbar-toggler border-0 p-0"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <FiX size={24} /> : <FiMenu size={24} />}
            </Navbar.Toggle>
          </div>

          {/* Desktop Navigation */}
          <Navbar.Collapse id="main-navigation" className="justify-content-between">
            {/* Main Nav Items */}
            <Nav className="mx-auto main-navigation">
              {navItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={item.path}
                  className="nav-item"
                  activeClassName="active"
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text d-none d-lg-inline">{item.text}</span>
                </Nav.Link>
              ))}
            </Nav>

            {/* User Controls */}
            <div className="d-flex align-items-center user-controls">
              <Button variant="primary" className="create-btn rounded-pill">
                <FiPlus size={18} className="me-lg-1" />
                <span className="d-none d-lg-inline">Create</span>
              </Button>
              
              <Dropdown align="end" className="ms-3">
                <Dropdown.Toggle variant="link" className="user-dropdown-toggle">
                  <div className="user-avatar">
                    <img src={useravatar} alt="User Profile" />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-end premium-dropdown shadow-lg">
                  <Dropdown.Item as={NavLink} to="/profile" className="dropdown-item">
                    <FiUser className="me-2" /> My Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/settings" className="dropdown-item">
                    <BsGrid3X3Gap className="me-2" /> Dashboard
                  </Dropdown.Item>
                  <Dropdown.Divider className="my-2" />
                  <Dropdown.Item as={NavLink} to="/logout" className="dropdown-item text-danger">
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="mobile-search-bar">
          <Container fluid>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search people, places, tags..."
                className="search-input"
              />
              <Button variant="primary" className="search-btn">
                <FiSearch size={18} />
              </Button>
            </InputGroup>
          </Container>
        </div>
      )}
    </>
  );
};

export default NavHeader;