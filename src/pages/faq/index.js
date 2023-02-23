export { default } from './faq';

export async function getStaticProps() {
  try {
    const [faqResponse, categoryResponse] = await Promise.all([
      fetch('https://athorastg.wpengine.com/wp-json/wp/v2/faqs?per_page=100'),
      fetch('https://athorastg.wpengine.com/wp-json/wp/v2/categories'),
    ]);

    const faqs = await faqResponse.json();
    const categories = await categoryResponse.json().then((cats) => {
      return cats.reduce((obj, cat) => {
        obj[cat.id] = cat.name;
        return obj;
      }, {});
    });

    const faqsWithCategories = faqs.map((faq) => {
      const categoryNames = faq.categories.map((categoryId) => categories[categoryId]);
      return { ...faq, categoryNames };
    });

    return {
      props: {
        faqs: faqsWithCategories,
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
