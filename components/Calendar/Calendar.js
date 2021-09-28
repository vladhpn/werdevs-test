/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import BuilCalendar from '../BuilCalendar';
import HeaderCalendar from '../HeaderCalendar';
import Modal from '../Modal';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import styles from './styles.module.scss';

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(moment());
  // const id = uuidv4();
  // console.log(id);

  const toggleModal = () => setShowModal((prev) => !prev);

  useEffect(() => {
    setCalendar(BuilCalendar(value));
  }, [value]);

  // const openDAy = () => setValue(day)

  return (
    <>
      <div className={styles.section}>
        <HeaderCalendar value={value} setValue={setValue} />
        <div className={styles.table}>
          {calendar.map((week, index) => (
            <div key={index} className={styles.all_days}>
              {week.map((day, index) => (
                <div
                  key={index}
                  className={
                    value.isSame(day, 'day') ? styles.selected : styles.calendar
                  }
                  onClick={() => setValue(day)}
                >
                  <span onClick={toggleModal}>
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
      {showModal && <Modal onClose={toggleModal} />}
    </>
  );
};

export default Calendar;
