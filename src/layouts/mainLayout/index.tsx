import { CssBaseline, ThemeProvider } from "@mui/material";
import AppBar from "../appBar";
import { selectTheme } from "../../store/modules/theme/select";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../styles/globalTheme";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <div>
        <AppBar currentTheme={currentTheme} />
        <div>{children}</div>
      </div>
    </ThemeProvider>
  );
}
