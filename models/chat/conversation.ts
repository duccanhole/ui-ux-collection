export interface IConversation {
  id: number;
  from: IUser;
  unseen: number;
  lastMessage: string;
}

export interface IUser {
  avatarSrc: string;
  userName: string;
}
