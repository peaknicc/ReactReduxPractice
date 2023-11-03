import { useDispatch } from "react-redux";
import { GET_USERS, LOGGED_IN } from "../modules/UserModule";

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
