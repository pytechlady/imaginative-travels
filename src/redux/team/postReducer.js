import { createSlice } from "@reduxjs/toolkit";

const postReducer = createSlice({
  name: "posts",

  initialState: {
    loading: false,
    post: null, // Change to null to indicate that data is not fetched yet
    error: "",
  },

  reducers: {
    posts(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    postProfileSuccess(state, action) {
      return {
        ...state,
        loading: false,
        post: action.payload, // Update post with fetched data
        error: null, // Reset error
      };
    },
    postProfileFailed(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        post: null, // Reset post to null on failure
      };
    },

    clearMsg(state) {
      return {
        ...state,
        error: null,
        message: "",
      };
    },
  },
});

export const { posts, postProfileSuccess, postProfileFailed, clearMsg } =
  postReducer.actions;

export default postReducer.reducer;

