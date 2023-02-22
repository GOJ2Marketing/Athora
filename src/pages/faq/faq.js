import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';
import * as Tabs from '@radix-ui/react-tabs';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import FAQ from 'components/FAQ';

import styles from './Faq.module.scss';

export default function Home({ faqs }) {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <div data-alt-nav="true">
      <Layout>
        <WebsiteJsonLd siteTitle={title} />
        <Tabs.Root defaultValue="tab1">
          <Section>
            <Container className={styles.head}>
              <h1>FAQs</h1>
              <Tabs.List>
                <div className={styles.tabs}>
                  <Tabs.Trigger value="tab1" className={styles.tabTrigger}>
                    <p>All</p>
                  </Tabs.Trigger>
                  <Tabs.Trigger value="tab2" className={styles.tabTrigger}>
                    <p>Business Law</p>
                  </Tabs.Trigger>
                  <Tabs.Trigger value="tab3" className={styles.tabTrigger}>
                    <p>Estate Planning & Administration</p>
                  </Tabs.Trigger>
                  <Tabs.Trigger value="tab4" className={styles.tabTrigger}>
                    <p>Commercial Litigation</p>
                  </Tabs.Trigger>
                </div>
              </Tabs.List>
            </Container>
            <Container>
              <Tabs.Content value="tab1">
                <FAQ list={all} />
              </Tabs.Content>
              <Tabs.Content value="tab2">
                <FAQ list={business} />
              </Tabs.Content>
              <Tabs.Content value="tab3">
                <FAQ list={estate} />
              </Tabs.Content>
              <Tabs.Content value="tab4">
                <FAQ list={litigation} />
              </Tabs.Content>
              {faqs ? (
                faqs.map((faq) => (
                  <Tabs.Content key={faq.id} value="tab1">
                    <h2>{faq.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: faq.content.rendered }} />
                  </Tabs.Content>
                ))
              ) : (
                <li>Loading...</li>
              )}
            </Container>
          </Section>
        </Tabs.Root>
      </Layout>
    </div>
  );
}

