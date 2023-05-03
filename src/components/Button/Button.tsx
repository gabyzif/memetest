import Link from 'next/link';
interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, href, variant = 'primary', children, className, onClick }) => {
  const color = {
    primary: 'bg-primary-light hover:bg-primary-dark',
    secondary: 'bg-secondary-light hover:bg-secondary-dark',
    tertiary: 'bg-tertiary-light hover:bg-tertiary-dark'
  };

  const classN = `${color[variant]} ${className} text-gray-700 block  w-fit py-4 px-4 rounded-3xl shadow-lg`;

  return href ? (
    <Link href={href} className={classN}>
      {text ? <p className="font-bold ">{text}</p> : children}
    </Link>
  ) : (
    <button onClick={onClick} className={classN}>
      {text ? <p className="font-bold ">{text}</p> : children}
    </button>
  );
};

export default Button;
