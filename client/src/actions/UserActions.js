import axios from 'axios';
import { userConstants } from '../constants/userConstants';
import { userService } from '../services/user.service'
import { alertActions } from './alertActions';
import { history } from '../helpers/history';
export const userActions = {
    getUser,
    addUser,
    putUser,
    deleteUser,
    login,
    logout,
    register,
    getAll,
    delete: _delete
}

const uc = userConstants
function getUser(id, data) {
    return (dispatch) => {
        axios.get(`http://localhost:9000/user/${id}`, data)
        .then(res => {
            dispatch({type: uc.GET_USER, payload: res.data})
        })
    }
}


export function addUser(data) {
    return (dispatch, getState) => {
        axios.post('http://localhost:9000/user/create', data)
            .then(res => {
                dispatch({ type: uc.ADD_USER, payload: res.data })
            })
    }
}

export function putUser(id, data) {
    return (dispatch, getState) => {
        axios.set(`http://localhost:9000/user/${id}`, data) 
    .then(res => {
        dispatch({ type: uc.EDIT_USER, payload: res.data})
    })    
    }
}
export function deleteUser(id, data) {
    return (dispatch, getState) => {
        axios.delete(`http://localhost:9000/user/${id}`, data) 
        .then(res => {
        dispatch({ type: uc.DELETE_USER, payload: res.data})
    })    
    }
}


    function login(userName, password) {
        return dispatch => {
            dispatch(request({ userName }));
    
            userService.login(userName, password)
                .then(
                    user => { 
                        dispatch(success(user));
                        history.push('/');
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };
    
        function request(user) { return { type: uc.LOGIN_REQUEST, user } }
        function success(user) { return { type: uc.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: uc.LOGIN_FAILURE, error } }
    }
    
    function logout() {
        userService.logout();
        return { type: uc.LOGOUT };
    }
    
    function register(user) {
        return dispatch => {
            dispatch(request(user));
    
            userService.register(user)
                .then(
                    user => { 
                        dispatch(success());
                        history.push('/login');
                        dispatch(alertActions.success('Registration successful'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };
    
        function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
        function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
        function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
    }
    
    function getAll() {
        return dispatch => {
            dispatch(request());
    
            userService.getAll()
                .then(
                    users => dispatch(success(users)),
                    error => dispatch(failure(error.toString()))
                );
        };
    
        function request() { return { type: userConstants.GETALL_REQUEST } }
        function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
        function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
    }
    
    function _delete(id) {
        return dispatch => {
            dispatch(request(id));
    
            userService.delete(id)
                .then(
                    user => dispatch(success(id)),
                    error => dispatch(failure(id, error.toString()))
                );
        };
    
        function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
        function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
        function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
