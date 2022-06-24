import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

export default function App12() {
  // const location = useLocation();
  // console.log('location: ', location.pathname);
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/', {
      state: {
        username: '张三',
      },
    });
  };
  return (
    <div>
      <Link to="/">首页</Link> | <Link to="/list/123">列表</Link> | <Link to="/detail?id=1">详情</Link>
      <button onClick={gotoHome}>跳转首页</button>
      <h2>
        <Outlet />
      </h2>
    </div>
  );
}
