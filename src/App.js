import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import MenuDetail from './pages/MenuDetail';
import MenuRegist from './pages/MenuRegist';
import MenuModify from './pages/MenuModify';
import Login from './pages/Login';
import Error from './pages/Error';
import MyPage from './pages/MyPage';
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='menu'>
            <Route index element={<Menus/>}/>
            <Route path=':id' element={<MenuDetail/>}/>
            <Route path='regist' element={<MenuRegist/>}/>
            <Route path='modify'>
              <Route path=':id' element={<MenuModify/>}/>
            </Route>
          </Route>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
