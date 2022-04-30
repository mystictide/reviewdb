import axios from "axios";

const API_URL = "/api/art/paintings/";

const getRandomPaintings = async () => {
  const response = await axios.get(API_URL + "random");

  if (response.data) {
    return response.data;
  }
};

const paintingFunctions = {
    getRandomPaintings,
};

export default paintingFunctions;
