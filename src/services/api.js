import axios from "axios";

const api = axios.create({
  baseURL: "https://musicbrainz.org/ws/2/",
});

export default api;
