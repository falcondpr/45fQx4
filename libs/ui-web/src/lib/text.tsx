interface IText {
  children?: React.ReactNode;
  variant?: 'base' | 'heading' | 'subtitle';
}

export default function Text({ children, variant = 'base' }: IText) {
  const baseStyles = `font-custom text-@sura-primary`;

  const base = `${baseStyles} text-base`;
  const heading = `${baseStyles} text-3xl font-bold`;
  const subtitle = `${baseStyles} text-2xl`;

  const className =
    variant === 'base' ? base : variant === 'heading' ? heading : subtitle;

  return <p className={className}>{children}</p>;
}
