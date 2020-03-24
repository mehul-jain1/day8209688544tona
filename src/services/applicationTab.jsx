import axios from "axios";
import Tesseract from 'tesseract.js';

const fetchData = async (url, payload = {}) => {
  const response = await axios.get(url);
  return response.data;
};
const fetchWordsFromImageURL = async (url, payload = {}) => {
  const response = Tesseract.recognize(url, 'eng', { logger: m => console.log(m) } )
  return response;
};
export default {
  fetchData,
  fetchWordsFromImageURL
};
