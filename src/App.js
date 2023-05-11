import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes , useLocation } from 'react-router-dom';
import ReactLoading from "react-loading";
import TagManager from 'react-gtm-module';
import { useEffect } from "react";


const LazyHome = React.lazy(()=> import('./components/Home/Home'));
const LazyServices = React.lazy(()=> import('./components/Services/Services'));
const LazyWorks = React.lazy(()=> import('./components/Works/Works'));
const LazyAbout = React.lazy(()=> import('./components/About/About'));
const LazyContact = React.lazy(()=> import('./components/Contact/Contact'));
const LazyOneProject = React.lazy(()=> import('./components/OneProject/OneProject'));
const LazyCareers = React.lazy(()=> import('./components/Careers/Careers'));
const LazyPrivacy = React.lazy(()=> import('./components/Privacy/Privacy'));
const LazyApply = React.lazy(()=> import('./components/Apply/Apply'));

function App() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GT-PHPXBT3' });
    }, []);

  const loadingMarkup = (
    <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height:"100vh" }}>
      <div>
      <ReactLoading type="spin" color="#435aff"
          height={100} width={50} />
      </div>
  </div>
  );


  return ( <>
    
    <BrowserRouter>
      <React.Fragment>
        <Routes>

          <Route exact path="/" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyHome keyword="analyze"/>
            </React.Suspense>
          } />

          <Route exact path="/home" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyHome/>
            </React.Suspense>
          } />

          <Route exact path="/services" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyServices/>
            </React.Suspense>
          } />

          <Route exact path="/works" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyWorks/>
            </React.Suspense>
          } />

          <Route exact path="/about" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyAbout/>
            </React.Suspense>
          } />

          <Route exact path="/contact" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyContact/>
            </React.Suspense>
          } />

          <Route exact path="/projectDetails" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyOneProject/>
            </React.Suspense>
          } />

          <Route exact path="/careers" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyCareers/>
            </React.Suspense>
          } />

          <Route exact path="/privacy" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyPrivacy/>
            </React.Suspense>
          } />

          <Route exact path="/apply/:id" element={
            <React.Suspense fallback={loadingMarkup}>
              <LazyApply/>
            </React.Suspense>
          } />

        </Routes>
      </React.Fragment>

  </BrowserRouter>

  </>
 
  );
}

export default App;
