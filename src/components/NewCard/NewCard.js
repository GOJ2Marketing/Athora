import NewButton from 'components/NewButton';
import { motion } from 'framer-motion';
import styles from './NewCard.module.scss';

const NewCard = (props) => {
  const { source, title, desc, href, buttonText } = props;

  const hoverAnimation = {
    initial: {
      scale: 1,
      transition: {
        type: 'linear',
        stiffness: 500,
      },
    },

    hover: {
      scale: 0.5,
    },
    transition: {
      type: 'linear',
      stiffness: 500,
    },
  };

  const descAnime = {
    initial: {
      y: '150%',
      opacity: 0,
      transition: {
        type: 'linear',
        stiffness: 500,
      },
    },

    hover: {
      y: '0%',
      opacity: 1,
      transition: {
        type: 'linear',
        stiffness: 500,
      },
    },
  };

  return (
    <motion.div
      initial="initial" // set the initial state
      whileHover="hover"
      className={styles.cardContainer}
      style={{ backgroundImage: `url(${source})` }}
    >
      <div className={styles.overlay}></div>

      <motion.div variants={hoverAnimation} className={styles.titleWrapper}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br>') }}></div>
      </motion.div>

      <motion.div variants={descAnime} className={styles.descWrapper}>
        <div className={styles.desc}>{desc}</div>
        <NewButton href={href} buttonText={buttonText} />
      </motion.div>
    </motion.div>
  );
};

export default NewCard;
