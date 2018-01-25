import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-my-burger.firebaseio.com/'
});

export default instance;