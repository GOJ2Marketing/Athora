import Container from 'components/Container';
import * as Accordion from '@radix-ui/react-accordion';

import Style from './FAQ.module.scss';

const PracticeHead = ({ list }) => {
  return (
    <>
      <div className={Style.container}>
        <h1>FAQ</h1>
        <Container className={Style.contentContainer}>
          <Accordion.Root className={Style.accordionRoot} type="single" collapsible>
            {list.map((e) => {
              return (
                <Accordion.Item key={e.tab} className={Style.accordionItem} value={e.tab}>
                  <Accordion.Header>
                    <Accordion.Trigger className={Style.trigger}>
                      <h3>{e.title}</h3>
                      <div className={Style.svg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="3" viewBox="0 0 28 3">
                          <path
                            id="remove_FILL0_wght400_GRAD0_opsz48"
                            d="M10,25.5v-3H38v3Z"
                            transform="translate(-10 -22.5)"
                            fill="#352540"
                          />
                        </svg>
                        <svg
                          className={Style.vert}
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
                  <Accordion.Content className={Style.accordionContent}>
                    <div dangerouslySetInnerHTML={{ __html: e.desc.replace(/\n/g, '<br>') }}></div>
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </Accordion.Root>
        </Container>
      </div>
    </>
  );
};

export default PracticeHead;
