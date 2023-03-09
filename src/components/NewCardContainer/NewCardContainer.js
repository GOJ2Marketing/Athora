import ClassName from 'models/classname';
import { motion } from 'framer-motion';
import NewCard from 'components/NewCard';

import styles from './NewCardContainer.module.scss';

const Container = ({ className }) => {
  const containerClassName = new ClassName(styles.container);

  containerClassName.addIf(className, className);

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      translateY: '200px',
      transition: {
        duration: 0.8,
        easing: 'anticipate',
      },
    },

    show: {
      opacity: 1,
      translateY: '0px',
      transition: {
        duration: 0.8,
        easing: 'bounceOut',
      },
    },
  };

  return (
    <motion.div
      className={styles.cardContainer}
      variants={typeof window !== 'undefined' && window.innerWidth > 768 ? container : {}}
      initial="hidden"
      whileInView={'show'}
      viewport={{ amount: 'some', margin: '-250px', once: true }}
    >
      <motion.div variants={typeof window !== 'undefined' && window.innerWidth > 768 ? item : {}}>
        <NewCard
          title={'Business\nLaw'}
          source={'/businessLaw.png'}
          desc="A business is more than just how you support yourself. And business present all sorts of challenges.  We’ve helped our clients navigate the tricky landscape of business management.  aiding clients from local mom-and-pops all the way to multi-million-dollar corporations.
          You can rely on our objectivity, problem-solving mindset, and personalized approach to ensure your business comes out on top."
          href="/business-law"
          buttonText="Read More"
        />
      </motion.div>
      <motion.div variants={typeof window !== 'undefined' && window.innerWidth > 768 ? item : {}}>
        <NewCard
          title={'Estate Planning &\nAdministration'}
          source={'/estateLaw.png'}
          desc="Whether you’re looking to protect your assets or decide how you’d like to proceed if you become impaired, Estate Planning encompasses it all. We also help streamline your plan's administration when it is time to use it. Athora is experienced in comprehensive estate planning & administration and can help protect you and your loved ones."
          href="/estate-planning/"
          buttonText="Read More"
        />
      </motion.div>
      <motion.div variants={typeof window !== 'undefined' && window.innerWidth > 768 ? item : {}}>
        <NewCard
          title={'Commerecial\nLitigation'}
          source={'/litigationLaw.png'}
          desc="Litigation is often a last resort, but when it can’t be avoided, we work with our commercial clients to manage risks and find the most cost-effective approach to resolving business disputes. Athora’s litigation lawyers have years of experience handling complex, multi-party litigation. Our goal is to get to the bottom of the  issue, avoid lengthy litigation, minimize business disruption, and conclude your case creatively and quickly."
          href="/commercial-litigation"
          buttonText="Read More"
        />
      </motion.div>
    </motion.div>
  );
};

export default Container;
