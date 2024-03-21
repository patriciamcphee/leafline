// src/components/FaqCollapsible.js
import React from 'react';
import styles from './styles.module.css';
import { ConfigProvider, Collapse, Row, Col } from 'antd';

const { Panel } = Collapse;


const faqData = [
  { 
    key: '1', 
    question: 'Do you specialize in any particular style of landscape design?', 
    answer: 'Yes, while I am skilled in various landscape design styles, my passion lies in creating a fusion of Japanese and Pacific Northwest (PNW) styles. This unique blend aims to bring harmony, beauty, and sustainability to your outdoor spaces.' 
  },
  { 
    key: '2', 
    question: 'How can I request specific services like Fine Pruning, Transplanting, or Weeding?', 
    answer: 'For requests related to fine pruning, transplanting, or weeding, our contact form allows you to describe the plants you need to be serviced and the option to upload a picture for clarity. This ensures we understand your needs and can provide the most accurate and effective service.' 
  },
  { 
    key: '3', 
    question: 'Are there limitations to what can be included in a landscape design?', 
    answer: 'No, there are no limitations to the elements that can be included in our designs. Whether it\'s a fire pit, steps, decks, or other hardscape features, we collaborate with hardscape contractors for installation and consultation to ensure your vision comes to life.' 
  },
  { 
    key: '4', 
    question: 'What types of service packages do you offer?', 
    answer: 'Our services are tailored to meet the unique needs of each project, with pricing based on the job’s specific requirements. We offer a range of services, including design, fine pruning, planting/transplanting, spreading wood chips/mulch, and specialized weeding (with a focus on ivy and blackberry removal). Please note, while we maintain grass along bed edges, we offer limited lawn care services. All physical labor is billed at an hourly rate.' 
  },
  { 
    key: '5', 
    question: 'Which areas do you service?', 
    answer: 'We proudly serve the Seattle metro area, including the east side, offering our expertise to a broad community within this region.' 
  },
  { 
    key: '6', 
    question: 'Can you tell me more about the person behind the business?', 
    answer: 'Certainly! I am a proud Lake Washington Tech graduate specializing in Horticulture, with 5 years of experience in landscape maintenance and design. My expertise lies in sustainable landscape design and care, focusing on using native and native-like plants. I am passionate about creating ecosystems within gardens, incorporating Japanese style with Pacific Northwest elements to enhance aesthetics, benefit native wildlife, and support plant health through symbiotic soil relationships.' 
  },
  { 
    key: '7', 
    question: 'Will your business have a presence on social media platforms?', 
    answer: 'Yes, we will be active on Nextdoor primarily for posting advertisements. We will also showcase our work and share updates on Instagram.' 
  },

  // Add more FAQs as needed
];

const FaqSection = () => (
  <div className={styles.faqContainer} id="faqs">
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#286655',
            colorPrimaryHover: '#A2C523',
            borderShadow: '0 6px 0 #286655',
          },
          components: {
            Collapse: {
              size: 'large',
              fontSize: '18',
              fontSizeLG: '24',
              fontSizeIcon: '16',
              lineHeightLG: '1.6',
              contentPadding: '20px 40px',
            }
          }
        }}
      >
    <Row justify="space-evenly" align="top">
      <Col span={24}>
      <h2 className={styles.aboutUsHeading}>Frequently Asked Questions</h2>
      </Col>
    </Row>


  <Collapse accordion bordered={false}>
    {faqData.map(faq => (
      <Panel header={faq.question} key={faq.key}>
        <p>{faq.answer}</p>
      </Panel>
    ))}
  </Collapse>

  </ConfigProvider>
  </div>
);

export default FaqSection;
