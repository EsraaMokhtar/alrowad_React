import * as React from 'react';
import style from './Services.module.css';
import Navbar from '../FixedNavbar/FixedNavbar';
import SideBar from '../SideBar/SideBar';
import { useState, useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../image/img1.webp';
import img2 from '../../image/img2.webp';
import img3 from '../../image/img3.webp';
import img4 from '../../image/img4.webp';
import img5 from '../../image/img5.webp';
import img6 from '../../image/img6.webp';
import img7 from '../../image/img7.webp';

import { useTranslation } from 'react-i18next';
import ReactLoading from "react-loading";
import './Services.css'

function Services(){


const { t } = useTranslation();

const [services, setServices] = useState([]);

const [isChanged , setIsChanged] = useState(true);

    const options = {
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

  
  useEffect(() => {

    setIsChanged(false);

    setTimeout(() => {

    },1000);


    setServices([
      {
          name: t('services_one_head'),
          description: t('services_one_parag'),
          src: img1
      },
      {
          name: t('services_two_head'),
          description: t('services_two_parag'),
          src: img2
      },
      {
        name: t('services_three_head'),
        description: t('services_three_parag'),
        src: img3
      },
      {
        name: t('services_four_head'),
        description: t('services_four_parag'),
        src: img4
      },
      {
        name: t('services_five_head'),
        description: t('services_five_parag'),
        src: img5
      },
      {
        name: t('services_six_head'),
        description: t('services_six_parag'),
        src: img6
      },
      {
        name: t('services_siven_head'),
        description: t('services_siven_parag'),
        src: img7
      }
    ]);

    setTimeout(() => {
        setIsChanged(true);
    },1000);

}, [t]);

    return(
    <section className={`${style.layout}`}>
       <Navbar />
        <SideBar />
        <div className={`${style.inner}  d-flex align-items-center`}>
          <div className='container'>
            <h2 className='text-center fw-bolder text-capitalize  my-5'>{t("our_services")}</h2>
            <div className="row">
                    <div  className="col-md-12" dir='ltr'>
                    {isChanged ? 
                        <OwlCarousel id="services-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {services.map((service,index) => {
                                        return (
                                          <div key={index} className={`${style.item} item`}>
                                            <div className={`${style.img}`}>
                                              <img src={service.src} className="w-100" height="200px" alt="" />
                                            </div>
                                            <div className="p-4 text-center">
                                              <h5 className='fw-bold text-uppercase'>{service.name}</h5>
                                              <p className="text-muted">{service.description}</p>
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
          </div>
        </div>
      </section>
    )
}

export default Services;