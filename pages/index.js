import { useState } from 'react';
import MainContainer from '../components/MainContainer';
import Hero from '../components/Hero';
import Calendar from '../components/Calendar';
import moment from 'moment';
import styles from '../styles/Index.module.scss';

export default function Index() {
  const [value, setValue] = useState(moment());
  console.log(moment.locale());
  return (
    <MainContainer>
      <div className={styles.container}>
        <Hero />
        <Calendar value={value} onChange={setValue} />
      </div>
    </MainContainer>
  );
}
