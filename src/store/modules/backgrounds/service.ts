import HttpClient from "../../../configs/axios";
import { FetchBackgroundsResponse } from "./type";

const http = new HttpClient();

export const handleFetchBackgrounds = async () => {
  const response = await http.get<FetchBackgroundsResponse>()("background");
  return response.data.data.backgrounds;
};
