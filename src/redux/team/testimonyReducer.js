import { createSlice } from "@reduxjs/toolkit";

const testimonyReducer = createSlice({
    name: "testimonys",

    initialState : {
    loading: false,
    testimony: [],
    error: ""
},

reducers: {
testimonys (state, action) {
    return {
        ...state,
        loading: true
    };
},
testimonyProfileSuccess(state, action) {
    return {
      ...state,
      loading: false,
      testimony: action.payload,
      errors: null,
    };
  },
  
  testimonyProfileFailed(state, action) {
    return {
      ...state,
      loading: false,
      errors: action.payload,
      testimony: [],
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

export const { testimonys, testimonyProfileSuccess, testimonyProfileFailed, clearMsg } =
  testimonyReducer.actions;

export default testimonyReducer.reducer