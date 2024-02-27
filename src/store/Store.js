import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";

const Store = configureStore({
  reducer: {
    posts: PostSlice,
  },
});

export default Store;
