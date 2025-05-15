import React, { useState } from 'react';

import { Col, Row, Container, Nav, Dropdown } from 'react-bootstrap';

import './Footer.css';

import { useTranslation } from 'react-i18next';



const Footer = () => {

  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState('English');



  const languages = [

    { code: 'en', name: 'English' },

    { code: 'fr', name: 'Français' },

    { code: 'zh', name: '中文' },

    { code: 'de', name: 'Deutsch' },

    { code: 'th', name: 'ไทย' }

  ];



  const changeLanguage = (language) => {

    i18n.changeLanguage(language.code);

    setSelectedLanguage(language.name);

  };



  return (

    <footer className="footer-area bg-dark text-white py-4">

      <Container>

        <Row className="align-items-center">

          <Col md={3} className="mb-3 mb-md-0">

            <p className="mb-0 text-muted">© {new Date().getFullYear()} KIQKO</p>

          </Col>



          <Col md={7} className="px-0 px-md-3">

            <Nav className="nav-footer justify-content-center justify-content-md-start">

              {[

                { path: '/terms', label: t('terms') },

                { path: '/privacy', label: t('privacy') },

                { path: '/cookie-policy', label: t('cookiePolicy') },

                { path: '/safety-tips', label: t('safetyTips') },

                { path: '/faq', label: t('faq') },

                { path: '/contact-us', label: t('contact') }

              ].map((item, index) => (

                <Nav.Item key={index} className="px-2">

                  <Nav.Link

                    href={item.path}

                    className="text-white text-decoration-none"

                    activeClassName="active"

                  >

                    {item.label}

                  </Nav.Link>

                </Nav.Item>

              ))}

            </Nav>

          </Col>



          <Col md={2} className="text-md-end mt-3 mt-md-0">

            <Dropdown>

              <Dropdown.Toggle

                variant="outline-light"

                id="dropdown-language"

                className="d-inline-flex align-items-center"

              >

                <span className="me-2">{selectedLanguage}</span>

                <i className="bi bi-translate"></i>

              </Dropdown.Toggle>



              <Dropdown.Menu className="dropdown-menu-end">

                {languages.map((language) => (

                  <Dropdown.Item

                    key={language.code}

                    onClick={() => changeLanguage(language)}

                    active={i18n.language === language.code}

                  >

                    {language.name}

                  </Dropdown.Item>

                ))}

              </Dropdown.Menu>

            </Dropdown>

          </Col>

        </Row>

      </Container>

    </footer>

  );

};



export default Footer;