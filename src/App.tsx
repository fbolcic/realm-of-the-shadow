import { Box, ContentBox, IntersectionOverflowContainer } from "./components";

function App() {
  return (
    <Box style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <IntersectionOverflowContainer>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </IntersectionOverflowContainer>
    </Box>
  );
}

export default App;
