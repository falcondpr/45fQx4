import classnames from 'classnames';

interface IText {
  children?: React.ReactNode;
  className?: string;
}

export default function Text({ children, className, ...rest }: IText) {
  const buttonClasses = classnames(
    'text-base font-custom text-@sura-primary',
    className
  );

  console.log({ buttonClasses });

  return <p className={buttonClasses}>{children}</p>;
}
