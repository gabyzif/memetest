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
    setMaxScoreStore: (state, action) => {
      const { category, maxScore } = action.payload;
      state.categories[category].maxScore = maxScore;
    },
    setGuessesStore: (state, action) => {
      const { category, guesses } = action.payload;
      state.categories[category].guesses = guesses;
    },
    setMovesStore: (state, action) => {
      const { category, moves } = action.payload;
      state.categories[category].moves = moves;
    },
    setCardsStore: (state, action) => {
      const { category, cards } = action.payload;
      state.categories[category].cards = cards;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    }
  }
});

export const {
  selectCategory,
  setMaxScoreStore,
  setCategories,
  setGuessesStore,
  setMovesStore,
  setCardsStore
} = gameSlice.actions;
export default gameSlice.reducer;
