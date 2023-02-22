export { default } from './faq';

export async function getStaticProps() {
  try {
    const res = await fetch('https://athorastg.wpengine.com/wp-json/wp/v2/faqs');
    console.log('Response status:', res.status);
    const faqs = await res.json();
    console.log('FAQs data:', faqs);

    return {
      props: {
        faqs,
      },
    };
  } catch (error) {
    console.log('Error fetching FAQs:', error);
    return {
      props: {
        faqs: [],
      },
    };
  }
}
