/* eslint-disable prettier/prettier */
import Container from 'components/Container';
import Layout from 'components/Layout';
import Section from 'components/Section';
import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Style from "./Contact.module.scss";

const Contact = () => {

    const { metadata = {} } = useSite();
    //const { title, description } = metadata;
  
    console.log({ metadata });

    return ( 
        <Layout>
            <WebsiteJsonLd siteTitle='Contact Us'/>
            <Section className={Style.contactContainer}>
                <Container className={Style.headerText}>
                    <h1>Contact Us</h1>
                    <p>Every case and situation is unique.<br/>Let’s connect to learn more about what we can do for you.</p>
                </Container>
            </Section>
        </Layout>
     );
}
 
export default Contact;