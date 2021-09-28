import Links from '../Links';
import styles from './styles.module.scss';
const Navigation = () => {
  return (
    <div className={styles.box}>
      <Links href={'/'} text={'Home'} />
      <Links href={'/about'} text={'About Us'} />
    </div>
  );
};

export default Navigation;
