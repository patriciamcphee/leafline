// src/components/LetsConnect.js
import React from 'react';


const ClientForm = () => (
  <div>
    
    <iframe
      id="JotFormIFrame-240434453503145"
      title="Landscape Request Form"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/240434453503145"
      frameborder="0"
      style="min-width:100%;max-width:100%;height:539px;border:none;"
      scrolling="no"
    >
    </iframe>
    <script src='https://form.jotform.com/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-240434453503145'", "https://form.jotform.com/")</script>
    
    
  </div>
);

export default ClientForm;