import Section from 'components/Section';
import styles from './BlogSlider.module.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from 'components/Button';
import { useState } from 'react';

const BlogSlider = ({ posts }) => {
  const [progressVisibility, setProgressVisibility] = useState(true);

  return (
    <Section>
      <h2 className="sr-only">Posts</h2>
      <div className={styles.splideWrap}>
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
            arrows: false,
            speed: 1000,
            pauseOnHover: false,
            pauseOnFocus: true,
          }}
          onMove={() => {
            setProgressVisibility(false);
          }}
          onMoved={() => {
            setProgressVisibility(true);
          }}
          onDrag={() => {
            setProgressVisibility(false);
          }}
        >
          <SplideTrack>
            {posts.map((post) => {
              return (
                <SplideSlide
                  className={styles.post}
                  key={post.id}
                  style={{ display: 'inline-block', marginRight: '1rem' }}
                >
                  <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <div className={styles.buttonWrapper}>
                    <Button href={post.link}>Read More</Button>
                  </div>
                </SplideSlide>
              );
            })}
          </SplideTrack>

          <div
            className={['splide__progress', styles.progress].join(' ')}
            style={{ opacity: progressVisibility ? '1' : '0', transition: progressVisibility ? '1000ms' : '0ms' }}
          >
            <div className="splide__progress__bar" />
          </div>

          <ul
            className="splide__pagination"
            color="purple"
            style={{ position: 'relative', bottom: 0, padding: '1em 0' }}
          />
        </Splide>
      </div>
    </Section>
  );
};

export default BlogSlider;
