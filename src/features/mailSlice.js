import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendmsgisopen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMsg: (state) => {
      state.sendmsgisopen = true;
    },
    closeSendMsg: (state) => {
      state.sendmsgisopen = false;
    },
  },
});

export const { selectMail, openSendMsg, closeSendMsg } = mailSlice.actions;
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectsendmsgisopen = (state) => state.mail.sendmsgisopen;
export default mailSlice.reducer;
