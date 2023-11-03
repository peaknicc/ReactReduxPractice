import { useSelector, useDispatch } from "react-redux";
import MenuItem from "../items/MenuItem";
import { searchMenuAPI } from "../../apis/MenuAPICalls";
import { useEffect } from "react";

function MenuList({searchTerm}) {

    const result = useSelector(state => state.menu);

    const menus = result;

    const dispatch = useDispatch();

    useEffect(
        () => {
            // dispatch(callGetMenusAPI());
            dispatch(searchMenuAPI(searchTerm));
        },
        []
    );

    return(
        menus && (
            <div className="menuBox">
                { menus.map(menu => <MenuItem key={ menu.id } menu={ menu }/>)}
            </div>
        )
    );
}

export default MenuList;