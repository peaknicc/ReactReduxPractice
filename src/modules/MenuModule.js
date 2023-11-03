import { createActions, handleActions } from 'redux-actions';

const initialState = [
    {
        "id": 0,
        "menuName": "",
        "menuPrice": 0,
        "categoryName": "",
        "isOrderable": true,
        "detail": {
            "description": "",
            "image": ""
        }
    }
];
// 이거 맞는지 모르겠음 메뉴의 초기값 같은데...

export const GET_MENUS = 'menus/GET_MENUS';

const actions = createActions({
    [GET_MENUS]: () => {}
});



const menuReducer = handleActions(
    {
        [GET_MENUS]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default menuReducer;