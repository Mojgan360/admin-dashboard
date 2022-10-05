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

    handleClick: (state, { payload }) => {
      state.chat = false;
      state.cart = false;
      state.userProfile = false;
      state.notification = false;
      state[payload] = true;
    },
  },
});

export const { toggleSidebar, setScreenSize, handleClick } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;

//  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
