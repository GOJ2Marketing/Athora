/* eslint-disable prettier/prettier */
import Container from 'components/Container';
import Layout from 'components/Layout';
import Section from 'components/Section';
import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';
// import { forEach } from 'lodash';

import Style from "./Contact.module.scss";

const Contact = () => {

    const { metadata = {} } = useSite();
    //const { title, description } = metadata;
  
    console.log({ metadata });


    const formSubmissionHandler = (event) => {
        event.preventDefault();
        let error = []
      
        const formElement = event.target,
          { action, method } = formElement,
          body = new FormData(formElement);
      
        fetch(action, {
          method,
          body
        })
        .then(async (response) => { error = await response.json()})
        .then(() => {
            if (error.is_valid === false) {
                console.log(error.validation_messages)
                // let errors = error.validation_messages
            } 
        })
    }


    return ( 
        <Layout>
            <WebsiteJsonLd siteTitle='Contact Us'/>
            <Section className={Style.contactContainer}>
                <Container className={Style.headerText}>
                    <h1>Contact Us</h1>
                    <p>Every case and situation is unique.<br/>Let’s connect to learn more about what we can do for you.</p>
                </Container>
                <Container>
                <form className={Style.form}
                action="https://athorastg.wpengine.com/wp-json/gf/v2/forms/1/submissions" method="post" autocomplete="off" onSubmit={formSubmissionHandler}>
                    <div className={Style.formItem}>
                        <label htmlFor="input_4">Name</label>
                        <input id="input_4" type="text" name="input_4" />
                    </div>
                    <div className={Style.formItem}>
                        <label htmlFor="input_2">Email</label>
                        <input id="input_2" type="text" name="input_2" />
                    </div>
                    <div className={Style.formItem}>
                        <label htmlFor="input_3">Message</label>
                        <input id="input_3" type="text" name="input_3" />
                    </div>
                    <button type="submit">Send</button>
                </form>
                </Container>
            </Section>
        </Layout>
     );
}
 
export default Contact;