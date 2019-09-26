import Axios from 'axios';

const createUser = user =>  Axios.post('/user', user);

const getUsers = () => Axios.get('/users');

export {
    createUser,
    getUsers
}
