import { createSlice } from "@reduxjs/toolkit";

const blogReducer = createSlice({
    name: "blogs",

    initialState : {
    loading: false,
    blog: [],
    error: ""
},

reducers: {
blogs (state, action) {
    return {
        ...state,
        loading: true
    };
},
blogProfileSuccess(state, action) {
    return {
      ...state,
      loading: false,
      blog: action.payload,
      errors: null,
    };
  },
  
  blogProfileFailed(state, action) {
    return {
      ...state,
      loading: false,
      errors: action.payload,
      blog: [],
    };
  },

  clearMsg(state) {
      return {
        ...state,
        errors: null,
        message: "",
      };
    },
},
});

export const { blogs, blogProfileSuccess, blogProfileFailed, clearMsg } =
  blogReducer.actions;

export default blogReducer.reducer