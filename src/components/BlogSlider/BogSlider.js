import { motion } from 'framer-motion';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';
import Section from 'components/Section';
import Container from 'components/Container';
import styles from './BlogSlider.module.scss';

const BlogSlider = ({ posts, pagination }) => {
  return (
    <Section>
      <Container>
        <h2 className="sr-only">Posts</h2>
        <motion.div
          className={styles.postWrapper}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          dragTransition={{ power: 0, timeConstant: 250, modifyTarget: (target) => Math.round(target) }}
        >
          {posts.map((post) => {
            console.log(post);
            return (
              <motion.div
                className={styles.post}
                key={post.slug}
                style={{ display: 'inline-block', marginRight: '1rem' }}
              >
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
  );
};

export default BlogSlider;
