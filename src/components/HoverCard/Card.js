import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Style from './card.module.scss';

import Button from 'components/Button';

const Card = (props) => {
  const options = [200, 50, 160, 27, 79, 95, 110, 134];
  const random = Math.floor(Math.random() * options.length);
  const offSet = options[random];
  console.log(offSet);

  // const card = {
  //   view: { top: 0 },
  //   initial: { top: offSet },
  // };

  let title = {};
  let mobileReset;

  if (typeof window !== 'undefined') {
    mobileReset = window.innerWidth < 1060;
    window.addEventListener('resize', () => {
      mobileReset = window.innerWidth < 1060;
      console.log(title);
    });
  }

  if (!mobileReset) {
    title = {
      rest: { scale: 1, top: 0, right: 0 },
      hover: { scale: 0.7, top: -350, right: 70 },
    };
  }

  const body = {
    rest: { y: 50, position: 'absolute', opacity: 0 },
    hover: { y: 0, position: 'absolute', opacity: 1 },
  };

  const router = useRouter();

  return (
    <motion.div
      className={Style.container}
      // initial="initial"
      // whileInView="view"
      // variants={card}
      // viewport={{ once: true }}
      // transition={{ repeat: Infinity, duration: 7, repeatType: "reverse", ease: "linear" }}
    >
      <div className={Style.background}>
        <img src={props.img} />
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
          <h1 className={Style.title}>{props.title1}</h1>
          <h1 className={Style.title}>{props.title2}</h1>
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
          <motion.div className={router.pathname === '/about' ? Style.position : Style.bodyText}>
            <p>{props.desc}</p>
          </motion.div>
          <motion.div>
            <Button>{props.button}</Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
