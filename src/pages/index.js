import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from 'styles/pages/Home.module.scss';
import Button from 'components/Button';
import BlogSlider from 'components/BlogSlider';
import NewCardContainer from 'components/NewCardContainer';
import ContactForm from 'components/Contact';

export default function Home({ posts }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Section style={{ padding: 0 }}>
        <Header>
          <h1
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <a className="smooth-scroll" href="#whoWeAre">
            <div className={[styles.scrollDown, styles.scrollDownLink].join(' ')}>
              <p>Scroll</p>
              <div></div>
            </div>
          </a>
          <Button href="contact-us">Contact Us</Button>
        </Header>
      </Section>

      <Section id={'whoWeAre'}>
        <div className={[styles.scrollDown, styles.scrollDownRest].join(' ')}>
          <div></div>
        </div>

        <Container className={styles.whoWeAre}>
          <div>
            <h2>Who We Are</h2>
            <p>
              <b>60 years of combined legal experience across 3 generations.</b>
            </p>
            <p>
              That’s right; we have longevity. We’re not like your typical lawyers. We’re forward-thinking in how we
              operate while retaining the top qualities of a long-standing law firm. We have extensive experience in a
              wide variety of practice areas. We are confident that we can guide you to an amicable solution and you’ll
              feel cared for every step of the way. That’s our promise.
            </p>
            <div className={styles.practice}>
              <div>
                <h3>Where we Practice</h3>
                <p>
                  <b>We represent clients in Indiana and Michigan</b>
                </p>
              </div>
              <div className={styles.states}>
                <p>IN</p>
                <p>MI</p>
              </div>
            </div>
          </div>

          <div className={styles.col2}></div>
        </Container>
        <div className={[styles.scrollDown, styles.scrollWho].join(' ')}>
          <div></div>
          <h2>Areas of Practice</h2>
        </div>
      </Section>

      <div className={styles.noPadTop}>
        <Section>
          <NewCardContainer />
          <div className={[styles.scrollDown, styles.scrollWho].join(' ')}>
            <div></div>
            <h2>Contact Us</h2>
          </div>
        </Section>
      </div>

      <div className={styles.contact}>
        <ContactForm />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.3019218512113!2d-86.23792718383922!3d41.692417484991296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd677cda81df%3A0xf43f7512b37515e4!2s1251%20N%20Eddy%20St%2C%20South%20Bend%2C%20IN%2046617!5e0!3m2!1sen!2sus!4v1677696593656!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <BlogSlider posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.REST_ALL_POSTS);
    console.log('Response status:', res.status);
    const posts = await res.json();
    console.log('FAQs data:', posts);

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log('Error fetching FAQs:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
