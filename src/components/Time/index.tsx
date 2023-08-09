import styles from './Time.module.scss';
import markerMyMessage from '../../../public/markerMyMessage.svg';
import { memo } from 'react';

export const Time = memo(({ my, time }: { my: boolean; time: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{time}</div>
      {my && <img alt={markerMyMessage} src={markerMyMessage} />}
    </div>
  );
});
