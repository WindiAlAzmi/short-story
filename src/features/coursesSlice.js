import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCourses: [],
  isLoading:false,
  isError:false
};

export const coursesSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateLoadingCourse : (state, action) => {
        state.isLoading = action.payload;
    },
    updateErrorCourse : (state, action) => {
        state.isError = action.payload;
    },
    addCourses : (state, action) => {
        state.dataCourses = action.payload.data;
        state.isLoading = false;
        state.isError = "";
    }
  },
});

export const { updateLoadingCourse, updateErrorCourse, addCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
