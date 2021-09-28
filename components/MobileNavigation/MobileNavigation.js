import { useState } from 'react';
import Links from '../Links';
import styles from './styles.module.scss';
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const openMenu = (
    <GrMenu
      className={styles.menu_button}
      size={20}
      onClick={() => setOpen(!open)}
    />
  );
  const closeMenu = (
    <GrClose
      className={styles.menu_button}
      size={20}
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <div className={styles.box}>
      {open ? closeMenu : openMenu}
      {open && (
        <div className={styles.link}>
          <Links
            href={'/'}
            text={'Home'}
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
          />
          <Links
            href={'/about'}
            text={'About Us'}
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
          />
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
