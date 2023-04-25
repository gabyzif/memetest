import Container from '../../Container/Container';
import Piece, { IPiece } from '../Piece/Piece';
import { useState } from 'react';

interface IPieceContainer {
  piece: IPiece[];
}
const PieceContainer: React.FC<IPieceContainer> = ({ piece }) => {
  const [guess, setGuess] = useState(false);
  return (
    <Container width="60vw">
      <div className="grid grid-cols-4 gap-3">
        {piece.map((p, i) => (
          <Piece key={i} src={p.src} alt={p.alt} number={String(i + 1)} guess={guess} />
        ))}
      </div>
    </Container>
  );
};

export default PieceContainer;
