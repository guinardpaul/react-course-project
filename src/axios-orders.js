import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-course-myburger.firebaseio.com/'
});

export default instance;