const all = [
  {
    title: 'Why would I create an entity instead of just working under my name?',
    tab: 'tab1',
    desc: 'Many small businesses start as sole proprietorships. In other words, the person running the business does so under their individual name. This is especially true for service-based companies where the individual doing the work is also collecting the payments and paying the bills. But forming an entity is smart because it provides liability protection, tax incentives, and something you can buy or sell when the time is right. Although the process might seem daunting, the attorneys at Athora Law can make creating an entity easy and painless.',
  },
  {
    title: 'Do I need an attorney to review my business contracts?',
    tab: 'tab2',
    desc: 'Contracts should be straightforward and something both parties can understand. Unfortunately, most aren’t written that way. Some lawyers add legalese and confusing language to justify their bills for attorney’s fees. Other times, non-lawyers draft documents with legal jargon to make it seem like they know what they’re talking about, or they download template forms from the internet that don’t really apply. Either way, there’s always a risk you might sign a contract without really knowing what it means.\n \n At Athora Law, we want you to understand the contracts we draft and feel comfortable signing on the dotted line. So we ditch the legalese and focus on using plain language that conveys the parties’ intentions. We also understand that some phrases are “terms of art” and have legal significance beyond their face value. We’ll explain those to you and answer any questions you have.',
  },
  {
    title: 'Do I need to use legal jargon in my contracts to make them enforceable?',
    tab: 'tab3',
    desc: 'No! Believe it or not, we wish all attorneys would ditch the legalese. These extra words create confusion, sow doubt, and might leave you with a contract you don’t understand. At Athora Law, we want to ensure you understand the terms by writing in plain language, and we’re happy to answer any questions you have about the contract because you should know what you’re signing.',
  },
  {
    title: 'I understand how to run my business. How is an attorney going to help?',
    tab: 'tab4',
    desc: 'We know from experience that successful business owners are usually industry experts. After all, that’s why your business is growing, thriving, and prosperous. \n \nBut you don’t know what you don’t know. The essential thing experienced business attorneys can do is help their clients develop good corporate practices and manage risk. That goes far beyond just buying insurance and hoping for the best. We can take a comprehensive look at your business, including your written documents, to ensure you’re in the best possible position in case the worst happens. And if it does happen, we can help you clean up the mess.',
  },
  {
    title: 'I want to retire, but what do I do with my business? ',
    tab: 'tab5',
    desc: 'You’ve spent years building your business. But now you’re looking forward to stepping back and letting someone else take the reins. Whether that is one or more of your children, another family member, or a trusted employee, you need to create contracts that control who owns what interests in the business and when and how they will receive them. if you want to benefit all of your children, but not all are involved in the business, it will be essential to consider a distinction between voting and non-voting shares, or perhaps some different classes of shares, to ensure good relationships between your children after you step away. \n \n Keep in mind: it’s not enough to plan how family members or key employees will step up when you retire; you also need to plan how you will step away. The years leading up to your retirement should be a learning experience that allows you time to train your successors on the company’s management. Both are key components to the business succession plan Athora Law can assist you with.',
  },
  {
    title: 'My spouse passed away but didn’t have a will. Is everything mine now?',
    tab: 'tab6',
    desc: 'If all of the assets your spouse owned were jointly titled with you or you were the named beneficiary or designee on your spouse’s assets, pay-on-death accounts, or transfer-on-death accounts, then the property will be yours. \n \nBut suppose your spouse owned any assets in their individual name, and you weren’t designated as a joint owner, beneficiary, or designee. In that case, those assets will pass according to the intestate statute of the state in which you live. Who receives the assets–and in what percentages–depends on whether your spouse has any surviving children or parents and whether it was a first or subsequent marriage.',
  },
  {
    title: 'Why can’t I use a will I found on the internet?',
    tab: 'tab7',
    desc: 'If you plan to use an online service, expect to be offered a fill-in-the-blank approach. \n \n The problem is that you don’t know what you don’t know. Unlike an attorney who knows what those blanks call for, you may not. And incorrectly filling in the blanks can lead to expensive and unpleasant estate planning mistakes. Assuming you prepare the document correctly, one of the most glaring errors commonly made by do-it-yourselfers is executing the document correctly. Each state has laws that set forth the requirements of a legally enforceable will. \n \n Most online services presume that you know what you want. But the reality is that many people don’t have any idea what they want or need. And when people sit down with an estate planning attorney, they quickly realize it’s more complicated than what they originally believed. People may have properties in various states, pensions, retirement plans, expensive personal items, family heirlooms, mutual funds, life insurance policies, and other financial instruments. People often haven’t considered the “what if” questions that are so important when drafting a will. The value in working with an estate planning attorney is that after your will is finalized, it may be necessary to revise life insurance and retirement plan beneficiaries so that your estate is cohesive and works together as a comprehensive plan. \n \n You’ve worked hard your entire life in order to provide for yourself and your loved ones. Work with a professional estate planning attorney to ensure your loved ones are properly taken care of.',
  },
  {
    title: 'I have a will. Isn’t that all I need?',
    tab: 'tab8',
    desc: 'A comprehensive estate plan includes four documents: a will, a financial power of attorney, the appointment of a health care representative, and a living will. \n \n A will provides who will receive your assets and belongings–and in what amount–after you pass away. It also names a personal representative who will ensure the terms of your will are carried out. If you have minor children, your will names a guardian to care for them if you die before they become 18. \n \n A financial power of attorney authorizes one or more individuals to handle financial matters on your behalf if you cannot or choose to have them act on your behalf for convenience. For instance, many older clients have the capacity to act, but it is easier to have their children act for them. \n \n An appointment of a health care representative authorizes one or more individuals to make medical and end-of-life decisions for you if you cannot make those decisions for yourself. \n \n A living will provides your healthcare representative direction regarding medical treatments and life-sustaining measures that either you would or wouldn’t want to be used, as well as preferences concerning pain management and organ donation',
  },
  {
    title: 'Should I form a trust to avoid probate?',
    tab: 'tab9',
    desc: 'Probate is a court-supervised process required before assets in one’s individual name can be distributed to the beneficiaries. Having a will means the court-ordered distribution of your assets will be made in accordance with your will. But having a will doesn’t eliminate the assets being subject to court administration. Assets in a revocable trust are not considered part of your estate at your death, meaning they can be transferred directly to your beneficiaries and don’t need to go through probate. \n \n But a trust can be more expensive and complicated to draft than a will. So whether a will or trust is better depends on your goals, the nature and value of your assets, the age and capabilities of your heirs, whether any of your heirs have special needs, tax planning considerations, and the complexity of your bequests.',
  },
  {
    title:
      'I have a power of attorney for my parents. Does that mean I can handle their estates without going to court?',
    tab: 'tab10',
    desc: 'A financial power of attorney allows you to serve as your parent’s agent and manage his or her financial affairs during his or her lifetime. When a parent dies, a power of attorney terminates. If your parent has assets to be collected, a personal representative may need to be appointed by the court. It will depend on the total value of your parent’s assets and whether those assets have a joint owner, beneficiary, pay-on-death or transfer-on-death designee named.',
  },
  {
    title: 'My loved one passed away. What information is needed to collect his or her assets?',
    tab: 'tab11',
    desc: 'The days immediately following a loved one’s passing can be confusing, difficult, and overwhelming. We always recommend that our clients share their estate planning, including where their documents are located, with family to reduce this stress and burden. But if you don’t have that information, you’ll need to collect some information before speaking with an attorney. To the best of your ability, obtain basic information about potential heirs, including names, birthdays, addresses, and social security numbers.',
  },
  {
    title: 'My loved one passed away in Indiana but owns a home in Florida. How do I sell it?',
    tab: 'tab12',
    desc: 'Administering an estate with assets in multiple states poses its own challenges. The post-death administration of an estate is subject to state laws. To start, you’ll need to consider where your person was domiciled (not simply where they were physically located the moment they died). You’ll also need to consider how the assets are titled and how that state’s laws govern a post-death transfer. Often, when a person owns property in another state and hasn’t completed any estate planning, the only way to transfer the property is by opening a second, ancillary estate in the state where it’s located.',
  },
];

