import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from ".";

export interface ControlState {
  openMenu: boolean;
}

const initState: ControlState = {
  openMenu: false,
};

export const ControlSlice = createSlice({
  name: "control",
  initialState: initState,
  reducers: {
    switchMenuAction(state: ControlState, action: PayloadAction<boolean>) {
      state.openMenu = action.payload;
    },
  },
});

export const { switchMenuAction } = ControlSlice.actions;

export default ControlSlice.reducer;
