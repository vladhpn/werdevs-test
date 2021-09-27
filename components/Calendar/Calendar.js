/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import BuilCalendar from '../BuilCalendar';
import HeaderCalendar from '../HeaderCalendar'
import moment from 'moment';
import styles from './styles.module.scss';

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(BuilCalendar(value));
  }, [value]);

  return (
  
      <div className={styles.section}>
      <HeaderCalendar value={value} setValue={setValue} />
      <table className={styles.table}>
        {calendar.map((week) => (
          <tr>
            {week.map((day) => (
              <td
                className={
                  value.isSame(day, 'day') ? styles.selected : styles.calendar
                }
                onClick={() => setValue(day)}
              >
                {day.format('D').toString()}
              </td>
            ))}
          </tr>
        ))}
      </table>
      <div className={styles.box_days}>
        {
            ['s','m','t','w','t','f','s'].map(d => 
            <span className={styles.days}>{d}</span>)
        }
      </div>
      </div>
   
  );
};

export default Calendar;
