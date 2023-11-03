import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { callGetMenusAPI } from "../apis/MenuAPICalls";


function MenuRegist() {

    const dispatch = useDispatch();
    const result = useSelector(state => state.menu);
    const id = result.length + 1;
    
    useEffect(
        () => {
            dispatch(callGetMenusAPI());
        },
        []
    );

    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);

        const imagePath = `/images/${file.name}`

        setMenuInfo({
            ...menuInfo,
            detail: {
                ...menuInfo.detail,
                image: imagePath
            }
        });
    };

    /* 파일 전송하는거에서 코드상으론 성공이나 백에서 처리가 안되는건지 희한하게 id 값만 들고감
        원인 모름, json형태로 넘겨야하나? */
    /* 정답! JSON 형태로 안보내서 그런거였음. formData 이딴걸로해서 그럼
    근데 이상한게 
    1. 이걸 통해서 등록한 메뉴는 종류가 안보임
    실제 mock db엔 카테고리가 있음!
    개같은 이름매칭 이름 좀 다르게 했었음

    해야할거
    - 이미지 업로드 (public/images 하위로 복사)
    - 메뉴 수정

    이미지 업로드 과정에서 express가 필수인지 ?

    
    */
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        const requestData = {
            id: id,
            menuName: menuInfo.menuName,
            menuPrice: menuInfo.menuPrice,
            categoryName: menuInfo.categoryName,
            isOrderable: menuInfo.isOrderable ? 'Y' : 'N',
            detail: {
                description: menuInfo.detail.description,
                image: menuInfo.detail.image,
            },
        };

        console.log('menuInfo', menuInfo);
        
        try {
          // API 호출 및 응답 처리
        const response = await fetch('http://localhost:4000/menu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        
        if (response.ok) {
            console.log('성공');
        } else {
            console.log('실패');
        }
        } catch (error) {
            console.log('에러 : ', error);
        }
    };

    const [ menuInfo, setMenuInfo ] = useState({
        id: id,
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        isOrderable: true,
        detail: {
            description: '',
            image: ''
        }
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        if (name.startsWith('detail.')) {
            const detailName = name.split('.')[1];
            setMenuInfo({
                ...menuInfo,
                detail: {...menuInfo.detail, [detailName]: newValue }
            });
        } else {
            setMenuInfo({ ...menuInfo, [name]: newValue });
        }
    };

    const loggedIn = useSelector((state) => state.user.loggedIn);

    if(!loggedIn) {
        return <Navigate to="/login"/>;
    }

    return(
        <>
            <h1>메뉴등록</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    메뉴명
                    <input type='text' name='menuName' value={menuInfo.menuName} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    가격
                    <input type='number' name='menuPrice' value={menuInfo.menuPrice} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    종류
                    <select name='categoryName' value={menuInfo.categoryName} onChange={handleChange}>
                        <option>선택</option>
                        <option value={'한식'}>한식</option>
                        <option value={'일식'}>일식</option>
                        <option value={'서양'}>서양</option>
                        <option value={'쥬스'}>쥬스</option>
                        <option value={'기타'}>기타</option>
                    </select>
                </label>
                <br/>
                <label>
                    주문가능?
                    <input type='checkbox' name='isOrderable' checked={menuInfo.isOrderable} onChange={handleChange}></input>
                </label>
                <br/>
                <label>
                    설명
                    <textarea name='detail.description' value={menuInfo.detail.description} onChange={handleChange}></textarea>
                </label>
                <br/>
                <label>
                    이미지
                    <input type='file' name='detail.image' accept='image/*' onChange={handleImageChange}/>
                </label>
                <br/>
                <button type='submit'>메뉴등록ㄱㄱㄱㄱ</button>
            </form>
        </>
    );
}

export default MenuRegist;