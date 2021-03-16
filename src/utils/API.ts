import config from '../config';
import axios from "axios";

export default axios.create({
  baseURL: config.api_path + '/',
  responseType: "json"
});