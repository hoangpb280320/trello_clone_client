import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isValidEmail: boolean;
  error: string | null;
  handleSubmitEmail: () => void;
  handleSubmitPassword: () => void;
}

export default function Login({
  email,
  setEmail,
  password,
  setPassword,
  isValidEmail,
  error,
  handleSubmitEmail,
  handleSubmitPassword,
}: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      if (isValidEmail) {
        handleSubmitPassword();
      } else {
        handleSubmitEmail();
      }
    }
  };

  if (!isValidEmail) {
    return (
      <TextField
        value={email}
        fullWidth
        placeholder="Enter your email"
        size="small"
        onChange={handleChangeEmail}
        error={!!error}
        helperText={error}
        onKeyDown={handleKeyDown}
      />
    );
  }

  return (
    <>
      <TextField
        type={isVisible ? "text" : "password"}
        value={password}
        onChange={handleChangePassword}
        fullWidth
        placeholder="Enter password"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end" onClick={handleChangeVisibility}>
                {isVisible ? (
                  <VisibilityOffIcon fontSize="small" />
                ) : (
                  <VisibilityIcon fontSize="small" />
                )}
              </InputAdornment>
            ),
          },
        }}
        error={!!error}
        helperText={error}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
