import { useDispatch } from "react-redux";
import { GET_USERS, LOGGED_IN } from "../modules/UserModule";


/* 
    리팩토링

    나는 완전 난잡하게 썼는데 fetch를 통해서 모든 유저 정보를 끌여온다음
    그중 매칭을 시켜서 해당하는 유저의 값을 들고오는걸로 구현했는데
    API 상에서 localStorage에 setItem하는게 아니라 reducer에서 setting을 해주는거였음
    API는 진짜 데이터를 받아오고 유효성 검사하는 정도로만 사용! ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ
*/

export function callLoginAPI(loginInfo) {
    console.log('login api calls.......');

    return async (dispatch, getState) => {

        const userList = await request('GET', '/user');

        const result = await userList.find(user => user.id === loginInfo.id && user.password === loginInfo.password);

        console.log('login result : ', result);

        dispatch(login(result));
    }
}

/* 
export async function loginAPI(dispatch, id, password) {
    console.log('(loginAPI) 1 입력한 id : ', id);
    console.log('(loginAPI) 2 입력한 password : ', password);

    const requestURL = 'http://localhost:4000/user';
    
    try {

        const response = await fetch(requestURL);

        if (!response.ok) {
            throw new Error('서버 응답이 실패했습니다.');
        }
        
        const users = await response.json();
        console.log('(loginAPI) 3 받아온 users : ', users);

        const user = users.find((user) => user.id === id && user.password === password);
        console.log('(loginAPI) 4 선택된 user : ', user);

        if (user) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('id', user.id);
            localStorage.setItem('password', user.password);
            dispatch({type: LOGGED_IN, payload: { loggedIn: true, nickname: user.nickname } });
            console.log('5 로긴 성공');
        } else {
            console.log('5 로그인 실패!');
        }
    } catch (error) {
        console.error('5 로그인 중 오류 발생:', error);
    }
}
 */