import { createSlice } from "@reduxjs/toolkit";

const teamReducer = createSlice({
    name: "teams",

    initialState : {
    loading: false,
    team: [],
    error: ""
},

reducers: {
teams (state, action) {
    return {
        ...state,
        loading: true
    };
},
teamProfileSuccess(state, action) {
    return {
      ...state,
      loading: false,
      team: action.payload,
      errors: null,
    };
  },
  
  teamProfileFailed(state, action) {
    return {
      ...state,
      loading: false,
      errors: action.payload,
      team: [],
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

export const { teams, teamProfileSuccess, teamProfileFailed, clearMsg } =
  teamReducer.actions;

export default teamReducer.reducer