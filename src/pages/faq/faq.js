import Container from 'components/Container';
import Layout from 'components/Layout';
import Section from 'components/Section';
import * as Accordion from '@radix-ui/react-accordion';
import styles from './Faq.module.scss';
import { useState } from 'react';

const FAQs = ({ faqs }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs
    .filter((faq) => !selectedCategory || faq.categoryNames.includes(selectedCategory))
    .filter((faq) => !searchTerm || faq.content.rendered.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div data-alt-nav="true">
      <Layout>
        <Section>
          <Container>
            <h1 className={styles.title}>FAQs</h1>
            <div className={styles.filterContainer}>
              <div className={styles.filterButtons}>
                <div className={styles.buttonWrap}>
                  <button
                    className={selectedCategory === '' ? styles.active : ''}
                    onClick={() => setSelectedCategory('')}
                  >
                    Show all
                  </button>
                  <button
                    className={selectedCategory === 'Business Law' ? styles.active : ''}
                    onClick={() => setSelectedCategory('Business Law')}
                  >
                    Business Law
                  </button>
                  <button
                    className={selectedCategory === 'Estate Planning and Administration' ? styles.active : ''}
                    onClick={() => setSelectedCategory('Estate Planning and Administration')}
                  >
                    Estate Planning & Administration
                  </button>
                  <button
                    className={selectedCategory === 'Litigation' ? styles.active : ''}
                    onClick={() => setSelectedCategory('Litigation')}
                  >
                    Commercial Litigation
                  </button>
                </div>

                <div className={styles.searchContainer}>
                  <label htmlFor="faq-search" style={{ display: 'none' }}>
                    Search FAQs:
                  </label>
                  <input
                    className={styles.searchBar}
                    type="text"
                    id="faq-search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search by keyword"
                  />
                </div>
              </div>
            </div>
            <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
              {filteredFaqs.map((faq, index) => (
                <Accordion.Item
                  key={faq.id}
                  value={`tab${index + 1}`}
                  className={styles.accordionItem}
                  cat={faq.categoryNames[0].replaceAll(' ', '-')}
                >
                  <Accordion.Header className={styles.header}>
                    <Accordion.Trigger className={styles.trigger}>
                      <h3>{faq.title.rendered}</h3>
                      <div className={styles.svg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="3" viewBox="0 0 28 3">
                          <path
                            id="remove_FILL0_wght400_GRAD0_opsz48"
                            d="M10,25.5v-3H38v3Z"
                            transform="translate(-10 -22.5)"
                            fill="#352540"
                          />
                        </svg>
                        <svg
                          className={styles.vert}
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="3"
                          viewBox="0 0 28 3"
                        >
                          <path
                            id="remove_FILL0_wght400_GRAD0_opsz48"
                            d="M10,25.5v-3H38v3Z"
                            transform="translate(-10 -22.5)"
                            fill="#352540"
                          />
                        </svg>
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.AccordionContent className={styles.accordionContent}>
                    <div dangerouslySetInnerHTML={{ __html: faq.content.rendered.trim().replace(/\n/g, '<br>') }} />
                  </Accordion.AccordionContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Container>
        </Section>
      </Layout>
    </div>
  );
};

export default FAQs;
