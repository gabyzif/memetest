import Container from '../../Container/Container';
import Piece, { IPiece } from '../Piece/Piece';
import { useMemoryGame } from '../../../hooks/useMemoryGame';
import Modal from '@/components/Modal/Modal';
interface IPieceContainer {
  piece: IPiece[];
}

const PieceContainer: React.FC<IPieceContainer> = ({ piece, category }) => {
  const { cards, handleCardClick, checkIsFlipped, checkGuess, moves, showModal, setShowModal } =
    useMemoryGame(piece);

  return (
    <Container height="auto" variant="tertiary">
      <h1 className="text-5xl font-bold uppercase ">{category}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 ">
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
