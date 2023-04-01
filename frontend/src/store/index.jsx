//Redux is like a central data store which is available through the application so we created index.js

//I have created and redux state for auth

import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    
    //This is action
    login(state) {
      state.isLoggedIn = true;
    },

    //This is action
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

//if their are multiple reducer then pass it as object with key value pair

export const store = configureStore({
  reducer: authSlice.reducer,
});
