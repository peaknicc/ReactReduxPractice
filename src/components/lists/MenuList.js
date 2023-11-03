import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "../items/MenuItem";
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";

function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            // dispatch(callGetMenusAPI());
            dispatch(callGetMenuListAPI());
        },
        []
    );

    return(
        menuList && (
            <div className="menuBox">
                { menuList.map(menu => <MenuItem key={ menu.id } menu={ menu }/>)}
            </div>
        )
    );
}

export default MenuList;