import axios from "axios";

const API_URL = "/api/music/";

const getPopularArtists = async () => {
  const response = await axios.get(API_URL + "popular");

  if (response.data) {
    let artists = response.data;
    return artists;
  }
};

const musicFunctions = {
    getPopularArtists,
};

export default musicFunctions;
