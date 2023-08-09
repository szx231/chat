import styles from './Header.module.scss';
import chatImage from '../../../public/Chat.svg';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src={chatImage} alt={chatImage} />
      <div className={styles.text}>Great Project</div>
    </div>
  );
};
