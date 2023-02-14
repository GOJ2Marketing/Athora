import Container from 'components/Container';
import * as Accordion from '@radix-ui/react-accordion';
import Style from './FAQ.module.scss';

const PracticeHead = () => {
  return (
    <div className={Style.container}>
      <h1>FAQ</h1>
      <Container className={Style.contentContainer}>
        <Accordion.Root className={Style.accordionRoot} type="single" defaultValue="item1" collapsible>
          <Accordion.Item className={Style.accordionItem} value="item1">
            <Accordion.Header>
              <Accordion.Trigger>I want to retire, but what do I do with my business?</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={Style.accordionContent}>
              You’ve spent years building your business. But now you’re looking forward to stepping back and letting
              someone else take the reins. Whether that is one or more of your children, another family member or a
              trusted employee, you will need to create contracts that control who will own what interests in the
              business, when and how they will receive them. And if you want to benefit all of your children, but not
              all are involved in the business, it will be important to consider a distinction between voting and
              non-voting shares, or perhaps some different classes of shares, in order to ensure good relationships
              between your children after you step-away. Keep in mind it’s not enough to plan for how family members or
              key employees will step up when you retire; you also need to plan how you will step away. The years
              leading up to your retirement should be a learning experience that allows you time to train your
              successors on the company’s management. Both are key components to the business succession plan Athora Law
              can assist you with.{' '}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Container>
    </div>
  );
};

export default PracticeHead;
