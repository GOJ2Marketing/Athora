import { motion } from 'framer-motion';
import Style from './card.module.scss';

import Button from 'components/Button';

const Card = () => {
  const options = [20, 50, 10, 5];
  const random = Math.floor(Math.random() * options.length);
  const offSet = options[random];
  console.log(offSet);

  const card = {
    view: { top: 0 },
    initial: { top: offSet },
  };

  const title = {
    rest: { scale: 1, top: 0, right: 0 },
    hover: { scale: 0.7, top: -350, right: 70 },
  };

  const body = {
    rest: { y: 50, position: 'absolute', display: 'none' },
    hover: { y: 0, position: 'absolute', display: 'flex' },
  };

  return (
    <motion.div
      className={Style.container}
      initial="initial"
      whileInView="view"
      variants={card}
      viewport={{ once: true }}
    >
      <div className={Style.background}>
        <img src="/businessLaw.png" />
      </div>
      <motion.div className={Style.content} initial="rest" whileHover="hover" animate="rest">
        <motion.div
          className={Style.titleContainer}
          variants={title}
          transition={{
            type: 'linear',
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          }}
        >
          <h1 className={Style.title}>Business</h1>
          <h1 className={Style.title}>Law</h1>
        </motion.div>
        <motion.div
          className={Style.body}
          variants={body}
          transition={{
            type: 'linear',
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          }}
        >
          <motion.div>
            <p>
              A business is more than just how you support yourself. We provide guidance for many practice areas, from
              employment law to specific nuances of business industries. We have extensive experience from beginning to
              end and can confidently assist you in any business endeavor.
            </p>
          </motion.div>
          <motion.div>
            <Button>Read More</Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
