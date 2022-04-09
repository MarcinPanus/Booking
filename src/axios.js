import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kurs-react-2995a-default-rtdb.firebaseio.com'
});

export default instance;