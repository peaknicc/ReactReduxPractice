import { createActions, handleActions } from 'redux-actions';

/* 
    기존 내가 했던 방식에서 선생님 예제를 보고 똑같이 만듦.
    굳이 로그아웃에 대한 reducer를 만들 필요가 없었고
    action function을 export 하지 않았었음.
    
    간단하게 LOGIN reducer function에서 localStorage에 setItem 해주면 되는거였나봄.
    RESET_LOGIN_USER를 통해서 로그아웃을 하는거 -> initialState를 빈 객체로 설정함으로써
    그냥 초기화시키는거임
*/

const initialState = {};

export const LOGIN = 'user/LOGIN';
export const RESET_LOGIN_USER = 'user/RESET_LOGIN_USER';

export const { user : { login, resetLoginUser }} = createActions({
    [LOGIN]: (res) => ({ res }),
    [RESET_LOGIN_USER]: (res = initialState) => ({ res })
});

const userReducer = handleActions(
    {
        [LOGIN]: (state, { payload : { res }}) => {

            if(res) {
                localStorage.setItem("isLogin", true);
            } else {
                res = { message: 'LOGIN_FAIL'};
            }

            return res;
        },
        [RESET_LOGIN_USER]: (state, { payload : { res }}) => {

            return res;
        }
    },
    initialState
);

export default userReducer;