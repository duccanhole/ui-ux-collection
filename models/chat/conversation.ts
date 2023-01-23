export interface IConversation {
  id: number;
  from: IUser;
  unseen: number;
  lastMessage: string;
  status: string;
}

export interface IUser {
  avatarSrc: string;
  userName: string;
}
