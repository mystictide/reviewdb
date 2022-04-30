import axios from "axios";

const API_URL = "/api/books/";

const getRandomBooks = async () => {
  const response = await axios.get(API_URL + "random");

  if (response.data) {
    return response.data;
  }
};

const bookFunctions = {
    getRandomBooks,
};

export default bookFunctions;
