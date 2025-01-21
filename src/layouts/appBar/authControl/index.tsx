import { Avatar, IconButton } from "@mui/material";
import { SearchBar } from "../../../components/common";
import { AuthState } from "../../../store/modules/auth/type";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";

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
      <IconButton>
        {user?.avatar ? (
          <Avatar src={user.avatar} className="avatar" />
        ) : user?.userName ? (
          <Avatar>{user.userName}</Avatar>
        ) : (
          <Avatar className="avatar" />
        )}
      </IconButton>
    </>
  );
}
