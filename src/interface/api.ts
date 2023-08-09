export interface IMessage {
  created_at: number;
  id: string;
  is_new: boolean;
  message: string;
  user: {
    avatar: string;
    id: string;
    name: string;
    surname: string;
    you: boolean;
  };
}

export interface IMessages {
  response: IMessage[];
}

export interface IChat {
  avatar: string;
  count_unread: 2;
  created_at: number;
  id: string;
  last_message: {
    created_at: number;
    message: string;
    user_id: string;
    user_name: string;
    user_surname: string;
    you: boolean;
  };
  private: boolean;
  title: string;
}

export interface IChats {
  response: IChat[];
}
