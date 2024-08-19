import React from"react";
import { Accordion, AccordionHeader, AccordionBody, ThemeProvider } from "@material-tailwind/react";

exportfunctionNavbar() {
  const [open, setOpen] = React.useState(1);

  consthandleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <><Accordion open={open === 1}><AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader><AccordionBody>
          {/* Content here */}
        </AccordionBody></Accordion>
      {/* Other accordions */}
    </>
  );
}

functionApp() {
  return (
    <ThemeProvider><Navbar /></ThemeProvider>
  );
}

exportdefaultApp;
