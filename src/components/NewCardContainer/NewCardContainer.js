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
      variants={container}
      initial="hidden"
      whileInView={'show'}
      viewport={{ amount: 'some', margin: '-250px', once: true }}
    >
      <motion.div variants={item}>
        <NewCard
          title={'Business\nLaw'}
          source={'/businessLaw.png'}
          desc="A business is more than just how you support yourself. We provide guidance for many practice areas, 
                from employment law to specific nuances of business industries. We have extensive experience from beginning
                  to end and can confidently assist you in any business endeavor."
          href="/business-law"
          buttonText="Read More"
        />
      </motion.div>
      <motion.div variants={item}>
        <NewCard
          title={'Estate Planning &\nAdministration'}
          source={'/estateLaw.png'}
          desc="A business is more than just how you support yourself. We provide guidance for many practice areas, 
                from employment law to specific nuances of business industries. We have extensive experience from beginning
                to end and can confidently assist you in any business endeavor."
          href="/estate-planning/"
          buttonText="Read More"
        />
      </motion.div>
      <motion.div variants={item}>
        <NewCard
          title={'Commerecial\nLitigation'}
          source={'/litigationLaw.png'}
          desc="A business is more than just how you support yourself. We provide guidance for many practice areas, 
                        from employment law to specific nuances of business industries. We have extensive experience from beginning
                         to end and can confidently assist you in any business endeavor."
          href="/commercial-litigation"
          buttonText="Read More"
        />
      </motion.div>
    </motion.div>
  );
};

export default Container;
