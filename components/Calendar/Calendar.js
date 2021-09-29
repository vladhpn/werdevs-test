/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import BuilCalendar from '../BuilCalendar';
import HeaderCalendar from '../HeaderCalendar';
import Modal from '../Modal';
import styles from './styles.module.scss';

const Calendar = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  useEffect(() => {
    setCalendar(BuilCalendar(value));
  }, [value]);

  function beforeToday(day) {
    return value.isBefore(day, 'month');
  }

  function afterToday(day) {
    return value.isAfter(day, 'month');
  }

  function dayStyles(day) {
    if (beforeToday(day)) return styles.before;
    if (afterToday(day)) return styles.before;
    return value.isSame(day, 'day') ? styles.selected : styles.calendar;
  }

  return (
    <>
      <div className={styles.section}>
        <HeaderCalendar value={value} setValue={onChange} />
        <div className={styles.table}>
          {calendar.map((week, index) => (
            <div key={index} className={styles.all_days}>
              {week.map((day, index) => (
                <div
                  key={index}
                  className={dayStyles(day)}
                  onClick={toggleModal}
                >
                  <span onClick={() => onChange(day)}>
                    {' '}
                    {day.format('D').toString()}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.box_days}>
          {['s', 'm', 't', 'w', 't', 'f', 's'].map((d) => (
            <span className={styles.days}>{d}</span>
          ))}
        </div>
      </div>
      {showModal && <Modal onClose={toggleModal} data={value} />}
    </>
  );
};

export default Calendar;
