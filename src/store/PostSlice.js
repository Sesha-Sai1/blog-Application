import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: Date.now(),
        title: action.payload.title,
        content: action.payload.content,
      };
      state.push(newPost);
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload.id);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const postToUpdate = state.find((post) => post.id === id);
      if (postToUpdate) {
        postToUpdate.title = title;
        postToUpdate.content = content;
      }
    },
  },
});

export const { addPost, deletePost, updatePost } = PostSlice.actions;
export default PostSlice.reducer;

// return state.map((post) => {
//   post.title == action.payload.title;
//   post.content == action.payload.content;
// });

// return state.map((post) => {
//   if (post.id === action.payload.id) {
//     return {
//       ...post,
//       title: action.payload.title,
//       content: action.payload.content,
//     };
//   }
//   return post;
// });
