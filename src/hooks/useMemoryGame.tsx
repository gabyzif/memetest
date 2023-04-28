import { useEffect, useRef, useState } from 'react';

interface IPiece {
  attributes: {
    name: string;
    url: string;
    alt: string;
  };
}

const shuffleArray = (array: any[]) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

interface IUseMemoryGame {
  cards: { id: number; attributes: IPiece['attributes'] }[];
  handleCardClick: (index: number) => void;
  checkIsFlipped: (index: number) => boolean;
  checkGuess: (card: IPiece['attributes']) => boolean;
  moves: number;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export const useMemoryGame = (pieces: IPiece[]): IUseMemoryGame => {
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<Record<string, boolean>>({});
  const [moves, setMoves] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [cards, setCards] = useState<{ id: number; attributes: IPiece['attributes'] }[]>([]);

  const evaluate = () => {
    const [first, second] = openCards;
    if (cards[first].attributes.name === cards[second].attributes.name) {
      setClearedCards((prev) => ({ ...prev, [cards[first].attributes.name]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index: number) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
    } else {
      clearTimeout(timeout.current!);
      setOpenCards([index]);
    }
  };

  const checkIsFlipped = (index: number) => {
    return openCards.includes(index);
  };

  const checkGuess = (card: IPiece['attributes']) => {
    return !!clearedCards[card.name];
  };

  useEffect(() => {
    let piecesCopy = [...pieces, ...pieces];
    piecesCopy = shuffleArray(piecesCopy.map((p, i) => ({ ...p, id: i })));
    setCards(piecesCopy);
  }, [pieces]);

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 500);
    }
  }, [openCards]);

  return { cards, handleCardClick, checkIsFlipped, checkGuess, moves, showModal, setShowModal };
};
