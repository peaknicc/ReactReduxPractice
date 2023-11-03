import { useState } from "react";
import { loginAPI } from "../../apis/UserAPICalls";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGGED_IN } from "../../modules/UserModule";


function LoginForm() {

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

    return(
            <>
                {loggedIn? 
                        (
                            <>
                                <p>ㅎㅇ, {localStorage.getItem('id')}님</p>
                            </>
                        ) :  
                        (
                            <>
                                <label>ID : </label>
                                <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                                <br/>
                                <label>PWD : </label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <br/>
                                <button onClick={handleLogin}>로그인</button>
                            </>
                        )
                    }
                </>
            );
}

export default LoginForm;
