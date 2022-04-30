import axios from "axios";

const API_URL = "/api/art/poems/";

const getRandomPoems = async () => {
  const response = await axios.get(API_URL + "random");

  if (response.data) {
    return response.data;
  }
};

const poemFunctions = {
    getRandomPoems,
};

export default poemFunctions;
