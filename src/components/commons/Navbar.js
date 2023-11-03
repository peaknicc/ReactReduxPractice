import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { resetLoginUser } from '../../modules/UserModule';

function Navbar() {

    // const loggedIn = useSelector((state) => state.user.loggedIn);
    // 이전엔 state자체를 들고와서 상태를 확인했음

    const loginStatus = !!localStorage.getItem('isLogin');
    // loginStatus를 !!를 이용해 강제로 boolean으로 바꾸고 localStorage에서 들고와서 확인함
    // 만약 비로그인상태면 null이려나 false? null은 falsy? -> falsy라고함.

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const activeStyle = {
        backgroundColor: 'black',
        color: 'white'
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        // 이걸로 로그인 상태를 없애버림
        dispatch(resetLoginUser());
        // UserModule에서 export한 action function을 dispatch함. -> user에 대한걸 초기화 시킴
        navigate('/');
        // 로그아웃시 메인으로 돌려보냄
    };

/* 
    원래는 로그인 상태가 변하면 Navbar의 re-rendering을 위해서 해뒀으나 필요가 없어짐
    useEffect(
        () => {
            console.log('2 (Navbar) loggedIn 상태 : ', loggedIn);
        },
        [loggedIn]
    );

 */

    return(
        <>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle: undefined}>집으로</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive? activeStyle: undefined}>메뉴요</NavLink></li>
                { !loginStatus ? (
                        <li><NavLink to="/login" style={({ isActive }) => isActive? activeStyle: undefined}>로그인</NavLink></li>
                ) : (
                    <>
                        <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle: undefined}>마페</NavLink></li>
                        <li><button onClick={logoutHandler}>로그아웃</button></li>
                    </>
                )}
            </ul>
        </>
    );
}

export default Navbar;