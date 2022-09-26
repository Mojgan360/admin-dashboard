import { createSlice } from "@reduxjs/toolkit";

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
    setScreenSize: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, setScreenSize } = dashboardSlice.actions;
export default dashboardSlice.reducer;