const business = [
  {
    title: 'Why would I create an entity instead of just working under my name?',
    tab: 'tab1',
    desc: 'Many small businesses start as sole proprietorships. In other words, the person running the business does so under their individual name. This is especially true for service-based companies where the individual doing the work is also collecting the payments and paying the bills. But forming an entity is smart because it provides liability protection, tax incentives, and something you can buy or sell when the time is right. Although the process might seem daunting, the attorneys at Athora Law can make creating an entity easy and painless.',
  },
  {
    title: 'Do I need an attorney to review my business contracts?',
    tab: 'tab2',
    desc: 'Contracts should be straightforward and something both parties can understand. Unfortunately, most aren’t written that way. Some lawyers add legalese and confusing language to justify their bills for attorney’s fees. Other times, non-lawyers draft documents with legal jargon to make it seem like they know what they’re talking about, or they download template forms from the internet that don’t really apply. Either way, there’s always a risk you might sign a contract without really knowing what it means.\n \n At Athora Law, we want you to understand the contracts we draft and feel comfortable signing on the dotted line. So we ditch the legalese and focus on using plain language that conveys the parties’ intentions. We also understand that some phrases are “terms of art” and have legal significance beyond their face value. We’ll explain those to you and answer any questions you have.',
  },
  {
    title: 'Do I need to use legal jargon in my contracts to make them enforceable?',
    tab: 'tab3',
    desc: 'No! Believe it or not, we wish all attorneys would ditch the legalese. These extra words create confusion, sow doubt, and might leave you with a contract you don’t understand. At Athora Law, we want to ensure you understand the terms by writing in plain language, and we’re happy to answer any questions you have about the contract because you should know what you’re signing.',
  },
  {
    title: 'I understand how to run my business. How is an attorney going to help?',
    tab: 'tab4',
    desc: 'We know from experience that successful business owners are usually industry experts. After all, that’s why your business is growing, thriving, and prosperous. \n \nBut you don’t know what you don’t know. The essential thing experienced business attorneys can do is help their clients develop good corporate practices and manage risk. That goes far beyond just buying insurance and hoping for the best. We can take a comprehensive look at your business, including your written documents, to ensure you’re in the best possible position in case the worst happens. And if it does happen, we can help you clean up the mess.',
  },
];

