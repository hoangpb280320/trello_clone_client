import { List, ListItemButton, ListItemText, styled } from "@mui/material";
import { ListSubheader } from "..";
import { useSelector } from "react-redux";
import { selectBoards } from "../../../store/modules/boards/select";
import { selectBackgrounds } from "../../../store/modules/backgrounds/select";

const Img = styled("div")(() => ({
  width: "30px",
  height: "25px",
  marginRight: "10px",

  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    objectFit: "cover",
  },
}));

export default function PersonalBoard() {
  const boards = useSelector(selectBoards);
  const backgrounds = useSelector(selectBackgrounds);

  const renderSrc = (bgId: string) => {
    const bg = backgrounds.find((bg) => bg.id === bgId);
    if (bg) {
      return bg.image;
    }
    return "";
  };

  return (
    <List
      subheader={<ListSubheader>Your boards</ListSubheader>}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {boards.map((board) => (
        <ListItemButton key={board.id}>
          <Img>
            <img src={renderSrc(board.backgroundId)} alt="background" />
          </Img>
          <ListItemText primary={`Board ${board.title}`} />
        </ListItemButton>
      ))}
    </List>
  );
}
