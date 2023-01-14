import { forwardRef } from "react";

export interface BoxProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

Box.displayName = "Box";

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
