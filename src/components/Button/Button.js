import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ href, children, className, ...rest }) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  return (
    <Link href={href ? href : '#'}>
      <a>
        <button {...rest} className={buttonClassName}>
          {children}
        </button>
      </a>
    </Link>
  );
};

export default Button;
