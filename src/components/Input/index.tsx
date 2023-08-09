import styles from './Input.module.scss';
import attachImage from '../../../public/Attach.svg';
import filedImage from '../../../public/Filled.svg';

export const Input = () => {
  return (
    <div className={styles.wrapper}>
      <div contentEditable="true" className={styles.input} data-placeholder="Type your message"></div>
      <div className={styles.buttonsWrapper}>
        <button className={styles.attachContainer}>
          <img src={attachImage} alt={attachImage} />
        </button>
        <button className={styles.filed}>
          <img src={filedImage} alt={filedImage} />
        </button>
      </div>
    </div>
  );
};
