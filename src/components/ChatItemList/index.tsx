import { FC } from 'react';
import styles from './ChatItemList.module.scss';
import cn from 'classnames';
import { memo } from 'react';

interface IChatItemList {
  chatName: string;
  lastMessage: string;
  imageUrl: string;
  time: string;
  condition: 'Rest' | 'Hover' | 'Selected';
  onClickFn: (id: string) => void;
  id: string;
}

export const ChatItemList: FC<IChatItemList> = memo((props) => {
  const { chatName, lastMessage, imageUrl, time, condition, onClickFn, id } = props;
  const conditionStyles = {
    Rest: 'rest',
    Hover: 'hover',
    Selected: 'selected',
  };

  return (
    <button onClick={() => onClickFn(id)} className={cn(styles['wrapper'], styles[conditionStyles[condition]])}>
      <div className={styles.container}>
        <img className={styles.chatAvatar} src={imageUrl} alt={imageUrl} />
        <div className={styles.wrapperContent}>
          <div className={styles.contentContainer}>
            <div className={styles.chatName}>{chatName}</div>
            <div className={styles.time}>{time}</div>
          </div>
          <div className={styles.lastMessage}>{lastMessage}</div>
        </div>
      </div>
    </button>
  );
});
