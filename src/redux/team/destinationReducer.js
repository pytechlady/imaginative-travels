import { createSlice } from "@reduxjs/toolkit";

const destinationReducer = createSlice({
    name: "destinations",

    initialState : {
    loading: false,
    destination: [],
    error: ""
},

reducers: {
destinations (state, action) {
    return {
        ...state,
        loading: true
    };
},
destinationProfileSuccess(state, action) {
    return {
      ...state,
      loading: false,
      destination: action.payload,
      errors: null,
    };
  },
  
  destinationProfileFailed(state, action) {
    return {
      ...state,
      loading: false,
      errors: action.payload,
      destination: [],
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

export const { destinations, destinationProfileSuccess, destinationProfileFailed, clearMsg } =
  destinationReducer.actions;

export default destinationReducer.reducer