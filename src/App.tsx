import { Box, SimpleOverflowContainer, ContentBox } from "./components";
import { text } from "./constants";

function App() {
  return (
    <Box style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SimpleOverflowContainer>{text}</SimpleOverflowContainer>
    </Box>
  );
}

export default App;
