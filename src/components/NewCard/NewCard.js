import Button from 'components/Button';
import { motion } from 'framer-motion';
import styles from './NewCard.module.scss';

const NewCard = (props) => {
  const { source, title, desc } = props;

  return (
    <motion.div className={styles.cardContainer} style={{ backgroundImage: `url(${source})` }}>
      <div className={styles.overlay}></div>

      <motion.div className={styles.titleWrapper}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br>') }}></div>
      </motion.div>

      <motion.div className={styles.descWrapper}>
        <div className={styles.desc}>{desc}</div>
        <Button className={styles.button} />
      </motion.div>
    </motion.div>
  );
};

export default NewCard;
