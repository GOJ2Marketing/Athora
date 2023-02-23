/* eslint-disable prettier/prettier */
import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Practice/PracticeHead';
import PracticeTabs from 'components/Practice/PracticeTabs';
import CTA from 'components/Practice/CTA';
import PracticeFullImg from 'components/Practice/PracticeFullImg';
import PracticeFAQ from 'components/Practice/PracticeFAQ';

export default function Areas() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  console.log({ metadata });

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header title='Business Law' img='/businessLaw.png' desc="Owning and running a business is more than just a job. It’s how you support yourself and take care of your family. We can provide guidance for many aspects of your company, from entity formation and employment law to specific nuances of each industry. We have extensive experience supporting a business from its beginning to end and can confidently partner with you to achieve success."/>

      <PracticeTabs title='How We Can Help' list={helpList}/>
      <PracticeTabs title='Industry Focuses' list={highlightList}/>

      <CTA title="Schedule a Consultation" button="Contact Us" background='#fff'/>
      <PracticeFullImg src="/businessImg.png"/>
      <PracticeFAQ list={FAQ}/>
      <CTA title="Can't find what you're looking for?" button="FAQs" background='#e2ddd0'/>
      <PracticeFullImg src="/businessImg.png" disclaimer="The information on this website is for general information purposes only. Nothing on this site should be considered legal advice for any individual case or situation. This information does not constitute an attorney-client relationship."/>
    </Layout>
  );
}

const helpList = [
  {
    title: 'Starting a Business',
    tab: 'tab1',
    desc: 'A business is only as strong as its foundation. A good first step is registering your new entity with the state; something we can help you accomplish. But that’s only the first—and easiest—task on your list. You’ll need a dynamic operating agreement, contracts, and employee policies to really get going. Let’s set you up for success with a legal professional that can guide you through building a strong foundation. '
  },
  {
    title: 'Buying or Selling a Business',
    tab: 'tab2',
    desc: 'Buying or selling a business is a big deal. No matter which side of the transaction you stand, we have the experience to guide you through it. We can simplify the process, make sure you understand every aspect, and get the best deal suited for your situation.'
  },
  {
    title: 'Contracts',
    tab: 'tab3',
    desc: 'We often sign contracts without even reading or understanding them, especially when your business is busy and your time is scarce, including those tricky non-compete agreements. But we know how important it is to make sure your contracts are working for you. When drafting contracts, we make sure they’re free of error and legal jargon, and that you can understand it. You need to protect yourself fully where it counts, and our professionals can get you there.'
  },
  {
    title: 'Succession Planning',
    tab: 'tab4',
    desc: 'Does your business plan include provisions for what happens when you retire, become ill, or you pass away? It should. Succession planning for businesses can help protect your business, your employees, your family, and yourself. Let’s create a strategic plan to continue your operations when the inevitable happens.'
  }
]

const highlightList = [
  {
    title: 'Farming',
    tab: 'tab1',
    desc: 'They say farming is a lifestyle, and any farm family would tell you that’s true. But family farms are also sophisticated businesses with the same legal needs as any other business, albeit with a few special considerations. Although handshake agreements were once sufficient to run your farm, today’s legal environment requires more. Your farm deserves legal representation by attorneys with a background and industry experience. Attorney Amanda Zaluckyj’s family farms row crops in Michigan. Attorney Janet Horvath comes from a long line of dairy farmers. With Athora Law on your side, we can help you enter into more favorable contracts, manage farming’s substantial risks, and create a succession plan to pass your farm to the next generation.'
  },
  {
    title: 'Real Estate',
    tab: 'tab2',
    desc: 'Athora can effectively assist our clients in a variety of real estate matters like leasing arrangements, real estate sales, 1033 tax exchanges, liens, and mortgages. With over 60 years of experience in the field, we’ll be there to support you at every turn. Our lawyers’ diverse real-estate experience means we can evaluate your situation from every angle to guide you confidently. \n \n The Athora team cares about getting you the best outcome. We’ll be with you every step of the way to explain and simplify, meaning that you’ll not only get what you need in a real estate agreement, but you’ll understand it, too. And if an issue does arise, we’ll be here to advocate for you at every turn. So call us to find out how we can streamline real estate for you.'
  },
  {
    title: "Creditor's Rights",
    tab: 'tab3',
    desc: 'Bankruptcy isn’t easy; the extensive bankruptcy code and the legal jargon it uses only add to the difficulty. But our bankruptcy lawyer is very good at what she does. In fact, she has experience working bankruptcy cases on behalf of debtors, creditors, and as bankruptcy trustee. What does this mean for you? It means that we’ll put our knowledge from both sides of the bankruptcy coin—and from helping hundreds and hundreds of others like you—to work, ensuring you know exactly what to expect. That way, you can rest easy knowing you’ve made the best choices for you or your business. '
  },
  {
    title: 'Employment Law',
    tab: 'tab4',
    desc: 'We advise on various employment and human-resource matters, such as pre-hiring practices, termination, and severance issues. We can draft employee handbooks, employee non-compete agreements, and other documents to protect your business. If you need clarification on other issues, we consult on employment policies, employer obligations, and other day-to-day employment or human resources questions. Should you need representation, we are also well-experienced in representing employers in unemployment compensation proceedings and employment discrimination proceedings.'
  },
]

const FAQ = [
  {
    title: 'Why would I create an entity instead of just working under my name?',
    tab: 'tab1',
    desc: 'Many small businesses start as sole proprietorships. In other words, the person running the business does so under their individual name. This is especially true for service-based companies where the individual doing the work is also collecting the payments and paying the bills. But forming an entity is smart because it provides liability protection, tax incentives, and something you can buy or sell when the time is right. Although the process might seem daunting, the attorneys at Athora Law can make creating an entity easy and painless.'
  },
  {
    title: 'Do I need an attorney to review my business contracts?',
    tab: 'tab2',
    desc: 'Contracts should be straightforward and something both parties can understand. Unfortunately, most aren’t written that way. Some lawyers add legalese and confusing language to justify their bills for attorney’s fees. Other times, non-lawyers draft documents with legal jargon to make it seem like they know what they’re talking about, or they download template forms from the internet that don’t really apply. Either way, there’s always a risk you might sign a contract without really knowing what it means. \n \n At Athora Law, we want you to understand the contracts we draft and feel comfortable signing on the dotted line. So we ditch the legalese and focus on using plain language that conveys the parties’ intentions. We also understand that some phrases are “terms of art” and have legal significance beyond their face value. We’ll explain those to you and answer any questions you have.'
  },
  {
    title: 'I understand how to run my business. How is an attorney going to help?',
    tab: 'tab3',
    desc: 'We know from experience that successful business owners are usually industry experts. After all, that’s why your business is growing, thriving, and prosperous. \n \n But you don’t know what you don’t know. The essential thing experienced business attorneys can do is help their clients develop good corporate practices and manage risk. That goes far beyond just buying insurance and hoping for the best. We can take a comprehensive look at your business, including your written documents, to ensure you’re in the best possible position in case the worst happens. And if it does happen, we can help you clean up the mess.'
  },
]