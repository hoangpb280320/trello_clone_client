import {
  IconButton as IconButtonMui,
  IconButtonProps,
  styled,
} from "@mui/material";

const IconButtonCustom = styled(IconButtonMui)<Props>(
  ({ theme, regtangle }) => ({
    color: theme.palette.text.primary,
    padding: "5px",
    borderRadius: regtangle ? "10px" : "50%",
  })
);

interface Props extends IconButtonProps {
  children: React.ReactNode;
  regtangle?: boolean;
}

export default function IconButton({ children, ...rest }: Props) {
  return <IconButtonCustom {...rest}>{children}</IconButtonCustom>;
}
