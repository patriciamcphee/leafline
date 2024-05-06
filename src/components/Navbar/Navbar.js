import { useState } from 'react';
import { Button, ConfigProvider } from 'antd';
import styles from './styles.module.css';

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <div className="App">
      <header className="App-header">

        <nav className={`${styles.navbar}`}>
        <ConfigProvider
                theme={{
                  token: {
                      colorPrimary: '#286655',
                      colorPrimaryHover: '#A2C523',
                      borderShadow: '0 6px 0 #286655',
                    }
                  }
                }
              >
          {/* logo */}
          <a href="https://www.leaflinegarden.design"><img src="/final-logo.png" height="74px" alt="main logo" /></a>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>

            <li onClick={removeActive}>
              <a href='#about' className={`${styles.links}`}>About Us</a>
            </li>
            <li onClick={removeActive}>
              <a href='#services' className={`${styles.links}`}>Services</a>
            </li>
            <li onClick={removeActive}>
              <a href='#photo-gallery' className={`${styles.links}`}>Photos</a>
            </li>
            <li onClick={removeActive}>
              <a href='#faqs' className={`${styles.links}`}>FAQs</a>
            </li>
            <li onClick={removeActive} className={styles.listAdustment}>
              (206) 880-0886
            </li>
            <li onClick={removeActive}>
            <Button type="primary" shape="round" className={styles.contactButton} href="landscape-request.html" target="_blank">
                Request a Consultation!
                </Button>
            </li>
            <li onClick={removeActive} className={styles.license}>
            Lic#: LEAFLGD763C8
            </li>
          </ul>

          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
          </ConfigProvider>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;