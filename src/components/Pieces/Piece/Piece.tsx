import Image from 'next/image';
import s from './Piece.module.css';
import { useState } from 'react';

export interface IPiece {
  src: string;
  alt: string;
  number?: string;
  guess?: boolean;
  width?: string;
  height?: string;
}

const PieceFlip: React.FC<IPiece> = ({ src, alt, number, width, height }) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <button
      className={`${s.container} m-10`}
      style={{ position: 'relative', width, height }}
      onClick={handleFlip}
    >
      <div className={`${s.card} ${flip ? s.flipped : ''}`} style={{ width: '100%', height: '100%' }}>
        <div className={`${s.face} ${s.back}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-3xl"
            sizes="100vw"
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className={`${s.face} ${s.front} flex flex-col justify-center  rounded-3xl`}>
          <p className="text-6xl font-bold font-play text-gray-700 text-center ">{number}</p>
        </div>
      </div>
    </button>
  );
};

const PieceGuess: React.FC<IPiece> = ({ src, alt, width, height }) => {
  return (
    <div style={{ position: 'relative', width, height }} className="m-10">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-3xl"
        sizes="100vw"
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

const Piece: React.FC<IPiece> = ({ src, alt, number, guess, width = '100px', height = '100px' }) =>
  guess ? (
    <PieceGuess src={src} alt={alt} width={width} height={height} />
  ) : (
    <PieceFlip src={src} alt={alt} number={number} height={height} />
  );

export default Piece;
