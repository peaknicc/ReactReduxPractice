import {Link} from 'react-router-dom';

function MenuItem({menu}) {
    return(
        <>
            <Link to={`/menus/${menu.id}`}>
                <div className="menuItem">
                    <h3>메뉴 이름 : {menu.menuName}</h3>
                    <h3>메뉴 가격 : {menu.menuPrice}</h3>
                </div>
            </Link>
        </>
    );
}

export default MenuItem;