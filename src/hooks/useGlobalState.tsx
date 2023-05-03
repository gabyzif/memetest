import { setMovesStore, setGuessesStore, setMaxScoreStore, setCardsStore } from '@/store/slice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const useGlobalState = ({ cards, category, score, moves, guesses }) => {
  const maxScore = useSelector((state) => state.categories[category].maxScore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCardsStore({ category, cards }));
  }, [cards, category]);

  useEffect(() => {
    dispatch(setMovesStore({ category, moves }));
  }, [moves]);

  useEffect(() => {
    dispatch(setGuessesStore({ category, guesses }));
  }, [guesses]);

  useEffect(() => {
    if (Number(maxScore) < score) {
      dispatch(setMaxScoreStore({ category, maxScore: String(score) }));
    }
  }, [score]);

  return { maxScore };
};

export default useGlobalState;
