import { configureStore } from "@reduxjs/toolkit";
import indexCardReducer from "./indexCardSlice";

export default configureStore({
  reducer: {
    indexCards: indexCardReducer,
  },
});
