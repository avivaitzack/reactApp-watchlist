import axios from "axios";

export async function findUser(EmailInputValue, PasswordInputValue) {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      email: EmailInputValue,
      password: PasswordInputValue,
    });
    return response;
  } catch (error) {
    return error;
  }
}



    export async function getByShowName(showname) {
      try {
        const response = axios.get(
          `https://api.tvmaze.com/singlesearch/shows?q=${showname}&embed=episodes`
        )
        return response;
      } catch (error) {
        return error;
      }
    }