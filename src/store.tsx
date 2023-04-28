import { createSlice, configureStore } from '@reduxjs/toolkit';
import { setCookie, getCookie } from 'cookies-next';

const scoreSlice = createSlice({
  name: 'score',
  initialState: { currentScore: 0, maxScore: parseInt(getCookie('maxScore') || '0') },
  reducers: {
    incrementScore: (state) => {
      state.currentScore += 1;
      if (state.currentScore > state.maxScore) {
        state.maxScore = state.currentScore;
        setCookie('maxScore', state.maxScore.toString(), { maxAge: 30 * 24 * 60 * 60, path: '/' });
      }
    },
    resetScore: (state) => {
      state.currentScore = 0;
    }
  }
});

export const { incrementScore, resetScore } = scoreSlice.actions;

export const store = configureStore({
  reducer: {
    score: scoreSlice.reducer
  }
});
