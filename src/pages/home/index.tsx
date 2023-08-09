import { useEffect, useState } from 'react';
import cn from 'classnames';

import { Header } from '../../components/Header';
import { Message } from '../../components/Message';
import { SystemMessage } from '../../components/SystemMessage';
import { ChatItemList } from '../../components/ChatItemList';
import { NewMessage } from '../../components/NewMessage';
import { Input } from '../../components/Input';
import { Mobile } from '../../components/Mobile';

import { fetchChat } from '../../api/chat/thunk';
import { useAppDispatch, useAppSelector } from '../../api/redux-hooks';
import { fetchMessages } from '../../api/messages/thunk';
import { selectChats } from '../../api/chat/selectors';
import { selectMessages } from '../../api/messages/selectors';

import { convertDate } from '../../utils/convertDate';
import { convertTime } from '../../utils/convertTime';

import styles from './home.module.scss';
import ProgressBar from '../../components/ProgressBar';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { chats, chatStatus } = useAppSelector(selectChats);
  const { messages, messagesStatus } = useAppSelector(selectMessages);

  const [currentChat, setCurrentChat] = useState<null | string>(null);
  const changeCurrentChat = (id: string) => setCurrentChat(id);

  const addElipsisIfStringsMoreTwo = (string: string) => {
    return `${string.substring(0, 75)}${string.length > 75 ? '...' : ''}`;
  };

  type HashMap = {
    [key: string]: number;
  };

  const hashMap: HashMap = {};

  const firstUniqueDate = (date: number) => {
    const convertedDate = convertDate(date);

    if (!hashMap[convertedDate]) {
      hashMap[convertedDate] = 1;

      return (
        <div className={styles.systemMessageWrapper}>
          <SystemMessage date={convertedDate} />
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(fetchChat());
  }, [dispatch]);

  useEffect(() => {
    if (currentChat) {
      dispatch(fetchMessages(currentChat));
    }
  }, [currentChat, dispatch]);

  if (chatStatus === 'error') return <div>Error...</div>;
  if (messagesStatus === 'error') return <div>Error...</div>;

  return (
    <>
      {chatStatus === 'loading' && <ProgressBar />}
      {messagesStatus === 'loading' && <ProgressBar />}
      <Mobile />
      <div className={styles.container}>
        <div className={styles.allChats}>all chats</div>
        <div className={styles.headerWrapper}>
          <Header />
        </div>
        {chatStatus === 'success' && (
          <div className={styles.chats}>
            <div>
              {chats?.response.map(({ id, title, last_message, avatar }) => {
                return (
                  <ChatItemList
                    onClickFn={changeCurrentChat}
                    key={id}
                    chatName={title}
                    lastMessage={addElipsisIfStringsMoreTwo(last_message.message)}
                    imageUrl={avatar}
                    time={convertTime(last_message.created_at)}
                    condition={id === currentChat ? 'Selected' : 'Rest'}
                    id={id}
                  />
                );
              })}
            </div>
          </div>
        )}
        {messagesStatus && (
          <div className={styles.message}>
            <div className={styles.chatWrapper}>
              {messages?.response.map(({ user, created_at, message, is_new, id }, index) => {
                const prevUser = messages?.response?.[index - 1 < 0 ? 0 : index - 1];
                const currentUser = messages?.response?.[index];

                const convertedDatePrevUser = convertDate(prevUser?.created_at!);
                const convertedDateCurrentUser = convertDate(currentUser?.created_at!);

                return (
                  <div key={id}>
                    {firstUniqueDate(created_at)}
                    <div className={cn(styles['messageWrapper'], styles[user.you ? 'myMessage' : ''])}>
                      {is_new && (
                        <div className={styles.newMessageWrapper}>
                          <NewMessage />
                        </div>
                      )}
                      {prevUser?.user.id === currentUser?.user.id &&
                      convertedDateCurrentUser === convertedDatePrevUser &&
                      index !== 0 ? (
                        <div className={styles.marginBottom20px}>
                          <Message
                            avatarUrl={null}
                            userName={null}
                            description={message}
                            my={user.you}
                            time={convertTime(created_at)}
                          />
                        </div>
                      ) : (
                        <div className={styles.marginBottom10px}>
                          <Message
                            avatarUrl={user.avatar}
                            userName={`${user.name} ${user.surname}`}
                            description={message}
                            my={user.you}
                            time={convertTime(created_at)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <Input />
          </div>
        )}
      </div>
    </>
  );
};
