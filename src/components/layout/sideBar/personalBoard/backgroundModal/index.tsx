import { Popover, Grid2 as Grid, styled } from "@mui/material";
import IconButton from "../../../../common/iconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Background,
  UploadBackground,
} from "../../../../../store/modules/backgrounds/type";

import "./styles.scss";
import { Button } from "../../../../common";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { selectUploadBackgrounds } from "../../../../../store/modules/backgrounds/select";
import { onUploadBackground } from "../../../../../store/modules/backgrounds/action";

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  backgrounds: Background[];
  handleChangeBackground: (
    bg: Background | UploadBackground,
    src: string
  ) => void;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function BackgroundModal({
  anchorEl,
  open,
  onClose,
  backgrounds,
  handleChangeBackground,
}: Props) {
  const dispatch = useDispatch();

  const uploadBackgrounds = useSelector(selectUploadBackgrounds);

  const handleUploadBackground = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isExist = uploadBackgrounds.some(
        (uploadBg) => uploadBg.file.name === file.name
      );
      if (!isExist) {
        const bgUrl = URL.createObjectURL(file);
        const newUploadBg: UploadBackground = { file, url: bgUrl };
        dispatch(onUploadBackground(newUploadBg));
        handleChangeBackground(newUploadBg, bgUrl);
      }
    }
  };

  const renderBackgroundItem = (
    key: string,
    src: string,
    bg: Background | UploadBackground
  ) => {
    return (
      <Grid size={4} key={key}>
        <div
          className="background-item"
          onClick={() => handleChangeBackground(bg, src)}
        >
          <img src={src} alt="background" />
        </div>
      </Grid>
    );
  };

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div className="board-background_container">
        <div className="header">
          <p>Board background</p>
          <IconButton className="icon-button" regtangle onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="main-content">
          <Grid container spacing={2}>
            {uploadBackgrounds.map((bg) =>
              renderBackgroundItem(bg.file.name, bg.url, bg)
            )}
            {backgrounds.map((bg) => renderBackgroundItem(bg.id, bg.image, bg))}
          </Grid>
        </div>
        <div className="upload">
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload background
            <VisuallyHiddenInput
              type="file"
              onChange={handleUploadBackground}
              accept="image/*"
            />
          </Button>
        </div>
      </div>
    </Popover>
  );
}
