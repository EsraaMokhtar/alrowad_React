import * as React from 'react';
import style from './Home.module.css';
import Navbar from '../FixedNavbar/FixedNavbar';
import SideBar from '../SideBar/SideBar';
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { keyframes } from "styled-components";


import { Researcher, Paper } from "yoastseo";


function Home(){

const paper = new Paper( "Text to analyze", {
    keyword: 'analyze',
});

const researcher = new Researcher( paper );

console.log( researcher.getResearch( "wordCountInText" ) );

const { t } = useTranslation();

return(
  <>
    <section className={`${style.layout}`}>
        <Navbar />
          <SideBar />
          <div className={`${style.inner} container `}>
            <div className=" d-flex justify-content-center align-items-center text-center">
              <div className= {`${style.caption} `}>
                <AnimatedGradientText>{t('best_quality_for_you')}</AnimatedGradientText>
                  <p className='text-white mt-4'>{t('home_title')}</p>
                  <div className="mt-5 ">
                      <a className= {` btn fw-bolder text-decoration-none  ${style.btnMainContact} mt-5 `} target="_blank" href="tel:0201000290936">{t("talk")}</a>
                  </div>
              </div>
            </div>
          </div>
      </section>
      </>
  
  )
}



const hue = keyframes`
 0% {
   -webkit-filter: hue-rotate(0deg);
 }
 25%
 {
   -webkit-filter: hue-rotate(-360deg);
 }
 50%{
  -webkit-filter: hue-rotate(0deg);
 }
 75%
 {
  -webkit-filter: hue-rotate(-360deg);
 }
 100%{
  -webkit-filter: hue-rotate(0deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #a9b0dc;
  background-image: -webkit-linear-gradient(170deg , #a9b0dc , #FFFFFF );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 15s infinite linear;

  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  color-scheme: only light;
`;

export default Home;