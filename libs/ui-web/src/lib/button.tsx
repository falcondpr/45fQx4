import { HTMLAttributes } from 'react';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'social';
}

export default function Button({
  children,
  variant = 'primary',
  ...rest
}: IButton) {
  const baseStyles =
    'h-[60px] bg-@sura-primary text-xl font-medium rounded-md w-full';

  const primary = `${baseStyles} text-white shadow-md`;
  const outline = `${baseStyles} bg-white border-2 border-@sura-border text-@sura-primary shadow-md`;
  const social = `${baseStyles} ${outline} shadow-none`;

  const className =
    variant === 'primary' ? primary : variant === 'social' ? social : outline;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
