import Links from '../Links';
import styles from './styles.module.scss';

const MainContainer = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo_box}>
          <div className={styles.logo_yellow}>
            <p className={styles.text}>w</p>
            <p className={styles.text}>e</p>
          </div>
          <div>
            <span className={styles.letter_r}>R</span>{' '}
            <span className={styles.text}>devs</span>
          </div>
        </div>

        <nav className={styles.nav}>
          <Links href={'/'} text={'Home'} />
          <Links href={'/about'} text={'About Us'} />
        </nav>
      </header>
      <section>{children}</section>
    </>
  );
};

export default MainContainer;
