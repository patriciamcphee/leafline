// path/filename: src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';
import { UpCircleOutlined } from '@ant-design/icons';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <UpCircleOutlined
          onClick={scrollToTop}
          style={{
            fontSize: '40px',
            color: '#A2C523',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#A2C523'}
          onMouseOut={(e) => e.currentTarget.style.color = '#A2C523'}
        />
      )}
    </>
  );
};

export default BackToTopButton;
