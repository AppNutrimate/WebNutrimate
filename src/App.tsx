import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import StackRoutes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <StackRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
