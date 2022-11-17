import axios from "axios";

export async function getData() {
  try {
    const response = await axios.get(`https://api.tvmaze.com/shows`);
    return response;
  } catch (error) {
    return error;
  }
}
