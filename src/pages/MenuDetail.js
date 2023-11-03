import Menu from '../components/items/Menu';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { callDeleteMenuAPI } from "../apis/MenuAPICalls";

function MenuDetail() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const result = useSelector(state => state.menuReducer);

    const updateHandler = () => navigate(`/menu/modify/${id}`);
    const deleteHandler = () => dispatch(callDeleteMenuAPI(id));

    useEffect(
        () => {
            if(result.delete) {
                alert('메뉴 삭제요!');
                navigate(`/menu`);
            }
        },
        [result]
    );

    return (
        <>
            <h1>메뉴 상세!</h1>
            <h1>
                { (loginStatus) &&
                <>
                    <button onClick={ updateHandler }>메뉴 수정</button>
                    <button onClick={ deleteHandler }>메뉴 삭제</button>
                </>
                }
            </h1>
            <Menu id={ id }/>
        </>
    );
}

export default MenuDetail;
