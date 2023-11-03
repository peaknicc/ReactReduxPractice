import MenuList from "../components/lists/MenuList";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchMenuAPI } from "../apis/MenuAPICalls";
import { Link } from "react-router-dom";


function Menus() {

    const [searchValue, setSearchValue] = useState('');
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    let searchTerm = '';

    const onSearchChange = (e) => {
        searchTerm = e.target.value;
        setSearchValue(searchTerm);
        dispatch(searchMenuAPI(searchTerm));
    };

    return(
        <>
            <h1>메뉴들이요</h1>
            {loggedIn === true ? (user.nickname === '관리자' && (
                <Link to='/regist'>
                <button>메뉴 등록</button>
                </Link>
            )
        ) : null}
            <div>
                <input type="search" name="menuName" value={searchValue} onChange={onSearchChange} placeholder="검색!"/>
                {/* <button onClick={onClickHandler}>검색</button> */}
            </div>
            <MenuList searchTerm={searchTerm}/>
        </>
    );
}

export default Menus;