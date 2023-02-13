/* eslint-disable prettier/prettier */
import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Practice/PracticeHead';
import PracticeTabs from 'components/Practice/PracticeTabs';
import CTA from 'components/Practice/CTA';

const industryList = [
  {
    title: 'Construction Law',
    tab: 'tab1',
    desc: 'Construction law is a combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms, and we are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We can work with you to clarify this process and get the resolution you need.'
  },
  {
    title: 'Financial Institutions',
    tab: 'tab2',
    desc: 'combination of contract, commercial, and tort law. With the complexity of warranties, contracts, regulations, and an often-lengthy chain of contractors and sub-contractors, we know that construction law can be confusing. We represent both owners and construction firms, and we are well-versed in mechanics liens, construction defects (owners and contractors), and contractual disputes. We can work with you to clarify this process and get the resolution you need.'
  }
]

const helpList = [
  {
    title: 'Construction Litigation',
    tab: 'tab1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget.'
  },
  {
    title: 'Non-Complete Litigation',
    tab: 'tab2',
    desc: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget.'
  },
  {
    title: 'Contractual Disputes',
    tab: 'tab3',
    desc: 'od tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget.'
  },
  {
    title: 'Shareholder Disputes',
    tab: 'tab4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget.'
  },
  {
    title: 'Real Estate Disputes',
    tab: 'tab5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget. ut labore et dolore magna aliqua. Ut sem viverra aliquet eget. ut labore et dolore magna aliqua. Ut sem viverra aliquet eget.'
  },
]


export default function Areas() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  console.log({ metadata });

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header title='Business Law' img='/businessLaw.png' desc="A business is more than just how you support yourself. We can provide guidance for many practice areas, from employment law to specific nuances of business industries. We have extensive experience from beginning to end and can confidently assist you in any business endeavor."/>

      <PracticeTabs title='How We Can Help' list={helpList}/>
      <PracticeTabs title='Industry Focuses' list={industryList}/>

      <CTA />
    </Layout>
  );
}
