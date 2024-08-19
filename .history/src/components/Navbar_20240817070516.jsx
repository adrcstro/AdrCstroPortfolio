import React from 'react';
import { Button } from '@material-tailwind/react';

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-500">
      <div className="text-white text-lg font-bold">Navbar</div>
      <Button color="lightBlue" ripple="light">
        Material Button
      </Button>
    </div>
  );
}

export default Navbar;
