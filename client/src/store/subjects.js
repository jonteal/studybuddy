import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: 'subjects',
  initialState: [],
  reducers: {
    subjectAdded: (subjects, action) => {
      subjects.push({
        id: ++lastId,
        name: action.payload.name
      })
    }
  }
})

export const { subjectAdded } = slice.actions;
export default slice.reducer;