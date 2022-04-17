import axios, { handleAxiosError, headers } from "../../axios";


export async function blogs(payload) {
  try {
    const response = await axios.get(`blog/?p=${payload || 1}`, headers());
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}