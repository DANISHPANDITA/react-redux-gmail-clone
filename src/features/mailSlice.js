import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendmsgisopen: false,
  },
  reducers: {
    openSendMsg: (state) => {
      state.sendmsgisopen = true;
    },
    closeSendMsg: (state) => {
      state.sendmsgisopen = false;
    },
  },
});

export const { openSendMsg, closeSendMsg } = mailSlice.actions;

export const selectsendmsgisopen = (state) => state.mail.sendmsgisopen;
export default mailSlice.reducer;
