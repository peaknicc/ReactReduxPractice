import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { LOGGED_OUT } from '../../modules/UserModule';

function Navbar() {

    const loggedIn = useSelector((state) => state.user.loggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const activeStyle = {
        backgroundColor: 'black',
        color: 'white'
    };

    const handleLogout = () => {
        dispatch({type: LOGGED_OUT, payload: false });
        navigate('/login');
    };

    useEffect(
        () => {
            console.log('2 (Navbar) loggedIn 상태 : ', loggedIn);
        },
        [loggedIn]
    );



    return(
        <>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle: undefined}>집으로</NavLink></li>
                <li><NavLink to="/menus" style={({isActive}) => isActive? activeStyle: undefined}>메뉴요</NavLink></li>
                {loggedIn === true ? (
                    <>
                        <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle: undefined}>마페</NavLink></li>
                        <li><button onClick={handleLogout}>로그아웃</button></li>
                    </>
                ) : (
                    <li><NavLink to="/login" style={({ isActive }) => isActive? activeStyle: undefined}>로그인</NavLink></li>
                )}
            </ul>
        </>
    );
}

export default Navbar;