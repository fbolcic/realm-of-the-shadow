import { Box, ContentBox, ScrollOverflowContainer } from "./components";

function App() {
  return (
    <Box style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <ScrollOverflowContainer>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </ScrollOverflowContainer>
    </Box>
  );
}

export default App;
