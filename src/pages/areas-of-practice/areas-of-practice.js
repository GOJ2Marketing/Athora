import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from 'styles/pages/Home.module.scss';
import areas from './Areas-of-practice.module.scss';
import NewCardContainer from 'components/NewCardContainer';

export default function Areas() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  console.log({ metadata });

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1>Areas of Practice</h1>
        <h2 className={areas.subtitleDesk}>
          Working with our team through any of our practice areas will provide you with unmatched service and care. We
          work together across our practice areas as a team to provide the best results for our clients.
        </h2>
        <div className={styles.scrollDown}>
          <p>Scroll</p>
          <div></div>
        </div>
      </Header>
      <Container>
        <p className={areas.subtitleMobile}>
          Working with our team through any of our practice areas will provide you with unmatched service and care. We
          work together across our practice areas as a team to provide the best results for our clients.
        </p>
      </Container>
      <div className={styles.noPadTop}>
        <Section>
          <NewCardContainer />
        </Section>
      </div>
      <Container className={areas.disclaimerContainer}>
        <p className={areas.disclaimer}>
          The information on this website is for general information purposes only. Nothing on this site should be
          considered legal advice for any individual case or situation. This information does not constitute an
          attorney-client relationship.
        </p>
      </Container>
    </Layout>
  );
}
