import React from 'react'
import { Button } from "@material-tailwind/react";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <Button color="blue" size="lg" ripple="light">
      Click Me
    </Button>
  </div>
  )
}

export default Navbar