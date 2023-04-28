import Container from '../../Container/Container';
import Piece, { IPiece } from '../Piece/Piece';
import { useEffect, useRef, useState } from 'react';

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

const PieceContainer: React.FC<IPieceContainer> = ({ piece, category }) => {
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const timeout = useRef(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let pieces = [...piece, ...piece];
    pieces = shuffleArray(pieces.map((p, i) => ({ ...p, id: i })));
    setCards(pieces);
  }, []);

  // Check if both the cards have same type. If they do, mark them inactive
  const evaluate = () => {
    debugger;
    const [first, second] = openCards;
    if (cards[first].attributes.name === cards[second].attributes.name) {
      setClearedCards((prev) => ({ ...prev, [cards[first].attributes.name]: true }));
      setOpenCards([]);
      return;
    }
    // Flip cards after a 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    // Have a maximum of 2 items in array at once.
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      // increase the moves once we opened a pair
      setMoves((moves) => moves + 1);
    } else {
      // If two cards are already open, we cancel timeout set for flipping cards back
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 500);
    }
  }, [openCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkGuess = (card) => {
    return !!clearedCards[card.name];
  };

  return (
    <Container width="80vw" variant="tertiary">
      <h1 className="text-5xl font-bold uppercase ">{category}</h1>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {cards.map(({ attributes: p, id }, i) => (
          <Piece
            onClick={() => handleCardClick(i)}
            key={i}
            src={p.url}
            alt={p.alt}
            height="150px"
            width="150px"
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
