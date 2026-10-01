import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme:"dark"
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    ThemeChange: (state) => {
        state.theme = state.theme === "dark" ? "light" : "dark";
      
      },
    
    },
    
    });

export const { ThemeChange } = themeSlice.actions;

export default themeSlice.reducer;
