import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    xs: "480px",
    sm: "600px",
    md: "768px",
    lg: "1000px",
    xl: "1200px",
    "2xl": "1536px"
  };
  
  const theme = extendTheme({
    breakpoints,
    styles: {
      body: {
        margin: 0,
        boxSizing: "border-box"
      },
      global: {
        "*": {
          fontFamily: "Gabriela"
        }
      }
    }
  });

  export default theme;