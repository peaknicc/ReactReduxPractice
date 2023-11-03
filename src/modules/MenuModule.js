import { createActions, handleActions } from 'redux-actions';

const initialState = {};

export const GET_MENULIST = 'menu/GET_MENULIST';
export const GET_MENU = 'menu/GET_MENU';
export const REGIST_MENU = 'menu/REGIST_MENU';
export const MODIFY_MENU = 'menu/MODIFY_MENU';
export const DELETE_MENU = 'menu/DELETE_MENU';


export const { menu : { getMenulist, getMenu, registMenu, modifyMenu, deleteMenu }} = createActions({
    [GET_MENULIST]: (res) => ({ menulist : res }),
    [GET_MENU]: (res) => ({ menu : res }),
    [REGIST_MENU]: (res) => ({ regist : res }),
    [MODIFY_MENU]: (res) => ({ modify : res }),
    [DELETE_MENU]: (res) => ({ delete : res })
});



const menuReducer = handleActions(
    {
        [GET_MENULIST]: (state, { payload }) => {
            return payload;
        },
        [GET_MENU]: (state, { payload }) => {
            return payload;
        },
        [REGIST_MENU]: (state, { payload }) => {
            return payload;
        },
        [MODIFY_MENU]: (state, { payload }) => {
            return payload;
        },
        [DELETE_MENU]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default menuReducer;