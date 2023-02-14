/* eslint-disable prettier/prettier */
import Container from 'components/Container';
import Layout from 'components/Layout';
import Section from 'components/Section';
import NewCard from 'components/NewCard';
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

            <Section className={Style.cardContainer}>
                    <NewCard 
                        title={'Business\nLaw'} 
                        source={'/businessLaw.png'} 
                        desc="A business is more than just how you support yourself. We provide guidance for many practice areas, 
                        from employment law to specific nuances of business industries. We have extensive experience from beginning
                         to end and can confidently assist you in any business endeavor."/>
                    <NewCard 
                        title={'Estate Planning &\nAdministration'} 
                        source={'/estateLaw.png'}
                        desc="A business is more than just how you support yourself. We provide guidance for many practice areas, 
                        from employment law to specific nuances of business industries. We have extensive experience from beginning
                         to end and can confidently assist you in any business endeavor."/>
                    <NewCard 
                        title={'Litigation'} 
                        source={'/litigationLaw.png'} 
                        desc="A business is more than just how you support yourself. We provide guidance for many practice areas, 
                        from employment law to specific nuances of business industries. We have extensive experience from beginning
                         to end and can confidently assist you in any business endeavor."/>
            </Section>
        </Layout>
     );
}
 
export default Contact;