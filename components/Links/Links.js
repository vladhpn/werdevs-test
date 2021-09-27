import Link from 'next/link';
import styles from './styles.module.scss';
const Links = ({ href, text }) => {
  return (
    <div className={styles.box}>
      <Link href={href}>
        <a className={styles.text}>{text}</a>
      </Link>
    </div>
  );
};

export default Links;
