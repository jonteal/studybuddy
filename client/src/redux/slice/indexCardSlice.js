import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexCards: null,
};

export const indexCardSlice = createSlice({
  name: "indexCards",
  initialState,
  reducers: {
    setIndexCards: (state, action) => {
      state.indexCards = action.payload;
    },
  },
});

export const { actions } = indexCardSlice;
export const selectIndexCards = (state) => state.indexCards.indexCards;

export default indexCardSlice.reducer;
