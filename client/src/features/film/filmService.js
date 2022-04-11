import axios from "axios";

const API_URL = "/api/films/";

const getPopularFilms = async () => {
  const response = await axios.get(API_URL + "popular");

  if (response.data) {
    return response.data;
  }
};

const filmFunctions = {
  getPopularFilms,
};

export default filmFunctions;
