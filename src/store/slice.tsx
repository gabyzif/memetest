import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

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
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.game
      };
    }
  }
});

export const setCategoryList = (categories) => {
  return {
    type: 'game/setCategoryList',
    payload: categories
  };
};
export const setCards = (category, cards) => {
  return {
    type: 'game/setCards',
    payload: { category, cards }
  };
};

export const setScore = (category, score) => {
  return {
    type: 'game/setScore',
    payload: { category, score }
  };
};

export const setMoves = (category, moves) => {
  return {
    type: 'game/setMoves',
    payload: { category, moves }
  };
};

export const {
  selectCategory,
  setMaxScoreStore,
  setCategories,
  setGuessesStore,
  setMovesStore,
  setCardsStore
} = gameSlice.actions;
export default gameSlice.reducer;
