import styles from './styles.module.scss';
const Modal = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_conttainer}>
        <div className={styles.box}>
          <button className={styles.btn} onClick={onClose}>
            x
          </button>
          <div className={styles.box_content}>
            <div className={styles.content}>
              <h4 className={styles.title}> Month </h4>
              <p className={styles.text}>September </p>
            </div>
            <div className={styles.content}>
              <h4 className={styles.title}> Day </h4>
              <p className={styles.text}> friday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
