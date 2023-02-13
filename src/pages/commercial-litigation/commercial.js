/* eslint-disable prettier/prettier */
import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Practice/PracticeHead';
import Section from 'components/Section';
import Container from 'components/Container';
import CardContainer from 'components/CardContainer';
import HoverCard from 'components/HoverCard';


import areas from './commercial.module.scss';



export default function Areas() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  console.log({ metadata });

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header title='Commercial Litigation' img='/businessLaw.png' desc="Commercial litigation is comprised of businesses in one form or another, suing to enforce contractual obligations. Litigation is often a last resort, but when compromise or resolution can’t be reached, we work with our commercial clients to manage their risks and find the best approach to resolving business disputes."/>
        <Container>
          <p className={areas.subtitleMobile}>
            Working with our team through any of our practice areas will provide you with unmatched service and care. We
            work together across our practice areas as a team to provide the best results for our clients.
          </p>
        </Container>
      <Section className={areas.cardContainer}>
        <CardContainer>
          <HoverCard img="/businessLaw.png" title1="Business" title2="Law" button="Read More" desc="A business is more than just how you support yourself. We provide guidance for many practice areas, from employment law to specific nuances of business industries. We have extensive experience from beginning to end and can confidently assist you in any business endeavor."/>
          <HoverCard img="/estateLaw.png" title1="Estate Planning &" title2="Administration" button="Read More" desc="Whether you’re looking to protect your assets or decide how you’d like to proceed if you become impaired, Estate Planning encompasses it all. Most people associate estate planning with just a will, but there’s more to do in order to plan for every situation. We are experienced in comprehensive estate planning & administration and can help protect you and your loved ones."/>
          <HoverCard img="/litigationLaw.png" title1="Commercial" title2="Litigation" button="Read More" desc="Whether you’re looking to protect your assets or decide how you’d like to proceed if you become impaired, Estate Planning encompasses it all. Most people associate estate planning with just a will, but there’s more to do in order to plan for every situation. We are experienced in comprehensive estate planning & administration and can help protect you and your loved ones."/>
        </CardContainer>
      </Section>
      <Container className={areas.disclaimerContainer}>
          <p className={areas.disclaimer}>
            The information on this website is for general information purposes only. Nothing on this site should be
            considered legal advice for any individual case or situation. This information does not constitute an
            attorney-client relationship.
          </p>
      </Container>

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
