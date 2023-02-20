import Layout from 'components/Layout';
import Info from 'components/profile/Info';
import CTA from 'components/profile/CTA';
// import Section from 'components/Section';
// import Container from 'components/Container';

import Header from 'components/profile/Header';

const Profile = () => {
  return (
    <Layout>
      <Header list={janet} />
      <Info list={list} />
      <CTA text={text} />
    </Layout>
  );
};

export default Profile;

const janet = {
  title: 'Janet G. Horvath',
  desc: "Janet Horvath has built a dynamic and diverse general practice that enables her to provide leading businesses, their executives, and families with the commercial and personal legal assistance they need. Because she strives to develop long-term relationships with her clients, matching her legal knowledge to their changing business and family priorities, Janet has assisted with everything from multi-million-dollar transactions to estate planning and probate administration. Business owners often seek Janet’s input with ongoing management decisions and changes to their employment handbooks and HR policies. She ensures the company meets its objectives while complying with the law. Janet has also defended companies against discrimination claims made by terminated employees. In the end, Janet’s goal is to help her clients solve their legal challenges promptly and effectively, helping their businesses flourish as she protects their personal assets.\n \n Janet has always placed a high value on people and the community. She was raised just outside of South Bend in New Carlisle on her family’s dairy farm. Her great-grandfather purchased the farm while working at Studebaker during the Great Depression. The farm has remained in her family for three generations, worked by both her grandfather and father. Growing up, Janet actively participated in her local 4-H Club and showed dairy cattle from her family’s farm at the County Fair. This community-centered upbringing instilled in Janet the desire to help others and build lasting personal and professional relationships. She was also raised in a culture that honored a person’s handshake as their word; today, that perspective helps Janet keep things simple and cut to the chase legally without overcomplicating matters. Simply put, Janet efficiently protects her clients while keeping things simple. \n \n 'I pride myself on being exactly who my clients need me to be as their businesses and families grow,' says Janet. 'I am fortunate enough to have handled so many different issues for my clients that I generally know how to help them solve their big and small challenges.'' \n \n Since 2013, Janet has shared her legal knowledge and experiences with the next generation of business leaders by teaching business law as an adjunct professor at Saint Mary’s College, her alma mater. Janet identifies a recent call from a former student, who now owns her own business, as one of her most gratifying professional experiences. 'My student knew the issues to be concerned about from our class and wanted to retain me to ensure she was adequately protecting herself,' says Janet \n \n Janet and her husband, Leon, have two young sons who are the focus of nearly all of her free time. When she’s not at work or with her family, Janet enjoys volunteering for local non-profit organizations. Janet is a member and past president of the Junior League of South Bend and serves as a director of the Scholarship Foundation of St. Joseph County. Janet is also a past president of the Saint Mary’s College South Bend Alumnae Club and a past board member of the Fischoff National Chamber Music Competition.",
  image: '/jackie.svg',
  social: 'https://www.linkedin.com/in/janetghorvath/',
};

const text =
  'Janet is ready to work alongside you and clarify any concerns. Get started today on a full plan to protect yourself or your business!';

const list = [
  {
    title: 'Bar Associations',
    sublist: [
      {
        subtitle: 'Bar and Profession Associations',
        entries: [
          {
            entry: 'American Bar Association',
          },
          {
            entry: 'Indiana State Bar Association',
          },
          {
            entry: 'Michigan State Bar Association',
          },
          {
            entry: 'St. Joseph County Bar Association',
          },
        ],
      },
      {
        subtitle: 'Professional Associations',
        entries: [
          {
            entry: 'Michiana Estate Planning Council',
          },
          {
            entry: 'The Junior League of South Bend, Inc.',
          },
          {
            entry: 'The Scholarship Foundation of St. Joseph County',
          },
        ],
      },
    ],
  },
  {
    title: 'Experience',
    sublist: [
      {
        subtitle: 'Bar Admission',
        entries: [
          {
            entry: 'Indiana, 2003',
          },
          {
            entry: 'Michigan, 2005',
          },
          {
            entry: 'U.S. District Court, Northern & Southern Districts of Indiana',
          },
        ],
      },
      {
        subtitle: 'Areas of Practice',
        columns: true,
        entries: [
          {
            entry: 'Administrative Law',
          },
          {
            entry: 'Appeals',
          },
          {
            entry: 'Commercial Transactions',
          },
          {
            entry: 'Contracts',
          },
          {
            entry: 'Employment Discrimination Defense',
          },
          {
            entry: 'Employment Law',
          },
          {
            entry: 'Entity Formation',
          },
          {
            entry: 'Guardianship',
          },
          {
            entry: 'Healthcare Directives',
          },
          {
            entry: 'Labor Law',
          },
          {
            entry: 'Noncompete Agreements',
          },
          {
            entry: 'Power of Attorneys',
          },
          {
            entry: 'Probate',
          },
          {
            entry: 'Residential Transactions',
          },
          {
            entry: 'Trusts',
          },
          {
            entry: 'Wills',
          },
        ],
      },
    ],
  },
  {
    title: 'Education',
    sublist: [
      {
        subtitle: 'Professional Credentials',
        entries: [
          {
            entry: 'J.D., Indiana University School of Law, 2003',
          },
          {
            entry: 'B.B.A., Saint Mary’s College, Summa Cum Laude, 2000',
          },
        ],
      },
    ],
  },
  {
    title: 'Distinctions',
    sublist: [
      {
        entries: [
          {
            entry: 'Saint Mary’s College Alumnae Association Outstanding Young Alumna Award (2015)',
          },
          {
            entry: 'Sassy Magazine’s Women to Watch Class of 2013',
          },
          {
            entry: 'YWCA of Northern Indiana Woman to Watch Award (2012)',
          },
          {
            entry: 'Chamber of Commerce of St. Joseph County - Michiana Forty Under 40 Award (2009)',
          },
        ],
      },
    ],
  },
];
