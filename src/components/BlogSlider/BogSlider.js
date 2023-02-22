import Section from 'components/Section';
import styles from './BlogSlider.module.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from 'components/Button';

const BlogSlider = ({ posts }) => {
  return (
    <Section>
      <h2 className="sr-only">Posts</h2>
      <Splide
        hasTrack={false}
        className={styles.postWrapper}
        options={{
          type: 'loop',
          autoplay: true,
          interval: 10000,
          padding: { left: '15%', right: '15%' },
          gap: '8%',
          focus: 'center',
        }}
      >
        <SplideTrack>
          {posts.map((post) => {
            console.log(post);
            return (
              <SplideSlide
                className={styles.post}
                key={post.id}
                style={{ display: 'inline-block', marginRight: '1rem' }}
              >
                <div>{post.title.rendered}</div>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <div className={styles.buttonWrapper}>
                  <Button href={post.link}>Read More</Button>
                </div>
              </SplideSlide>
            );
          })}
        </SplideTrack>

        <div className={['splide__progress', styles.progress].join(' ')}>
          <div className="splide__progress__bar" />
        </div>
      </Splide>
    </Section>
  );
};

export default BlogSlider;
