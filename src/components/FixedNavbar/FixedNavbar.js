
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import  style  from './FixedNavbar.module.css';
import imgNavbarE from "../../image/logo.webp";
import imgNavbarA from "../../image/arabic.webp";
import imgHome from "../../image/toMain.webp";
import imgAbout from "../../image/about-us.webp";
import imgServices from "../../image/services.webp";
import imgContact from "../../image/contact-us.webp";
import imgWork from "../../image/our-work.webp";
import imgCareers from "../../image/careers.png";
import imgPrivacy from "../../image/privacy.webp";
import '../../index.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Dropdown from 'react-bootstrap/Dropdown';

import { useState, useEffect , useContext } from "react";

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'

import Offcanvas from 'react-bootstrap/Offcanvas';


function FixedNavbar(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imgNavbar , setImgNavbar] = useState()

  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
    },
  ]

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title');
    if (currentLanguageCode == 'en'){
      setImgNavbar(imgNavbarE);
    }else{
      setImgNavbar(imgNavbarA);
    }
  }, [currentLanguage, t]);

  const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className="bi bi-globe"
      viewBox="0 0 16 16" >
  
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
  )

return(

<>

<Navbar collapseOnSelect className= {`${style.myNav} position-absolute top-0 start-0 end-0 d-lg-block d-none   `} expand="lg">
  
      <Container>
      <Navbar.Toggle />
      
      <Link to="/">
          <img width={"120px"} src={imgNavbar}  alt="" />
      </Link>

      <Navbar.Collapse className='flex-grow-0'>
        <Nav className={`${style.nav}`}>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} to="/home" as={Link} >
               
                {t('home')}
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} to="/services" as={Link} >{t('services')}</NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} to="/works" as={Link} >{t('works')}</NavLink>
          </Nav.Item>

          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} to="/careers" as={Link} >
                {t('careers')}
          </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} to="/about" as={Link}>
               
                {t('about_us')}
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} to="/contact" as={Link}>{t('contact')}</NavLink>
          </Nav.Item>

          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} to="/privacy" as={Link}>{t('privacy')}</NavLink>
          </Nav.Item>

          <Dropdown>
            <Dropdown.Toggle variant="transparent" className={`${style.langIcon} `} id="dropdown-basic">
                <GlobeIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                          <Dropdown.Item>
                          <span className="dropdown-item-text">{t('language')}</span>
                      </Dropdown.Item>
        
                          {languages.map(({ code, name, country_code }) => (
                            <Dropdown.Item li key={country_code}>
                              <a
                                href="#"
                                className={classNames('dropdown-item', {
                                  disabled: currentLanguageCode === code,
                                })}
                                onClick={() => {
                                  i18next.changeLanguage(code);
                                }}
                              >
                                <span
                                  className={`flag-icon flag-icon-${country_code} mx-2`}
                                  style={{
                                    opacity: currentLanguageCode === code ? 0.5 : 1,
                                  }}
                                ></span>
                                {name}
                              </a>
                              </Dropdown.Item>
                          ))}
            </Dropdown.Menu>
          </Dropdown>

        </Nav>
      </Navbar.Collapse>

      </Container>
</Navbar>


<Navbar collapseOnSelect className= {`${style.myNav} position-absolute top-0 start-0 end-0 d-block d-lg-none `} expand="lg">
      <Container>
      <Link to="/">
          <img width={"120px"} src={imgNavbar}  alt="" />
      </Link>

      <Navbar.Toggle onClick={handleShow} />
      
      <Offcanvas className="bg-dark" placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to="/">
            <img width={"120px"} src={imgNavbar}  alt="" />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className={`${style.nav}`}>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLinkOffcanvas} fw-bolder text-capitalize`} to="/home" as={Link} >
               
                 <img width={"35px"} className="mx-3" src={imgHome} />
                 {t('home')}
                </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLinkOffcanvas} fw-bolder text-capitalize`} to="/services" as={Link} >
                <img width={"35px"} className="mx-3" src={imgServices} />
                {t('services')}
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLinkOffcanvas} fw-bolder text-capitalize`} to="/works" as={Link} >
                <img width={"35px"} className="mx-3" src={imgWork} />
                {t('works')}
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink className= {` nav-link px-3 ${style.navLinkOffcanvas} fw-bolder text-capitalize`} to="/careers" as={Link} >
                <img width={"35px"} className="mx-3" src={imgCareers} />
                {t('careers')}
              </NavLink>
          </Nav.Item>

          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLinkOffcanvas} fw-bolder text-capitalize`} to="/about" as={Link}>
                 <img width={"35px"} className="mx-3" src={imgAbout} />
                  {t('about_us')}
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLinkOffcanvas} fw-bolder text-capitalize`} to="/contact" as={Link}>
                <img width={"35px"} className="mx-3" src={imgContact} />
                {t('contact')}
              </NavLink>
          </Nav.Item>

          <Nav.Item>
              <NavLink className= {`  nav-link px-3 ${style.navLinkOffcanvas} fw-bolder text-capitalize`} to="/privacy" as={Link}>
                <img width={"35px"} className="mx-3" src={imgPrivacy} />
                {t('privacy')}
              </NavLink>
          </Nav.Item>

          <Dropdown>
            <Dropdown.Toggle variant="transparent" className={`${style.langIcon} px-3 mx-3`} id="dropdown-basic">
                <GlobeIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                          <Dropdown.Item>
                          <span className="dropdown-item-text">{t('language')}</span>
                      </Dropdown.Item>
        
                          {languages.map(({ code, name, country_code }) => (
                            <Dropdown.Item li key={country_code}>
                              <a
                                href="#"
                                className={classNames('dropdown-item', {
                                  disabled: currentLanguageCode === code,
                                })}
                                onClick={() => {
                                  i18next.changeLanguage(code);
                                }}
                              >
                                <span
                                  className={`flag-icon flag-icon-${country_code} mx-2`}
                                  style={{
                                    opacity: currentLanguageCode === code ? 0.5 : 1,
                                  }}
                                ></span>
                                {name}
                              </a>
                              </Dropdown.Item>
                          ))}
            </Dropdown.Menu>
          </Dropdown>

        </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
</Navbar>
</>


)
    
}


export default FixedNavbar;