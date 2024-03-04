// src/components/FaqCollapsible.js
import React from 'react';
import { Collapse } from 'antd';
import styles from './styles.module.css';
import { Tabs, ConfigProvider } from 'antd';
const { TabPane } = Tabs;

const faqCategories = {
  category1: [
    { question: 'Question 1', answer: 'Answer to question 1' },
    // Add more questions as needed
  ],
  // Add more categories as needed
};

const FaqSideTabs = () => (
  <div className={styles.section} id="faq">
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#286655',
            colorPrimaryHover: '#A2C523',
            borderShadow: '0 6px 0 #286655',
          },
        }}
      >
  <Tabs tabPosition="left">
    {Object.entries(faqCategories).map(([category, faqs], index) => (
      <TabPane tab={`Category ${index + 1}`} key={category}>
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </TabPane>
    ))}
  </Tabs>
  </ConfigProvider>
  </div>
);

export default FaqSideTabs;
