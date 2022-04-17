import axios, { handleAxiosError, headers } from "../../axios";


export async function destinations(payload) {
  try {
    const response = await axios.get(`destinations/?p=${payload || 1}`, headers());
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}