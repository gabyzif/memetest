import Container from '../../Container/Container';
import Piece, { IPiece } from '../Piece/Piece';
import { useMemoryGame } from '../../../hooks/useMemoryGame';
interface IPieceContainer {
  piece: IPiece[];
}

const PieceContainer: React.FC<IPieceContainer> = ({ piece, category }) => {
  const { cards, handleCardClick, checkIsFlipped, checkGuess, moves } = useMemoryGame(piece);

  return (
    <Container variant="tertiary">
      <h1 className="text-5xl font-bold uppercase ">{category}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
        {cards.map(({ attributes: p, id }, i) => (
          <Piece
            onClick={() => handleCardClick(i)}
            key={i}
            src={p.url}
            alt={p.alt}
            number={String(id + 1)}
            guess={checkGuess(p)}
            flip={checkIsFlipped(i)}
          />
        ))}
      </div>
    </Container>
  );
};

export default PieceContainer;
