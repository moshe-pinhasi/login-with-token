// Auth Service
import axios from 'axios'
const BASE_URL = 'http://localhost:3030'

axios.defaults.baseURL = BASE_URL
const login = ({email, password}) => {
    return axios.post('/login', {email, password})
            .then(({data}) => {
                axios.defaults.headers.common['authorization'] = data.token;
                return data;
            })
}

const logout = () => {
    delete axios.defaults.headers.common['authorization'];
    return Promise.resolve()
}

const signup = ({email, password}) => {
    return axios.post('/signup', {email, password})
            .then(({data}) => {
                axios.defaults.headers.common['authorization'] = data.token;
                return data;
            })
}

const fetchMessage = () => {
    return axios.get('/')
                .then(({data}) => data)
}

const setToken = (token) => {
    axios.defaults.headers.common['authorization'] = token;
}

const authService = {
    login,
    logout,
    signup,
    setToken,
    fetchMessage
}

export default authService