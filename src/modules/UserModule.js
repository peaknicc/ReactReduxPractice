import { createActions, handleActions } from 'redux-actions';

const initialState = {
        "id": "",
        "password": "",
        "nickname": "",
        loggedIn: false
    };

export const GET_USERS = 'users/GET_USERS';
export const LOGGED_IN = 'users/LOGGED_IN';
export const LOGGED_OUT = 'users/LOGGED_OUT';

const actions = createActions({
    [GET_USERS]: () => {},
    [LOGGED_IN]: (loggedIn) => ({loggedIn}),
    [LOGGED_OUT]: (loggedIn) => ({loggedIn})
});

const userReducer = handleActions(
    {
        [GET_USERS]: (state, { payload }) => {
            return { ...state, ...payload};
        },
        [LOGGED_IN]: (state, { payload }) => {
            localStorage.setItem('loggedIn', payload? 'true' : 'false');
            return { ...state, ...payload };
        },
        [LOGGED_OUT]: (state, { payload }) => {
            localStorage.setItem('loggedIn', payload? 'false' : 'true');
            return { ...state, loggedIn: payload };
        }
    },
    initialState
);

export default userReducer;