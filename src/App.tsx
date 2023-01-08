import { Box, OverflowContainer, ContentBox } from "./components";

function App() {
  return (
    <Box style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <OverflowContainer>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </OverflowContainer>
    </Box>
  );
}

export default App;
