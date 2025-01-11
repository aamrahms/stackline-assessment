// import { createSlice } from '@reduxjs/toolkit';
import salesData from "../../data/stackline_frontend_assessment_data_2021.json";

const initialState = {
  data: salesData,
};

console.log('Loaded Sales Data:', initialState.data[0].tags);
export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
