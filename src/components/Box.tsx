interface BoxProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Box = ({ children, style }: BoxProps) => {
  return <div style={style}>{children}</div>;
};
