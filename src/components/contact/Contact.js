import Section from 'components/Section';
import Container from 'components/Container';
import { useState } from 'react';

import Style from './Contact.module.scss';

const Contact = ({ title }) => {
  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState(false);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    let error = [];

    const formElement = event.target,
      { action, method } = formElement,
      body = new FormData(formElement);

    fetch(action, {
      method,
      body,
    })
      .then(async (response) => {
        error = await response.json();
      })
      .then(async () => {
        if (error.is_valid === false) {
          console.log(error.validation_messages);
          setErrors(error.validation_messages);
          setSuccess(false);
        } else {
          setErrors({});
          setSuccess(true);
        }
      })
      .then(() => {
        console.log(errors);
      });
  };

  return (
    <Section className={Style.contactContainer}>
      <Container className={success === true ? Style.hide : Style.show}>
        <div className={Style.headerText}>
          <h1>{title}</h1>
          <p>
            Every case and situation is unique.
            <br />
            Let’s connect to learn more about what we can do for you.
          </p>
        </div>
      </Container>
      <Container className={success === true ? Style.hide : Style.show}>
        <form
          className={Style.form}
          action="https://athorastg.wpengine.com/wp-json/gf/v2/forms/1/submissions"
          method="post"
          autocomplete="off"
          onSubmit={formSubmissionHandler}
        >
          <div className={Style.formItem}>
            <div className={Style.label}>
              <label htmlFor="input_4">Name</label>
              <p className={Object.prototype.hasOwnProperty.call(errors, '4') ? Style.show : Style.hide}>
                *This field is required
              </p>
            </div>
            <input id="input_4" type="text" name="input_4" />
          </div>
          <div className={Style.formItem}>
            <div className={Style.label}>
              <label htmlFor="input_2">Email</label>
              <p className={Object.prototype.hasOwnProperty.call(errors, '2') ? Style.show : Style.hide}>
                *Please enter a valid email
              </p>
            </div>
            <input id="input_2" type="text" name="input_2" />
          </div>
          <div className={Style.formItem}>
            <div className={Style.label}>
              <label htmlFor="input_3">Message</label>
              <p className={Object.prototype.hasOwnProperty.call(errors, '3') ? Style.show : Style.hide}>
                *This field is required
              </p>
            </div>
            <input id="input_3" type="text" name="input_3" />
          </div>
          <button type="submit">Send</button>
        </form>
      </Container>
      <Container className={success === false ? Style.hide : Style.show}>
        <div className={Style.success}>
          <svg xmlns="http://www.w3.org/2000/svg" width="147" height="126" viewBox="0 0 147 126">
            <path
              id="mark_email_read_FILL0_wght400_GRAD0_opsz48"
              d="M100.775,134,72.6,105.825,80.125,98.3l20.65,20.65,42.7-42.7L151,83.775ZM73.65,55.775,132.1,18.5H15.2ZM4,117.9V8H143.475V61.2l-10.5,10.5V28.3L73.65,66.275,14.5,28.3v79.1H59.3l10.5,10.5ZM73.825,67.85ZM73.65,55.775ZM73.825,66.275Z"
              transform="translate(-4 -8)"
              fill="#e2ddd0"
            />
          </svg>
          <h3>Message Sent!</h3>
          <h3> We Will get back to you as soon as possible.</h3>
          <div className={Style.info}>
            <p>office@athoralaw.com</p>
            <p>574.575.4147</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
