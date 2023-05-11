import * as React from 'react';
import style from './About.module.css';
import Navbar from '../FixedNavbar/FixedNavbar';
import SideBar from '../SideBar/SideBar';
import { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from '../../image/pic1.webp';
import pic2 from '../../image/pic2.webp';
import pic3 from '../../image/pic3.webp';
import pic4 from '../../image/pic4.webp';
import pic5 from '../../image/pic5.webp';
import './About.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import value from '../../image/value.webp';
import kaizen from '../../image/kaizen.webp';
import rowad from '../../image/rowad.webp';
import jad from '../../image/jad.webp';
import { useTranslation } from 'react-i18next';
import ReactLoading from "react-loading";

function About(){


const { t } = useTranslation();
const [abouts, setAbouts] = useState([]);
const [isChanged , setIsChanged] = useState(true);
 
  
const icons = [
  {src: value , company : (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {t('value')}
  </Tooltip>
) },{ src: kaizen, company : (props) => (
  <Tooltip id="button-tooltip" {...props}>
     {t('kaizen')}
  </Tooltip>
)}, {src: rowad , company :(props) => (
  <Tooltip id="button-tooltip" {...props}>
     {t('alrowad')}
  </Tooltip>
)},{ src: jad  , company :(props) => (
  <Tooltip id="button-tooltip" {...props}>
     {t('jad')}
  </Tooltip>
)}];


    const options = {
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 1000,
      smartSpeed: 450,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        800: {
            items: 2
        },
        1400: {
            items: 3
        }
      }
  };

  const optionsLogo = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      800: {
          items: 3
      },
      1400: {
          items: 3
      }
    }
};



useEffect(() => {

  setIsChanged(false);

  setTimeout(() => {

  },1000);


  setAbouts( [
    {
        name: t('about_one_head'),
        description: t('about_one_parag'),
        src: pic1
    },
    {
        name: t('about_two_head'),
        description: t('about_two_parag'),
        src: pic2
    },
    {
      name: t('about_three_head'),
      description: t('about_three_parag'),
      src: pic3
    },
    {
      name: t('about_four_head'),
      description: t('about_four_parag'),
      src: pic4
    },
    {
      name: t('about_five_head'),
      description: t('about_five_parag'),
      src: pic5
    }
  ]
);

  setTimeout(() => {
      setIsChanged(true);
  },1000);

}, [t]);


    return(
      <section className={`${style.layout}`}>
      <Navbar />
      <SideBar />

      <div className={`${style.inner} d-flex align-items-center`}>
        <div className='container'>
          <h2 className='text-center fw-bolder text-capitalize my-5'>{t("how_we_work")}</h2>

              <div className="row">
                    <div className="col-md-12" dir='ltr'>
                    {isChanged ?  
                        <OwlCarousel id="abouts-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {abouts.map((about , index)=> {
                                        return (
                                            <div  key={index}  className="item">
                                                <div className={`${style.shadowEffect}`}>
                                                    <h5 className='fw-bold'>{about.name}</h5>
                                                    <p>{about.description}</p>
                                                    <img className={`${style.img}`} src={about.src} alt=".."/>
                                                </div>
                                            </div>
                                        )}
                                    )}
                        </OwlCarousel>
                           : 

                           <div className='mt-5 d-flex justify-content-center align-items-center'>
                               <div className='mt-5 '>
                               <ReactLoading type="spin" color="#435aff"
                                   height={100} width={50} />
                               </div>
                           </div>
                       }
                    </div>
                </div>

        <h3 className='text-center fw-bolder text-capitalize text-white my-5'>{t("our_clients")}</h3>

            <div className="d-flex justify-content-center">
                    <div className="w-50" dir='ltr'>
                        <OwlCarousel id="two-testimonoals" className="owl-carousel owl-theme-two" {...optionsLogo}>
                            {icons.map((icon , index) => {
                                        return (
                                            <div key={index}  className="item">
                                                <div className={`${style.TwoshadowEffect} `}>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            delay={{ show: 50, hide: 400 }}
                                                            overlay={icon.company}>
                                                            <img className={`${style.img}`} src={icon.src} alt=".."/>
                                                        </OverlayTrigger>    
                                                </div>
                                            </div>
                                        )}
                                    )}
                        </OwlCarousel>
                    </div>
                </div>
        </div>
      </div>
    </section>
    )
}

export default About;