import Button from 'components/Button';
import Container from 'components/Container';
import Layout from 'components/Layout';
import Section from 'components/Section';
import { motion } from 'framer-motion';
import { WebsiteJsonLd } from 'lib/json-ld';

import Style from './Journal.module.scss';

const Journal = ({ posts }) => {
  return (
    <div data-alt-nav="true">
      <Layout>
        <WebsiteJsonLd siteTitle="Contact Us" />
        <Section className={Style.wrapper}>
          <Container>
            <h1 className={Style.title}>Latest</h1>
          </Container>
          <Container className={Style.postContainer}>
            {posts.map((post) => {
              //console.log(post);
              const date = new Date(post.date); // convert the date string to a Date object
              const formattedDate = date
                .toLocaleDateString('en-US', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
                })
                .replace(/\//g, '.'); // format the date as MM.DD.YY
              return (
                <motion.div
                  className={Style.post}
                  key={post.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: '-150px 0px' }}
                >
                  <div className={Style.excerpt}>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    <div className={Style.buttonWrapper}>
                      <Button href={post.link}>Read More</Button>
                    </div>
                  </div>
                  <div className={Style.titleWrap}>
                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <p>{formattedDate}</p>
                  </div>
                </motion.div>
              );
            })}
          </Container>
        </Section>
      </Layout>
    </div>
  );
};

export default Journal;
