import Link from 'next/link';
import { getBGColorVariant } from '../../utils/getColorVariant';

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({ text, href, variant = 'primary', children }) => {
  const color = getBGColorVariant(true, variant);

  return (
    <Link href={href} className={`${color} text-gray-700 font-regular py-4 px-4 rounded-xl  shadow-lg`}>
      {text || children}
    </Link>
  );
};

export default Button;
