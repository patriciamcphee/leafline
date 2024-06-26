import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import OurServices from './components/OurServices/OurServices.js';
import LetsConnect from './components/LetsConnect/LetsConnect.js';
import MyFooter from './components/Footer/Footer.js';
import BackToTopButton from './components/BackToTopButton/BackToTopButton.js';
import FaqSection from './components/CollapsibleFAQ/CollapsibleFAQ.js';
import BeforeAfterGallery from './components/BeforeAfterGallery/BeforeAfterGallery.jsx';

import { Divider, ConfigProvider } from 'antd';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#1677ff',
        borderRadius: 10,
      },
    }}
    >
  <React.StrictMode>
    <BackToTopButton />
    <Navbar />
    <Hero />
    <AboutUs />
    <Divider />
    <OurServices />
    <Divider />
    <BeforeAfterGallery />
    <Divider />
    <LetsConnect />
    <Divider />
    <FaqSection />
    <MyFooter />
    
  </React.StrictMode>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
