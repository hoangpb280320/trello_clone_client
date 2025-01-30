import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { selectTheme } from "../store/modules/theme/select";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../styles/globalTheme";
import SideBar from "../components/layout/sideBar";
import { selectIsAuth } from "../store/modules/auth/select";
import { useEffect } from "react";
import { onFetchBackgrounds } from "../store/modules/backgrounds/action";
import AppBar from "../components/layout/appBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectTheme);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(onFetchBackgrounds());
    }
  }, [isAuth]);

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
