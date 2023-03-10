// import ClassName from 'models/classname';
// import styles from './NavListItem.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './NavListItem.module.scss';

const NavListItem = ({ className, item }) => {
  const nestedItems = (item.children || []).map((item) => {
    return <NavListItem key={item.id} item={item} />;
  });

  return (
    <div>
      {!item.path.includes('http') && !item.target && (
        <Link href={item.path}>
          <motion.a
            key={item.id}
            initial={{ translateX: '0px', color: '#685A73', cursor: 'default' }}
            whileHover={{ translateX: '-5px', color: '#E2DDD0', cursor: 'pointer' }}
            title={item.title}
          >
            {item.label}
          </motion.a>
        </Link>
      )}
      {item.path.includes('http') && (
        <motion.a
          key={item.id}
          initial={{ translateX: '0px', color: '#685A73' }}
          whileHover={{ translateX: '-5px', color: '#E2DDD0' }}
          href={item.path}
          title={item.title}
          target={item.target}
          className={styles.navLink}
        >
          {item.label}
        </motion.a>
      )}

      {nestedItems.length > 0 && <ul className={className}>{nestedItems}</ul>}
    </div>
  );
};

export default NavListItem;
