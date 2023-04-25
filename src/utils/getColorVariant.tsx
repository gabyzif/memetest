type tVariant = 'primary' | 'secondary' | 'tertiary';

export const getBGColorVariant = (hasHover: boolean, variant: tVariant) => {
  const wHover = {
    primary: 'bg-primary-light hover:bg-primary-dark',
    secondary: 'bg-secondary-light hover:bg-secondary-dark',
    tertiary: 'bg-tertiary-light hover:bg-tertiary-dark'
  };

  const woHover = {
    primary: 'bg-primary',
    secondary: 'bg-secondary ',
    tertiary: 'bg-tertiary text-gray-700'
  };

  return hasHover ? wHover[variant] : woHover[variant];
};
