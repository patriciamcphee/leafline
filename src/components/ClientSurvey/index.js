import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles.module.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    homePhone: '',
    cellPhone: '',
    keyContactPerson: '',
    adultsNumber: '',
    childrenNumber: '',
    childrenAges: '',
    petsNumber: '',
    petsType: '',
    likesAboutSite: '',
    dislikesAboutSite: '',
    importantChange: '',
    landscapeUse: '',
    outdoorRooms: '',
    architecturalStyle: '',
    entranceChange: '',
    specialNeed: '',
    landscapeStyle: '',
    specialPlants: '',
    colorsPreference: '',
    allergies: '',
    favoriteSeason: '',
    gardenInstallation: '',
    maintenanceOption: '',
    budget: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
      {/* Add all other input fields based on the document specifications */}
      <input type="checkbox" name="budget" value="<5000" onChange={handleChange} /> Less than $5000
      {/* Add checkboxes for each budget range */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
