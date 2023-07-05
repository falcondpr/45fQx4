import classNames from 'classnames';

interface IText {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className, ...rest }: IText) {
  const buttonClasses = classNames('font-custom text-@sura-primary', className);

  return (
    <p className={buttonClasses} {...rest}>
      {children}
    </p>
  );
}
