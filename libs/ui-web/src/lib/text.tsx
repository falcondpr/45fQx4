import classnames from 'classnames';

interface IText {
  children?: React.ReactNode;
  className?: string;
}

export default function Text({ children, className = "", ...rest }: IText) {
  // const buttonClasses = classnames(
  //   className,
  //   'text-base font-custom text-@sura-primary',
  // );
  const baseStyles = `text-base font-custom text-@sura-primary ${className}`;

  return (
    <p className={baseStyles} {...rest}>
      {children}
    </p>
  );
}
