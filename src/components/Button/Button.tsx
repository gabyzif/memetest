import Link from 'next/link';
interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({ text, href, variant = 'primary', children }) => {
  const color = {
    primary: 'bg-primary-light hover:bg-primary-dark',
    secondary: 'bg-secondary-light hover:bg-secondary-dark',
    tertiary: 'bg-tertiary-light hover:bg-tertiary-dark'
  };

  return (
    <Link
      href={href}
      className={`${color[variant]} text-gray-700 font-regular py-4 px-4 rounded-xl  shadow-lg`}
    >
      {text || children}
    </Link>
  );
};

export default Button;
