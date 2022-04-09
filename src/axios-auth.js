import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
  params: {
    key: 'AIzaSyAXwBIOaWi7W4p920051tf8j6_WMQCFZ54' 
  }
});

export default instance;