import React from 'react';

interface IContainer {
  children: React.ReactNode;
  width?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  height?: string;
}
const Container: React.FC<IContainer> = ({ children, width = 200, variant, height }) => {
  const color = {
    primary: 'bg-primary-light',
    secondary: 'bg-secondary-light ',
    tertiary: 'bg-tertiary-light text-gray-700'
  };
  return (
    <div
      className={`${variant ? color[variant] : ''}  h-screen-3/4 m-auto my-10 p-10 rounded-xl justify-center`}
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default Container;
