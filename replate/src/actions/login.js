import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
    .post('https://replate-backend-turcan.herokuapp.com/api/users/login', credentials)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('type', res.data.user.type)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}