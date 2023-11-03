import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { callGetMenusAPI } from "../apis/MenuAPICalls";
import MenuItem from "../components/items/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MenuSearchResult() {

    const [searchParam] = useSearchParams();
    const searchMenuName = searchParam.get('menuName');
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();


    const onClickHandler = () => {
        navigate(`/menus/search?menuName=${searchValue}`);
    };


    const menus = useSelector(state => state.menuReducer).filter(menu => menu.menuName.match(searchMenuName));

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetMenusAPI());
            // filter 써서 걸러내기 해야할듯

        },
        [searchMenuName]
    );

    return(
        menus && (
            <>
                <h1>'{searchMenuName}'로 검색한 결과는!</h1>
                <div>
                    <input type="search" name="menuName" onChange={(e) => {setSearchValue(e.target.value)}}/>
                    <button onClick={onClickHandler}>검색</button>
                </div>
                <div className="menuBox">
                    { menus.map(menu => <MenuItem key={ menu.id } menu={ menu }/>)}
                </div>
            </>
        )
    );
    
}

export default MenuSearchResult;