import Container from '../../Container/Container';
import Piece, { IPiece } from '../Piece/Piece';
import { useMemoryGame } from '../../../hooks/useMemoryGame';
import Modal from '@/components/Modal/Modal';
import { useEffect } from 'react';
import useStorage from '@/hooks/useStorage';
import { useRouter } from 'next/router';

interface IPieceContainer {
  piece: IPiece[];
}

const PieceContainer: React.FC<IPieceContainer> = ({ piece, category }) => {
  const { cards, handleCardClick, checkIsFlipped, checkGuess, guesses, moves, showModal, setShowModal } =
    useMemoryGame(piece);

  const { getItem, setItem } = useStorage();
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
    console.log(guesses);
  }, [guesses]);

  // TODO: Moves, score, and guess should also be a prop
  // TODO: Calculate score
  // TESTS
  // FIX SB

  return (
    <Container height="auto" variant="tertiary">
      <h1 className="text-5xl font-bold uppercase ">{category}</h1>
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 ">
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
        {showModal && <Modal moves={moves} onClose={() => setShowModal(false)} />}
      </div>
    </Container>
  );
};

export default PieceContainer;
function setItem(arg0: string, name: any, arg2: string) {
  throw new Error('Function not implemented.');
}
