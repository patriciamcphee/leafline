import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "0px 30px 10px 30px",
  margin: '60px 10px 0 10px',
  color: '#fff',
  fontWeight: '600',
  fontSize: 22,

};

function LetsConnect() {
  return (
    <section className={styles.features}>
      
<div class="container">
<h1 className={styles.contactHeading}>Let's Connect!</h1>
<p className={styles.featureBody}>Dreaming of the perfect garden? Let's make it happen. Whether it's a peaceful retreat or a vibrant garden ecosystem, your outdoor space is a canvas waiting for a touch of creativity and expertise.</p>
<p className={styles.featureBody}>Kickstart your garden transformation by sharing your dreams with us.</p>
<p className={styles.featureBody}>
      <button
        onClick={() => window.location.href = 'https://form.jotform.com/240356312632044'}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#286655', color: 'white', border: 'none', borderRadius: '16px' }}
      >
        Request a Consultation!
      </button>
      </p>
    </div>
    </section>
  );
}

export default LetsConnect;
