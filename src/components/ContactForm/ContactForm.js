import { useEffect, useState } from 'react';
import GravityForm from 'react-native-gravityform';
import credentials from '../../../credentials';
//import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchFormData = async () => {
      const response = await fetch('https://athorastg.wpengine.com/wp-json/gf/v2/forms/1');
      const json = await response.json();
      setFormData(json);
    };

    fetchFormData();
  }, []);

  if (!formData) {
    return <div>Loading form...</div>;
  }

  // Render the Gravity Form using the GravityForm component
  return <GravityForm credentials={credentials} form={formData} formID="1" siteURL="https://athorastg.wpengine.com" />;
};

export default ContactForm;
