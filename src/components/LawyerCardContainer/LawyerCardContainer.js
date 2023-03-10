import ClassName from 'models/classname';
import { motion } from 'framer-motion';
import NewCard from 'components/NewCard';

import styles from './LawyerCardContainer.module.scss';

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
          title={'Jackie Sells\nHomann'}
          source={'/businessLaw.png'}
          desc="Partner"
          href="/profile/jackie-homann"
          buttonText="View Profile"
        />
      </motion.div>
      <motion.div variants={typeof window !== 'undefined' && window.innerWidth > 768 ? item : {}}>
        <NewCard
          title={'Janet G.\nHorvath'}
          source={'/estateLaw.png'}
          desc="Partner"
          href="/profile/janet-g-horvath"
          buttonText="View Profile"
        />
      </motion.div>
      <motion.div variants={typeof window !== 'undefined' && window.innerWidth > 768 ? item : {}}>
        <NewCard
          title={'Amanda\n N. Zaluckyj'}
          source={'/litigationLaw.png'}
          desc="Partner"
          href="/profile/amanda-n-zaluckyj"
          buttonText="View Profile"
        />
      </motion.div>
    </motion.div>
  );
};

export default Container;
