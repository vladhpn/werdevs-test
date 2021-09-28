import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
const Links = ({ href, text, isMobile, closeMobileMenu }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={router.pathname == '/' ? styles.text : styles.active}
        onClick={() => isMobile && closeMobileMenu()}
      >
        {text}
      </a>
    </Link>
  );
};

export default Links;
