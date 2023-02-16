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
      <Header title='Commercial Litigation' img='/businessLaw.png' desc="Commercial litigation is comprised of businesses in one form or another, suing to enforce contractual obligations. Litigation is often a last resort, but when compromise or resolution can’t be reached, we work with our commercial clients to manage their risks and find the best approach to resolving business disputes."/>
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
    title: 'Construction Litigation',
    tab: 'tab1',
    desc: 'Construction law is a combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms, and we are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We can work with you to clarify this process and get the resolution you need.'
  },
  {
    title: 'Non-Complete Litigation',
    tab: 'tab2',
    desc: 'combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms, and we are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We can work with you to clarify this process and get the resolution you need.'
  },
  {
    title: 'Contractual Disputes',
    tab: 'tab3',
    desc: 'combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms, and we are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We can work with you to clarify this process and get the resolution you need.'
  },
  {
    title: 'Shareholder Disputes',
    tab: 'tab4',
    desc: 'combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms, and we are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We can work with you to clarify this process and get the resolution you need.'
  },
  {
    title: 'Real Estate Disputes',
    tab: 'tab5',
    desc: 'combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms, and we are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We can work with you to clarify this process and get the resolution you need.'
  },
  {
    title: 'Appeals',
    tab: 'tab6',
    desc: 'combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms, and we are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We can work with you to clarify this process and get the resolution you need.'
  }
]

const highlightList = [
  {
    title: 'Construction Law',
    tab: 'tab1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget.'
  },
  {
    title: 'Financial Institutions',
    tab: 'tab2',
    desc: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget.'
  }
]

const FAQ = [
  {
    title: 'Will there be a jury trial? Is there a benefit to not having a jury trial?',
    tab: 'tab1',
    desc: 'You’ve spent years building your business. But now you’re looking forward to stepping back and letting someone else take the reins. Whether that is one or more of your children, another family member or a trusted employee, you will need to create contracts that control who will own what interests in the business, when and how they will receive them. And if you want to benefit all of your children, but not all are involved in the business, it will be important to consider a distinction between voting and non-voting shares, or perhaps some different classes of shares, in order to ensure good relationships between your children after you step-away. Keep in mind it’s not enough to plan for how family members or key employees will step up when you retire; you also need to plan how you will step away. The years leading up to your retirement should be a learning experience that allows you time to train your successors on the company’s management. Both are key components to the business succession plan Athora Law can assist you with.'
  },
  {
    title: 'What is an appeal?',
    tab: 'tab2',
    desc: 'You’ve spent years building your business. But now you’re looking forward to stepping back and letting someone else take the reins. Whether that is one or more of your children, another family member or a trusted employee, you will need to create contracts that control who will own what interests in the business, when and how they will receive them. And if you want to benefit all of your children, but not all are involved in the business, it will be important to consider a distinction between voting and non-voting shares, or perhaps some different classes of shares, in order to ensure good relationships between your children after you step-away. Keep in mind it’s not enough to plan for how family members or key employees will step up when you retire; you also need to plan how you will step away. The years leading up to your retirement should be a learning experience that allows you time to train your successors on the company’s management. Both are key components to the business succession plan Athora Law can assist you with.'
  },
  {
    title: 'I need to file a lawsuit—how long will it take to get a judgment?',
    tab: 'tab3',
    desc: 'You’ve spent years building your business. But now you’re looking forward to stepping back and letting someone else take the reins. Whether that is one or more of your children, another family member or a trusted employee, you will need to create contracts that control who will own what interests in the business, when and how they will receive them. And if you want to benefit all of your children, but not all are involved in the business, it will be important to consider a distinction between voting and non-voting shares, or perhaps some different classes of shares, in order to ensure good relationships between your children after you step-away. Keep in mind it’s not enough to plan for how family members or key employees will step up when you retire; you also need to plan how you will step away. The years leading up to your retirement should be a learning experience that allows you time to train your successors on the company’s management. Both are key components to the business succession plan Athora Law can assist you with.'
  },
]

