import axios, { handleAxiosError, headers } from "../../axios";


export async function testimony(payload) {
  try {
    const response = await axios.get(`testimonial/?p=${payload || 1}`, headers());
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}