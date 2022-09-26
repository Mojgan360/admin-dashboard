import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const dashboardSlice = createSlice({
  name: "dash",
  initialState,

  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = dashboardSlice.actions;
export default dashboardSlice.reducer;
