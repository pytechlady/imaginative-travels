import axios, { handleAxiosError, headers } from "../../axios";


export async function teams(payload) {
  try {
    const response = await axios.get("team/", headers());
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}