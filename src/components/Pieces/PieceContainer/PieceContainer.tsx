import Container from '../../Container/Container';
import Piece, { IPiece } from '../Piece/Piece';
import { useState } from 'react';

interface IPieceContainer {
  piece: IPiece[];
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

const PieceContainer: React.FC<IPieceContainer> = ({ piece }) => {
  let pieces = [...piece, ...piece];
  pieces = shuffleArray(pieces);

  const [guess, setGuess] = useState(false);

  return (
    <Container width="80vw" variant="tertiary">
      <div className="grid grid-cols-4">
        {pieces.map(({ attributes: p }, i) => (
          <Piece key={i} src={p.url} alt={p.alt} number={String(i + 1)} guess={guess} />
        ))}
      </div>
    </Container>
  );
};

export default PieceContainer;
