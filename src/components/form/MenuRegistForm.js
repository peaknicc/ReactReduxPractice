import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callRegistMenuAPI } from '../../apis/MenuAPICalls';

function MenuRegistForm() {

    const result = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registMenu, setRegistMenu] = useState(
        {
            id: 0,
            menuName: '',
            menuPrice: 0,
            categoryName: '한식',
            isOrderable: false,
            detail: {
                description: '',
                image: ''
            }
        }
    );

    const onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        switch(name) {
            case 'menuPrice' :
                value = parseInt(value);
                break;
            case 'isOrderable' :
                value = !!value;
                break;
            case 'description' :
                name = 'detail';
                value = {
                    description : value,
                    image : registMenu.detail.image
                };
                break;
        }

        setRegistMenu(
            {
                ...registMenu,
                [name] : value
            }
        );

        console.log(registMenu);
    }

    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        const base64 = await convertBase64(file);
        console.log(base64);
        setRegistMenu(
            {
                ...registMenu,
                detail : {
                    description : registMenu.detail.description,
                    image : base64
                }
            }
        );

        console.log(registMenu);
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    useEffect(
        () => {
            if(result.regist) {
                alert('메뉴등록이요!');
                navigate(`/menu`);
            }
        },
        [result]
    );

    const onClickHandler = () => {
        dispatch(callRegistMenuAPI(registMenu));
    }

    return(
        <>
            <label>메뉴 이름 : </label>
            <input type="text" name="menuName" value={ registMenu.menuName } onChange={ onChangeHandler }/>
            <br/>
            <label>메뉴 가격 : </label>
            <input type="number" name="menuPrice" value={ registMenu.menuPrice } onChange={ onChangeHandler }/>
            <br/>
            <label>카테고리 : </label>
            <select name="categoryName" value={ registMenu.categoryName } onChange={ onChangeHandler }>
                <option>한식</option>
                <option>일식</option>
                <option>서양</option>
                <option>동양</option>
                <option>커피</option>
                <option>쥬스</option>
                <option>기타</option>
            </select>
            <br/>
            <label>판매 여부 : </label>
            <select name="isOrderable" value={ registMenu.isOrderable } onChange={ onChangeHandler }>
                <option value="true">판매 가능</option>
                <option value="false">판매 불가</option>
            </select>
            <br/>
            <label>설명 : </label>
            <textarea name="description" value={ registMenu.detail.description } onChange={ onChangeHandler }></textarea>
            <br/>
            <label>사진 : </label>
            <input 
                type="file" 
                name="image"
                accept='image/*'
                onChange={ fileChangeHandler }/>
            <br/>
            <button onClick={ onClickHandler }>메뉴 등록</button>
        </>
    );
}

export default MenuRegistForm;