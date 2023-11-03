import { GET_MENUS } from "../modules/MenuModule";

export function callGetMenusAPI(url, params) {

    const requestURL = url || 'http://localhost:4000/menu';

    return async function getMenus(dispatch, getState) {
        const result = await fetch(requestURL).then(res => res.json());

        dispatch({type: GET_MENUS, payload: result});
    };
}

export function searchMenuAPI(menuName) {
    const requestURL ='http://localhost:4000/menu';

    return async function getMenus(dispatch) {
        const menus = await fetch(requestURL).then(res => res.json());
        
        const searchedMenus = menus.filter(menu => menu.menuName.match(menuName));

        dispatch({type: GET_MENUS, payload: searchedMenus});

    }

}