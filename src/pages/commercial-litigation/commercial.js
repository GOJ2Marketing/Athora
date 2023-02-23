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
      <Header title='Commercial Litigation' img='/businessLaw.png' desc="Litigation is often a last resort, but when it can’t be avoided, we work with our commercial clients to manage risks and find the most cost-effective approach to resolving business disputes. Athora’s litigation lawyers have years of experience handling complex, multi-party litigation. Our goal is to get to the bottom of the  issue, avoid lengthy litigation, minimize business disruption, and conclude your case creatively and quickly."/>
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
    desc: 'Our team has represented all sides in construction disputes—general contractors, subcontractors, property owners, design professionals, and tenants. We’ve also handled many issues that often pop up, like mechanics’ liens, construction contracts, and defective-construction disputes. We’re equipped to guide you to find the best possible solution in a timely manner.'
  },
  {
    title: 'Non-Complete Litigation',
    tab: 'tab2',
    desc: 'Businesses need to protect their proprietary and confidential information from employees while employed and after. Non-compete agreements can achieve that objective. But what happens when your former employee breaches that agreement? Or what if your new employee’s former boss is trying to enforce an invalid agreement? Whatever side your company is on, we have the experience to guide our clients through these disputes to protect what’s important to your company.'
  },
  {
    title: 'Contractual Disputes',
    tab: 'tab3',
    desc: 'Contracts are supposed to ensure that both parties understand what’s expected of them. But sometimes that relationship breaks down and there’s not an easy solution. When that happens, we can help. We work with clients pre-suit whenever possible to reach a resolution. If litigation occurs, we’ll stand by your side throughout the lawsuit and work toward the best possible solution.'
  },
  {
    title: 'Shareholder Disputes',
    tab: 'tab4',
    desc: 'Shareholder disputes often occur in two scenarios: a shareholder disagreement impacting company governance, or an agreement governing the relationship that has been breached. Either way, Athora Law can assist, working toward a resolution to move you in a direction that works for your business.. '
  },
  {
    title: 'Real Estate Disputes',
    tab: 'tab5',
    desc: 'Real estate disputes can be technical, tedious, and specialized. Athora lawyers know how to handle them. We’ve worked on tenancy issues, boundary-line disputes, survey disputes, purchase-agreement breaches, and title issues. We’ll help you understand the issues and advocate for you at every turn.'
  },
  {
    title: 'Appeals',
    tab: 'tab6',
    desc: 'We’re happy to represent clients in both state and federal appellate courts. We pride ourselves on preparing professional legal briefs that will make an impact on the court. And we have the experience to handle every aspect, from oral arguments up to the state’s supreme court.'
  }
]

const highlightList = [
  {
    title: 'Construction Law',
    tab: 'tab1',
    desc: 'Construction law is a combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms and are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We stay up-to-date on industry trends to help our clients mitigate risks and identify issues before they arise. We can  help you negotiate a contract, file a claim, or when you find yourself involved in a construction-related lawsuit or arbitration.'
  },
  {
    title: 'Financial Institutions',
    tab: 'tab2',
    desc: 'Banks, credit unions, and others who provide financial assistance to individuals and businesses are often faced with challenges with their own customers. Athora can help by drafting or reviewing documents at the beginning of a relationship. When the relationship isn’t going as well as promised, Athora can assist the lending institution in drafting forbearance agreements or other documents to protect our clients. And we can file suit to protect the financial institution’s interests and are well-versed in the bankruptcy system should a customer file a bankruptcy petition.'
  }
]

const FAQ = [
  {
    title: 'I need to file a lawsuit—how long will it take to get a judgment?',
    tab: 'tab1',
    desc: 'It would be great if this had a simple answer, but it depends on many things. If the person or company doesn’t answer, you could have a judgment in less than 60 days. If the liability of the other person or company is clear and the facts aren’t disputed, you could have a judgment within 120-150 days, depending on what work/discovery needs to be done in advance. \n \n If the case can be resolved in mediation, and depending on how much discovery needs to be done, it can be within a year of filing the lawsuit. If you have to go all the way to trial, it’ll take a minimum of two years and possibly longer.'
  },
  {
    title: 'If I get a judgment, when will I get paid?',
    tab: 'tab2',
    desc: 'A judgment is just a piece of paper. If there is insurance coverage, unless there is an appeal of the judgment, you can expect payment within 30 days. If there isn’t any insurance coverage, it depends on how liquid the assets of the defendant are. Before you sue, you (and your lawyer) should consider and research whether the person or company has the ability to pay.'
  },
  {
    title: 'I need to file a lawsuit—how long will it take to get a judgment?',
    tab: 'tab3',
    desc: 'Litigation isn’t the only way to handle a dispute. Like most things, it depends on whether the other party is willing to engage in some other form of dispute resolution. Most other forms require both parties to be willing. If the other party agrees, you might be able to mediate, meaning a third party will work with you to come to an agreement about how to resolve the dispute or work directly with the other party directly to resolve it. Other steps can be taken before litigation to engage the other party in dispute resolution conversations. Litigation, and sometimes arbitration, can be done without the other party’s consent.'
  },
]

