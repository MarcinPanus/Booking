import axios from "axios";

const instance = axios.create({
  baseURL: "https://noclegi-4132c-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default instance;