import Container from '../../Container/Container';
import Piece, { IPiece } from '../Piece/Piece';
import { useMemoryGame } from '../../../hooks/useMemoryGame';
import Modal from '../../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import useStorage from '../../../hooks/useStorage';
import { useRouter } from 'next/router';
import Button from '@/components/Button/Button';

interface IPieceContainer {
  piece: IPiece[];
  category: string;
  boardState?: any;
  sessionMoves?: number;
  hasSessionData?: boolean;
}

const PieceContainer: React.FC<IPieceContainer> = ({ piece, category, boardState, hasSessionData }) => {
  const { getItem, setItem } = useStorage();

  let sessionMoves;
  let sessionCards;
  let sessionGuesses;

  if (hasSessionData) {
    sessionMoves = Number(getItem('moves', 'session')) || 0;
    sessionCards = JSON.parse(getItem('cards', 'session')) || [];
    sessionGuesses = JSON.parse(getItem('guesses', 'session')) || [];
  }

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
  } = useMemoryGame(piece, hasSessionData, sessionMoves, sessionCards, sessionGuesses);

  const router = useRouter();

  useEffect(() => {
    setItem('cards', JSON.stringify(cards), 'session');
    setItem('game', router.query.name, 'session');
  }, [cards, router.query.name]);

  useEffect(() => {
    setItem('moves', JSON.stringify(moves), 'session');
  }, [moves]);

  useEffect(() => {
    setItem('guesses', JSON.stringify(guesses), 'session');
  }, [guesses]);

  useEffect(() => {
    let maxScore = getItem('maxScore', 'session');
    if (Number(maxScore) < score) {
      setItem('maxScore', JSON.stringify(score), 'session');
    }
  }, [score]);

  return (
    <Container height="auto" variant="tertiary">
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 justify-center ">
        <div className="mb-10">
          <h1 className="text-5xl font-bold uppercase ">{category}</h1>
          <p className="text-3xl ">Moves: {moves}</p>
          <p className="text-3xl ">Max Score: {getItem('maxScore', 'session')}</p>
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
        <div className="h-fit w-fit flex gap-3 bg-tertiary-dark p-5 rounded-full">
          <p className="text-2xl self-center">Actions</p>

          <Button href="/" variant="secondary">
            Back
          </Button>
          <button onClick={() => restart()}> Restart </button>
        </div>
        {showModal && <Modal score={score} onClose={() => setShowModal(false)} />}
      </div>
    </Container>
  );
};

export default PieceContainer;
