import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function MyPage() {

    const loggedIn = useSelector((state) => state.user.loggedIn);

    if(!loggedIn) {
        return <Navigate to="/login"/>;
    }

    return(
        <>
            <h1>마이페이지요</h1>
        </>
    );
}

export default MyPage;