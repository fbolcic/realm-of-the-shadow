interface BoxProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Box = ({ children, style }: BoxProps) => {
  return <div style={style}>{children}</div>;
};

export const ContentBox = () => {
  return (
    <Box
      style={{
        height: 200,
        backgroundColor: "honeydew",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      I have 200px worth of content
    </Box>
  );
};
