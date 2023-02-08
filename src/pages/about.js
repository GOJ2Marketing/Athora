import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import HoverCard from 'components/HoverCard';

import styles from 'styles/pages/Home.module.scss';

export default function Home() {
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
          <div class="col-2">
            <h2>Women Owned. Generationally Diverse.</h2>
            <h2>Deeply Rooted. Future Focused. Devoted Community Pillars.</h2>
          </div>

          <div class="col-2"></div>
        </Container>
      </Section>

      <Container>
        <HoverCard />
        <HoverCard />
        <HoverCard />
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
