interface BoxProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
}

export const Box = (props: BoxProps) => {
  return <div {...props} />;
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
