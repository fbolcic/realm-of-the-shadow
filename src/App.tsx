import { Box, SimpleOverflowContainer, ContentBox } from "./components";

function App() {
  return (
    <Box style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SimpleOverflowContainer>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </SimpleOverflowContainer>
    </Box>
  );
}

export default App;
