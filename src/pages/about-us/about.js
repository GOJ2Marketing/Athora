import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import CardContainer from 'components/CardContainer';
import HoverCard from 'components/HoverCard';

import styles from 'styles/pages/Home.module.scss';

export default function Home() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  console.log({ metadata });

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        {/* <h1
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        /> */}
        <h1>About Us</h1>
        <h2>
          Athora Law Group was born out of the desire to forge a new path and bring law professionals into the 21st
          century. Times are ever-changing, and you need a law group that can confidently lead the way. To be a
          professional working with Athora Law Group means we put more emphasis on care for our clients. You’re not just
          a case to us. We value you, and we are genuinely interested in how we can best serve your needs. And we are
          going to find the right solution for you!
        </h2>
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

      <CardContainer>
        <HoverCard img="/businessLaw.png" title1="Jackie" title2="Homann" desc="Partner" button="View Profile" />
        <HoverCard img="/businessLaw.png" title1="Jackie" title2="Homann" desc="Partner" button="View Profile" />
        <HoverCard img="/businessLaw.png" title1="Jackie" title2="Homann" desc="Partner" button="View Profile" />
      </CardContainer>

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

// export async function getStaticProps() {
//   const { posts, pagination } = await getPaginatedPosts({
//     queryIncludes: 'archive',
//   });
//   return {
//     props: {
//       posts,
//       pagination: {
//         ...pagination,
//         basePath: '/posts',
//       },
//     },
//   };
// }
