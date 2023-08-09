import styles from './SystemMessage.module.scss';
import { FC } from 'react';
import { memo } from 'react';

interface ISystemMessage {
  date: string;
}

export const SystemMessage: FC<ISystemMessage> = memo(({ date }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>{date}</div>
    </div>
  );
});
