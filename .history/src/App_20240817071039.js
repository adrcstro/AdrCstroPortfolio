import Navbar from "./components/Navbar";
import { ThemeProvider } from '@material-tailwind/react';


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
