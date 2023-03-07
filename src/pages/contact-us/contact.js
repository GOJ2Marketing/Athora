import Container from 'components/Container';
import Layout from 'components/Layout';
import { WebsiteJsonLd } from 'lib/json-ld';
import ContactForm from 'components/Contact';

import Style from './Contact.module.scss';
import WordPressLogin from 'components/WordPressLogin';

const Contact = () => {
  return (
    <Layout>
      <WebsiteJsonLd siteTitle="Contact Us" />
      <div className={Style.contactContainer}>
        <ContactForm title="Contact Us" />
      </div>
      <div className={Style.info}>
        <p>office@athoralaw.com</p>
        <p>574.575.4147</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.3019218512113!2d-86.23792718383922!3d41.692417484991296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd677cda81df%3A0xf43f7512b37515e4!2s1251%20N%20Eddy%20St%2C%20South%20Bend%2C%20IN%2046617!5e0!3m2!1sen!2sus!4v1677696593656!5m2!1sen!2sus"
        width="100%"
        height="650"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={Style.locationContainer}>
        <Container className={Style.location}>
          <div>
            <h2>Directions</h2>
            <ol className={Style.left}>
              <li>
                Our office is located within the Eddy Street Commons Corporate Offices. When visiting us, look for the
                1251 Eddy Street Corporate Offices sign above the pass-through tunnel. Enter the tunnel.
              </li>
              <li>
                There will be a glass door on your left with the address on it. Enter this door and step onto either
                elevator. Press the button for Floor 2.
              </li>
              <li>
                After exiting the elevator, head to your right, where you will see our Athora sign on the wall. Approach
                the sign and enter through the door on the left.
              </li>
            </ol>
          </div>
          <div>
            <h2>Parking</h2>
            <ol className={Style.col}>
              <li>
                <p>Surface parking is available along Eddy Street.</p>
              </li>
              <li>
                <p>
                  Parking is available in the{' '}
                  <a href="https://www.spotangels.com/map?lng=-86.23416863807797&lat=41.69171694308649&zoom=15#id=296717888">
                    Eddy Street Commons Parking Garage.
                  </a>{' '}
                  Access the parking garage from Eddy Street or the intersection of Napoleon and Burns.
                </p>
              </li>
            </ol>
          </div>
          <WordPressLogin />
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;
