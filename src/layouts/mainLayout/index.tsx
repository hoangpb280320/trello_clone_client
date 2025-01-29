import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import AppBar from "../appBar";
import { selectTheme } from "../../store/modules/theme/select";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../styles/globalTheme";
import SideBar from "../sideBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <div style={{ display: "flex" }}>
        <AppBar currentTheme={currentTheme} />
        <SideBar />
        <Box
          component={"main"}
          sx={{
            flexGrow: 1,
            p: 3,
            mt: "56px",
            zIndex: (theme) => theme.zIndex.drawer - 1,
          }}
        >
          {children}
        </Box>
      </div>
    </ThemeProvider>
  );
}
