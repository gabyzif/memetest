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

const PieceFlip: React.FC<IPiece> = ({ src, alt, number, onClick, flip }) => {
  return (
    <button
      className={`${s.container} md:m-2 xl:w-64 xl:h-64 md:w-44 md:h-44 w-20  h-20`}
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
          <p className="md:text-6xl text-4xl font-bold font-play text-gray-700 text-center ">{number}</p>
        </div>
      </div>
    </button>
  );
};

const PieceGuess: React.FC<IPiece> = ({ src, alt, width, height }) => {
  return (
    <div style={{ position: 'relative' }} className="md:m-2 xl:w-64 xl:h-64 md:w-44 md:h-44 w-20 h-20 ">
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
