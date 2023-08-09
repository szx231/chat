import styles from './Message.module.scss';
import { Time } from '../Time';
import cn from 'classnames';
import { FC } from 'react';
import { memo } from 'react';

interface IMessage {
  avatarUrl: string | null;
  userName: string | null;
  description: string;
  my: boolean;
  time: string;
}

export const Message: FC<IMessage> = memo((props) => {
  const { avatarUrl, userName, description, my, time } = props;

  return (
    <div className={styles.wrapper}>
      {!my && (
        <img
          className={cn(styles['userAvatar'], !avatarUrl && styles['opacity'])}
          src={!avatarUrl ? '' : avatarUrl}
          alt={!avatarUrl ? '' : avatarUrl}
        />
      )}
      <div className={styles.userInfo}>
        {!my && <div className={styles.userName}>{userName}</div>}
        <div className={cn(styles['descriptionContainer'], styles[my ? 'myMessage' : ''])}>
          <div className={styles.description}>
            {description}
            <span className={styles.edited__container}>
              <div className={styles.edited}>Edited</div>
              <Time my={my} time={time} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
