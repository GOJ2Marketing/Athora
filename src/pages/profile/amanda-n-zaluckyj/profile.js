import Layout from 'components/Layout';
import Info from 'components/profile/Info';
import CTA from 'components/profile/CTA';
// import Section from 'components/Section';
// import Container from 'components/Container';

import Header from 'components/profile/Header';

const Profile = () => {
  return (
    <Layout>
      <Header list={jackie} />
      <Info list={list} />
      <CTA text={text} />
    </Layout>
  );
};

export default Profile;

const jackie = {
  title: 'Amanda N. Zaluckyj',
  desc: 'Amanda thinks it is important for people to have access to a trusted adviser who can offer sound legal advice and zealous advocacy everyone deserves. She brings that approach to all of her clients today. Her goal is to make sure her clients understand the process, understand their options and have all the information necessary to make big decisions. \n \n Amanda started her career in general civil litigation and handled various civil matters, from defending businesses against worker’s compensation lawsuits to litigating real property boundary disputes. She’s also handled multi-million-dollar real estate transactions, eviction proceedings, and utility easement negotiations. Amanda not only understands how to set up clients for success, she knows how to avoid and handle any potential lawsuits when they come along. \n \n Amanda graduated from Grand Valley State University before attending Michigan State University College of Law. She is licensed to practice in both Michigan and Indiana. When she’s not working for her clients, Amanda enjoys spending time with her family and dog, getting lost in the latest historical fantasy novel, and sharing life on the farm with her followers. She’s also an avid college football fan and spends Saturdays in the fall cheering on the Michigan State Spartans.',
  image: '/jackie.svg',
  social: 'https://www.linkedin.com/in/amanda-zaluckyj-b8982a40/',
};

const text =
  'When it comes to business law or litigation, results matter. Amanda can get results you can trust. Get started with a consultation!';

const list = [
  {
    title: 'Affiliations',
    sublist: [
      {
        entries: [
          {
            entry: 'Michigan Bar Association',
          },
          {
            entry: 'Indiana Bar Association',
          },
          {
            entry: 'St. Joseph County Bar Association',
          },
        ],
      },
    ],
  },
  {
    title: 'Experience',
    sublist: [
      {
        subtitle: 'Bar Admissions',
        entries: [
          {
            entry: 'Michigan, 2012',
          },
          {
            entry: 'Indiana, 2013',
          },
        ],
      },
      {
        subtitle: 'Areas of Practice',
        columns: true,
        entries: [
          {
            entry: 'Agriculture Law',
          },
          {
            entry: 'Administrative Law',
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
          {
            entry: 'Business Management Consulting',
          },
          {
            entry: 'Buy-Sell Agreements',
          },
          {
            entry: 'Commercial Litigation',
          },
        ],
      },
    ],
  },
  {
    title: 'Education',
    sublist: [
      {
        entries: [
          {
            entry: 'Grand Valley State University 2008 Bachelor of Science in History',
          },
          {
            entry: 'Michigan State University College of Law 2012 Juris Doctor, Summa Cum Laude',
          },
        ],
      },
    ],
  },
];
