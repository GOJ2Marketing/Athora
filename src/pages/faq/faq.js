import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from './Faq.module.scss';

export default function Home() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  console.log({ metadata });

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />

      <Section>
        <Container className={styles.head}>
          <h1>FAQs</h1>
          <div className={styles.tabs}>
            <p>All</p>
            <p>Business Law</p>
            <p>Estate Planning & Administration</p>
            <p>Commercial Litigation</p>
          </div>
        </Container>
        <Container></Container>
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
