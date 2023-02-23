/* eslint-disable prettier/prettier */
import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Practice/PracticeHead';
import PracticeTabs from 'components/Practice/PracticeTabs';
import CTA from 'components/Practice/CTA';
import PracticeFullImg from 'components/Practice/PracticeFullImg';
import PracticeFAQ from 'components/Practice/PracticeFAQ';
// import Container from 'components/Container';

// import areas from './estate-planning.module.scss';



export default function Areas() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  console.log({ metadata });

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header title='Estate Planning & Administration' img='/businessLaw.png' desc={desc}/>
      {/* <Container>
        <p className={areas.subtitleMobile}>
          Working with our team through any of our practice areas will provide you with unmatched service and care. We
          work together across our practice areas as a team to provide the best results for our clients.
        </p>
      </Container> */}
      <PracticeTabs title='How We Can Help' list={helpList}/>
      <PracticeTabs title='Highlights' list={highlightList}/>

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
    title: 'Wills',
    tab: 'tab1',
    desc: 'A will states who will receive your assets and belongings–and in what amount–after you pass away, who will take care of any young children, and who will manage your estate. '
  },
  {
    title: 'Trusts',
    tab: 'tab2',
    desc: 'Trusts are assets held by a trustee, whether you or a third-party beneficiary. There are many benefits to putting assets in a trust, such as a more streamlined estate administration, addressing certain family situations, or even certain tax exemptions. Trusts may be helpful if you own property in other states or want your estate administered outside the courts. Let’s discuss how setting up a trust can protect your legacy.'
  },
  {
    title: 'Powers of Attorney',
    tab: 'tab3',
    desc: 'A financial power of attorney authorizes one or more individuals to handle financial matters on your behalf if you cannot or choose to have them act on your behalf for convenience.'
  },
  {
    title: 'Appointment of Healthcare Representative',
    tab: 'tab4',
    desc: 'An appointment of a health care representative authorizes one or more individuals to make medical and end-of-life decisions for you if you cannot make those decisions for yourself.'
  },
  {
    title: 'Living Wills',
    tab: 'tab6',
    desc: 'A living will provides your healthcare representative direction regarding medical treatments, life-sustaining measures that you would or wouldn’t want to be used, and preferences concerning pain management and organ donation.'
  },
  {
    title: 'Succession Planning',
    tab: 'tab7',
    desc: 'Succession planning applies to how you would like to pass on your business venture, whether that means passing it on to the next generation or exiting the business through a sale. This plan will control how much is owned by which parties and when. A strong succession plan is a smart way to prepare for the inevitable.'
  }
]

const highlightList = [
  {
    title: 'Gaurdianship',
    tab: 'tab1',
    desc: 'Guardianship is a legal relationship between a competent adult, often called the guardian, and a person who can no longer care for their own affairs, often called the ward. This type of relationship can be helpful for people with special needs or older adults who have become incapacitated. Guardianship may apply to the ward and to the ward’s property. Guardianship is usually court appointed, while the ward chooses power of attorney.'
  },
  {
    title: 'Probate',
    tab: 'tab2',
    desc: 'Probate occurs after a person has passed away. It is a court-supervised proceeding that authenticates your will and approves your chosen executor. Probate may still be used even if someone does not have a will. However, if you’ve completed comprehensive estate planning, you may not need it. This depends on how your assets were titled and at what level. \n \n Probate Litigation \n Unfortunately, not every family comes together after a loved one has passed away. When that happens, handling the decedent’s estate can become more contentious, especially if the decedent’s mental capacity or decisions are questioned. We have experience working with families to mediate, and—if necessary—litigate these issues. If you believe something isn’t right with how your loved one’s wishes are handled, let’s connect.'
  }
]

