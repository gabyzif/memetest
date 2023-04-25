import React from 'react';

interface IContainer {
  children: React.ReactNode;
  width?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}
const Container: React.FC<IContainer> = ({ children, width = 200, variant = 'tertiary' }) => {
  const color = {
    primary: 'bg-primary',
    secondary: 'bg-secondary ',
    tertiary: 'bg-tertiary text-gray-700'
  };
  return (
    <div
      className={`${color[variant]} h-screen-3/4 m-auto my-10 bg-tertiary-light p-10 rounded-xl justify-center`}
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default Container;
