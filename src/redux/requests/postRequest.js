import axios, { handleAxiosError, headers } from "../../axios";


export async function posts(id) {
  try {
    const response = await axios.get(`/blog/${id}/`, headers());
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}