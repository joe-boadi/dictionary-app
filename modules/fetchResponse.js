import { renderResults } from '../main.js'

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fetchWordData = async (word) => {
  try {
    const response = await fetch(`${API_URL}${word}`);
    if (!response.ok) {
      throw new Error(renderResults());
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export default fetchWordData