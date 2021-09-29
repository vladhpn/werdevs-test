import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import styles from './styles.module.scss';

const HeaderCalendar = ({ value, setValue }) => {
  function currMonthName() {
    return value.format('MMMM');
  }
  function currYear() {
    return value.format('YYYY');
  }
  function nextMonth() {
    return value.clone().add(1, 'month');
  }
  function prevMonth() {
    return value.clone().subtract(1, 'month');
  }
  return (
    <div className={styles.box}>
      <div>
        <GrPrevious
          className={styles.button}
          onClick={() => setValue(prevMonth())}
        />
      </div>
      <div className={styles.title}>
        {currMonthName()} {currYear()}
      </div>
      <div>
        <GrNext
          className={styles.button}
          onClick={() => setValue(nextMonth())}
        />
      </div>
    </div>
  );
};

export default HeaderCalendar;
