/* eslint-disable prettier/prettier */
import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';
import { motion } from 'framer-motion'

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import CardContainer from 'components/CardContainer';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';
import HoverCard from 'components/HoverCard';

import styles from 'styles/pages/Home.module.scss';
import Button from 'components/Button';

export default function Home({ posts, pagination }) {
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
        <Button>Contact Us</Button>
        <div className={styles.scrollDown}>
          <p>Scroll</p>
          <div></div>
        </div>
      </Header>
    
      <Section>
        <div className={[styles.scrollDown, styles.scrollDownRest].join(' ')}>
          <div></div>
        </div>

        <Container className={styles.whoWeAre}>
          <div>
            <h2>Who We Are</h2>
            <p><b>60 years of combined legal experience across 3 generations.</b></p>
            <p>That’s right; we have longevity. We’re not like your typical lawyers. We’re forward-thinking in 
              how we operate while retaining the top qualities of a long-standing law firm. We have extensive 
              experience in a wide variety of practice areas. We are confident that we can guide you to an 
              amicable solution and you’ll feel cared for every step of the way. That’s our promise.
            </p>
            <div className={styles.practice}>
              <div>
                <h3>Where we Practice</h3>
                <p><b>We represent clients in Indiana and Michigan</b></p>
              </div>
              <div className={styles.states}>
                <p>IN</p>
                <p>MI</p>
              </div>
            </div>
          </div>
          
          <div className='col-2'>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className={styles.sectionTitle}>
          <h1>Areas of Practice</h1>
        </Container>
        <CardContainer>
          <HoverCard img="/businessLaw.png" title1="Business" title2="Law" button="Read More" desc="A business is more than just how you support yourself. We provide guidance for many practice areas, from employment law to specific nuances of business industries. We have extensive experience from beginning to end and can confidently assist you in any business endeavor."/>
          <HoverCard img="/estateLaw.png" title1="Estate Planning &" title2="Administration" button="Read More" desc="Whether you’re looking to protect your assets or decide how you’d like to proceed if you become impaired, Estate Planning encompasses it all. Most people associate estate planning with just a will, but there’s more to do in order to plan for every situation. We are experienced in comprehensive estate planning & administration and can help protect you and your loved ones."/>
          <HoverCard img="/litigationLaw.png" title1="Commercial" title2="Litigation" button="Read More" desc="Whether you’re looking to protect your assets or decide how you’d like to proceed if you become impaired, Estate Planning encompasses it all. Most people associate estate planning with just a will, but there’s more to do in order to plan for every situation. We are experienced in comprehensive estate planning & administration and can help protect you and your loved ones."/>
        </CardContainer>
      </Section>

      <Container className={styles.sectionTitle}>
        <h1>Contact Us</h1>
      </Container>
      <div className={styles.contact}>
        <div className={styles.formContainer}>

        </div>
        <div className={styles.mapContainer}>

        </div>
      </div>

      <Section>
        <Container className={styles.postContainer}>
          <h2 className="sr-only">Posts</h2>
          <motion.div className={styles.post}
            drag="x"
            dragConstraints={{ right:0 }}
            dragSnapToOrigin={true}
            >
            {posts.map((post) => {
              console.log(post);
              return (
                <motion.div key={post.slug}>
                  <PostCard post={post} />
                </motion.div>
              );
            })}
          </motion.div>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
