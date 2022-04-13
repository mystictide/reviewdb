import axios from "axios";

const API_URL = "/api/games/";

const dict = {
  "{width}": "150",
  "{height}": "222",
};

function fixImageSize(url) {
  url = url.replace(/{width}|{height}/gi, function (matched) {
    return dict[matched];
  });
  return url;
}

const getPopularGames = async () => {
  const response = await axios.get(API_URL + "popular");

  if (response.data) {
    response.data.forEach((e) => {
      e.box_art_url = fixImageSize(e.box_art_url);
    });
    return response.data;
  }
};

const gameFunctions = {
  getPopularGames,
};

export default gameFunctions;