const estate = [
  {
    title: 'I want to retire, but what do I do with my business? ',
    tab: 'tab5',
    desc: 'You’ve spent years building your business. But now you’re looking forward to stepping back and letting someone else take the reins. Whether that is one or more of your children, another family member, or a trusted employee, you need to create contracts that control who owns what interests in the business and when and how they will receive them. if you want to benefit all of your children, but not all are involved in the business, it will be essential to consider a distinction between voting and non-voting shares, or perhaps some different classes of shares, to ensure good relationships between your children after you step away. \n \n Keep in mind: it’s not enough to plan how family members or key employees will step up when you retire; you also need to plan how you will step away. The years leading up to your retirement should be a learning experience that allows you time to train your successors on the company’s management. Both are key components to the business succession plan Athora Law can assist you with.',
  },
  {
    title: 'My spouse passed away but didn’t have a will. Is everything mine now?',
    tab: 'tab6',
    desc: 'If all of the assets your spouse owned were jointly titled with you or you were the named beneficiary or designee on your spouse’s assets, pay-on-death accounts, or transfer-on-death accounts, then the property will be yours. \n \nBut suppose your spouse owned any assets in their individual name, and you weren’t designated as a joint owner, beneficiary, or designee. In that case, those assets will pass according to the intestate statute of the state in which you live. Who receives the assets–and in what percentages–depends on whether your spouse has any surviving children or parents and whether it was a first or subsequent marriage.',
  },
  {
    title: 'Why can’t I use a will I found on the internet?',
    tab: 'tab7',
    desc: 'If you plan to use an online service, expect to be offered a fill-in-the-blank approach. \n \n The problem is that you don’t know what you don’t know. Unlike an attorney who knows what those blanks call for, you may not. And incorrectly filling in the blanks can lead to expensive and unpleasant estate planning mistakes. Assuming you prepare the document correctly, one of the most glaring errors commonly made by do-it-yourselfers is executing the document correctly. Each state has laws that set forth the requirements of a legally enforceable will. \n \n Most online services presume that you know what you want. But the reality is that many people don’t have any idea what they want or need. And when people sit down with an estate planning attorney, they quickly realize it’s more complicated than what they originally believed. People may have properties in various states, pensions, retirement plans, expensive personal items, family heirlooms, mutual funds, life insurance policies, and other financial instruments. People often haven’t considered the “what if” questions that are so important when drafting a will. The value in working with an estate planning attorney is that after your will is finalized, it may be necessary to revise life insurance and retirement plan beneficiaries so that your estate is cohesive and works together as a comprehensive plan. \n \n You’ve worked hard your entire life in order to provide for yourself and your loved ones. Work with a professional estate planning attorney to ensure your loved ones are properly taken care of.',
  },
  {
    title: 'I have a will. Isn’t that all I need?',
    tab: 'tab8',
    desc: 'A comprehensive estate plan includes four documents: a will, a financial power of attorney, the appointment of a health care representative, and a living will. \n \n A will provides who will receive your assets and belongings–and in what amount–after you pass away. It also names a personal representative who will ensure the terms of your will are carried out. If you have minor children, your will names a guardian to care for them if you die before they become 18. \n \n A financial power of attorney authorizes one or more individuals to handle financial matters on your behalf if you cannot or choose to have them act on your behalf for convenience. For instance, many older clients have the capacity to act, but it is easier to have their children act for them. \n \n An appointment of a health care representative authorizes one or more individuals to make medical and end-of-life decisions for you if you cannot make those decisions for yourself. \n \n A living will provides your healthcare representative direction regarding medical treatments and life-sustaining measures that either you would or wouldn’t want to be used, as well as preferences concerning pain management and organ donation',
  },
];

const litigation = [
  {
    title: 'Should I form a trust to avoid probate?',
    tab: 'tab1',
    desc: 'Probate is a court-supervised process required before assets in one’s individual name can be distributed to the beneficiaries. Having a will means the court-ordered distribution of your assets will be made in accordance with your will. But having a will doesn’t eliminate the assets being subject to court administration. Assets in a revocable trust are not considered part of your estate at your death, meaning they can be transferred directly to your beneficiaries and don’t need to go through probate. \n \n But a trust can be more expensive and complicated to draft than a will. So whether a will or trust is better depends on your goals, the nature and value of your assets, the age and capabilities of your heirs, whether any of your heirs have special needs, tax planning considerations, and the complexity of your bequests.',
  },
  {
    title:
      'I have a power of attorney for my parents. Does that mean I can handle their estates without going to court?',
    tab: 'tab2',
    desc: 'A financial power of attorney allows you to serve as your parent’s agent and manage his or her financial affairs during his or her lifetime. When a parent dies, a power of attorney terminates. If your parent has assets to be collected, a personal representative may need to be appointed by the court. It will depend on the total value of your parent’s assets and whether those assets have a joint owner, beneficiary, pay-on-death or transfer-on-death designee named.',
  },
  {
    title: 'My loved one passed away. What information is needed to collect his or her assets?',
    tab: 'tab3',
    desc: 'The days immediately following a loved one’s passing can be confusing, difficult, and overwhelming. We always recommend that our clients share their estate planning, including where their documents are located, with family to reduce this stress and burden. But if you don’t have that information, you’ll need to collect some information before speaking with an attorney. To the best of your ability, obtain basic information about potential heirs, including names, birthdays, addresses, and social security numbers.',
  },
  {
    title: 'My loved one passed away in Indiana but owns a home in Florida. How do I sell it?',
    tab: 'tab4',
    desc: 'Administering an estate with assets in multiple states poses its own challenges. The post-death administration of an estate is subject to state laws. To start, you’ll need to consider where your person was domiciled (not simply where they were physically located the moment they died). You’ll also need to consider how the assets are titled and how that state’s laws govern a post-death transfer. Often, when a person owns property in another state and hasn’t completed any estate planning, the only way to transfer the property is by opening a second, ancillary estate in the state where it’s located.',
  },
];
