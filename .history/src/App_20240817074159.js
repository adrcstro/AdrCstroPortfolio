import { ThemeProvider } from '@material-tailwind/react';
import  Navbar  from "./components/Navbar";
import React from "react";


function App() {
  return (
    <>
      <ThemeProvider>
      <Navbar/>
       </ThemeProvider>

    </>
  );
}

export default App;
