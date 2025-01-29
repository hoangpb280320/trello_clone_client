import { Avatar, IconButton } from "@mui/material";
import { SearchBar } from "../../../components/common";
import { AuthState } from "../../../store/modules/auth/type";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import ProfileControlMenu from "./ProfileControlMenu";
import { useState } from "react";

interface Props {
  theme: boolean;
  user: AuthState["user"];
  handleChangeTheme: (checked: boolean) => void;
}

export default function UnAuthControl({
  theme,
  user,
  handleChangeTheme,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <SearchBar />
      <IconButton>
        <NotificationsNoneIcon />
      </IconButton>
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
      <IconButton onClick={() => handleChangeTheme(!theme)}>
        {theme ? <NightlightIcon /> : <WbSunnyIcon />}
      </IconButton>
      <IconButton onClick={handleOpen}>
        {user?.avatar ? (
          <Avatar src={user.avatar} className="avatar" />
        ) : user?.username ? (
          <Avatar>{user.username.charAt(0)}</Avatar>
        ) : (
          <Avatar className="avatar" />
        )}
      </IconButton>
      <ProfileControlMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        handleClose={handleClose}
        username={user?.username}
      />
    </>
  );
}
