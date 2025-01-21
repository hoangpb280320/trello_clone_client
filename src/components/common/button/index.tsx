import { ButtonProps, Button as MuiButton, styled } from "@mui/material";

export const Button = styled(MuiButton)<ButtonProps>(() => ({
  "&.MuiButton-root": {
    fontWeight: 600,
    textTransform: "none",
  },
}));
