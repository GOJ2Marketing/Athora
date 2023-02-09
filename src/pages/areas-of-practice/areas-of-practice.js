/* eslint-disable prettier/prettier */
import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import CardContainer from 'components/CardContainer';
import HoverCard from 'components/HoverCard';

import styles from 'styles/pages/Home.module.scss';
import areas from './Areas-of-practice.module.scss';

export default function Areas() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  console.log({ metadata });

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <Container>
          <h1>Areas of Practice</h1>
          <p className={areas.subtitleDesk}>
            Working with our team through any of our practice areas will provide you with unmatched service and care. We
            work together across our practice areas as a team to provide the best results for our clients.
          </p>
        </Container>
        <div className={styles.scrollDown}>
          <p>Scroll</p>
          <div></div>
        </div>
      </Header>

      <Section>
        <Container>
          <div className={[styles.scrollDown, styles.scrollDownRest].join(' ')}>
            <div></div>
          </div>
          <p className={areas.subtitleMobile}>
            Working with our team through any of our practice areas will provide you with unmatched service and care. We
            work together across our practice areas as a team to provide the best results for our clients.
          </p>
        </Container>
      </Section>
      <Section className={areas.cardContainer}>
        <CardContainer>
          <HoverCard img="/businessLaw.png" title1="Business" title2="Law" desc="A business is more than just how you support yourself. We provide guidance for many practice areas, from employment law to specific nuances of business industries. We have extensive experience from beginning to end and can confidently assist you in any business endeavor."/>
          <HoverCard img="/estateLaw.png" title1="Estate Planning &" title2="Administration" desc="Whether you’re looking to protect your assets or decide how you’d like to proceed if you become impaired, Estate Planning encompasses it all. Most people associate estate planning with just a will, but there’s more to do in order to plan for every situation. We are experienced in comprehensive estate planning & administration and can help protect you and your loved ones."/>
          <HoverCard img="/litigationLaw.png" title1="Commercial" title2="Litigation" desc="Whether you’re looking to protect your assets or decide how you’d like to proceed if you become impaired, Estate Planning encompasses it all. Most people associate estate planning with just a will, but there’s more to do in order to plan for every situation. We are experienced in comprehensive estate planning & administration and can help protect you and your loved ones."/>
        </CardContainer>
        <Container className={areas.disclaimerContainer}>
          <p className={areas.disclaimer}>
            The information on this website is for general information purposes only. Nothing on this site should be
            considered legal advice for any individual case or situation. This information does not constitute an
            attorney-client relationship.
          </p>
        </Container>
      </Section>

      {/* <Section>
        <Container>
          <h2 className="sr-only">Posts</h2>
          <ul className={styles.posts}>
            {posts.map((post) => {
              console.log(post);
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
          </Section>*/}
    </Layout>
  );
}
