import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1d2125",
      paper: "#1d2125",
    },
    text: {
      primary: "#b1bdca",
    },
  },
});

export { lightTheme, darkTheme };
