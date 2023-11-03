import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { callGetMenusAPI } from "../apis/MenuAPICalls";
import { Link } from "react-router-dom";

function MenuDetail() {

    const menu = useParams();
    
    const menuId = Number(menu.menuId);

    const result = useSelector(state => state.menu);

    const selectedMenu = result[menuId - 1];
    
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetMenusAPI());
        },
        [menuId]
    );

    if(!selectedMenu) {
        return <div>없는 메뉴임.</div>;
    }

    return (
        <>
            <h2>메뉴상세</h2>
            <img src={ selectedMenu.detail.image } style={{width:'500px'}}/>
            <h3>이름은!.. { selectedMenu.menuName }!!</h3>
            <h3>가격은!.. { selectedMenu.menuPrice }!!</h3>
            <h3>종류는!.. { selectedMenu.categoryName }!!</h3>
            <h3>설명하자면!.. { selectedMenu.detail.description }!!</h3>
            <Link to={-1}>
                <button>뒤로가기</button>
            </Link>
        </>
    )
}

export default MenuDetail;
