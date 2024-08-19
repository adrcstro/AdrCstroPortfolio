import Navbar from "./components/Navbar";
import { ThemeProvider } from 'your-context-file';


function App() {
  return (
    <>
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
    </>
  );
}

export default App;
