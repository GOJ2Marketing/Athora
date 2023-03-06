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
        <div className={styles.formContainer}></div>
        <div className={styles.mapContainer}></div>
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
