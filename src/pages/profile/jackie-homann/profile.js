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
  title: 'Jackie Homann',
  desc: 'Understanding and managing risks are vital for your success in life and business. Although you can’t avoid every risk, you need to know what they are and prepare for them. So is having a lawyer and a law firm that knows how to manage risks and help you achieve your goals. That’s what solid counseling can do–whether you are in litigation (Jackie’s handled cases in state, federal, bankruptcy, and appellate courts), writing, reviewing, or negotiating contracts, or facing other challenges. Managing your risks and helping you achieve your goals–that’s Jackie’s goal. \n \n She considers it her greatest privilege to provide business counseling and management of legal issues for her clients to bring a resolution as promptly as possible. Assessing risks, putting together a plan, and helping you navigate your course is what Jackie does best. But if litigation results, Jackie’s a seasoned litigator who can help you understand what the issues are, both legal and business, and help you decide the right direction to take. Although she focuses on business disputes, Jackie has experience in construction and personal injury. \n \n Jackie’s also a Chapter 7 Bankruptcy Trustee, a post she’s held since 2002. As a trustee, it’s her job to liquidate assets for distribution to creditors and assist in protecting the integrity of the bankruptcy system. As trustee, she stays connected in nearly every legal arena, giving her a unique perspective and ability to serve all her clients with a broad perspective on their needs. \n \n Outside the office, she’s a wife, a mom, a dancer, plays golf and runs. Active in her local community, she serves in various servant and leadership positions.',
  image: '/jackie.svg',
  social: 'https://www.linkedin.com/in/jacqueline-homann-4b816344/',
};

const text =
  'The world of business can be tough to navigate. Let Jackie guide you to the best outcome! Let’s get started on a personalized course of action.';

const list = [
  {
    title: 'Affiliations',
    sublist: [
      {
        subtitle: 'Bar and Profession Associations',
        entries: [
          {
            entry: 'Indiana State Bar Associations',
          },
          {
            entry: 'St. Joseph County Bar Association',
          },
          {
            entry: 'National Association of Bankruptcy Trustees',
          },
        ],
      },
      {
        subtitle: 'Service',
        entries: [
          {
            entry: 'President of the Congregation, St. Peter Lutheran Church',
          },
          {
            entry: 'Michiana Women in Construction, Former Director of Finance',
          },
          {
            entry: 'Women’s Leadership Institute, Board Member',
          },
          {
            entry: 'Morris Entertainment, Inc, Former Board Member and Board President',
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
            entry: 'Indiana, 1990',
          },
          {
            entry: 'U.S. Court of Appeals for the 7th Circuit',
          },
          {
            entry: 'U.S. District Court, Northern and Southern Districts of Indiana',
          },
        ],
      },
      {
        subtitle: 'Areas of Practice',
        columns: true,
        entries: [
          {
            entry: 'Bankruptcy Litigation',
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
          {
            entry: 'Commercial Transactions',
          },
          {
            entry: 'Construction Law',
          },
          {
            entry: 'Contracts',
          },
          {
            entry: 'Creditor’s Rights',
          },
          {
            entry: 'Entity Formation',
          },
          {
            entry: 'Mergers & Acquisitions',
          },
          {
            entry: 'Workouts',
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
            entry: 'J.D., Notre Dame Law School, 1990, cum laude',
          },
          {
            entry: 'B.A., DePauw University, 1987, cum laude',
          },
        ],
      },
    ],
  },
];
