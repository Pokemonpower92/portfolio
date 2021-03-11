import { MuiThemeProvider } from '@material-ui/core';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import theme from "./theme.js";
import Projects from "./Components/Projects.js";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Navbar>
      </Navbar>
      <About />
      <Projects />
    </MuiThemeProvider>
  );
}

export default App;
