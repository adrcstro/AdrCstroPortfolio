import React from 'react'
import { Button } from "@material-tailwind/react";
 
function Navbar() {
  return (
    <div className="flex justify-center items-center min-h-screen"><Button
        color="black"
        size="lg"
        ripple="light"
        className="text-white"
      >
        Click Me
      </Button></div>
  )
}

export default Navbar