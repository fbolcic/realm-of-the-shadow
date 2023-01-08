import { Box } from "./Box";

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
