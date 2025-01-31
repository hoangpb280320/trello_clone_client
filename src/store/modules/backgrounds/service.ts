import HttpClient from "../../../configs/axios";
import { FetchBackgroundsResponse } from "./type";
import ls from "localstorage-slim";

const http = new HttpClient();

export const handleFetchBackgrounds = async () => {
  const token = ls.get("token", { decrypt: true });

  const response = await http.get<FetchBackgroundsResponse>()(
    "background/defaults",
    {
      authorization: `Bearer ${token}`,
    }
  );
  return response.data.data.backgrounds;
};
