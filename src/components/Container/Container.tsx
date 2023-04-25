import React from 'react';

import { getBGColorVariant } from '../../utils/getColorVariant';

interface IContainer {
  children: React.ReactNode;
  width?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}
const Container: React.FC<IContainer> = ({ children, width = 200, variant = 'tertiary' }) => {
  const color = getBGColorVariant(false, variant);
  return (
    <div
      className={`${color} h-screen-3/4 m-auto my-10 bg-tertiary-light p-10 rounded-xl justify-center`}
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default Container;
