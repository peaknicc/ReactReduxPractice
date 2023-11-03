import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import Error from './pages/Error';
import MenuDetail from './pages/MenuDetail';
import MenuSearchResult from './pages/MenuSearchResult';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import MenuRegist from './pages/MenuRegist';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/menus'>
            <Route index element={<Menus/>}/>
            <Route path=':menuId' element={<MenuDetail menuId=':menuId'/>}/>
            <Route path='search' element={<MenuSearchResult/>}/>
          </Route>
          <Route path='/regist' element={<MenuRegist/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
