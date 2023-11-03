import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callLoginAPI } from "../../apis/UserAPICalls";
import { resetLoginUser } from "../../modules/UserModule";


function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');

    const [loginInfo, setLoginInfo] = useState(
        {
            id: '',
            password: ''
        }
    );

    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name]: e.target.value
            }
        );
    }

    const onClickHandler = () => {
        dispatch(callLoginAPI(loginInfo));
    }

    useEffect(
        () => {
            if(result?.message) {
                alert('아이디, 비번 확인 ㄱ');
                setLoginInfo(
                    {
                        id: '',
                        password: ''
                    }
                );
                dispatch(resetLoginUser());
                // 실패시 등록하려던 user의 정보 초기화
            } else if(loginStatus) {
                navigate('/');
                // login성공시 main으로 직행
            }
        },
        [result]
    );
/* 
    const [id, setId] = useState(localStorage.getItem('id') || '');
    const [password, setPassword] = useState(localStorage.getItem('password') || '');
    
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const dispatch = useDispatch();

    const handleLogin = () => {
        console.log('1 (handleLogin) id : ', id);
        console.log('2 (handleLogin) password : ', password);
        console.log('3 (handleLogin) setLoggedIn : ', loggedIn);

        loginAPI(dispatch, id, password);
        localStorage.setItem('id', id);
        localStorage.setItem('password', password);
    };

    useEffect(
        () => {
            localStorage.setItem('loggedIn', loggedIn);
            console.log('5 (LoginForm) (useEffect) loggedIn 상태 : ', loggedIn);
        },
        [loggedIn]
    );
 */
    return(
            <>
                {!loginStatus? 
                                (
                                    <>
                                        <label>ID : </label>
                                        <input type="text" name="id" value={ loginInfo.id } onChange={onChangeHandler}/> &nbsp;&nbsp;&nbsp;
                                        <br/>
                                        <label>PWD : </label>
                                        <input type="password" name="password" value={ loginInfo.password } onChange={onChangeHandler}/>
                                        <br/>
                                        <button onClick={ onClickHandler }>로그인</button>
                                    </>
                                ) :  
                                (
                                    <>
                                        <p>ㅎㅇ, { loginInfo.id }님</p>
                                    </>
                                )
                            }
            </>
        );
}

export default LoginForm;
