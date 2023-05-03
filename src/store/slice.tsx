import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {},
  selectedCategory: ''
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setMaxScore: (state, action) => {
      const { category, maxScore } = action.payload;
      state.categories[category].maxScore = maxScore;
    },
    addCategory: (state, action) => {
      const { category, maxScore } = action.payload;
      state.categories[category] = { maxScore };
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    }
  }
});

export const { selectCategory, setMaxScore, addCategory, setCategories } = gameSlice.actions;
export default gameSlice.reducer;
