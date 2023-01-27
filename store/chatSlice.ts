import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConversation } from "../models/chat/conversation";

interface ChatState {
  data: IConversation | null;
}

const initState: ChatState = {
  data: null,
};

export const ChatSlice = createSlice({
  name: "chat",
  initialState: initState,
  reducers: {
    openRoomChat(state: ChatState, action: PayloadAction<IConversation>) {
      state.data = action.payload;
    },
  },
});

export const { openRoomChat } = ChatSlice.actions;

export default ChatSlice.reducer;
