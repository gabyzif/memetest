import Image from 'next/image';
import s from './Piece.module.css';
import { useState, useEffect } from 'react';

export interface IPiece {
  src: string;
  alt: string;
  number?: string;
  guess?: boolean;
  width?: string;
  height?: string;
  onClick?: (handleFlip: any) => void;
  flip?: boolean;
}

const PieceFlip: React.FC<IPiece> = ({ src, alt, number, width, height, onClick, flip }) => {
  return (
    <button
      className={`${s.container} m-2`}
      style={{ width, height, backgroundColor: 'grey' }}
      onClick={() => onClick()}
    >
      <div className={`${s.card} ${flip ? s.flipped : ''}`} style={{ width: '100%', height: '100%' }}>
        <div className={`${s.face} ${s.back}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-3xl"
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div
          className={`${s.face} ${s.front} flex flex-col justify-center  rounded-3xl`}
          style={{ width: '100%', height: '100%' }}
        >
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

const Piece: React.FC<IPiece> = ({
  flip,
  src,
  alt,
  number,
  guess,
  width = '100px',
  height = '100px',
  onClick
}) =>
  guess ? (
    <PieceGuess src={src} alt={alt} width={width} height={height} />
  ) : (
    <PieceFlip
      src={src}
      alt={alt}
      flip={flip}
      number={number}
      width={width}
      height={height}
      onClick={onClick}
    />
  );

export default Piece;
