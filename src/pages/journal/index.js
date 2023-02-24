export { default } from './journal';

export async function getStaticProps() {
  try {
    const res = await fetch('https://athorastg.wpengine.com/wp-json/wp/v2/posts?per_page=100');
    console.log('Response status:', res.status);
    const posts = await res.json();
    console.log('FAQs data:', posts);

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log('Error fetching FAQs:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
