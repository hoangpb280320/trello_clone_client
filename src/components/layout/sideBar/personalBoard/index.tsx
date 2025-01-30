import {
  List,
  ListItemButton,
  ListItemText,
  Popover,
  Grid2 as Grid,
  styled,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { ListSubheader } from "..";
import { useSelector } from "react-redux";
import { selectBoards } from "../../../../store/modules/boards/select";
import { selectBackgrounds } from "../../../../store/modules/backgrounds/select";
import IconButton from "../../../common/iconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";

import "./styles.scss";
import { useEffect, useState } from "react";
import { Button } from "../../../common";

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
  const [addBoardAnchorEl, setAddBoardAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [previewBackground, setPreviewBackground] = useState<string>("");

  const boards = useSelector(selectBoards);
  const backgrounds = useSelector(selectBackgrounds);

  useEffect(() => {
    const firstBg = backgrounds[0];
    if (firstBg) {
      setPreviewBackground(firstBg.image);
    }
  }, [backgrounds]);

  const renderSrc = (bgId: string) => {
    const bg = backgrounds.find((bg) => bg.id === bgId);
    if (bg) {
      return bg.image;
    }
    return "";
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setError(false);
  };

  const handleChangeBackgroundPreview = (src: string) => {
    setPreviewBackground(src);
  };

  const renderSubHeader = () => {
    return (
      <ListSubheader className="personal-board__subheader">
        <span>Your boards</span>
        <IconButton
          regtangle
          onClick={(e) => setAddBoardAnchorEl(e.currentTarget)}
        >
          <AddOutlinedIcon fontSize="small" />
        </IconButton>
      </ListSubheader>
    );
  };

  return (
    <List
      subheader={renderSubHeader()}
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
      <Popover
        anchorEl={addBoardAnchorEl}
        open={Boolean(addBoardAnchorEl)}
        onClose={() => setAddBoardAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="create-board-modal_container">
          <div className="header">
            <p>Create board</p>
            <IconButton
              className="icon-button"
              regtangle
              onClick={() => setAddBoardAnchorEl(null)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="main-content">
            <div className="preview">
              <img src={previewBackground} alt="preview" />
            </div>
            <div className="background">
              <p>Background</p>
              <Grid container spacing={1}>
                {backgrounds.map((bg) => (
                  <Grid size={3} key={bg.id}>
                    <div
                      className="background-item"
                      onClick={() => handleChangeBackgroundPreview(bg.image)}
                    >
                      <img src={bg.image} alt="background" />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div className="title">
              <p>Board title</p>
              <TextField
                fullWidth
                size="small"
                value={title}
                onChange={handleChangeTitle}
                onBlur={() => setError(title.trim() === "")}
                error={error}
                required
              />
            </div>
            <div className="visibility">
              <p>Visibility</p>
              <Select size="small" fullWidth defaultValue="public">
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </Select>
            </div>
            <div className="control-button">
              <Button
                className="button"
                fullWidth
                variant="contained"
                sx={{ color: (theme) => theme.palette.text.primary }}
                disabled={title.trim() === ""}
              >
                Create
              </Button>
              <Button
                className="button"
                fullWidth
                variant="contained"
                sx={{ color: (theme) => theme.palette.text.primary }}
              >
                Start with an template
              </Button>
            </div>
            <div className="footer">
              By using images from Unsplash, you agree to their license and
              Terms of Service.
            </div>
          </div>
        </div>
      </Popover>
    </List>
  );
}
