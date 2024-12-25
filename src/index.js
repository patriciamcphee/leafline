import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeroSection from './components/Hero/HeroSection.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx';
import ServicesSection from './components/ServicesSection/ServicesSection.jsx';
import PhotoFooterSection from './components/PhotoFooterSection/PhotoFooterSection.jsx';
import BackToTopButton from './components/BackToTopButton/BackToTopButton.js';

import { ConfigProvider } from 'antd';


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
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PhotoFooterSection />
  </React.StrictMode>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
