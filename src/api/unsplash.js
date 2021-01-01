import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ELxpBj7mxIDxx6QZuKj44WtRtLDH1i2Fe2I-xwr92pY",
  },
});
