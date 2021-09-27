import Calendar from '../Calendar';
import styles from './styles.module.scss';
const Hero = () => {
  return (
    <div className={styles.section}>
      <div>
        <h1 className={styles.title}>Choose the day for the meeting</h1>
        <p className={styles.text}>
          We encourage you to book your appointment online. This will save you
          time.
        </p>
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  );
};

export default Hero;
