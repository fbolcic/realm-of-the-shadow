import { Box } from "./Box";

interface OverflowContainerProps {
  children?: React.ReactNode;
}

export const OverflowContainer = ({ children }: OverflowContainerProps) => {
  return (
    <Box style={{ width: 1000, height: 800, margin: "auto", backgroundColor: "thistle", overflowY: "auto" }}>
      {children}
    </Box>
  );
};
