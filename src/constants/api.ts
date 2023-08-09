export const API_CHATS_GET_URL = 'https://api.lenzaos.com/chat.get';
export const API_MESSAGES_GET_URL = (chatID: string) =>
  `https://api.lenzaos.com/message.get?chat_id=${chatID}&offset=0&limit=20`;
