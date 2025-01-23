import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeTheme } from "../../store/modules/theme/action";
import reactIcon from "../../assets/react.svg";
import { Button } from "../../components/common";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./styles.scss";
import { selectIsAuth, selectUser } from "../../store/modules/auth/select";
import UnAuthControl from "./unAuthControl";
import AuthControl from "./authControl";
import ls from "localstorage-slim";
import { onUpdateUser } from "../../store/modules/auth/action";
import { LoginSuccess } from "../../store/modules/auth/type";

export default function AppBar({ currentTheme }: { currentTheme: string }) {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState<boolean>(false);

  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const lsUser: LoginSuccess | null = ls.get("user");

  useEffect(() => {
    if (lsUser) {
      dispatch(onUpdateUser(lsUser));
    }
  }, []);

  useEffect(() => {
    setTheme(currentTheme === "dark");
  }, [currentTheme]);

  const handleChangeTheme = (checked: boolean) => {
    dispatch(onChangeTheme(checked ? "dark" : "light"));
  };

  return (
    <>
      <div className="app-bar">
        <div className="app-bar__left">
          <div className="app-bar__item">
            <img src={reactIcon} alt="react-icon" />
          </div>
          <div className="app-bar__item">
            <span>Workspace</span>
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
          <div className="app-bar__item">
            <span>Recent</span>
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
          <div className="app-bar__item">
            <span>Starred</span>
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
          <div className="app-bar__item">
            <span>Shared</span>
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
          <div className="app-bar__item">
            <span>Templates</span>
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
          {isAuth && (
            <Button variant="contained" color="primary">
              Create
            </Button>
          )}
        </div>
        <div className="app-bar__right">
          {isAuth ? (
            <AuthControl
              theme={theme}
              user={user}
              handleChangeTheme={handleChangeTheme}
            />
          ) : (
            <UnAuthControl />
          )}
        </div>
      </div>
      <Divider />
    </>
  );
}
