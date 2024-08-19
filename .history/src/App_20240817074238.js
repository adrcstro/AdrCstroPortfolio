import React from "react";
import { ThemeProvider } from '@material-tailwind/react';
import  Navbar  from "./components/Navbar";



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
