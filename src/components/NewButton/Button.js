import Link from 'next/link';
import styles from './Button.module.scss';

const NewButton = (props) => {
  return (
    <Link href={props.href}>
      <a className={styles.button}>{props.buttonText}</a>
    </Link>
  );
};

export default NewButton;
