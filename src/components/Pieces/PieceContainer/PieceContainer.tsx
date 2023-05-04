import Container from '../../Container/Container';
import Piece, { IPiece } from '../Piece/Piece';
import { useMemoryGame } from '../../../hooks/useMemoryGame';
import Modal from '../../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setMovesStore, setGuessesStore, setMaxScoreStore, setCardsStore } from '@/store/slice';

interface IPieceContainer {
  piece: IPiece[];
  category: string;
  boardState?: any;
  sessionMoves?: number;
  hasSessionData?: boolean;
}

const PieceContainer: React.FC<IPieceContainer> = ({ piece, category, boardState, hasSessionData }) => {
  const cardsStore = useSelector((state) => state.categories[category].cards);
  const guessesStore = useSelector((state) => state.categories[category].guesses);
  const movesStore = useSelector((state) => state.categories[category].moves);

  const {
    cards,
    handleCardClick,
    checkIsFlipped,
    checkGuess,
    guesses,
    moves,
    setMoves,
    showModal,
    setShowModal,
    score,
    restart
  } = useMemoryGame(piece, hasSessionData);

  const router = useRouter();
  const maxScore = useSelector((state) => state.categories[category].maxScore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCardsStore({ category, cards }));
  }, [cards, router.query.name]);

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

  return (
    <Container height="auto" variant="tertiary">
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 justify-center ">
        <div className="mb-10 col-span-4">
          <h1 className="text-5xl font-bold uppercase ">{category}</h1>
          <p className="text-3xl ">Moves: {moves}</p>
          <p className="text-3xl ">Max Score: </p>
        </div>
        {cards.map(({ attributes: p, id }, i) => (
          <Piece
            onClick={() => handleCardClick(i)}
            key={i}
            src={p.url}
            alt={p.alt || 'image'}
            number={String(id + 1)}
            guess={checkGuess(p)}
            flip={checkIsFlipped(i)}
          />
        ))}

        {showModal && <Modal score={score} onClose={() => setShowModal(false)} />}
      </div>
      <div className="h-fit w-fit justify-end  ml-auto flex gap-3 bg-tertiary-dark p-3 m-5 rounded-full">
        <p className="text-2xl self-center">Actions</p>

        <Button href="/" variant="secondary">
          Back
        </Button>
        <button onClick={() => restart()}> Restart </button>
      </div>
    </Container>
  );
};

export default PieceContainer;
