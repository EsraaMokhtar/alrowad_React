import * as React from 'react';
import style from './Works.module.css';
import Navbar from '../FixedNavbar/FixedNavbar';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import iconGo from '../../image/iconGo.webp';
import img from '../../image/work1.webp';
import './Works.css';
import { useTranslation } from 'react-i18next';
import ReactLoading from "react-loading";

function Works() {

    const { t } = useTranslation();

    const [works, setWorks] = useState([]);

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


        setWorks([
            {
                type: t("web_design_mobile"),
                name: t("we_v_platform"),
                src: img,
                link: "https://value-platform.com/"
            },
            {
                type: t("web_design_mobile"),
                name: t("we_v_platform"),
                src: img,
                link: "https://value-platform.com/"
            },
            {
                type: t("web_design_mobile"),
                name: t("we_v_platform"),
                src: img,
                link: "https://value-platform.com/"
            },
        ]);
  
        setTimeout(() => {
            setIsChanged(true);
        },1000);

    }, [t]);

    return (
        <section className={`${style.layout}`}>
            <Navbar />
            <SideBar />

            <div className={`${style.inner} d-flex align-items-center `}>
                <div className='container min-vh-100'>
                    <h2 className='text-center fw-bolder text-capitalize my-5'>{t("our_work")}</h2>
                    <div className="h-100 row">
                        <div className="h-100 col-md-12" dir='ltr'>
                            {isChanged ?   
                            <OwlCarousel id="work-testimonoals" className="owl-carousel owl-theme" {...options}>
                                {works.map((work, index) => {
                                    return (
                                        <div key={index} className={`${style.item} item`}>
                                            <img src={work.src} className="w-100" height="300px" style={{ height: "280px" }} alt="" />
                                            <div className={`${style.toRtl} d-flex justify-content-between`}>
                                                <div className="my-4">
                                                    <h5>{work.type}</h5>
                                                    <a className='text-decoration-none' rel="noreferrer" target="_blank" href={work.link}><h4>{work.name}</h4></a>
                                                    
                                                </div>
                                                <Link className='text-decoration-none mt-4' to="/projectDetails">
                                                    <img src={iconGo} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
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

export default Works;