const FAQ = [
  {
    title: 'I want to retire, but what do I do with my business?',
    tab: 'tab1',
    desc: 'You’ve spent years building your business. But now you’re looking forward to stepping back and letting someone else take the reins. Whether that is one or more of your children, another family member, or a trusted employee, you need to create contracts that control who owns what interests in the business and when and how they will receive them. if you want to benefit all of your children, but not all are involved in the business, it will be essential to consider a distinction between voting and non-voting shares, or perhaps some different classes of shares, to ensure good relationships between your children after you step away. \n \n Keep in mind: it’s not enough to plan how family members or key employees will step up when you retire; you also need to plan how you will step away. The years leading up to your retirement should be a learning experience that allows you time to train your successors on the company’s management. Both are key components to the business succession plan Athora Law can assist you with.'
  },
  {
    title: 'My spouse passed away but didn’t have a will. Is everything mine now?',
    tab: 'tab2',
    desc: 'If all of the assets your spouse owned were jointly titled with you or you were the named beneficiary or designee on your spouse’s assets, pay-on-death accounts, or transfer-on-death accounts, then the property will be yours. \n \n But suppose your spouse owned any assets in their individual name, and you weren’t designated as a joint owner, beneficiary, or designee. In that case, those assets will pass according to the intestate statute of the state in which you live. Who receives the assets–and in what percentages–depends on whether your spouse has any surviving children or parents and whether it was a first or subsequent marriage.'
  },
  {
    title: 'Why can’t I use a will I found on the internet?',
    tab: 'tab3',
    desc: 'If you plan to use an online service, expect to be offered a fill-in-the-blank approach. \n \n The problem is that you don’t know what you don’t know. Unlike an attorney who knows what those blanks call for, you may not. And incorrectly filling in the blanks can lead to expensive and unpleasant estate planning mistakes. Assuming you prepare the document correctly, one of the most glaring errors commonly made by do-it-yourselfers is executing the document correctly. Each state has laws that set forth the requirements of a legally enforceable will. \n \n Most online services presume that you know what you want. But the reality is that many people don’t have any idea what they want or need. And when people sit down with an estate planning attorney, they quickly realize it’s more complicated than what they originally believed. People may have properties in various states, pensions, retirement plans, expensive personal items, family heirlooms, mutual funds, life insurance policies, and other financial instruments. People often haven’t considered the “what if” questions that are so important when drafting a will. The value in working with an estate planning attorney is that after your will is finalized, it may be necessary to revise life insurance and retirement plan beneficiaries so that your estate is cohesive and works together as a comprehensive plan. \n \n You’ve worked hard your entire life in order to provide for yourself and your loved ones. Work with a professional estate planning attorney to ensure your loved ones are properly taken care of.'
  },
  {
    title: 'I have a will. Isn’t that all I need?',
    tab: 'tab4',
    desc: 'A comprehensive estate plan includes four documents: a will, a financial power of attorney, the appointment of a health care representative, and a living will. \n \n A will provides who will receive your assets and belongings–and in what amount–after you pass away. It also names a personal representative who will ensure the terms of your will are carried out. If you have minor children, your will names a guardian to care for them if you die before they become 18. \n \n A financial power of attorney authorizes one or more individuals to handle financial matters on your behalf if you cannot or choose to have them act on your behalf for convenience. For instance, many older clients have the capacity to act, but it is easier to have their children act for them. \n \n An appointment of a health care representative authorizes one or more individuals to make medical and end-of-life decisions for you if you cannot make those decisions for yourself. \n \n A living will provides your healthcare representative direction regarding medical treatments and life-sustaining measures that either you would or wouldn’t want to be used, as well as preferences concerning pain management and organ donation.'
  }
]

const desc= 'Whether you’re looking to protect your assets or decide how you’d like to proceed if you become impaired, estate planning encompasses it all, but don’t forget about administration. This step helps streamline the activation of your estate plan when the time comes. \n Most people associate estate planning & administration with just a will, but there’s more to do to plan for every situation and ensure your plan’s administration is streamlined. We can write wills and trusts, coordinate powers of attorney and healthcare representatives, and help you avoid probate. We are experienced in comprehensive estate planning & administration and can help protect you and your loved ones.'