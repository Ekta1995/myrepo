import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5a6ad-default-rtdb.firebaseio.com/'
});

export default instance;