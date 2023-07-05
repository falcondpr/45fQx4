import classnames from 'classnames';

interface IButton {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...rest }: IButton) {
  const buttonClasses = classnames(
    `font-custom bg-black text-xl text-white h-16 bg-@sura-primary rounded-md text-white w-full text-xl font-medium shadow-md`, className
  );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}
