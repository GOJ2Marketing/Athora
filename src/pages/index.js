/* eslint-disable prettier/prettier */
import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
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

        <Container>
          <div class='col-2'>
            <h2>Who We Are</h2>
            <p><b>60 years of combined legal experience across 3 generations.</b></p>
            <p>That’s right; we have longevity. We’re not like your typical lawyers. We’re forward-thinking in 
              how we operate while retaining the top qualities of a long-standing law firm. We have extensive 
              experience in a wide variety of practice areas. We are confident that we can guide you to an 
              amicable solution and you’ll feel cared for every step of the way. That’s our promise.</p>
          </div>
          
          <div class='col-2'>
          </div>
        </Container>
      </Section>
      
      <Container>
        <HoverCard />
        <HoverCard />
        <HoverCard />
      </Container>

      <Section>
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
